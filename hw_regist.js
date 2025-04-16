function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");
  const email = document.getElementById("email");
  const ssn1 = document.getElementById("ssn1");
  const ssn2 = document.getElementById("ssn2");
  let check_n = String(ssn1.value) + String(ssn2.value);
  const zipcode = document.getElementById("zipcode");

  const expIDText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expNameText = /^[가-힣]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expEmailText = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const expZipText = /\d{5}/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }

  if (!expIDText.test(userid.value)) {
    alert("아이디는 4자이상 20자이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8이상 20자이하의 영문자, 숫자, 특수문자(!@#$%^&*)를 각 1자 이상 포함해야합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }

  if (!expHpText.test(hp.value)) {
    alert("휴대폰번호 형식이 일치하지 않습니다.\n-하이픈을 꼭 입력해주세요!");
    hp.focus();
    return false;
  }

  if (!expEmailText.test(email.value)) {
    alert(
      "이메일 형식이 올바르지 않습니다. \n 예시의 형식에 주목해주세요. \n 예시) example_123@exam34.com"
    );
    email.focus();
    return false;
  }

  function check_number(check_n) {
    const list_n = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

    let sum_list = [];
    for (let i = 0; i < list_n.length; i++) {
      let mul = list_n[i] * check_n[i];
      sum_list.push(mul);
    }

    let sum = 0;
    for (let j = 0; j < sum_list.length; j++) {
      sum += parseFloat(sum_list[j]);
    }

    let dev = sum % 11;
    let final_n = (11 - dev) % 10;
    let last_n = parseInt(check_n[12]);
    if (final_n !== last_n) {
      return 1;
    } else {
      return 2;
    }
  }

  if (check_number(check_n) == 1) {
    alert("유효하지않은 주민등록번호입니다.");
    return false;
  }

  if (!expZipText.test(zipcode.value)) {
    alert("우편번호는 5자리여야합니다.");
    zipcode.focus();
    return false;
  }

  return true;
}
