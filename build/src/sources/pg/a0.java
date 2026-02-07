package pg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f43942d;

    /* renamed from: e  reason: collision with root package name */
    int f43943e;

    /* renamed from: i  reason: collision with root package name */
    int f43944i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f0 f43945o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(f0 f0Var, w wVar) {
        int i10;
        this.f43945o = f0Var;
        i10 = f0Var.f44247p;
        this.f43942d = i10;
        this.f43943e = f0Var.g();
        this.f43944i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f43945o.f44247p;
        if (i10 == this.f43942d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f43943e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f43943e;
            this.f43944i = i10;
            Object a10 = a(i10);
            this.f43943e = this.f43945o.h(this.f43943e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f43944i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f43942d += 32;
        f0 f0Var = this.f43945o;
        f0Var.remove(f0.i(f0Var, this.f43944i));
        this.f43943e--;
        this.f43944i = -1;
    }
}
