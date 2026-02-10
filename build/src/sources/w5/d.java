package w5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {
    private static List a(x5.c cVar, float f10, l5.i iVar, n0 n0Var) {
        return u.a(cVar, iVar, f10, n0Var, false);
    }

    private static List b(x5.c cVar, l5.i iVar, n0 n0Var) {
        return u.a(cVar, iVar, 1.0f, n0Var, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.a c(x5.c cVar, l5.i iVar) {
        return new s5.a(b(cVar, iVar, g.f53265a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.j d(x5.c cVar, l5.i iVar) {
        return new s5.j(a(cVar, y5.j.e(), iVar, i.f53270a));
    }

    public static s5.b e(x5.c cVar, l5.i iVar) {
        return f(cVar, iVar, true);
    }

    public static s5.b f(x5.c cVar, l5.i iVar, boolean z10) {
        float f10;
        if (z10) {
            f10 = y5.j.e();
        } else {
            f10 = 1.0f;
        }
        return new s5.b(a(cVar, f10, iVar, l.f53287a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.c g(x5.c cVar, l5.i iVar, int i10) {
        return new s5.c(b(cVar, iVar, new o(i10)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.d h(x5.c cVar, l5.i iVar) {
        return new s5.d(b(cVar, iVar, r.f53300a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.f i(x5.c cVar, l5.i iVar) {
        return new s5.f(u.a(cVar, iVar, y5.j.e(), b0.f53255a, true));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.g j(x5.c cVar, l5.i iVar) {
        return new s5.g(b(cVar, iVar, g0.f53266a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.h k(x5.c cVar, l5.i iVar) {
        return new s5.h(a(cVar, y5.j.e(), iVar, h0.f53268a));
    }
}
