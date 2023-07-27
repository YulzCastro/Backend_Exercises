SELECT * FROM customer
SELECT film_id, title FROM film;
SELECT * FROM film LIMIT 5; 
SELECT * FROM film WHERE film_id<4;
SELECT * FROM film WHERE rating='PG' OR rating='G';
SELECT * FROM actor WHERE first_name IN ('Angela', 'Angelina', 'Audrey');
SELECT * FROM actor WHERE first_name='Julia';
SELECT * FROM actor WHERE first_name='Chris' OR first_name='Cameron' OR first_name='Cuba';
SELECT * FROM customer WHERE first_name='Jamie' AND last_name='Rice';
SELECT payment_date, amount FROM payment WHERE amount<=1;
SELECT DISTINCT rental_duration FROM film;
SELECT * FROM city ORDER BY country_id, city; 
SELECT return_date, customer_id FROM rental ORDER BY return_date LIMIT 3;
SELECT rating, COUNT(*) FROM film WHERE rating='PG' OR rating = 'PG-13' OR rating='NC-17' GROUP BY rating;
SELECT COUNT(DISTINCT customer_id) FROM rental;
SELECT last_name, COUNT(*) AS same_name FROM customer GROUP BY last_name ORDER BY same_name DESC;
SELECT film_id, COUNT(*) AS num_of_actors FROM film_actor GROUP BY film_id ORDER BY num_of_actors DESC LIMIT 1;
SELECT actor_id, COUNT(*) AS num_of_films FROM film_actor GROUP BY actor_id ORDER BY num_of_films DESC LIMIT 1;
SELECT country_id, COUNT(*) AS num_of_cities FROM city GROUP BY country_id ORDER BY COUNT(*) DESC;
SELECT ROUND(AVG(rental_rate), 2) AS avg_rental_rate FROM film;
SELECT actor_id, CONCAT(first_name, ' ', last_name) AS full_name FROM actor ORDER BY LENGTH(CONCAT(first_name, last_name)) DESC LIMIT 10;