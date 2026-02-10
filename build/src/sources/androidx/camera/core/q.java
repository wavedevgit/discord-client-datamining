package androidx.camera.core;

import a0.j1;
import android.view.Surface;
import androidx.camera.core.e;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements j1 {

    /* renamed from: d  reason: collision with root package name */
    private final j1 f2184d;

    /* renamed from: e  reason: collision with root package name */
    private final Surface f2185e;

    /* renamed from: f  reason: collision with root package name */
    private e.a f2186f;

    /* renamed from: a  reason: collision with root package name */
    private final Object f2181a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private int f2182b = 0;

    /* renamed from: c  reason: collision with root package name */
    private boolean f2183c = false;

    /* renamed from: g  reason: collision with root package name */
    private final e.a f2187g = new e.a() { // from class: x.k1
        @Override // androidx.camera.core.e.a
        public final void a(androidx.camera.core.n nVar) {
            androidx.camera.core.q.h(androidx.camera.core.q.this, nVar);
        }
    };

    public q(j1 j1Var) {
        this.f2184d = j1Var;
        this.f2185e = j1Var.getSurface();
    }

    public static /* synthetic */ void a(q qVar, j1.a aVar, j1 j1Var) {
        qVar.getClass();
        aVar.a(qVar);
    }

    public static /* synthetic */ void h(q qVar, n nVar) {
        e.a aVar;
        synchronized (qVar.f2181a) {
            try {
                int i10 = qVar.f2182b - 1;
                qVar.f2182b = i10;
                if (qVar.f2183c && i10 == 0) {
                    qVar.close();
                }
                aVar = qVar.f2186f;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (aVar != null) {
            aVar.a(nVar);
        }
    }

    private n l(n nVar) {
        if (nVar != null) {
            this.f2182b++;
            s sVar = new s(nVar);
            sVar.a(this.f2187g);
            return sVar;
        }
        return null;
    }

    @Override // a0.j1
    public n b() {
        n l10;
        synchronized (this.f2181a) {
            l10 = l(this.f2184d.b());
        }
        return l10;
    }

    @Override // a0.j1
    public int c() {
        int c10;
        synchronized (this.f2181a) {
            c10 = this.f2184d.c();
        }
        return c10;
    }

    @Override // a0.j1
    public void close() {
        synchronized (this.f2181a) {
            try {
                Surface surface = this.f2185e;
                if (surface != null) {
                    surface.release();
                }
                this.f2184d.close();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.j1
    public void d() {
        synchronized (this.f2181a) {
            this.f2184d.d();
        }
    }

    @Override // a0.j1
    public void e(final j1.a aVar, Executor executor) {
        synchronized (this.f2181a) {
            this.f2184d.e(new j1.a() { // from class: x.j1
                @Override // a0.j1.a
                public final void a(a0.j1 j1Var) {
                    androidx.camera.core.q.a(androidx.camera.core.q.this, aVar, j1Var);
                }
            }, executor);
        }
    }

    @Override // a0.j1
    public int f() {
        int f10;
        synchronized (this.f2181a) {
            f10 = this.f2184d.f();
        }
        return f10;
    }

    @Override // a0.j1
    public n g() {
        n l10;
        synchronized (this.f2181a) {
            l10 = l(this.f2184d.g());
        }
        return l10;
    }

    @Override // a0.j1
    public int getHeight() {
        int height;
        synchronized (this.f2181a) {
            height = this.f2184d.getHeight();
        }
        return height;
    }

    @Override // a0.j1
    public Surface getSurface() {
        Surface surface;
        synchronized (this.f2181a) {
            surface = this.f2184d.getSurface();
        }
        return surface;
    }

    @Override // a0.j1
    public int getWidth() {
        int width;
        synchronized (this.f2181a) {
            width = this.f2184d.getWidth();
        }
        return width;
    }

    public int i() {
        int f10;
        synchronized (this.f2181a) {
            f10 = this.f2184d.f() - this.f2182b;
        }
        return f10;
    }

    public void j() {
        synchronized (this.f2181a) {
            try {
                this.f2183c = true;
                this.f2184d.d();
                if (this.f2182b == 0) {
                    close();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void k(e.a aVar) {
        synchronized (this.f2181a) {
            this.f2186f = aVar;
        }
    }
}
