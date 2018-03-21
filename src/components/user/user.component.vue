<template>
 <div class="container">
 <toast ref="toast"></toast>
  <div class="row">
   <div class="col-md-12">
    <div class="jumbotron">
     <div class="row">
      <!--<div class="col-md-6">
       <h1>{{ message }}</h1>
       <p>{{ description }}</p>
      </div>-->
      <div class="col-md-12">
       <p class="text-center">
        <strong>Create New Item</strong>
       </p>
       <form role="form" @submit.prevent="storeBook()">
        
        <div class="form-group">
         <input type="text" class="form-control" placeholder="email" required v-model="book.email">
        </div>
        <div class="form-group">
         <input type="password" class="form-control" placeholder="password" required v-model="book.password">
        </div>
        <div class="text-right">
         <button type="submit" class="btn btn-primary">register</button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div> 
  </div>
  
 </div>
</template>

<script src="./user.component.js"></script>