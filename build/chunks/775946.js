/** Chunk was on 77870 **/
/** chunk id: 775946, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(397927),
    s = n(461140);

function a(e) {
    let {
        mentionsCount: t,
        isMentionLowImportance: n
    } = e;
    return (0, r.jsx)("div", {
        className: s.R,
        "aria-hidden": !0,
        children: (0, r.jsx)(i.hVq, {
            count: t,
            color: n ? l.A.colors.BACKGROUND_MOD_STRONG.css : l.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css
        })
    })
}