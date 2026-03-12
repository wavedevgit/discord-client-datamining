/** chunk id: 990028 params = (module,exports,require) **/
t.d(n, {
    A: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(969043),
    d = t(226698),
    o = t(376708),
    u = t(985018),
    s = t(733045);

function c(e) {
    let n = e.isArchivedThread(),
        t = (0, o.uW)(e),
        {
            firstMessage: c
        } = (0, r.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !t || n || null == c ? null : (0, i.jsx)(l.Drp, {
        id: "resolve-report",
        label: u.intl.string(s.default["8yIKem"]),
        action: () => d.A.resolveFlag(e.id)
    })
}