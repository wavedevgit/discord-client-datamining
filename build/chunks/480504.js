/** chunk id: 480504, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    _: () => s
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(835245);
let a = new Worker(new URL("/assets/" + n.u("58531"), n.b));

function o(e) {
    return new Promise(t => {
        let n = (0, i.A)(),
            r = e => {
                let {
                    data: {
                        id: i,
                        png: o
                    }
                } = e;
                n === i && (t(o), a.removeEventListener("message", r))
            };
        a.addEventListener("message", r), a.postMessage({
            id: n,
            placeholderData: e
        })
    })
}

function s(e, t, n) {
    let i = n && 1 === t && null != e,
        [a, s] = r.useState(void 0);
    return r.useEffect(() => {
        let t = !1;
        return i && o(e).then(e => {
            t || s(e)
        }), () => {
            t = !0
        }
    }, [e, i]), a
}