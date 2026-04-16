/** chunk id: 990028 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(969043),
    d = t(226698),
    s = t(376708),
    o = t(985018),
    c = t(221314);

function u(e) {
    let n = e.isArchivedThread(),
        t = (0, s.uW)(e),
        {
            firstMessage: u
        } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !t || n || null == u ? null : (0, r.jsx)(l.Drp, {
        id: "resolve-report",
        label: o.intl.string(c.default["8yIKem"]),
        action: () => d.A.resolveFlag(e.id)
    })
}