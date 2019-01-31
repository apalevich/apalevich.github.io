<?php
	$moneyAmount = (int) $_POST['moneyAmount'];
	
	$drinkPrices = [
		'капучино' => 140,
		'эспрессо' => 80,
		'воду' => 20
	];

	foreach($drinkPrices as $drinkName => $price)
	{
		if($moneyAmount >= $price) {
			echo "Вы можете купить $drinkName!\n";
		}
	}

	if($moneyAmount < min($drinkPrices)) {
		echo 'Недостаточно средств!';
	}
	
	/**
	$pdo = new PDO('mysql:host=localhost;dbname=cy70845_db', 'cy70845_db', 'cy70845_db');
	$stmt = $pdo->prepare('SELECT name FROM authors LIMIT 1');
	$stmt->execute();
	foreach ($stmt as $row) {
		echo $row['name'];
	}
	*/