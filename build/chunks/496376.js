/** chunk id: 496376 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(974875),
    o = n(900819),
    d = n(985018);

function c(e) {
    let {
        messageId: t,
        channelId: n
    } = e, c = (0, a.bG)([o.A], () => o.A.canSubmitFpReport(t)), u = r.useCallback(() => {
        (0, s.Q)(n, t)
    }, [n, t]);
    return (0, i.jsx)(l.Button, {
        variant: "secondary",
        text: d.intl.string(d.t["4q1Elf"]),
        onClick: u,
        disabled: !c
    })
}