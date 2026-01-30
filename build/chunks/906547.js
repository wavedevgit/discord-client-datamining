/** chunk id: 906547, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => l
});
var r = n(64700),
    i = n(975571),
    a = n(633057),
    o = n(652215),
    s = n(985018);

function l(e) {
    let {
        userId: t,
        renderApplicationName: n
    } = e, l = (0, a.A)(t);
    return r.useMemo(() => null != l ? s.intl.format(s.t.rSUACb, {
        helpdeskArticle: i.A.getArticleURL(o.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
        applicationName: () => n(l)
    }) : s.intl.format(s.t["q+N8L6"], {
        helpdeskArticle: i.A.getArticleURL(o.MVz.SLAYER_PROVISIONAL_ACCOUNTS)
    }), [l, n])
}