/** chunk id: 313869, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073);
var i = n(143236),
    s = n(723702),
    a = n(837921),
    r = n(350535),
    l = n(650583);
let o = [],
    c = (e, t, n) => {
        let i = +!(0, s.isWindows)();
        (e !== l.zY.MOUSE_BUTTON || n !== i) && o.forEach(i => i._handleEvent(e, t, n))
    };
class d extends i.EventEmitter {
    combo = [];
    constructor() {
        super(), o.push(this), 1 === o.length && a.Ay.setOnInputEventCallback(c)
    }
    destroy() {
        this.removeAllListeners(), 0 === (o = o.filter(e => e !== this)).length && a.Ay.setOnInputEventCallback(null)
    }
    toString() {
        return (0, r.dI)(this.combo)
    }
    _handleEvent(e, t, n) {
        0 === t ? this.combo = this.combo.filter(t => {
            let [i, s] = t;
            return i !== e || s !== n
        }) : (this.combo.push([e, n, (0, r._$)()]), this.emit("change", this))
    }
}