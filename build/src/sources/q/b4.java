package q;

import a0.i2;
import a0.y2;
import android.graphics.SurfaceTexture;
import android.util.Size;
import android.view.Surface;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b4 {

    /* renamed from: a  reason: collision with root package name */
    private a0.w0 f46257a;

    /* renamed from: b  reason: collision with root package name */
    private a0.i2 f46258b;

    /* renamed from: d  reason: collision with root package name */
    private final Size f46260d;

    /* renamed from: f  reason: collision with root package name */
    private final c f46262f;

    /* renamed from: e  reason: collision with root package name */
    private final u.x f46261e = new u.x();

    /* renamed from: g  reason: collision with root package name */
    private i2.c f46263g = null;

    /* renamed from: c  reason: collision with root package name */
    private final b f46259c = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Surface f46264a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ SurfaceTexture f46265b;

        a(Surface surface, SurfaceTexture surfaceTexture) {
            this.f46264a = surface;
            this.f46265b = surfaceTexture;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r12) {
            this.f46264a.release();
            this.f46265b.release();
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            throw new IllegalStateException("Future should never fail. Did it get completed by GC?", th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements a0.x2 {
        private final a0.r0 I;

        b() {
            a0.r1 Z = a0.r1.Z();
            Z.V(a0.x2.f319v, new g2());
            Z.V(a0.h1.f76h, 34);
            W(Z);
            this.I = Z;
        }

        private void W(a0.r1 r1Var) {
            r1Var.V(e0.m.G, b4.class);
            r1Var.V(e0.m.F, b4.class.getCanonicalName() + "-" + UUID.randomUUID());
        }

        @Override // a0.x2
        public y2.b L() {
            return y2.b.METERING_REPEATING;
        }

        @Override // a0.e2
        public a0.r0 getConfig() {
            return this.I;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        void a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b4(r.a0 a0Var, e3 e3Var, c cVar) {
        this.f46262f = cVar;
        Size g10 = g(a0Var, e3Var);
        this.f46260d = g10;
        x.y0.a("MeteringRepeating", "MeteringSession SurfaceTexture size: " + g10);
        this.f46258b = d();
    }

    public static /* synthetic */ void a(b4 b4Var, a0.i2 i2Var, i2.g gVar) {
        b4Var.f46258b = b4Var.d();
        c cVar = b4Var.f46262f;
        if (cVar != null) {
            cVar.a();
        }
    }

    private Size g(r.a0 a0Var, e3 e3Var) {
        Size[] c10 = a0Var.b().c(34);
        if (c10 == null) {
            x.y0.c("MeteringRepeating", "Can not get output size list.");
            return new Size(0, 0);
        }
        Size[] a10 = this.f46261e.a(c10);
        List asList = Arrays.asList(a10);
        Collections.sort(asList, new Comparator() { // from class: q.a4
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int signum;
                Size size = (Size) obj;
                Size size2 = (Size) obj2;
                signum = Long.signum((size.getWidth() * size.getHeight()) - (size2.getWidth() * size2.getHeight()));
                return signum;
            }
        });
        Size f10 = e3Var.f();
        long min = Math.min(f10.getWidth() * f10.getHeight(), 307200L);
        int length = a10.length;
        Size size = null;
        int i10 = 0;
        while (true) {
            if (i10 >= length) {
                break;
            }
            Size size2 = a10[i10];
            int i11 = ((size2.getWidth() * size2.getHeight()) > min ? 1 : ((size2.getWidth() * size2.getHeight()) == min ? 0 : -1));
            if (i11 == 0) {
                return size2;
            }
            if (i11 > 0) {
                if (size != null) {
                    return size;
                }
            } else {
                i10++;
                size = size2;
            }
        }
        return (Size) asList.get(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        x.y0.a("MeteringRepeating", "MeteringRepeating clear!");
        a0.w0 w0Var = this.f46257a;
        if (w0Var != null) {
            w0Var.d();
        }
        this.f46257a = null;
    }

    a0.i2 d() {
        SurfaceTexture surfaceTexture = new SurfaceTexture(0);
        surfaceTexture.setDefaultBufferSize(this.f46260d.getWidth(), this.f46260d.getHeight());
        Surface surface = new Surface(surfaceTexture);
        i2.b p10 = i2.b.p(this.f46259c, this.f46260d);
        p10.x(1);
        a0.k1 k1Var = new a0.k1(surface);
        this.f46257a = k1Var;
        d0.n.j(k1Var.k(), new a(surface, surfaceTexture), c0.a.a());
        p10.l(this.f46257a);
        i2.c cVar = this.f46263g;
        if (cVar != null) {
            cVar.b();
        }
        i2.c cVar2 = new i2.c(new i2.d() { // from class: q.z3
            @Override // a0.i2.d
            public final void a(a0.i2 i2Var, i2.g gVar) {
                b4.a(b4.this, i2Var, gVar);
            }
        });
        this.f46263g = cVar2;
        p10.r(cVar2);
        return p10.o();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Size e() {
        return this.f46260d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String f() {
        return "MeteringRepeating";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0.i2 h() {
        return this.f46258b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0.x2 i() {
        return this.f46259c;
    }
}
