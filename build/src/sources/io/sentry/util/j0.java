package io.sentry.util;

import io.sentry.IScope;
import io.sentry.b4;
import io.sentry.i2;
import io.sentry.k7;
import io.sentry.s3;
import io.sentry.s8;
import io.sentry.w0;
import io.sentry.z3;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j0 {
    public static /* synthetic */ void b(IScope iScope, k7 k7Var, s3 s3Var) {
        io.sentry.d a10 = s3Var.a();
        if (a10.q()) {
            a10.H(iScope, k7Var);
            a10.b();
        }
    }

    public static io.sentry.d d(io.sentry.d dVar, s8 s8Var) {
        Boolean e10;
        Double d10;
        Double d11 = null;
        if (s8Var == null) {
            e10 = null;
        } else {
            e10 = s8Var.e();
        }
        if (s8Var == null) {
            d10 = null;
        } else {
            d10 = s8Var.d();
        }
        if (s8Var != null) {
            d11 = s8Var.c();
        }
        return e(dVar, e10, d10, d11);
    }

    public static io.sentry.d e(io.sentry.d dVar, Boolean bool, Double d10, Double d11) {
        if (dVar == null) {
            dVar = new io.sentry.d(i2.e());
        }
        if (dVar.i() == null) {
            Double j10 = dVar.j();
            if (j10 != null) {
                d10 = j10;
            }
            dVar.B(c0.b(d11, d10, bool));
        }
        if (dVar.q() && dVar.r()) {
            dVar.b();
        }
        return dVar;
    }

    public static boolean f(List list, String str) {
        if (str != null && list != null && !list.isEmpty()) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                if (((io.sentry.e0) it.next()).a().equalsIgnoreCase(str)) {
                    return true;
                }
            }
            Iterator it2 = list.iterator();
            while (it2.hasNext()) {
                if (((io.sentry.e0) it2.next()).b(str)) {
                    return true;
                }
            }
        }
        return false;
    }

    public static s3 g(final IScope iScope, final k7 k7Var) {
        return iScope.S(new z3.a() { // from class: io.sentry.util.g0
            @Override // io.sentry.z3.a
            public final void a(s3 s3Var) {
                j0.b(IScope.this, k7Var, s3Var);
            }
        });
    }

    public static void h(w0 w0Var) {
        w0Var.p(new b4() { // from class: io.sentry.util.h0
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                iScope.S(new z3.a() { // from class: io.sentry.util.i0
                    @Override // io.sentry.z3.a
                    public final void a(s3 s3Var) {
                        IScope.this.W(new s3());
                    }
                });
            }
        });
    }
}
