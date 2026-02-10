package hk;

import android.os.SystemClock;
import java.util.concurrent.Executor;
import rg.ak;
import rg.he;
import rg.ie;
import rg.jd;
import rg.je;
import rg.ke;
import rg.lj;
import rg.od;
import rg.pd;
import rg.ph;
import rg.rh;
import rg.t3;
import rg.th;
import rg.u3;
import rg.vd;
import rg.w3;
import rg.wj;
import rg.xj;
import rg.zj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends wj.f {

    /* renamed from: i  reason: collision with root package name */
    static boolean f27378i = true;

    /* renamed from: d  reason: collision with root package name */
    private final o f27380d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f27381e;

    /* renamed from: f  reason: collision with root package name */
    private final zj f27382f;

    /* renamed from: g  reason: collision with root package name */
    private final gk.d f27383g;

    /* renamed from: j  reason: collision with root package name */
    private static final dk.d f27379j = dk.d.b();

    /* renamed from: h  reason: collision with root package name */
    private static final wj.n f27377h = new wj.n();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public d(rg.xj r3, hk.o r4, gk.d r5) {
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
            wj.n r0 = hk.d.f27377h
            goto L18
        L13:
            wj.n r0 = new wj.n
            r0.<init>()
        L18:
            r2.<init>(r0)
            r2.f27381e = r3
            r2.f27380d = r4
            wj.i r3 = wj.i.c()
            android.content.Context r3 = r3.b()
            rg.zj r3 = rg.zj.a(r3)
            r2.f27382f = r3
            r2.f27383g = r5
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: hk.d.<init>(rg.xj, hk.o, gk.d):void");
    }

    private final void m(final ie ieVar, long j10, final ck.a aVar) {
        final long elapsedRealtime = SystemClock.elapsedRealtime() - j10;
        this.f27381e.f(new wj() { // from class: hk.s
            @Override // rg.wj
            public final lj zza() {
                return d.this.j(elapsedRealtime, ieVar, aVar);
            }
        }, je.ON_DEVICE_TEXT_DETECT);
        u3 u3Var = new u3();
        u3Var.a(ieVar);
        u3Var.b(Boolean.valueOf(f27378i));
        th thVar = new th();
        thVar.a(a.a(this.f27383g.h()));
        u3Var.c(thVar.c());
        final w3 d10 = u3Var.d();
        final t tVar = new t(this);
        final je jeVar = je.AGGREGATED_ON_DEVICE_TEXT_DETECTION;
        Executor d11 = wj.g.d();
        final xj xjVar = this.f27381e;
        d11.execute(new Runnable() { // from class: rg.vj
            @Override // java.lang.Runnable
            public final void run() {
                xj.this.h(jeVar, d10, elapsedRealtime, tVar);
            }
        });
        long currentTimeMillis = System.currentTimeMillis();
        this.f27382f.c(this.f27383g.e(), ieVar.zza(), currentTimeMillis - elapsedRealtime, currentTimeMillis);
    }

    @Override // wj.k
    public final synchronized void b() {
        this.f27380d.zzb();
    }

    @Override // wj.k
    public final synchronized void d() {
        f27378i = true;
        this.f27380d.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ lj j(long j10, ie ieVar, ck.a aVar) {
        pd pdVar;
        he heVar;
        ph phVar = new ph();
        vd vdVar = new vd();
        vdVar.c(Long.valueOf(j10));
        vdVar.d(ieVar);
        vdVar.e(Boolean.valueOf(f27378i));
        Boolean bool = Boolean.TRUE;
        vdVar.a(bool);
        vdVar.b(bool);
        phVar.d(vdVar.f());
        dk.d dVar = f27379j;
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
        thVar.a(a.a(this.f27383g.h()));
        phVar.e(thVar.c());
        rh f10 = phVar.f();
        ke keVar = new ke();
        if (this.f27383g.d()) {
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
        if (this.f27383g.d()) {
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

    @Override // wj.f
    /* renamed from: l */
    public final synchronized gk.a i(ck.a aVar) {
        ie ieVar;
        gk.a c10;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        try {
            c10 = this.f27380d.c(aVar);
            m(ie.NO_ERROR, elapsedRealtime, aVar);
            f27378i = false;
        } catch (sj.a e10) {
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
