/** chunk id: 639621, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
}), n(938796);
var r = n(507698);

function i(e) {
    let {
        id: t,
        username: n,
        discriminator: i,
        globalName: a,
        avatar: o,
        avatarDecoration: s,
        bot: l,
        flags: c,
        premiumType: u
    } = e;
    return {
        id: t,
        username: n,
        discriminator: i,
        global_name: a,
        avatar: o,
        avatar_decoration_data: (0, r.Xq)(s),
        bot: l,
        flags: c,
        premium_type: null != u ? u : 0
    }
}