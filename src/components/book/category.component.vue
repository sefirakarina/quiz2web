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
         <input type="text" class="form-control" placeholder="name" required v-model="book.name">
        </div>
        <div class="text-right">
         <button type="submit" class="btn btn-primary">Create category</button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div> 
  </div>
  <loading-panel message="Fetch books from server" v-if="bookConfig.loading && !bookConfig.error"></loading-panel>
  <error-panel message="Failed fetch books from server" v-if="!book.loading && bookConfig.error" @onErrorHandled="bindBooks()"></error-panel>
  <div class="row" v-if="!bookConfig.loading && !bookConfig.error">
   <div class="col-md-12">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th class="text-center" style="width: 5%">#ID</th>
              <th class="text-center" style="width: 20%">name</th>
              <!--<th class="text-center" style="width: 20%">Created at</th>
              <th class="text-center" style="width: 20%">Updated at</th>
              <th class="text-center">...</th>-->
       </tr>
      </thead>
      <tbody>
       <tr v-for="book in books">
        <td class="text-center">{{ book.id }}</td>

        <td class="text-center">
         <span v-if="!book.onedit">{{ book.name }}</span>
         <input type="text" class="form-control" v-model="book.name" v-if="book.onedit" placeholder="name">
        </td>

        <!--<td class="text-center">
         <span v-if="!book.onedit"><img src="book.book_img"></span>
         <input type="text" class="form-control" v-model="book.book_img" v-if="book.onedit" placeholder="img">
        </td>-->
       <!-- <td class="text-center">{{ book.created_at }}</td>
        <td class="text-center">{{ book.updated_at }}</td>
        <td class="text-center">-->
         <!--<button type="button" class="btn btn-sm btn-success" v-if="!book.onedit" @click="editBook(book)">Edit</button>-->

         <button type="button" class="btn btn-sm btn-success" v-if="!book.onedit" @click="editBook(book)">Edit</button>
         <button type="button" class="btn btn-sm btn-success" v-if="book.onedit" :disabled="book.id == '' || book.name == ''" @click="updateBook(book)">Save</button>
         
         <button type="button" class="btn btn-sm btn-danger" @click="deleteBook(book)">Delete</button>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>

<script src="./category.component.js"></script>