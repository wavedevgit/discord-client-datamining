/** chunk id: 764148 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(256415),
    l = n(837921),
    a = n(214961),
    r = n(88065),
    s = n(474951),
    o = n(770804),
    d = n(539754),
    c = n(228440),
    u = n(372919),
    A = n(624712),
    h = n(294446),
    _ = n(175436),
    m = n(43203),
    g = n(1791),
    p = n(293890),
    E = n(985603),
    I = n(103949),
    f = n(873351),
    C = n(885969),
    T = n(944127),
    N = n(388331),
    S = n(466444),
    x = n(177235),
    b = n(266686);
let v = {
        ...a.U,
        ...u.A,
        ...A.A,
        ..._.A,
        ...g.A,
        ...m.A,
        ...p.A,
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
        ...r.A,
        ...o.c,
        ...d.I,
        ...c.p
    },
    O = {
        server: s.A,
        commands: v,
        events: y,
        stores: [i.default],
        transports: [b.A],
        registerTransportsForEmbeddedPlatform: function() {
            l.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) s.A.registerTransport(e)
            })
        }
    }