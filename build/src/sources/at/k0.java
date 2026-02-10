package at;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface k0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static bt.a a(k0 k0Var) {
            Integer a10 = k0Var.a();
            if (a10 != null) {
                return new bt.a(a10.intValue(), 9);
            }
            return null;
        }

        public static void b(k0 k0Var, bt.a aVar) {
            Integer num;
            if (aVar != null) {
                num = Integer.valueOf(aVar.d(9));
            } else {
                num = null;
            }
            k0Var.t(num);
        }
    }

    void C(bt.a aVar);

    void D(Integer num);

    Integer a();

    Integer d();

    Integer e();

    Integer h();

    Integer i();

    void m(Integer num);

    g q();

    void r(g gVar);

    void s(Integer num);

    void t(Integer num);

    void w(Integer num);

    bt.a y();
}
