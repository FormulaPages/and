
export default function AND() {
      var result = true;
      var list = fn.flatten(arguments);
      for (var i = 0; i < list.length; i++) {
          result = result && arguments[i];
          if (!result) return false;
      }
      return true;
  }
