package zj;

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
public final class k extends uj.f {

    /* renamed from: j  reason: collision with root package name */
    private static final bk.d f56478j = bk.d.b();

    /* renamed from: k  reason: collision with root package name */
    static boolean f56479k = true;

    /* renamed from: d  reason: collision with root package name */
    private final wj.b f56480d;

    /* renamed from: e  reason: collision with root package name */
    private final l f56481e;

    /* renamed from: f  reason: collision with root package name */
    private final nk f56482f;

    /* renamed from: g  reason: collision with root package name */
    private final pk f56483g;

    /* renamed from: h  reason: collision with root package name */
    private final bk.a f56484h = new bk.a();

    /* renamed from: i  reason: collision with root package name */
    private boolean f56485i;

    public k(uj.i iVar, wj.b bVar, l lVar, nk nkVar) {
        q.m(iVar, "MlKitContext can not be null");
        q.m(bVar, "BarcodeScannerOptions can not be null");
        this.f56480d = bVar;
        this.f56481e = lVar;
        this.f56482f = nkVar;
        this.f56483g = pk.a(iVar.b());
    }

    private final void m(final xe xeVar, long j10, final ak.a aVar, List list) {
        int i10;
        final f1 f1Var = new f1();
        final f1 f1Var2 = new f1();
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                xj.a aVar2 = (xj.a) it.next();
                f1Var.e(b.a(aVar2.c()));
                f1Var2.e(b.b(aVar2.e()));
            }
        }
        final long elapsedRealtime = SystemClock.elapsedRealtime() - j10;
        this.f56482f.f(new mk() { // from class: zj.i
            @Override // og.mk
            public final ck zza() {
                return k.this.j(elapsedRealtime, xeVar, f1Var, f1Var2, aVar);
            }
        }, ye.ON_DEVICE_BARCODE_DETECT);
        c3 c3Var = new c3();
        c3Var.e(xeVar);
        c3Var.f(Boolean.valueOf(f56479k));
        c3Var.g(b.c(this.f56480d));
        c3Var.c(f1Var.g());
        c3Var.d(f1Var2.g());
        final e3 h10 = c3Var.h();
        final j jVar = new j(this);
        final nk nkVar = this.f56482f;
        final ye yeVar = ye.AGGREGATED_ON_DEVICE_BARCODE_DETECTION;
        uj.g.d().execute(new Runnable() { // from class: og.lk
            @Override // java.lang.Runnable
            public final void run() {
                nk.this.h(yeVar, h10, elapsedRealtime, jVar);
            }
        });
        long currentTimeMillis = System.currentTimeMillis();
        boolean z10 = this.f56485i;
        long j11 = currentTimeMillis - elapsedRealtime;
        pk pkVar = this.f56483g;
        if (true != z10) {
            i10 = 24301;
        } else {
            i10 = 24302;
        }
        pkVar.c(i10, xeVar.zza(), j11, currentTimeMillis);
    }

    @Override // uj.k
    public final synchronized void b() {
        this.f56485i = this.f56481e.a();
    }

    @Override // uj.k
    public final synchronized void d() {
        we weVar;
        try {
            this.f56481e.zzb();
            f56479k = true;
            ze zeVar = new ze();
            if (this.f56485i) {
                weVar = we.TYPE_THICK;
            } else {
                weVar = we.TYPE_THIN;
            }
            nk nkVar = this.f56482f;
            zeVar.e(weVar);
            mf mfVar = new mf();
            mfVar.i(b.c(this.f56480d));
            zeVar.g(mfVar.j());
            nkVar.d(qk.e(zeVar), ye.ON_DEVICE_BARCODE_CLOSE);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ ck j(long j10, xe xeVar, f1 f1Var, f1 f1Var2, ak.a aVar) {
        de deVar;
        we weVar;
        mf mfVar = new mf();
        je jeVar = new je();
        jeVar.c(Long.valueOf(j10));
        jeVar.d(xeVar);
        jeVar.e(Boolean.valueOf(f56479k));
        Boolean bool = Boolean.TRUE;
        jeVar.a(bool);
        jeVar.b(bool);
        mfVar.h(jeVar.f());
        mfVar.i(b.c(this.f56480d));
        mfVar.e(f1Var.g());
        mfVar.f(f1Var2.g());
        int g10 = aVar.g();
        int d10 = f56478j.d(aVar);
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
        if (this.f56485i) {
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
        if (this.f56485i) {
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

    @Override // uj.f
    /* renamed from: l */
    public final synchronized List i(ak.a aVar) {
        k kVar;
        ak.a aVar2;
        xe xeVar;
        List c10;
        try {
            try {
                bk.a aVar3 = this.f56484h;
                long elapsedRealtime = SystemClock.elapsedRealtime();
                aVar3.a(aVar);
                try {
                    c10 = this.f56481e.c(aVar);
                    kVar = this;
                    aVar2 = aVar;
                } catch (qj.a e10) {
                    e = e10;
                    kVar = this;
                    aVar2 = aVar;
                }
                try {
                    kVar.m(xe.NO_ERROR, elapsedRealtime, aVar2, c10);
                    f56479k = false;
                    return c10;
                } catch (qj.a e11) {
                    e = e11;
                    qj.a aVar4 = e;
                    if (aVar4.a() == 14) {
                        xeVar = xe.MODEL_NOT_DOWNLOADED;
                    } else {
                        xeVar = xe.UNKNOWN_ERROR;
                    }
                    kVar.m(xeVar, elapsedRealtime, aVar2, null);
                    throw aVar4;
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
