/** chunk id: 496376 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(397927),
    a = n(974875),
    o = n(900819),
    d = n(985018);

function c(e) {
    let {
        messageId: t,
        channelId: n
    } = e, c = (0, s.bG)([o.A], () => o.A.canSubmitFpReport(t)), u = l.useCallback(() => {
        (0, a.Q)(n, t)
    }, [n, t]);
    return (0, i.jsx)(r.Button, {
        variant: "secondary",
        text: d.intl.string(d.t["4q1Elf"]),
        onClick: u,
        disabled: !c
    })
}