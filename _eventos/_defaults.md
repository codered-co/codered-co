---
layout: event
title: 
date: 
event_date: 
categories:
  - Iniciantes
  - Frontend
  - HTML e CSS
status:
image: 
instructor_image: 
instructor_name: 
instructor_contact: 
inscription_form: 
allow_inscription: 
files: 
---

layout = Nesse caso é preciso expecificar o tipo do layout usado pois o mesmo é uma collection diferente de post. (Sempre vai ser event)

title = Nome do evento

date = data usada para exibir a ordem dos posts na pagina 'evento' quanto mais recente a data mais em cima o evento se localiza. Essa data nao é usada como a data do evento pois podemos ter eventos que ainda serão realizados. O Jekyll nao aceita posts com datas futuras.

event_date = String que mostra a data que o evento acontecerá. Solucionando assim o problema apresentado em cima. 

categories = Usado para separar em categorias e gerar buscas e agrupamentos em cima das mesmas. 
O padrão segue o seguinte:
	- 1 categoria : O nível que o evento requere
	- 2 categoria : A área que se refere
	- 3 categoria : A tecnologia

status =  Quando um evento esta aberto para inscrição seu status deve ser 'open'. Assim o mesmo podera ser acessado atravéz da página (https://codered.online/eventos/) caso contrário ele se tornará incacessivel. Dessa forma podemos postar eventos futuros se abrir ainda para inscrição. 
OBS: Apenas o valor open é testado. outros eventos podem ter status 'closed' ou qualquer outra coisa que a lógica reconhecerá como sendo diferente da string 'open'

image = Imagem usada na Capa do evento.

instructor_image = Path da foto do instrutor

instructor_name = String contendo o nome do instrutor

instructor_contact = Link de rede social do instrutor

inscription_form = Link do formulário de inscrição

allow_inscription: Assume-se 'no' quando um evento ja ocorreu. Desa forma o botão 'inscreva-se' no final do post do evento se torna inacessível. OBS: Qualquer valor diferente de 'no' é reconhecido como não 'no'. Vide 'status'.

files = Path para algum arquivo para download.
