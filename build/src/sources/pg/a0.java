package pg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f43894d;

    /* renamed from: e  reason: collision with root package name */
    int f43895e;

    /* renamed from: i  reason: collision with root package name */
    int f43896i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f0 f43897o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(f0 f0Var, w wVar) {
        int i10;
        this.f43897o = f0Var;
        i10 = f0Var.f44199p;
        this.f43894d = i10;
        this.f43895e = f0Var.g();
        this.f43896i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f43897o.f44199p;
        if (i10 == this.f43894d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f43895e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f43895e;
            this.f43896i = i10;
            Object a10 = a(i10);
            this.f43895e = this.f43897o.h(this.f43895e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f43896i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f43894d += 32;
        f0 f0Var = this.f43897o;
        f0Var.remove(f0.i(f0Var, this.f43896i));
        this.f43895e--;
        this.f43896i = -1;
    }
}
