// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Counter {
  uint256 public x; // public, private, external, internal

  event Increment(uint256 by); // log 는 로직적으로는 없어도 잘 동작한다.
  // 프로그램에서 log 를 읽을 수 없다.
  // 처음에는 단순한 log 성격이었지만 지금은 체인간 통신요소, 오프체인 간 통신이나 검증 요소로 사용됨

  function inc() public {
    x++;
    emit Increment(1);
  }

  function incBy(uint256 by) public {
    require(by > 0, "incBy: increment should be positive");
    x += by;
    emit Increment(by);
  }
}
