package ak;

import android.os.SystemClock;
import java.util.concurrent.Executor;
import pg.ak;
import pg.he;
import pg.ie;
import pg.jd;
import pg.je;
import pg.ke;
import pg.lj;
import pg.od;
import pg.pd;
import pg.ph;
import pg.rh;
import pg.t3;
import pg.th;
import pg.u3;
import pg.vd;
import pg.w3;
import pg.wj;
import pg.xj;
import pg.zj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends pj.f {

    /* renamed from: i  reason: collision with root package name */
    static boolean f657i = true;

    /* renamed from: d  reason: collision with root package name */
    private final o f659d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f660e;

    /* renamed from: f  reason: collision with root package name */
    private final zj f661f;

    /* renamed from: g  reason: collision with root package name */
    private final zj.d f662g;

    /* renamed from: j  reason: collision with root package name */
    private static final wj.d f658j = wj.d.b();

    /* renamed from: h  reason: collision with root package name */
    private static final pj.n f656h = new pj.n();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public d(pg.xj r3, ak.o r4, zj.d r5) {
        /*
            r2 = this;
            int r0 = r5.h()
            r1 = 8
            if (r0 == r1) goto L13
            int r0 = r5.h()
            r1 = 7
            if (r0 != r1) goto L10
            goto L13
        L10:
            pj.n r0 = ak.d.f656h
            goto L18
        L13:
            pj.n r0 = new pj.n
            r0.<init>()
        L18:
            r2.<init>(r0)
            r2.f660e = r3
            r2.f659d = r4
            pj.i r3 = pj.i.c()
            android.content.Context r3 = r3.b()
            pg.zj r3 = pg.zj.a(r3)
            r2.f661f = r3
            r2.f662g = r5
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ak.d.<init>(pg.xj, ak.o, zj.d):void");
    }

    private final void m(final ie ieVar, long j10, final vj.a aVar) {
        final long elapsedRealtime = SystemClock.elapsedRealtime() - j10;
        this.f660e.f(new wj() { // from class: ak.s
            @Override // pg.wj
            public final lj zza() {
                return d.this.j(elapsedRealtime, ieVar, aVar);
            }
        }, je.ON_DEVICE_TEXT_DETECT);
        u3 u3Var = new u3();
        u3Var.a(ieVar);
        u3Var.b(Boolean.valueOf(f657i));
        th thVar = new th();
        thVar.a(a.a(this.f662g.h()));
        u3Var.c(thVar.c());
        final w3 d10 = u3Var.d();
        final t tVar = new t(this);
        final je jeVar = je.AGGREGATED_ON_DEVICE_TEXT_DETECTION;
        Executor d11 = pj.g.d();
        final xj xjVar = this.f660e;
        d11.execute(new Runnable() { // from class: pg.vj
            @Override // java.lang.Runnable
            public final void run() {
                xj.this.h(jeVar, d10, elapsedRealtime, tVar);
            }
        });
        long currentTimeMillis = System.currentTimeMillis();
        this.f661f.c(this.f662g.e(), ieVar.zza(), currentTimeMillis - elapsedRealtime, currentTimeMillis);
    }

    @Override // pj.k
    public final synchronized void b() {
        this.f659d.zzb();
    }

    @Override // pj.k
    public final synchronized void d() {
        f657i = true;
        this.f659d.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ lj j(long j10, ie ieVar, vj.a aVar) {
        pd pdVar;
        he heVar;
        ph phVar = new ph();
        vd vdVar = new vd();
        vdVar.c(Long.valueOf(j10));
        vdVar.d(ieVar);
        vdVar.e(Boolean.valueOf(f657i));
        Boolean bool = Boolean.TRUE;
        vdVar.a(bool);
        vdVar.b(bool);
        phVar.d(vdVar.f());
        wj.d dVar = f658j;
        int c10 = dVar.c(aVar);
        int d10 = dVar.d(aVar);
        od odVar = new od();
        if (c10 != -1) {
            if (c10 != 35) {
                if (c10 != 842094169) {
                    if (c10 != 16) {
                        if (c10 != 17) {
                            pdVar = pd.UNKNOWN_FORMAT;
                        } else {
                            pdVar = pd.NV21;
                        }
                    } else {
                        pdVar = pd.NV16;
                    }
                } else {
                    pdVar = pd.YV12;
                }
            } else {
                pdVar = pd.YUV_420_888;
            }
        } else {
            pdVar = pd.BITMAP;
        }
        odVar.a(pdVar);
        odVar.b(Integer.valueOf(d10));
        phVar.c(odVar.d());
        th thVar = new th();
        thVar.a(a.a(this.f662g.h()));
        phVar.e(thVar.c());
        rh f10 = phVar.f();
        ke keVar = new ke();
        if (this.f662g.d()) {
            heVar = he.TYPE_THICK;
        } else {
            heVar = he.TYPE_THIN;
        }
        keVar.e(heVar);
        keVar.h(f10);
        return ak.e(keVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ lj k(w3 w3Var, int i10, jd jdVar) {
        he heVar;
        ke keVar = new ke();
        if (this.f662g.d()) {
            heVar = he.TYPE_THICK;
        } else {
            heVar = he.TYPE_THIN;
        }
        keVar.e(heVar);
        t3 t3Var = new t3();
        t3Var.a(Integer.valueOf(i10));
        t3Var.c(w3Var);
        t3Var.b(jdVar);
        keVar.d(t3Var.e());
        return ak.e(keVar);
    }

    @Override // pj.f
    /* renamed from: l */
    public final synchronized zj.a i(vj.a aVar) {
        ie ieVar;
        zj.a c10;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        try {
            c10 = this.f659d.c(aVar);
            m(ie.NO_ERROR, elapsedRealtime, aVar);
            f657i = false;
        } catch (lj.a e10) {
            if (e10.a() == 14) {
                ieVar = ie.MODEL_NOT_DOWNLOADED;
            } else {
                ieVar = ie.UNKNOWN_ERROR;
            }
            m(ieVar, elapsedRealtime, aVar);
            throw e10;
        }
        return c10;
    }
}
