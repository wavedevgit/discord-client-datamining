package mg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class u0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f38687d;

    /* renamed from: e  reason: collision with root package name */
    int f38688e;

    /* renamed from: i  reason: collision with root package name */
    int f38689i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ y0 f38690o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ u0(y0 y0Var, t0 t0Var) {
        int i10;
        this.f38690o = y0Var;
        i10 = y0Var.f38827p;
        this.f38687d = i10;
        this.f38688e = y0Var.h();
        this.f38689i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f38690o.f38827p;
        if (i10 == this.f38687d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f38688e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f38688e;
            this.f38689i = i10;
            Object a10 = a(i10);
            this.f38688e = this.f38690o.i(this.f38688e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f38689i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f38687d += 32;
        int i10 = this.f38689i;
        y0 y0Var = this.f38690o;
        y0Var.remove(y0.j(y0Var, i10));
        this.f38688e--;
        this.f38689i = -1;
    }
}
