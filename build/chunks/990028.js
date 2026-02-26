/** chunk id: 990028, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => c
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(969043),
    d = t(226698),
    o = t(376708),
    s = t(985018),
    u = t(733045);

function c(e) {
    let n = e.isArchivedThread(),
        t = (0, o.uW)(e),
        {
            firstMessage: c
        } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !t || n || null == c ? null : (0, r.jsx)(l.Drp, {
        id: "resolve-report",
        label: s.intl.string(u.default["8yIKem"]),
        action: () => d.A.resolveFlag(e.id)
    })
}