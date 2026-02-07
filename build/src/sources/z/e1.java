package z;

import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.Rect;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Executor;
import x.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e1 {

    /* renamed from: a  reason: collision with root package name */
    private int f55741a = new h0.a().a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface a {
        void b(e1 e1Var);
    }

    public static /* synthetic */ void a(e1 e1Var, x.o0 o0Var) {
        e1Var.j();
        if (e1Var.l() != null) {
            n0.f l10 = e1Var.l();
            Objects.requireNonNull(l10);
            l10.e(o0Var);
            return;
        }
        throw new IllegalStateException("One and only one callback is allowed.");
    }

    public static /* synthetic */ void b(e1 e1Var, n0.h hVar) {
        n0.f l10 = e1Var.l();
        Objects.requireNonNull(l10);
        Objects.requireNonNull(hVar);
        l10.d(hVar);
    }

    public static /* synthetic */ void c(e1 e1Var, androidx.camera.core.n nVar) {
        e1Var.j();
        throw null;
    }

    public static /* synthetic */ void d(e1 e1Var, Bitmap bitmap) {
        if (e1Var.l() != null) {
            e1Var.l().b(bitmap);
        } else {
            e1Var.j();
        }
    }

    public static /* synthetic */ void e(e1 e1Var, int i10) {
        if (e1Var.l() != null) {
            e1Var.l().a(i10);
        } else {
            e1Var.j();
        }
    }

    public static e1 q(Executor executor, n0.e eVar, n0.f fVar, n0.g gVar, Rect rect, Matrix matrix, int i10, int i11, int i12, List list) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13 = false;
        if (fVar == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (gVar == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 == z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        b2.e.b(z12, "onDiskCallback and outputFileOptions should be both null or both non-null.");
        if (fVar == null) {
            z13 = true;
        }
        b2.e.b(!z13, "One and only one on-disk or in-memory callback should be present.");
        return new h(executor, eVar, fVar, gVar, rect, matrix, i10, i11, i12, list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f() {
        b0.p.a();
        int i10 = this.f55741a;
        if (i10 > 0) {
            this.f55741a = i10 - 1;
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Executor g();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int h();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Rect i();

    public abstract n0.e j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int k();

    public abstract n0.f l();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract n0.g m();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int n();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Matrix o();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract List p();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(final int i10) {
        g().execute(new Runnable() { // from class: z.c1
            @Override // java.lang.Runnable
            public final void run() {
                e1.e(e1.this, i10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(final x.o0 o0Var) {
        g().execute(new Runnable() { // from class: z.d1
            @Override // java.lang.Runnable
            public final void run() {
                e1.a(e1.this, o0Var);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(final Bitmap bitmap) {
        g().execute(new Runnable() { // from class: z.a1
            @Override // java.lang.Runnable
            public final void run() {
                e1.d(e1.this, bitmap);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(final androidx.camera.core.n nVar) {
        g().execute(new Runnable() { // from class: z.z0
            @Override // java.lang.Runnable
            public final void run() {
                e1.c(e1.this, nVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(final n0.h hVar) {
        g().execute(new Runnable() { // from class: z.b1
            @Override // java.lang.Runnable
            public final void run() {
                e1.b(e1.this, hVar);
            }
        });
    }
}
