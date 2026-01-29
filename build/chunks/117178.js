/** Chunk was on 12618 **/
/** chunk id: 117178, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(695497),
    o = n.n(s),
    l = n(313869),
    a = n(451802),
    c = n(723702),
    d = n(837921),
    u = n(650583);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let p = c.isPlatformEmbedded && null != d.Ay.getDiscordUtils().inputCaptureRegisterElement;
class b extends i.PureComponent {
    componentDidMount() {
        this._mounted = !0
    }
    componentWillUnmount() {
        this._mounted = !1, this.cleanUp()
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({
            codes: this.props.defaultValue
        })
    }
    cleanUp() {
        c.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
    }
    handleComboChange(e) {
        let {
            mode: t
        } = this.state, {
            onChange: n
        } = this.props;
        t === a.E.RECORDING && (null != n && n(e), this.setState({
            codes: e
        }))
    }
    render() {
        let e, t, {
                codes: n,
                mode: i
            } = this.state,
            {
                disabled: s
            } = this.props;
        return p ? (t = d.Ay.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : c.isPlatformEmbedded || (e = this.handleComboKeys), (0, r.jsx)(a.A, {
            disabled: s,
            value: n,
            mode: i,
            onClick: this.toggleRecordMode,
            onChange: e,
            registerNativeRecorder: t,
            disableOnClickWhileRecording: p
        })
    }
    constructor(e) {
        super(e), h(this, "_input", void 0), h(this, "gs", void 0), h(this, "_mounted", !1), h(this, "recordStart", () => {
            c.isPlatformEmbedded && !p && (this.gs = new l.A, this.gs.on("change", this.handleGSChange)), this.setState({
                mode: a.E.RECORDING
            })
        }), h(this, "recordEnd", () => {
            this.cleanUp(), this.setState({
                mode: a.E.DEFAULT
            })
        }), h(this, "toggleRecordMode", () => {
            this.state.mode === a.E.DEFAULT ? this.recordStart() : this.recordEnd()
        }), h(this, "handleComboKeys", (e, t, n) => {
            if (n.preventDefault(), "keydown" === n.type) {
                let e = t.map(e => [u.zY.KEYBOARD_KEY, o()(e), u.g$.BROWSER]),
                    {
                        keyCode: r
                    } = n;
                null == e.find(e => {
                    let [, t] = e;
                    return r === t
                }) && e.push([u.zY.KEYBOARD_KEY, r, u.g$.BROWSER]), this.handleComboChange(e)
            }
        }), h(this, "handleGSChange", e => {
            if (!1 === this._mounted) return;
            let t = [...e.combo];
            this.handleComboChange(t)
        }), h(this, "handleNativeChange", e => {
            e.length > 0 && this.handleComboChange(e), this.recordEnd()
        });
        const {
            defaultValue: t
        } = e;
        this.state = {
            codes: t,
            mode: a.E.DEFAULT
        }
    }
}
let m = b