/** chunk id: 522926, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(985971);
class i extends r.B {
    primaryPrefix() {
        return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?"
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:l)?|\\?)\\s*"
    }
}