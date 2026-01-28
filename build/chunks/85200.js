/** Chunk was on 60449 **/
/** chunk id: 85200, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(625841),
    a = n(74848),
    o = n(430452),
    c = n(723702),
    d = n(801264),
    u = n(731854),
    g = n(985018),
    h = n(637462);
let x = c.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function A() {
    var e, t;
    let {
        canSetInputDevice: n,
        canSetOutputDevice: c
    } = (0, l.cf)([o.A], () => ({
        canSetInputDevice: o.A.supports(u.O5.AUDIO_INPUT_DEVICE),
        canSetOutputDevice: o.A.supports(u.O5.AUDIO_OUTPUT_DEVICE)
    })), A = (0, a.x5)(u.oh.AUDIO_INPUT), p = (0, a.x5)(u.oh.AUDIO_OUTPUT), [m, j] = (0, a.tR)(u.oh.AUDIO_INPUT, {
        location: "UserSettingsDevices"
    }), [O, E] = (0, a.tR)(u.oh.AUDIO_OUTPUT, {
        location: "UserSettingsDevices"
    }), b = m.concat(j), S = O.concat(E), v = s.useMemo(() => {
        let e = x.some(e => {
                var t;
                return null == A || null == (t = A.hardwareId) ? void 0 : t.startsWith(e)
            }),
            t = x.some(e => {
                var t;
                return null == p || null == (t = p.hardwareId) ? void 0 : t.startsWith(e)
            });
        return e && t && (null == A ? void 0 : A.containerId) != null && A.containerId === (null == p ? void 0 : p.containerId)
    }, [A, p]), C = b[0], f = S[0], T = null != (e = null == C ? void 0 : C.disabled) ? e : !n, N = null != (t = null == f ? void 0 : f.disabled) ? t : !c;
    return (0, i.jsxs)("div", {
        className: h.y0,
        children: [(0, i.jsxs)("div", {
            className: h.o6,
            children: [(0, i.jsx)("div", {
                className: h.fi,
                children: (0, i.jsx)(r.U, {
                    label: g.intl.string(g.t.hHMYbb),
                    deviceType: u.oh.AUDIO_INPUT,
                    location: "UserSettingsDevices",
                    hideDeviceTypeIcon: !0,
                    isDisabled: T
                })
            }), (0, i.jsx)("div", {
                className: h.fi,
                children: (0, i.jsx)(r.U, {
                    label: g.intl.string(g.t.dl18zb),
                    deviceType: u.oh.AUDIO_OUTPUT,
                    location: "UserSettingsDevices",
                    hideDeviceTypeIcon: !0,
                    isDisabled: N
                })
            })]
        }), v && (0, i.jsx)(d.A, {
            look: d.k.WARNING,
            children: g.intl.string(g.t.Ioz3gx)
        })]
    })
}