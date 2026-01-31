export const APIURL = "https://jsonplaceholder.typicode.com/users";

export function callApi(reqMethod, url, data, responseHandler) {
  let options =
    reqMethod === "GET" || reqMethod === "DELETE"
      ? { method: reqMethod }
      : {
          method: reqMethod,
          headers: { "Content-Type": "application/json" },
          body: data
        };

  fetch(url, options)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(responseHandler)
    .catch(err => alert(err));
}
