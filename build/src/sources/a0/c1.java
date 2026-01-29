package a0;

import a0.i2;
import android.graphics.Rect;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
import x.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c1 implements a0 {

    /* renamed from: b  reason: collision with root package name */
    private final a0 f23b;

    public c1(a0 a0Var) {
        this.f23b = a0Var;
    }

    @Override // x.j
    public ListenableFuture a(boolean z10) {
        return this.f23b.a(z10);
    }

    @Override // a0.a0
    public void b(i2.b bVar) {
        this.f23b.b(bVar);
    }

    @Override // a0.a0
    public ListenableFuture c(List list, int i10, int i11) {
        return this.f23b.c(list, i10, i11);
    }

    @Override // a0.a0
    public Rect d() {
        return this.f23b.d();
    }

    @Override // a0.a0
    public void e(n0.i iVar) {
        this.f23b.e(iVar);
    }

    @Override // a0.a0
    public void f(int i10) {
        this.f23b.f(i10);
    }

    @Override // a0.a0
    public r0 g() {
        return this.f23b.g();
    }

    @Override // x.j
    public ListenableFuture h(x.b0 b0Var) {
        return this.f23b.h(b0Var);
    }

    @Override // a0.a0
    public ListenableFuture i(int i10, int i11) {
        return this.f23b.i(i10, i11);
    }

    @Override // a0.a0
    public void j() {
        this.f23b.j();
    }

    @Override // a0.a0
    public void k(r0 r0Var) {
        this.f23b.k(r0Var);
    }
}
