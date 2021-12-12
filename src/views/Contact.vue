<template>
  <div class="about wrapper">
    <h2>Send Me an Email!</h2>
    <p><i>"Communication works for those who work at it." -John Powell</i></p>
    <form
      class="card"
      action="mailto:zhangt98@bu.edu"
      method="POST"
      enctype="multipart/form-data"
      name="EmailForm"
    >
      <div class="inputWrapper">
        <label for="senderName">Name:</label>
        <input type="text" id="senderName" name="senderName" required />
      </div>
      <div class="inputWrapper">
        <label for="topic">Topic:</label>
        <input type="text" id="topic" name="topic" required />
      </div>
      <div class="inputWrapper">
        <label for="emailContent">Message:</label>
        <textarea
          id="emailContent"
          name="emailContent"
          rows="6"
          cols="30"
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<style scoped>
form {
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input,
textarea {
  outline: none;
  width: 200px;
}
.inputWrapper {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}
.inputWrapper label {
  width: 120px;
  font-weight: bold;
  text-align: left;
}
button {
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  background: blue;
  color: #fff;
  font-weight: bold;
}
@media only screen and (max-width: 700px) {
  form {
    padding: 10px 20px;
  }
  .inputWrapper {
    flex-direction: column;
  }
}
</style>
