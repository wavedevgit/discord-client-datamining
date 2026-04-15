/** chunk id: 614676 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(626584),
    l = n(90924),
    a = n(629471),
    r = n(652215);
let s = new i.A(r.meB),
    o = {
        [r.e$_.CAPTURE_LOG]: {
            validation: e => (0, a.A)(e).required().keys({
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
                (0, l.lG)(t.transport);
                let a = t.application.id,
                    r = `${a} - ${i}`;
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