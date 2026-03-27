/** chunk id: 990028 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(969043),
    d = n(226698),
    o = n(376708),
    u = n(985018),
    s = n(733045);

function c(e) {
    let t = e.isArchivedThread(),
        n = (0, o.uW)(e),
        {
            firstMessage: c
        } = (0, r.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !n || t || null == c ? null : (0, i.jsx)(l.Drp, {
        id: "resolve-report",
        label: u.intl.string(s.default["8yIKem"]),
        action: () => d.A.resolveFlag(e.id)
    })
}