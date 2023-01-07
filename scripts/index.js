let tweetOffset = 0;
let runningCriticalFunction = false;
let imgNum = 1;
async function getTweetsAndInsertHTML() {
  if (runningCriticalFunction) {
    return;
  }
  runningCriticalFunction = true;
  const result = await fetch(
    `https://twitter-backend-6yot.onrender.com/tweet/recent?offset=${tweetOffset}`
  ); // Paginated API

  const tweets = await result.json();

  console.log(tweets.data);

  tweetOffset = tweetOffset + tweets.data.length;

  document.querySelector('.twitter-feed').insertAdjacentHTML(
    'beforeend',
    tweets.data
      .map((tweet) => {
        const date = new Date(tweet.creationDatetime);

        return `
        <div class="twitter-post id=${tweet._id}">
          <div class="twitter-post-retweeted">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-1bwzh9t r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"
            >
              <g>
                <path d="M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z"></path>
              </g>
            </svg>
            <span>Professor</span>
          </div>
          <div class="twitter-post-bottom">
            <img
              class="twitter-post-avatar"
              src="https://wallpaperaccess.com/full/2514661.jpg"
              alt="user-logo"
            />
            <div class="twitter-post-content">
              <div class="twitter-post-title">
                <span class="name">Professor</span>
                <span class="user">@professor073</span>
                <span class="separator">-</span>
                <span class="date">${date.toDateString()}</span>
              </div>
              <p class="twitter-post-paragraph" id='span-${tweet._id}'>
              ${tweet.title}
              </p>
              <div class="twitter-post-img">
                  <img src="https://picsum.photos/1920/1080?random=${imgNum++}">
                </div>
              <ul class="twitter-post-interactions">
                <li class="comments">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                    </g>
                  </svg>
                  <span>38</span>
                </li>
                <li class="comments">
                  <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                    </g>
                  </svg>
                  <span>38</span>
                </li>
                <li class="retweets">
                  <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                    </g>
                  </svg>
                  <span>87</span>
                </li>
                <li class="likes">
                  <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                    </g>
                  </svg>
                  <span>421</span>
                </li>
                <li class="share">
                  <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                      <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                    </g>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <svg
            class="twitter-post-config"
            viewBox="0 0 24 24"
            class="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </g>
          </svg>
        </div>
        `;
      })
      .join('')
  );
  runningCriticalFunction = false;
}

window.onload = async () => {
  getTweetsAndInsertHTML();
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('twitter-cta--happening')) {
    const tweetText = document.querySelector('.twitter-happening-input').value;

    const data = {
      title: tweetText,
      text: 'Random Value',
      userId: '12345',
    };

    const tweetResponse = await fetch(
      'https://twitter-backend-6yot.onrender.com/tweet/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const tweet = await tweetResponse.json();

    if (tweet.status !== 200) {
      alert(tweet.message);
      return;
    }

    document.querySelector('.twitter-happening-input').value = '';
    alert(tweet.message);
  }

  if (event.target.classList.contains('tweet-delete')) {
    if (confirm('Are you sure you want to delete this tweet?')) {
      const tweetId = event.target.getAttribute('data-id');
      const data = {
        tweetId,
        userId: '12345',
      };

      const response = await fetch(
        'https://twitter-backend-6yot.onrender.com/tweet/delete',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.status !== 200) {
        alert(result.message);
        return;
      }

      alert('Tweet deleted successfuly');
      document.getElementById(tweetId).remove();
    }
  }

  if (event.target.classList.contains('tweet-edit')) {
    const tweetId = event.target.getAttribute('data-id');

    const span = document.getElementById('span-' + tweetId);

    const tweetText = prompt('Enter new tweet text', span.innerText);

    const data = {
      tweetId,
      title: tweetText,
      text: 'Random value',
      userId: '12345',
    };

    const response = await fetch(
      'https://twitter-backend-6yot.onrender.com/tweet/update',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (result.status !== 200) {
      alert(result.message);
      return;
    }

    alert('Updated Successfully');
    span.innerText = tweetText;
  }

  // if(event.target.classList.contains('show_more')) {
  //     getTweetsAndInsertHTML();
  // }
});

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // console.log(scrollTop, scrollHeight, clientHeight);

  if (scrollTop + clientHeight >= scrollHeight - 20) {
    getTweetsAndInsertHTML();
  }
});

// Callback
// Promises
// Async Await

// const result2 = await fetch('https://api.github.com/users');

//     console.log(result2);

//     const a = await result2.json();

//     console.log(a);

// fetch('http://localhost:3000/tweet/recent').then((result) => {

//     fetch('http://localhost:3000/user/profile', {}).then((res) => {

//     })
// })

// fetch('https://api.github.com/users').then((result2) => {
//     console.log(result2);
// })

// fetch('http://localhost:3000/tweet/recent').then(async (res) => {
//     const result = await res.json();

//     console.log(result);
//     if(result.status !== 200) {
//         alert(result.message);
//     }
// }).catch((err) => {
//     alert(err);
// })

// const dataArray = tweets.data;

//     // for(let i = 0; i < dataArray.length; i++) {
//     //     dataArray[i] = "<h1>Hello</h1>";
//     // }

//     const data = dataArray.map((a) => {
//         a = `<h1>${a.title}</h1>`;
//         return a;
//     })

//     console.log(data);

// tweets.data.forEach((tweet) => {
//     const date = new Date(tweet.creationDatetime);

//     document.getElementById('tweet-body').insertAdjacentHTML('beforeend', `<div class="tweets">
//         <div class="tweet-profile-image">
//         <img
//             src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
//             alt="profile image"
//         />
//         </div>
//         <div class="tweet">
//         <div class="tweet-header">
//             <div class="tweet-user-info">
//             <p><strong>Rohan Roshan</strong></p>
//             <p>@rohanroshan</p>
//             <p>${date.toDateString()}</p>
//             </div>
//             <div class="tweet-three-dots-menu">
//             <button>
//                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                     fill="#5b7083"
//                     d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"
//                 ></path>
//                 </svg>
//             </button>
//             </div>
//         </div>
//         <div class="tweet-body">
//             <span>${tweet.title}
//             </span>
//         </div>
//         </div>
//     </div>`
//     );
// });
