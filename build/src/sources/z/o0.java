package z;

import a0.d2;
import android.graphics.Bitmap;
import androidx.camera.core.internal.compat.quirk.IncorrectJpegMetadataQuirk;
import androidx.camera.core.internal.compat.quirk.LowMemoryQuirk;
import androidx.core.util.Consumer;
import java.util.Objects;
import java.util.concurrent.Executor;
import x.n0;
import z.a0;
import z.i;
import z.o0;
import z.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o0 {

    /* renamed from: a  reason: collision with root package name */
    final Executor f55140a;

    /* renamed from: b  reason: collision with root package name */
    final j0.w f55141b;

    /* renamed from: c  reason: collision with root package name */
    private a f55142c;

    /* renamed from: d  reason: collision with root package name */
    private j0.y f55143d;

    /* renamed from: e  reason: collision with root package name */
    private j0.y f55144e;

    /* renamed from: f  reason: collision with root package name */
    private j0.y f55145f;

    /* renamed from: g  reason: collision with root package name */
    private j0.y f55146g;

    /* renamed from: h  reason: collision with root package name */
    private j0.y f55147h;

    /* renamed from: i  reason: collision with root package name */
    private j0.y f55148i;

    /* renamed from: j  reason: collision with root package name */
    private j0.y f55149j;

    /* renamed from: k  reason: collision with root package name */
    private j0.y f55150k;

    /* renamed from: l  reason: collision with root package name */
    private j0.y f55151l;

    /* renamed from: m  reason: collision with root package name */
    private final d2 f55152m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f55153n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static a e(int i10, int i11) {
            return new e(new j0.u(), new j0.u(), i10, i11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract j0.u a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int b();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int c();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract j0.u d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static b c(p0 p0Var, androidx.camera.core.n nVar) {
            return new f(p0Var, nVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract androidx.camera.core.n a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract p0 b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(Executor executor, j0.w wVar) {
        this(executor, wVar, androidx.camera.core.internal.compat.quirk.a.c());
    }

    public static /* synthetic */ void b(final o0 o0Var, final b bVar) {
        o0Var.getClass();
        if (bVar.b().j()) {
            bVar.a().close();
        } else {
            o0Var.f55140a.execute(new Runnable() { // from class: z.h0
                @Override // java.lang.Runnable
                public final void run() {
                    o0.this.k(bVar);
                }
            });
        }
    }

    public static /* synthetic */ void d(final o0 o0Var, final b bVar) {
        o0Var.getClass();
        if (bVar.b().j()) {
            x.y0.l("ProcessingNode", "The postview image is closed due to request aborted");
            bVar.a().close();
            return;
        }
        o0Var.f55140a.execute(new Runnable() { // from class: z.g0
            @Override // java.lang.Runnable
            public final void run() {
                o0.this.m(bVar);
            }
        });
    }

    private j0.z i(j0.z zVar, int i10) {
        b2.e.i(i0.b.i(zVar.e()));
        j0.z zVar2 = (j0.z) this.f55147h.apply(zVar);
        j0.y yVar = this.f55151l;
        if (yVar != null) {
            zVar2 = (j0.z) yVar.apply(zVar2);
        }
        return (j0.z) this.f55145f.apply(i.b.c(zVar2, i10));
    }

    private static void o(final p0 p0Var, final x.o0 o0Var) {
        c0.a.d().execute(new Runnable() { // from class: z.l0
            @Override // java.lang.Runnable
            public final void run() {
                p0.this.s(o0Var);
            }
        });
    }

    androidx.camera.core.n j(b bVar) {
        p0 b10 = bVar.b();
        j0.z zVar = (j0.z) this.f55143d.apply(bVar);
        if ((zVar.e() == 35 || this.f55151l != null || this.f55153n) && this.f55142c.c() == 256) {
            j0.z zVar2 = (j0.z) this.f55144e.apply(w.a.c(zVar, b10.c()));
            if (this.f55151l != null) {
                zVar2 = i(zVar2, b10.c());
            }
            zVar = (j0.z) this.f55149j.apply(zVar2);
        }
        return (androidx.camera.core.n) this.f55148i.apply(zVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(b bVar) {
        final p0 b10 = bVar.b();
        try {
            if (bVar.b().k()) {
                final androidx.camera.core.n j10 = j(bVar);
                c0.a.d().execute(new Runnable() { // from class: z.i0
                    @Override // java.lang.Runnable
                    public final void run() {
                        p0.this.o(j10);
                    }
                });
                return;
            }
            final n0.h l10 = l(bVar);
            c0.a.d().execute(new Runnable() { // from class: z.j0
                @Override // java.lang.Runnable
                public final void run() {
                    p0.this.p(l10);
                }
            });
        } catch (OutOfMemoryError e10) {
            o(b10, new x.o0(0, "Processing failed due to low memory.", e10));
        } catch (RuntimeException e11) {
            o(b10, new x.o0(0, "Processing failed.", e11));
        } catch (x.o0 e12) {
            o(b10, e12);
        }
    }

    n0.h l(b bVar) {
        int c10 = this.f55142c.c();
        b2.e.b(i0.b.i(c10), String.format("On-disk capture only support JPEG and JPEG/R output formats. Output format: %s", Integer.valueOf(c10)));
        p0 b10 = bVar.b();
        j0.z zVar = (j0.z) this.f55144e.apply(w.a.c((j0.z) this.f55143d.apply(bVar), b10.c()));
        if (zVar.i() || this.f55151l != null) {
            zVar = i(zVar, b10.c());
        }
        j0.y yVar = this.f55146g;
        n0.g d10 = b10.d();
        Objects.requireNonNull(d10);
        return (n0.h) yVar.apply(a0.a.c(zVar, d10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(b bVar) {
        boolean z10;
        int c10 = this.f55142c.c();
        if (c10 != 35 && c10 != 256) {
            z10 = false;
        } else {
            z10 = true;
        }
        b2.e.b(z10, String.format("Postview only support YUV and JPEG output formats. Output format: %s", Integer.valueOf(c10)));
        final p0 b10 = bVar.b();
        try {
            final Bitmap bitmap = (Bitmap) this.f55150k.apply((j0.z) this.f55143d.apply(bVar));
            c0.a.d().execute(new Runnable() { // from class: z.k0
                @Override // java.lang.Runnable
                public final void run() {
                    p0.this.r(bitmap);
                }
            });
        } catch (Exception e10) {
            bVar.a().close();
            x.y0.d("ProcessingNode", "process postview input packet failed.", e10);
        }
    }

    public Void p(a aVar) {
        this.f55142c = aVar;
        aVar.a().a(new Consumer() { // from class: z.m0
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o0.b(o0.this, (o0.b) obj);
            }
        });
        aVar.d().a(new Consumer() { // from class: z.n0
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                o0.d(o0.this, (o0.b) obj);
            }
        });
        this.f55143d = new f0();
        this.f55144e = new w(this.f55152m);
        this.f55147h = new z();
        this.f55145f = new i();
        this.f55146g = new a0();
        this.f55148i = new c0();
        this.f55150k = new v();
        if (aVar.b() == 35 || this.f55153n) {
            this.f55149j = new b0();
            return null;
        }
        return null;
    }

    o0(Executor executor, j0.w wVar, d2 d2Var) {
        if (androidx.camera.core.internal.compat.quirk.a.b(LowMemoryQuirk.class) != null) {
            this.f55140a = c0.a.f(executor);
        } else {
            this.f55140a = executor;
        }
        this.f55141b = wVar;
        this.f55152m = d2Var;
        this.f55153n = d2Var.a(IncorrectJpegMetadataQuirk.class);
    }

    public void n() {
    }
}
