import React from 'react';

export default function Home() {
  return (
    <div className = "w-50 mx-auto">
      <h1 className ="pb-4 pt-2">About me</h1>
      <article>
            <img class="float" src={"../assets/images/studentavatar.jpg"} alt="Luke, website author"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </article>
    </div>
  );
}
