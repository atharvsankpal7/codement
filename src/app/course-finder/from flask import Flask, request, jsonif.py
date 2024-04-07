from flask import Flask, request, jsonify
from DrissionPage import ChromiumPage
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_data():
    # Parse the JSON input
    data = request.get_json()

    # Assuming the input JSON contains a 'query' field for the search term
    query = data.get('query', '')
    p = ChromiumPage()

    p.get('https://www.udemy.com/')
    p.ele('@class:ud-text-input').input(query)
    p.ele('xpath://*[@id="__next"]/div/div/div[4]/div[2]/form/button').click()

    courses = []
    course_elements = p.eles('tag:div@class=course-card-module--main-content--pEiUr course-card-module--has-price-text--g6p85')
    for i, course_element in enumerate(course_elements[:2]):
        course_info = {}
        soup = BeautifulSoup(course_element.inner_html, 'html.parser')
        course_info["title"] = soup.find('h3', {'data-purpose': 'course-title-url'}).text.strip()
        course_info["rating"] = soup.find('span', {'data-testid': 'seo-rating'}).text.strip()
        course_info["teacher"] = soup.find('div', {'data-purpose': 'safely-set-inner-html:course-card:visible-instructors'}).text.strip()
        course_info["price"] = soup.find('div', {'class': 'course-card-module--price-text-base-price-text-component--Q-Ucg'}).text.strip()
        course_info["lecture_hours"] = soup.find('span', {'data-testid': 'seo-content-info'}).text.strip()
        course_info["reviews"] = soup.find('span', {'aria-label': '4305 reviews'}).text.strip() if soup.find('span', {'aria-label': '4305 reviews'}) else "Not found"
        course_info["image"] = soup.find('img')['src'] if soup.find('img') else None
        course_info["link"] = soup.find('a')['href'] if soup.find('a') else None
        courses.append(course_info)

    p.close()

    s = ChromiumPage()
    s.get('https://swayam.gov.in/')
    s.ele('xpath://*[@id="header"]/div[2]/div/div[2]/div/a[2]').click()
    s.ele('@class:form-control style-scope course-explorer ui-autocomplete-input').input(query)
    s.ele('@class:search_keyword style-scope course-explorer').click()

    swayam_courses = []
    swayam_elements = s.eles('tag:div@class=content style-scope course-card')
    for i, swayam_element in enumerate(swayam_elements[:2]):
        swayam_info = {}
        swayam_text = swayam_element.text
        lines = swayam_text.split('\n')
        swayam_info["title"] = lines[0].strip() if lines[0] else None
        swayam_info["rating"] = lines[1].strip() if lines[1] else None
        swayam_info["price"] = lines[2].strip() if lines[2] else None
        institute_type_line = lines[3].split('\t')
        swayam_info["lecture_hours"] = institute_type_line[0].strip() if institute_type_line[0] else None
        swayam_info["reviews"] = institute_type_line[1].strip() if len(institute_type_line) > 1 and institute_type_line[1] else None
        swayam_info["image"] = None
        swayam_info["link"] = None
        swayam_courses.append(swayam_info)

    s.close()

    combined_data = courses + swayam_courses
    formatted_data = []
    for i, course in enumerate(combined_data):
        formatted_course = {
            "title": course.get("title", ""),
            "price": course.get("price", ""),
            "rating": course.get("rating", ""),
            "reviews": course.get("reviews", ""),
            "teacher": course.get("teacher", ""),
            
        }
        formatted_data.append(formatted_course)

    return jsonify(formatted_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
