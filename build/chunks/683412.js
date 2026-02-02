/** chunk id: 683412, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(747238), n(733351);
var r = n(791332),
    i = n.n(r);
let a = /\n$/,
    o = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
    s = {
        order: i().defaultRules.heading.order,
        requiredFirstCharacters: ["-"],
        match: (e, t, n) => null == n || "" === n || null != n.match(a) ? (0, r.anyScopeRegex)(o)(e, t, n) : null,
        parse: function(e, t, n) {
            return {
                content: (0, r.parseInline)(t, e[1].trim(), n)
            }
        }
    }