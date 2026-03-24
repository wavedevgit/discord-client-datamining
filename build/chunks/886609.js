/** chunk id: 886609 params = (module,exports,require) **/
t.a(e, async function(e, l) {
    try {
        t.d(n, {
            d: () => u
        });
        var r = t(627968),
            a = t(64700),
            s = t(840521),
            c = t(78377),
            i = t(302031),
            d = e([s]);

        function u(e) {
            let {
                children: n,
                node: t
            } = e, l = a.useMemo(() => Array.from((0, s.t)([t])).some(e => "link" === e.type), [t]), d = (0, c.p)();
            return a.useEffect(() => {
                d?.setHasSpoilerEmbeds?.(l)
            }, [d, l]), (0, r.jsx)(i.Ay, {
                type: i.Ay.Types.TEXT,
                children: () => n
            })
        }
        s = (d.then ? (await d)() : d)[0], l()
    } catch (e) {
        l(e)
    }
})