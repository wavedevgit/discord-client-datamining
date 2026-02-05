package pg;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ak implements lj {

    /* renamed from: a  reason: collision with root package name */
    private final ke f45113a;

    /* renamed from: b  reason: collision with root package name */
    private ki f45114b = new ki();

    /* renamed from: c  reason: collision with root package name */
    private final int f45115c;

    private ak(ke keVar, int i10) {
        this.f45113a = keVar;
        jk.a();
        this.f45115c = i10;
    }

    public static lj e(ke keVar) {
        return new ak(keVar, 0);
    }

    public static lj f(ke keVar, int i10) {
        return new ak(keVar, 1);
    }

    @Override // pg.lj
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        int i11 = i10 ^ 1;
        ki kiVar = this.f45114b;
        if (1 != i11) {
            z11 = false;
        } else {
            z11 = true;
        }
        kiVar.f(Boolean.valueOf(z11));
        this.f45114b.e(Boolean.FALSE);
        this.f45113a.i(this.f45114b.m());
        try {
            jk.a();
            if (i10 == 0) {
                return new zi.d().j(cc.f45164a).k(true).i().b(this.f45113a.j()).getBytes("utf-8");
            }
            me j10 = this.f45113a.j();
            e2 e2Var = new e2();
            cc.f45164a.a(e2Var);
            return e2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // pg.lj
    public final String b() {
        mi f10 = this.f45113a.j().f();
        if (f10 != null && !fl.b(f10.k())) {
            return (String) gf.q.l(f10.k());
        }
        return "NA";
    }

    @Override // pg.lj
    public final lj c(je jeVar) {
        this.f45113a.f(jeVar);
        return this;
    }

    @Override // pg.lj
    public final lj d(ki kiVar) {
        this.f45114b = kiVar;
        return this;
    }

    @Override // pg.lj
    public final int zza() {
        return this.f45115c;
    }
}
