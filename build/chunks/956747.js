/** Chunk was on 97492 **/
/** chunk id: 956747, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(249288),
    a = n(221598),
    o = n(985018);

function c(e) {
    let t = (0, l.bG)([s.A], () => s.A.getToastsEnabled(e));
    return (0, r.jsx)(i.sLh, {
        id: "show-call-chat-toasts",
        label: o.intl.string(o.t["5NL5vT"]),
        checked: t,
        action: () => a.A.setCallChatToastsEnabled(e, !t)
    })
}