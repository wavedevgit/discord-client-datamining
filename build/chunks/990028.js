/** chunk id: 990028 params = (module,exports,require) **/
t.d(n, {
    A: () => c
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(969043),
    d = t(226698),
    u = t(376708),
    s = t(985018),
    o = t(641131);

function c(e) {
    let n = e.isArchivedThread(),
        t = (0, u.uW)(e),
        {
            firstMessage: c
        } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !t || n || null == c ? null : (0, r.jsx)(l.Drp, {
        id: "resolve-report",
        label: s.intl.string(o.default["8yIKem"]),
        action: () => d.A.resolveFlag(e.id)
    })
}