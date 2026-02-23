/** chunk id: 970244, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CI: () => E,
    Re: () => g,
    c_: () => h,
    e0: () => _,
    kM: () => p,
    kb: () => m,
    s: () => f,
    xP: () => A
}), n(321073);
var i = n(627968),
    l = n(989349),
    s = n.n(l),
    a = n(397927),
    r = n(626584),
    o = n(151282),
    c = n(896455),
    d = n(23395),
    u = n(985018);

function h(e) {
    let t = u.intl.formatToPlainString(u.t["CvHu/j"], {
        timestamp: new Date(e).valueOf()
    });
    (0, a.showToast)((0, a.createToast)(t, a.ToastType.SUCCESS))
}

function m() {
    (0, a.showToast)((0, a.createToast)(u.intl.string(u.t.MXsMRk), a.ToastType.SUCCESS))
}

function A(e) {
    (0, a.showToast)((0, a.createToast)(u.intl.formatToPlainString(u.t.slM6In, {
        error: e
    }), a.ToastType.FAILURE))
}

function g() {
    (0, a.showToast)((0, a.createToast)(u.intl.string(u.t["JF/LWn"]), a.ToastType.SUCCESS))
}

function p(e) {
    (0, a.showToast)((0, a.createToast)(u.intl.formatToPlainString(u.t.sUvyW3, {
        error: e
    }), a.ToastType.FAILURE))
}

function f(e) {
    let {
        channel: t
    } = e, n = s()().add(1, "day").startOf("day").set("hours", 9), l = s()().add(1, "day").startOf("day").set("hours", 13), r = s()().startOf("isoWeek").add(1, "week").set("hours", 9), c = [{
        display: u.intl.string(u.t.tjIn9i),
        value: n
    }, {
        display: u.intl.string(u.t.EMRZyS),
        value: l
    }, {
        display: u.intl.string(u.t["+P5MmK"]),
        value: r
    }].map(e => (0, i.jsx)(a.Drp, {
        id: e.display,
        label: e.display,
        action: () => (0, o.yF)({
            channelId: t.id,
            scheduledTimestamp: e.value.toISOString()
        })
    }, e.display));
    return c.push((0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.bXX, {}), (0, i.jsx)(a.Drp, {
            id: "custom-time",
            label: u.intl.string(u.t.stHooC),
            action: () => _({
                channel: t
            })
        }, "custom-time")]
    })), c
}

function _(e) {
    let {
        channel: t,
        defaultValue: l = s()().startOf("hour").add(1, "hour")
    } = e;
    (0, a.mMO)(async () => {
        let {
            default: e
        } = await Promise.resolve().then(n.bind(n, 896455));
        return n => (0, i.jsx)(e, {
            ...n,
            channel: t,
            defaultValue: l
        })
    }, {
        modalKey: c.t
    })
}

function E(e) {
    let {
        scheduledMessage: t
    } = e;
    (0, a.mMO)(async () => {
        let {
            default: e
        } = await Promise.resolve().then(n.bind(n, 23395));
        return n => (0, i.jsx)(e, {
            ...n,
            scheduledMessage: t
        })
    }, {
        modalKey: d.B
    })
}
new r.A("Scheduled Messages")