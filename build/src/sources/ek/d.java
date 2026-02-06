package ek;

import android.os.SystemClock;
import java.util.concurrent.Executor;
import qg.ak;
import qg.he;
import qg.ie;
import qg.jd;
import qg.je;
import qg.ke;
import qg.lj;
import qg.od;
import qg.pd;
import qg.ph;
import qg.rh;
import qg.t3;
import qg.th;
import qg.u3;
import qg.vd;
import qg.w3;
import qg.wj;
import qg.xj;
import qg.zj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends tj.f {

    /* renamed from: i  reason: collision with root package name */
    static boolean f21590i = true;

    /* renamed from: d  reason: collision with root package name */
    private final o f21592d;

    /* renamed from: e  reason: collision with root package name */
    private final xj f21593e;

    /* renamed from: f  reason: collision with root package name */
    private final zj f21594f;

    /* renamed from: g  reason: collision with root package name */
    private final dk.d f21595g;

    /* renamed from: j  reason: collision with root package name */
    private static final ak.d f21591j = ak.d.b();

    /* renamed from: h  reason: collision with root package name */
    private static final tj.n f21589h = new tj.n();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public d(qg.xj r3, ek.o r4, dk.d r5) {
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
            tj.n r0 = ek.d.f21589h
            goto L18
        L13:
            tj.n r0 = new tj.n
            r0.<init>()
        L18:
            r2.<init>(r0)
            r2.f21593e = r3
            r2.f21592d = r4
            tj.i r3 = tj.i.c()
            android.content.Context r3 = r3.b()
            qg.zj r3 = qg.zj.a(r3)
            r2.f21594f = r3
            r2.f21595g = r5
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ek.d.<init>(qg.xj, ek.o, dk.d):void");
    }

    private final void m(final ie ieVar, long j10, final zj.a aVar) {
        final long elapsedRealtime = SystemClock.elapsedRealtime() - j10;
        this.f21593e.f(new wj() { // from class: ek.s
            @Override // qg.wj
            public final lj zza() {
                return d.this.j(elapsedRealtime, ieVar, aVar);
            }
        }, je.ON_DEVICE_TEXT_DETECT);
        u3 u3Var = new u3();
        u3Var.a(ieVar);
        u3Var.b(Boolean.valueOf(f21590i));
        th thVar = new th();
        thVar.a(a.a(this.f21595g.h()));
        u3Var.c(thVar.c());
        final w3 d10 = u3Var.d();
        final t tVar = new t(this);
        final je jeVar = je.AGGREGATED_ON_DEVICE_TEXT_DETECTION;
        Executor d11 = tj.g.d();
        final xj xjVar = this.f21593e;
        d11.execute(new Runnable() { // from class: qg.vj
            @Override // java.lang.Runnable
            public final void run() {
                xj.this.h(jeVar, d10, elapsedRealtime, tVar);
            }
        });
        long currentTimeMillis = System.currentTimeMillis();
        this.f21594f.c(this.f21595g.e(), ieVar.zza(), currentTimeMillis - elapsedRealtime, currentTimeMillis);
    }

    @Override // tj.k
    public final synchronized void b() {
        this.f21592d.zzb();
    }

    @Override // tj.k
    public final synchronized void d() {
        f21590i = true;
        this.f21592d.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ lj j(long j10, ie ieVar, zj.a aVar) {
        pd pdVar;
        he heVar;
        ph phVar = new ph();
        vd vdVar = new vd();
        vdVar.c(Long.valueOf(j10));
        vdVar.d(ieVar);
        vdVar.e(Boolean.valueOf(f21590i));
        Boolean bool = Boolean.TRUE;
        vdVar.a(bool);
        vdVar.b(bool);
        phVar.d(vdVar.f());
        ak.d dVar = f21591j;
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
        thVar.a(a.a(this.f21595g.h()));
        phVar.e(thVar.c());
        rh f10 = phVar.f();
        ke keVar = new ke();
        if (this.f21595g.d()) {
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
        if (this.f21595g.d()) {
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

    @Override // tj.f
    /* renamed from: l */
    public final synchronized dk.a i(zj.a aVar) {
        ie ieVar;
        dk.a c10;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        try {
            c10 = this.f21592d.c(aVar);
            m(ie.NO_ERROR, elapsedRealtime, aVar);
            f21590i = false;
        } catch (pj.a e10) {
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
