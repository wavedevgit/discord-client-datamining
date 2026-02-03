package mg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class u0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f38683d;

    /* renamed from: e  reason: collision with root package name */
    int f38684e;

    /* renamed from: i  reason: collision with root package name */
    int f38685i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ y0 f38686o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ u0(y0 y0Var, t0 t0Var) {
        int i10;
        this.f38686o = y0Var;
        i10 = y0Var.f38823p;
        this.f38683d = i10;
        this.f38684e = y0Var.h();
        this.f38685i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f38686o.f38823p;
        if (i10 == this.f38683d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f38684e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f38684e;
            this.f38685i = i10;
            Object a10 = a(i10);
            this.f38684e = this.f38686o.i(this.f38684e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f38685i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f38683d += 32;
        int i10 = this.f38685i;
        y0 y0Var = this.f38686o;
        y0Var.remove(y0.j(y0Var, i10));
        this.f38684e--;
        this.f38685i = -1;
    }
}
