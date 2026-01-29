package pg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class x implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f45895d;

    /* renamed from: e  reason: collision with root package name */
    int f45896e;

    /* renamed from: i  reason: collision with root package name */
    int f45897i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ c0 f45898o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ x(c0 c0Var, w wVar) {
        int i10;
        this.f45898o = c0Var;
        i10 = c0Var.f45166p;
        this.f45895d = i10;
        this.f45896e = c0Var.h();
        this.f45897i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f45898o.f45166p;
        if (i10 == this.f45895d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f45896e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f45896e;
            this.f45897i = i10;
            Object a10 = a(i10);
            this.f45896e = this.f45898o.i(this.f45896e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f45897i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f45895d += 32;
        int i10 = this.f45897i;
        c0 c0Var = this.f45898o;
        c0Var.remove(c0.j(c0Var, i10));
        this.f45896e--;
        this.f45897i = -1;
    }
}
