package mg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class u0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f38480d;

    /* renamed from: e  reason: collision with root package name */
    int f38481e;

    /* renamed from: i  reason: collision with root package name */
    int f38482i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ y0 f38483o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ u0(y0 y0Var, t0 t0Var) {
        int i10;
        this.f38483o = y0Var;
        i10 = y0Var.f38620p;
        this.f38480d = i10;
        this.f38481e = y0Var.h();
        this.f38482i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f38483o.f38620p;
        if (i10 == this.f38480d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f38481e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f38481e;
            this.f38482i = i10;
            Object a10 = a(i10);
            this.f38481e = this.f38483o.i(this.f38481e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f38482i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f38480d += 32;
        int i10 = this.f38482i;
        y0 y0Var = this.f38483o;
        y0Var.remove(y0.j(y0Var, i10));
        this.f38481e--;
        this.f38482i = -1;
    }
}
