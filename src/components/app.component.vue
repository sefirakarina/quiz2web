<template>
	<div class="wrapper">
		<nav class="navbar navbar-static-top navbar-default">
			<div class="container">
				<div class="navbar-header">
					<router-link to="/" class="navbar-brand">Home</router-link>
					<router-link to="/login" class="navbar-brand">login</router-link>
					<router-link to="/register" class="navbar-brand">register</router-link>
					<router-link to="/category" class="navbar-brand">category</router-link>
					<router-link to="/item" class="navbar-brand">Items</router-link>
					
					
				</div>
				<!--<ul class="nav navbar-nav navbar-right">
					<li>
						<router-link to="/book">Book</router-link>
					</li>
				</ul>-->
			</div>
		</nav>
		<main>
			<router-view></router-view>
		</main>
		<footer>
			<p class="text-center">sefira - 2001586155</p>
		</footer>
	</div>
</template>

<script src="./app.component.js"></script>
<link rel="stylesheet" type="text/css" href="../assets/fonts/bootstrap">