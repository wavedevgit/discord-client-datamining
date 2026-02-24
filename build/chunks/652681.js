/** chunk id: 652681, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var s = r(64700),
    i = r(141931),
    n = r(311907),
    l = r(451988),
    a = r(15285),
    o = r(920281);
let c = [i.fS.CAMERA],
    d = [i.fS.SCREEN, i.fS.WINDOW, i.fS.CAMERA];

function u(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, n.bG)([a.Ay], () => a.Ay.getRunningGames().length > 0),
        u = s.useRef(0),
        f = i ? 2e3 : 1e3,
        h = s.useRef(new l.Ep);
    s.useEffect(() => {
        if (r) return;
        let s = h.current,
            i = u.current,
            n = {
                width: 447,
                height: 251,
                types: e ? c : d
            };
        async function l() {
            let {
                screenSources: e,
                windowSources: r,
                cameraSources: a
            } = await (0, o.d)(n);
            u.current > i || (t({
                type: "set_source_candidates",
                screenSources: e,
                windowSources: r,
                deviceSources: a
            }), s.start(f, l))
        }
        return l(), () => {
            u.current += 1, s.stop()
        }
    }, [t, f, e, r])
}