package bk;

import android.os.SystemClock;
import hf.q;
import java.util.Iterator;
import java.util.List;
import og.b3;
import og.c3;
import og.ce;
import og.ck;
import og.de;
import og.e3;
import og.f1;
import og.je;
import og.mf;
import og.mk;
import og.nk;
import og.pk;
import og.qk;
import og.we;
import og.xe;
import og.yd;
import og.ye;
import og.ze;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends wj.f {

    /* renamed from: j  reason: collision with root package name */
    private static final dk.d f7232j = dk.d.b();

    /* renamed from: k  reason: collision with root package name */
    static boolean f7233k = true;

    /* renamed from: d  reason: collision with root package name */
    private final yj.b f7234d;

    /* renamed from: e  reason: collision with root package name */
    private final l f7235e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f7236f;

    /* renamed from: g  reason: collision with root package name */
    private final pk f7237g;

    /* renamed from: h  reason: collision with root package name */
    private final dk.a f7238h = new dk.a();

    /* renamed from: i  reason: collision with root package name */
    private boolean f7239i;

    public k(wj.i iVar, yj.b bVar, l lVar, nk nkVar) {
        q.m(iVar, "MlKitContext can not be null");
        q.m(bVar, "BarcodeScannerOptions can not be null");
        this.f7234d = bVar;
        this.f7235e = lVar;
        this.f7236f = nkVar;
        this.f7237g = pk.a(iVar.b());
    }

    private final void m(final xe xeVar, long j10, final ck.a aVar, List list) {
        int i10;
        final f1 f1Var = new f1();
        final f1 f1Var2 = new f1();
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                zj.a aVar2 = (zj.a) it.next();
                f1Var.e(b.a(aVar2.c()));
                f1Var2.e(b.b(aVar2.e()));
            }
        }
        final long elapsedRealtime = SystemClock.elapsedRealtime() - j10;
        this.f7236f.f(new mk() { // from class: bk.i
            @Override // og.mk
            public final ck zza() {
                return k.this.j(elapsedRealtime, xeVar, f1Var, f1Var2, aVar);
            }
        }, ye.ON_DEVICE_BARCODE_DETECT);
        c3 c3Var = new c3();
        c3Var.e(xeVar);
        c3Var.f(Boolean.valueOf(f7233k));
        c3Var.g(b.c(this.f7234d));
        c3Var.c(f1Var.g());
        c3Var.d(f1Var2.g());
        final e3 h10 = c3Var.h();
        final j jVar = new j(this);
        final nk nkVar = this.f7236f;
        final ye yeVar = ye.AGGREGATED_ON_DEVICE_BARCODE_DETECTION;
        wj.g.d().execute(new Runnable() { // from class: og.lk
            @Override // java.lang.Runnable
            public final void run() {
                nk.this.h(yeVar, h10, elapsedRealtime, jVar);
            }
        });
        long currentTimeMillis = System.currentTimeMillis();
        boolean z10 = this.f7239i;
        long j11 = currentTimeMillis - elapsedRealtime;
        pk pkVar = this.f7237g;
        if (true != z10) {
            i10 = 24301;
        } else {
            i10 = 24302;
        }
        pkVar.c(i10, xeVar.zza(), j11, currentTimeMillis);
    }

    @Override // wj.k
    public final synchronized void b() {
        this.f7239i = this.f7235e.a();
    }

    @Override // wj.k
    public final synchronized void d() {
        we weVar;
        try {
            this.f7235e.zzb();
            f7233k = true;
            ze zeVar = new ze();
            if (this.f7239i) {
                weVar = we.TYPE_THICK;
            } else {
                weVar = we.TYPE_THIN;
            }
            nk nkVar = this.f7236f;
            zeVar.e(weVar);
            mf mfVar = new mf();
            mfVar.i(b.c(this.f7234d));
            zeVar.g(mfVar.j());
            nkVar.d(qk.e(zeVar), ye.ON_DEVICE_BARCODE_CLOSE);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ ck j(long j10, xe xeVar, f1 f1Var, f1 f1Var2, ck.a aVar) {
        de deVar;
        we weVar;
        mf mfVar = new mf();
        je jeVar = new je();
        jeVar.c(Long.valueOf(j10));
        jeVar.d(xeVar);
        jeVar.e(Boolean.valueOf(f7233k));
        Boolean bool = Boolean.TRUE;
        jeVar.a(bool);
        jeVar.b(bool);
        mfVar.h(jeVar.f());
        mfVar.i(b.c(this.f7234d));
        mfVar.e(f1Var.g());
        mfVar.f(f1Var2.g());
        int g10 = aVar.g();
        int d10 = f7232j.d(aVar);
        ce ceVar = new ce();
        if (g10 != -1) {
            if (g10 != 35) {
                if (g10 != 842094169) {
                    if (g10 != 16) {
                        if (g10 != 17) {
                            deVar = de.UNKNOWN_FORMAT;
                        } else {
                            deVar = de.NV21;
                        }
                    } else {
                        deVar = de.NV16;
                    }
                } else {
                    deVar = de.YV12;
                }
            } else {
                deVar = de.YUV_420_888;
            }
        } else {
            deVar = de.BITMAP;
        }
        ceVar.a(deVar);
        ceVar.b(Integer.valueOf(d10));
        mfVar.g(ceVar.d());
        ze zeVar = new ze();
        if (this.f7239i) {
            weVar = we.TYPE_THICK;
        } else {
            weVar = we.TYPE_THIN;
        }
        zeVar.e(weVar);
        zeVar.g(mfVar.j());
        return qk.e(zeVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ ck k(e3 e3Var, int i10, yd ydVar) {
        we weVar;
        ze zeVar = new ze();
        if (this.f7239i) {
            weVar = we.TYPE_THICK;
        } else {
            weVar = we.TYPE_THIN;
        }
        zeVar.e(weVar);
        b3 b3Var = new b3();
        b3Var.a(Integer.valueOf(i10));
        b3Var.c(e3Var);
        b3Var.b(ydVar);
        zeVar.d(b3Var.e());
        return qk.e(zeVar);
    }

    @Override // wj.f
    /* renamed from: l */
    public final synchronized List i(ck.a aVar) {
        k kVar;
        ck.a aVar2;
        xe xeVar;
        try {
            try {
                dk.a aVar3 = this.f7238h;
                long elapsedRealtime = SystemClock.elapsedRealtime();
                aVar3.a(aVar);
                try {
                    List c10 = this.f7235e.c(aVar);
                    kVar = this;
                    aVar2 = aVar;
                    try {
                        kVar.m(xe.NO_ERROR, elapsedRealtime, aVar2, c10);
                        f7233k = false;
                        return c10;
                    } catch (sj.a e10) {
                        e = e10;
                        sj.a aVar4 = e;
                        if (aVar4.a() == 14) {
                            xeVar = xe.MODEL_NOT_DOWNLOADED;
                        } else {
                            xeVar = xe.UNKNOWN_ERROR;
                        }
                        kVar.m(xeVar, elapsedRealtime, aVar2, null);
                        throw aVar4;
                    }
                } catch (sj.a e11) {
                    e = e11;
                    kVar = this;
                    aVar2 = aVar;
                }
            } catch (Throwable th2) {
                th = th2;
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
        }
    }
}
