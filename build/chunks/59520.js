/** chunk id: 59520, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => s,
    J: () => o
}), n(896048);
var r = n(64700),
    i = n(735438);
let a = e => e,
    o = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = s(a, t, n, i),
            l = r.useRef(e);
        return r.useEffect(() => {
            l.current = o(e)
        }, [e, o]), 0 === t ? e : l.current
    },
    s = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = r.useRef((0, i.throttle)(e, t, a));
        return r.useEffect(() => (o.current = (0, i.throttle)(e, t, a), () => {
            var e;
            null == (e = o.current) || e.cancel()
        }), [e, t, a, ...n]), o.current
    }