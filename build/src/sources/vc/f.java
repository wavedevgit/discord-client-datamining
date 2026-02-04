package vc;

import ji.s;
import ji.t0;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements a {

    /* renamed from: a  reason: collision with root package name */
    public final s f51373a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51374b;

    private f(int i10, s sVar) {
        this.f51374b = i10;
        this.f51373a = sVar;
    }

    private static a a(int i10, int i11, h0 h0Var) {
        switch (i10) {
            case 1718776947:
                return g.d(i11, h0Var);
            case 1751742049:
                return c.b(h0Var);
            case 1752331379:
                return d.c(h0Var);
            case 1852994675:
                return h.a(h0Var);
            default:
                return null;
        }
    }

    public static f c(int i10, h0 h0Var) {
        a a10;
        s.a aVar = new s.a();
        int g10 = h0Var.g();
        int i11 = -2;
        while (h0Var.a() > 8) {
            int u10 = h0Var.u();
            int f10 = h0Var.f() + h0Var.u();
            h0Var.T(f10);
            if (u10 == 1414744396) {
                a10 = c(h0Var.u(), h0Var);
            } else {
                a10 = a(u10, i11, h0Var);
            }
            if (a10 != null) {
                if (a10.getType() == 1752331379) {
                    i11 = ((d) a10).b();
                }
                aVar.a(a10);
            }
            h0Var.U(f10);
            h0Var.T(g10);
        }
        return new f(i10, aVar.k());
    }

    public a b(Class cls) {
        t0 it = this.f51373a.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (aVar.getClass() == cls) {
                return aVar;
            }
        }
        return null;
    }

    @Override // vc.a
    public int getType() {
        return this.f51374b;
    }
}
