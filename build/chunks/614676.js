/** chunk id: 614676 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(626584),
    a = n(90924),
    l = n(629471),
    r = n(652215);
let s = new i.A(r.meB),
    o = {
        [r.e$_.CAPTURE_LOG]: {
            validation: e => (0, l.A)(e).required().keys({
                level: e.string().max(10).required(),
                message: e.string().max(1e3).required()
            }),
            handler(e) {
                let {
                    socket: t,
                    args: {
                        level: n,
                        message: i
                    }
                } = e;
                (0, a.lG)(t.transport);
                let l = t.application.id,
                    r = `${l} - ${i}`;
                switch (n) {
                    case "log":
                        s.log(r);
                        break;
                    case "warn":
                        s.warn(r);
                        break;
                    case "debug":
                        s.verbose(r);
                        break;
                    case "info":
                        s.info(r);
                        break;
                    case "error":
                        s.error(r)
                }
            }
        }
    }