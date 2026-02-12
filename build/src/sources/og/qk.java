package og;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk implements ck {

    /* renamed from: a  reason: collision with root package name */
    private final ze f39612a;

    /* renamed from: b  reason: collision with root package name */
    private yi f39613b = new yi();

    /* renamed from: c  reason: collision with root package name */
    private final int f39614c;

    private qk(ze zeVar, int i10) {
        this.f39612a = zeVar;
        al.a();
        this.f39614c = i10;
    }

    public static ck e(ze zeVar) {
        return new qk(zeVar, 0);
    }

    public static ck f(ze zeVar, int i10) {
        return new qk(zeVar, 1);
    }

    @Override // og.ck
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        int i11 = i10 ^ 1;
        yi yiVar = this.f39613b;
        if (1 != i11) {
            z11 = false;
        } else {
            z11 = true;
        }
        yiVar.f(Boolean.valueOf(z11));
        this.f39613b.e(Boolean.FALSE);
        this.f39612a.i(this.f39613b.m());
        try {
            al.a();
            if (i10 == 0) {
                return new dj.d().j(qc.f39611a).k(true).i().b(this.f39612a.j()).getBytes("utf-8");
            }
            bf j10 = this.f39612a.j();
            t2 t2Var = new t2();
            qc.f39611a.a(t2Var);
            return t2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // og.ck
    public final String b() {
        aj g10 = this.f39612a.j().g();
        if (g10 != null && !v.b(g10.k())) {
            return (String) hf.q.l(g10.k());
        }
        return "NA";
    }

    @Override // og.ck
    public final ck c(ye yeVar) {
        this.f39612a.f(yeVar);
        return this;
    }

    @Override // og.ck
    public final ck d(yi yiVar) {
        this.f39613b = yiVar;
        return this;
    }

    @Override // og.ck
    public final int zza() {
        return this.f39614c;
    }
}
