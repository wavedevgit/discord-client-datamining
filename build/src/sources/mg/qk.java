package mg;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk implements ck {

    /* renamed from: a  reason: collision with root package name */
    private final ze f38387a;

    /* renamed from: b  reason: collision with root package name */
    private yi f38388b = new yi();

    /* renamed from: c  reason: collision with root package name */
    private final int f38389c;

    private qk(ze zeVar, int i10) {
        this.f38387a = zeVar;
        al.a();
        this.f38389c = i10;
    }

    public static ck e(ze zeVar) {
        return new qk(zeVar, 0);
    }

    public static ck f(ze zeVar, int i10) {
        return new qk(zeVar, 1);
    }

    @Override // mg.ck
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        int i11 = i10 ^ 1;
        yi yiVar = this.f38388b;
        if (1 != i11) {
            z11 = false;
        } else {
            z11 = true;
        }
        yiVar.f(Boolean.valueOf(z11));
        this.f38388b.e(Boolean.FALSE);
        this.f38387a.i(this.f38388b.m());
        try {
            al.a();
            if (i10 == 0) {
                return new wi.d().j(qc.f38386a).k(true).i().b(this.f38387a.j()).getBytes("utf-8");
            }
            bf j10 = this.f38387a.j();
            t2 t2Var = new t2();
            qc.f38386a.a(t2Var);
            return t2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // mg.ck
    public final String b() {
        aj g10 = this.f38387a.j().g();
        if (g10 != null && !v.b(g10.k())) {
            return (String) gf.q.l(g10.k());
        }
        return "NA";
    }

    @Override // mg.ck
    public final ck c(yi yiVar) {
        this.f38388b = yiVar;
        return this;
    }

    @Override // mg.ck
    public final ck d(ye yeVar) {
        this.f38387a.f(yeVar);
        return this;
    }

    @Override // mg.ck
    public final int zza() {
        return this.f38389c;
    }
}
