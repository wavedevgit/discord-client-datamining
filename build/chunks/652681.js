/** chunk id: 652681, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(64700),
    i = r(141931),
    l = r(311907),
    s = r(451988),
    a = r(15285),
    o = r(920281);
let c = [i.fS.CAMERA],
    d = [i.fS.SCREEN, i.fS.WINDOW, i.fS.CAMERA];

function u(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, l.bG)([a.Ay], () => a.Ay.getRunningGames().length > 0),
        u = n.useRef(0),
        f = i ? 2e3 : 1e3,
        h = n.useRef(new s.Ep);
    n.useEffect(() => {
        if (r) return;
        let n = h.current,
            i = u.current,
            l = {
                width: 447,
                height: 251,
                types: e ? c : d
            };
        async function s() {
            let {
                screenSources: e,
                windowSources: r,
                cameraSources: a
            } = await (0, o.d)(l);
            u.current > i || (t({
                type: "set_source_candidates",
                screenSources: e,
                windowSources: r,
                deviceSources: a
            }), n.start(f, s))
        }
        return s(), () => {
            u.current += 1, n.stop()
        }
    }, [t, f, e, r])
}