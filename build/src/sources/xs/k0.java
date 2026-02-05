package xs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static ys.a a(k0 k0Var) {
            Integer a10 = k0Var.a();
            if (a10 != null) {
                return new ys.a(a10.intValue(), 9);
            }
            return null;
        }

        public static void b(k0 k0Var, ys.a aVar) {
            Integer num;
            if (aVar != null) {
                num = Integer.valueOf(aVar.d(9));
            } else {
                num = null;
            }
            k0Var.t(num);
        }
    }

    void C(Integer num);

    void E(g gVar);

    Integer a();

    Integer c();

    Integer d();

    Integer e();

    Integer h();

    void k(ys.a aVar);

    void n(Integer num);

    g r();

    void s(Integer num);

    void t(Integer num);

    void w(Integer num);

    ys.a y();
}
