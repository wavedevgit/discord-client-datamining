package ck;

import android.os.SystemClock;
import gf.q;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import pg.ba;
import pg.ca;
import pg.da;
import pg.e9;
import pg.ea;
import pg.ed;
import pg.n2;
import pg.o2;
import pg.o9;
import pg.od;
import pg.p9;
import pg.q2;
import pg.qd;
import pg.sd;
import pg.t9;
import pg.td;
import pg.ua;
import pg.wa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends tj.f {

    /* renamed from: j  reason: collision with root package name */
    static final AtomicBoolean f7484j = new AtomicBoolean(true);

    /* renamed from: k  reason: collision with root package name */
    private static final ak.d f7485k = ak.d.b();

    /* renamed from: d  reason: collision with root package name */
    private final bk.e f7486d;

    /* renamed from: e  reason: collision with root package name */
    private final qd f7487e;

    /* renamed from: f  reason: collision with root package name */
    private final sd f7488f;

    /* renamed from: g  reason: collision with root package name */
    private final c f7489g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f7490h;

    /* renamed from: i  reason: collision with root package name */
    private final ak.a f7491i = new ak.a();

    public i(qd qdVar, bk.e eVar, c cVar) {
        q.m(eVar, "FaceDetectorOptions can not be null");
        this.f7486d = eVar;
        this.f7487e = qdVar;
        this.f7489g = cVar;
        this.f7488f = sd.a(tj.i.c().b());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void m(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            ((bk.a) it.next()).g(-1);
        }
    }

    private final synchronized void n(final ca caVar, long j10, final zj.a aVar, final int i10, final int i11) {
        int i12;
        final long elapsedRealtime = SystemClock.elapsedRealtime() - j10;
        this.f7487e.f(new od() { // from class: ck.g
            @Override // pg.od
            public final ed zza() {
                return i.this.j(elapsedRealtime, caVar, i10, i11, aVar);
            }
        }, da.ON_DEVICE_FACE_DETECT);
        o2 o2Var = new o2();
        o2Var.c(caVar);
        o2Var.d(Boolean.valueOf(f7484j.get()));
        o2Var.a(Integer.valueOf(i10));
        o2Var.e(Integer.valueOf(i11));
        o2Var.b(k.a(this.f7486d));
        final q2 f10 = o2Var.f();
        final h hVar = new h(this);
        final qd qdVar = this.f7487e;
        final da daVar = da.AGGREGATED_ON_DEVICE_FACE_DETECTION;
        tj.g.d().execute(new Runnable(daVar, f10, elapsedRealtime, hVar, null) { // from class: pg.ld

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ da f44496e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ Object f44497i;

            /* renamed from: o  reason: collision with root package name */
            public final /* synthetic */ long f44498o;

            /* renamed from: p  reason: collision with root package name */
            public final /* synthetic */ ck.h f44499p;

            @Override // java.lang.Runnable
            public final void run() {
                qd.this.h(this.f44496e, this.f44497i, this.f44498o, this.f44499p);
            }
        });
        long currentTimeMillis = System.currentTimeMillis();
        boolean z10 = this.f7490h;
        long j11 = currentTimeMillis - elapsedRealtime;
        sd sdVar = this.f7488f;
        if (true != z10) {
            i12 = 24303;
        } else {
            i12 = 24304;
        }
        sdVar.c(i12, caVar.zza(), j11, currentTimeMillis);
    }

    @Override // tj.k
    public final synchronized void b() {
        this.f7490h = this.f7489g.b();
    }

    @Override // tj.k
    public final synchronized void d() {
        ba baVar;
        try {
            this.f7489g.zzb();
            f7484j.set(true);
            qd qdVar = this.f7487e;
            ea eaVar = new ea();
            if (this.f7490h) {
                baVar = ba.TYPE_THICK;
            } else {
                baVar = ba.TYPE_THIN;
            }
            eaVar.e(baVar);
            qdVar.d(td.e(eaVar), da.ON_DEVICE_FACE_CLOSE);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ ed j(long j10, ca caVar, int i10, int i11, zj.a aVar) {
        p9 p9Var;
        ba baVar;
        ua uaVar = new ua();
        t9 t9Var = new t9();
        t9Var.c(Long.valueOf(j10));
        t9Var.d(caVar);
        t9Var.e(Boolean.valueOf(f7484j.get()));
        Boolean bool = Boolean.TRUE;
        t9Var.a(bool);
        t9Var.b(bool);
        uaVar.g(t9Var.f());
        uaVar.e(k.a(this.f7486d));
        uaVar.d(Integer.valueOf(i10));
        uaVar.h(Integer.valueOf(i11));
        ak.d dVar = f7485k;
        int c10 = dVar.c(aVar);
        int d10 = dVar.d(aVar);
        o9 o9Var = new o9();
        if (c10 != -1) {
            if (c10 != 35) {
                if (c10 != 842094169) {
                    if (c10 != 16) {
                        if (c10 != 17) {
                            p9Var = p9.UNKNOWN_FORMAT;
                        } else {
                            p9Var = p9.NV21;
                        }
                    } else {
                        p9Var = p9.NV16;
                    }
                } else {
                    p9Var = p9.YV12;
                }
            } else {
                p9Var = p9.YUV_420_888;
            }
        } else {
            p9Var = p9.BITMAP;
        }
        o9Var.a(p9Var);
        o9Var.b(Integer.valueOf(d10));
        uaVar.f(o9Var.d());
        wa i12 = uaVar.i();
        ea eaVar = new ea();
        if (this.f7490h) {
            baVar = ba.TYPE_THICK;
        } else {
            baVar = ba.TYPE_THIN;
        }
        eaVar.e(baVar);
        eaVar.g(i12);
        return td.e(eaVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ ed k(q2 q2Var, int i10, e9 e9Var) {
        ba baVar;
        ea eaVar = new ea();
        if (this.f7490h) {
            baVar = ba.TYPE_THICK;
        } else {
            baVar = ba.TYPE_THIN;
        }
        eaVar.e(baVar);
        n2 n2Var = new n2();
        n2Var.a(Integer.valueOf(i10));
        n2Var.c(q2Var);
        n2Var.b(e9Var);
        eaVar.d(n2Var.e());
        return td.e(eaVar);
    }

    /* JADX WARN: Code restructure failed: missing block: B:16:0x0033, code lost:
        r6 = (java.util.List) gf.q.l(r0);
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:44:0x0106  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x0108 A[Catch: all -> 0x002b, a -> 0x002e, Merged into TryCatch #1 {all -> 0x002b, a -> 0x002e, blocks: (B:4:0x0005, B:5:0x000e, B:9:0x0021, B:10:0x002a, B:16:0x0033, B:42:0x0102, B:50:0x0118, B:49:0x0112, B:45:0x0108, B:19:0x0041, B:20:0x0048, B:21:0x0051, B:23:0x0057, B:24:0x0062, B:26:0x0068, B:28:0x0074, B:30:0x007a, B:32:0x0088, B:34:0x00d9, B:36:0x00e4, B:39:0x00f1, B:41:0x00fa, B:53:0x0123, B:55:0x012b, B:58:0x0132, B:59:0x013b, B:57:0x012f), top: B:63:0x0005 }] */
    /* JADX WARN: Removed duplicated region for block: B:47:0x010e  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0112 A[Catch: all -> 0x002b, a -> 0x002e, Merged into TryCatch #1 {all -> 0x002b, a -> 0x002e, blocks: (B:4:0x0005, B:5:0x000e, B:9:0x0021, B:10:0x002a, B:16:0x0033, B:42:0x0102, B:50:0x0118, B:49:0x0112, B:45:0x0108, B:19:0x0041, B:20:0x0048, B:21:0x0051, B:23:0x0057, B:24:0x0062, B:26:0x0068, B:28:0x0074, B:30:0x007a, B:32:0x0088, B:34:0x00d9, B:36:0x00e4, B:39:0x00f1, B:41:0x00fa, B:53:0x0123, B:55:0x012b, B:58:0x0132, B:59:0x013b, B:57:0x012f), top: B:63:0x0005 }] */
    /* JADX WARN: Type inference failed for: r6v3, types: [java.util.List] */
    /* JADX WARN: Type inference failed for: r6v9, types: [java.util.List] */
    @Override // tj.f
    /* renamed from: l */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final synchronized java.util.List i(zj.a r20) {
        /*
            Method dump skipped, instructions count: 318
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ck.i.i(zj.a):java.util.List");
    }
}
