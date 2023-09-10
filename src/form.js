function Form() {
  return (
    <>
      <form action="" class="main">
        <div class="content">
          <p>Sign In</p>

          <br></br>
          <label for="mail">E-Mail</label>
          <br />
          <input
            type="email"
            id="mail"
            name="email"
            placeholder="&#128231;  Email"
          />

          <br />
          <br />

          <label for="name">Username</label>
          <br />
          <input
            type="text"
            id="name"
            name="username"
            placeholder="&#129399; username"
          />
          <br />
          <br />

          <label for="pass">Password</label>
          <br />
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="&#128274; Password"
          />
        </div>
        <label for="submit"></label>
        <br />
        <button
          id="submit"
          
          
        >
          Log in
        </button>
      </form>
    </>
  );
}

export default Form;
