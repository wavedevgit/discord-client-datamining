/** Chunk was on 64935 **/
/** chunk id: 496376, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(974875),
    o = n(900819),
    c = n(985018);

function u(e) {
    let {
        messageId: t,
        channelId: n
    } = e, u = (0, l.bG)([o.A], () => o.A.canSubmitFpReport(t)), d = i.useCallback(() => {
        (0, s.Q)(n, t)
    }, [n, t]);
    return (0, r.jsx)(a.Button, {
        variant: "secondary",
        text: c.intl.string(c.t["4q1Elf"]),
        onClick: d,
        disabled: !u
    })
}