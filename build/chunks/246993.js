/** chunk id: 246993 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    r = n(513520),
    o = n(209390),
    d = n(734057),
    c = n(303054),
    u = n(594511),
    m = n(793877);
let h = [{
    key: "channel",
    cellClassName: u._w,
    render(e) {
        let {
            channelName: t
        } = e;
        return t
    }
}, {
    key: "score",
    renderHeader: () => (0, a.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: "SCORE"
    }),
    cellClassName: u.t6,
    render(e) {
        let {
            score: t
        } = e;
        return t.toFixed(5)
    }
}];

function x() {
    i.useEffect(() => {
        (0, r.I)()
    }, []);
    let e = (0, l.yK)([o.A, d.A], () => o.A.getChannelAffinities().map(e => {
        let {
            channelId: t,
            score: n
        } = e;
        return {
            key: t,
            channelName: d.A.getChannel(t)?.name ?? t,
            score: n
        }
    }).sort((e, t) => t.score - e.score));
    return 0 === e.length ? null : (0, a.jsx)(c.A, {
        className: m.nd,
        columns: h,
        rowClassName: u.nM,
        data: e
    })
}