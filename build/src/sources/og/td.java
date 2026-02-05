package og;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class td implements ed {

    /* renamed from: a  reason: collision with root package name */
    private final ea f43420a;

    /* renamed from: b  reason: collision with root package name */
    private fc f43421b = new fc();

    /* renamed from: c  reason: collision with root package name */
    private final int f43422c;

    private td(ea eaVar, int i10) {
        this.f43420a = eaVar;
        ce.a();
        this.f43422c = i10;
    }

    public static ed e(ea eaVar) {
        return new td(eaVar, 0);
    }

    public static ed f(ea eaVar, int i10) {
        return new td(eaVar, 1);
    }

    @Override // og.ed
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        fc fcVar = this.f43421b;
        if (1 != (i10 ^ 1)) {
            z11 = false;
        } else {
            z11 = true;
        }
        fcVar.f(Boolean.valueOf(z11));
        this.f43421b.e(Boolean.FALSE);
        this.f43420a.i(this.f43421b.m());
        try {
            ce.a();
            if (i10 == 0) {
                return new zi.d().j(f8.f42876a).k(true).i().b(this.f43420a.j()).getBytes("utf-8");
            }
            ga j10 = this.f43420a.j();
            a2 a2Var = new a2();
            f8.f42876a.a(a2Var);
            return a2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // og.ed
    public final String b() {
        hc f10 = this.f43420a.j().f();
        if (f10 != null && !d.b(f10.k())) {
            return (String) gf.q.l(f10.k());
        }
        return "NA";
    }

    @Override // og.ed
    public final ed c(fc fcVar) {
        this.f43421b = fcVar;
        return this;
    }

    @Override // og.ed
    public final ed d(da daVar) {
        this.f43420a.f(daVar);
        return this;
    }

    @Override // og.ed
    public final int zza() {
        return this.f43422c;
    }
}
