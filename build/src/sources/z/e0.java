package z;

import a0.j1;
import a0.q2;
import android.util.Pair;
import android.util.Size;
import android.view.Surface;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e0 implements j1 {

    /* renamed from: a  reason: collision with root package name */
    private final j1 f55374a;

    /* renamed from: b  reason: collision with root package name */
    private p0 f55375b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(j1 j1Var) {
        this.f55374a = j1Var;
    }

    public static /* synthetic */ void a(e0 e0Var, j1.a aVar, j1 j1Var) {
        e0Var.getClass();
        aVar.a(e0Var);
    }

    private androidx.camera.core.n j(androidx.camera.core.n nVar) {
        q2 a10;
        if (nVar == null) {
            return null;
        }
        if (this.f55375b == null) {
            a10 = q2.b();
        } else {
            a10 = q2.a(new Pair(this.f55375b.i(), this.f55375b.h().get(0)));
        }
        this.f55375b = null;
        return new androidx.camera.core.r(nVar, new Size(nVar.getWidth(), nVar.getHeight()), new e0.c(new n0.k(a10, nVar.z().a())));
    }

    @Override // a0.j1
    public androidx.camera.core.n b() {
        return j(this.f55374a.b());
    }

    @Override // a0.j1
    public int c() {
        return this.f55374a.c();
    }

    @Override // a0.j1
    public void close() {
        this.f55374a.close();
    }

    @Override // a0.j1
    public void d() {
        this.f55374a.d();
    }

    @Override // a0.j1
    public void e(final j1.a aVar, Executor executor) {
        this.f55374a.e(new j1.a() { // from class: z.d0
            @Override // a0.j1.a
            public final void a(j1 j1Var) {
                e0.a(e0.this, aVar, j1Var);
            }
        }, executor);
    }

    @Override // a0.j1
    public int f() {
        return this.f55374a.f();
    }

    @Override // a0.j1
    public androidx.camera.core.n g() {
        return j(this.f55374a.g());
    }

    @Override // a0.j1
    public int getHeight() {
        return this.f55374a.getHeight();
    }

    @Override // a0.j1
    public Surface getSurface() {
        return this.f55374a.getSurface();
    }

    @Override // a0.j1
    public int getWidth() {
        return this.f55374a.getWidth();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(p0 p0Var) {
        boolean z10;
        if (this.f55375b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "Pending request should be null");
        this.f55375b = p0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        this.f55375b = null;
    }
}
