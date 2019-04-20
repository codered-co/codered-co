---
layout: event
title: 
slogan:
date: 
event_date: 
categories:
  - Iniciantes
  - Frontend
  - HTML e CSS
status:
image: 
image_card:
card_hexa:
instructor_image: 
instructor_name: 
instructor_contact: 
inscription_form: 
allow_inscription: 
files: 
---

layout = Nesse caso é preciso expecificar o tipo do layout usado pois o mesmo é uma collection diferente de post. (Sempre vai ser event)

title = Nome do evento

slogan = Nome exibido na página de eventos

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

image_card = Imagem usada na pagina de eventos. 400 x 400 px

card_hexa = Código em hexadecimal (SEM O HASHTAG) usado para dar cor ao fundo do card na pagina eventos.

instructor_image = Path da foto do instrutor

instructor_name = String contendo o nome do instrutor

instructor_contact = Link de rede social do instrutor

inscription_form = Link do formulário de inscrição

allow_inscription = 
 - no : quando o evento ja passou
 - waiting : quando o evento ja esta aberto mas ainda nao abriu as inscriçoes
 - open : quando o evento esta aberto e aceitando inscricoes
 - noinscription : Evento aberto ao publico

files = Path para algum arquivo para download.
