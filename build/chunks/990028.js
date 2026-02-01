/** chunk id: 990028, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => u
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(969043),
    o = t(226698),
    c = t(376708),
    d = t(985018),
    s = t(641131);

function u(e) {
    let n = e.isArchivedThread(),
        t = (0, c.uW)(e),
        {
            firstMessage: u
        } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !t || n || null == u ? null : (0, r.jsx)(l.Drp, {
        id: "resolve-report",
        label: d.intl.string(s.default["8yIKem"]),
        action: () => o.A.resolveFlag(e.id)
    })
}