from sdamgia import SdamGIA

sdamgia = SdamGIA()

subject = 'math'
id = '505566'
c = sdamgia.get_problem_by_id(subject, id)

print(c)
# {
#   'id': '1001',
#   'topic': '4',
#   'condition': {
#     'text': 'На экзамен вынесено 60 вопросов, Андрей не выучил 3 из них. Найдите вероятность того, что ему попадется выученный вопрос.', 
#     'images': []
#   }, 
#   'solution': {
#     'text': 'Решение.Андрей выучил 60\xa0–\xa03\xa0=\xa057 вопросов. Поэтому вероятность того, что на экзамене ему попадется выученный вопрос равна.\xa0Ответ: 0,95.',
#     'images': ['https://ege.sdamgia.ru/formula/svg/9f/9fbf55ab44a507fb47ba8a2666cd7644.svg']
#   }, 
#   'answer': '0,95', 
#   'analogs': ['1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010'], 
#   'url': 'https://math-ege.sdamgia.ru/problem?id=1001'
# }