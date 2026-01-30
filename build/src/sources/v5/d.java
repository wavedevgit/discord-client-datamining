package v5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {
    private static List a(w5.c cVar, float f10, l5.i iVar, n0 n0Var) {
        return u.a(cVar, iVar, f10, n0Var, false);
    }

    private static List b(w5.c cVar, l5.i iVar, n0 n0Var) {
        return u.a(cVar, iVar, 1.0f, n0Var, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.a c(w5.c cVar, l5.i iVar) {
        return new r5.a(b(cVar, iVar, g.f50687a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.j d(w5.c cVar, l5.i iVar) {
        return new r5.j(a(cVar, x5.j.e(), iVar, i.f50692a));
    }

    public static r5.b e(w5.c cVar, l5.i iVar) {
        return f(cVar, iVar, true);
    }

    public static r5.b f(w5.c cVar, l5.i iVar, boolean z10) {
        float f10;
        if (z10) {
            f10 = x5.j.e();
        } else {
            f10 = 1.0f;
        }
        return new r5.b(a(cVar, f10, iVar, l.f50709a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.c g(w5.c cVar, l5.i iVar, int i10) {
        return new r5.c(b(cVar, iVar, new o(i10)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.d h(w5.c cVar, l5.i iVar) {
        return new r5.d(b(cVar, iVar, r.f50722a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.f i(w5.c cVar, l5.i iVar) {
        return new r5.f(u.a(cVar, iVar, x5.j.e(), b0.f50677a, true));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.g j(w5.c cVar, l5.i iVar) {
        return new r5.g(b(cVar, iVar, g0.f50688a));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.h k(w5.c cVar, l5.i iVar) {
        return new r5.h(a(cVar, x5.j.e(), iVar, h0.f50690a));
    }
}
