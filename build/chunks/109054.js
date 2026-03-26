/** chunk id: 109054 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => r
});
var n = a(455207),
    i = a(943667);

function r(e) {
    return !((0, n.MZ)(e) || (0, i.A)(e) && e.messageReference?.guild_id != null) && (null == e.interaction || "SENDING" !== e.state)
}