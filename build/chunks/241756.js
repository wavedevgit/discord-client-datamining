/** chunk id: 241756, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var i = n(834757),
    s = n(562153),
    l = n(985018);

function a(e, t, n) {
    let a = (0, i.AO)(n),
        r = s.Ay.getName(e.getGuildId(), e.id, t);
    return null == n ? r : a?.name != null ? l.intl.formatToPlainString(l.t["9jpVOZ"], {
        applicationName: a?.name,
        username: r
    }) : l.intl.formatToPlainString(l.t["+h0Z59"], {
        username: r
    })
}