/** chunk id: 313869, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048), n(321073);
var r = n(143236),
    i = n(723702),
    s = n(837921),
    o = n(350535),
    l = n(650583);
let a = [],
    c = (e, t, n) => {
        let r = +!(0, i.isWindows)();
        (e !== l.zY.MOUSE_BUTTON || n !== r) && a.forEach(r => r._handleEvent(e, t, n))
    };
class d extends r.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (a = a.filter(e => e !== this)).length && s.Ay.setOnInputEventCallback(null)
    }
    toString() {
        return (0, o.dI)(this.combo)
    }
    _handleEvent(e, t, n) {
        0 === t ? this.combo = this.combo.filter(t => {
            let [r, i] = t;
            return r !== e || i !== n
        }) : (this.combo.push([e, n, (0, o._$)()]), this.emit("change", this))
    }
    constructor() {
        super(),
            function(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(this, "combo", []), a.push(this), 1 === a.length && s.Ay.setOnInputEventCallback(c)
    }
}