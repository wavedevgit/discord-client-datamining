/** chunk id: 764148 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(256415),
    a = n(837921),
    r = n(214961),
    l = n(88065),
    s = n(474951),
    o = n(770804),
    d = n(539754),
    c = n(228440),
    u = n(372919),
    A = n(624712),
    h = n(294446),
    _ = n(175436),
    m = n(43203),
    p = n(1791),
    g = n(293890),
    E = n(985603),
    I = n(103949),
    f = n(873351),
    C = n(885969),
    T = n(944127),
    N = n(388331),
    S = n(466444),
    x = n(177235),
    v = n(266686);
let b = {
        ...r.U,
        ...u.A,
        ...A.A,
        ..._.A,
        ...p.A,
        ...m.A,
        ...g.A,
        ...E.A,
        ...I.A,
        ...f.A,
        ...C.A,
        ...N.A,
        ...x.A,
        ...S.A,
        ...h.A,
        ...T.A
    },
    y = {
        ...l.A,
        ...o.c,
        ...d.I,
        ...c.p
    },
    O = {
        server: s.A,
        commands: b,
        events: y,
        stores: [i.default],
        transports: [v.A],
        registerTransportsForEmbeddedPlatform: function() {
            a.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) s.A.registerTransport(e)
            })
        }
    }