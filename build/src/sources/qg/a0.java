package qg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f45456d;

    /* renamed from: e  reason: collision with root package name */
    int f45457e;

    /* renamed from: i  reason: collision with root package name */
    int f45458i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f0 f45459o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(f0 f0Var, w wVar) {
        int i10;
        this.f45459o = f0Var;
        i10 = f0Var.f45761p;
        this.f45456d = i10;
        this.f45457e = f0Var.g();
        this.f45458i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f45459o.f45761p;
        if (i10 == this.f45456d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f45457e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f45457e;
            this.f45458i = i10;
            Object a10 = a(i10);
            this.f45457e = this.f45459o.h(this.f45457e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f45458i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f45456d += 32;
        f0 f0Var = this.f45459o;
        f0Var.remove(f0.i(f0Var, this.f45458i));
        this.f45457e--;
        this.f45458i = -1;
    }
}
