/** Chunk was on 39048 **/
/** chunk id: 486802, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(736456);

function i() {
    let {
        createGuildApplication: e,
        submitting: t,
        error: n
    } = (0, r.A)();
    return {
        enableGuildMonetizationForTeam: (t, n, r) => e(t, n, r, "guildcr".concat(t.id)),
        submitting: t,
        error: n
    }
}