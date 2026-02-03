package hp;

import hp.a1;
import hp.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a0 extends z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static a1.b a(a0 a0Var) {
            return z.a.a(a0Var);
        }

        public static r0 b(a0 a0Var) {
            return z.a.b(a0Var);
        }

        public static a1.b c(a0 a0Var) {
            return z.a.c(a0Var);
        }

        public static boolean d(a0 a0Var) {
            r0 f10 = a0Var.f();
            if (a0Var.a() && !f10.e()) {
                return false;
            }
            if (a0Var.a() && f10.c() && System.currentTimeMillis() - a0Var.i() <= f10.d()) {
                return false;
            }
            return true;
        }
    }

    pn.v b();

    long i();

    boolean j();

    long m();
}
