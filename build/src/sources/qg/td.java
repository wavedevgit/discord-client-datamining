package qg;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class td implements ed {

    /* renamed from: a  reason: collision with root package name */
    private final ea f45561a;

    /* renamed from: b  reason: collision with root package name */
    private fc f45562b = new fc();

    /* renamed from: c  reason: collision with root package name */
    private final int f45563c;

    private td(ea eaVar, int i10) {
        this.f45561a = eaVar;
        ce.a();
        this.f45563c = i10;
    }

    public static ed e(ea eaVar) {
        return new td(eaVar, 0);
    }

    public static ed f(ea eaVar, int i10) {
        return new td(eaVar, 1);
    }

    @Override // qg.ed
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        fc fcVar = this.f45562b;
        if (1 != (i10 ^ 1)) {
            z11 = false;
        } else {
            z11 = true;
        }
        fcVar.f(Boolean.valueOf(z11));
        this.f45562b.e(Boolean.FALSE);
        this.f45561a.i(this.f45562b.m());
        try {
            ce.a();
            if (i10 == 0) {
                return new dj.d().j(f8.f45017a).k(true).i().b(this.f45561a.j()).getBytes("utf-8");
            }
            ga j10 = this.f45561a.j();
            a2 a2Var = new a2();
            f8.f45017a.a(a2Var);
            return a2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // qg.ed
    public final String b() {
        hc f10 = this.f45561a.j().f();
        if (f10 != null && !d.b(f10.k())) {
            return (String) hf.q.l(f10.k());
        }
        return "NA";
    }

    @Override // qg.ed
    public final ed c(fc fcVar) {
        this.f45562b = fcVar;
        return this;
    }

    @Override // qg.ed
    public final ed d(da daVar) {
        this.f45561a.f(daVar);
        return this;
    }

    @Override // qg.ed
    public final int zza() {
        return this.f45563c;
    }
}
