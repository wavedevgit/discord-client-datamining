package og;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f42846d;

    /* renamed from: e  reason: collision with root package name */
    int f42847e;

    /* renamed from: i  reason: collision with root package name */
    int f42848i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f0 f42849o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(f0 f0Var, w wVar) {
        int i10;
        this.f42849o = f0Var;
        i10 = f0Var.f43151p;
        this.f42846d = i10;
        this.f42847e = f0Var.g();
        this.f42848i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f42849o.f43151p;
        if (i10 == this.f42846d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f42847e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f42847e;
            this.f42848i = i10;
            Object a10 = a(i10);
            this.f42847e = this.f42849o.h(this.f42847e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f42848i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f42846d += 32;
        f0 f0Var = this.f42849o;
        f0Var.remove(f0.i(f0Var, this.f42848i));
        this.f42847e--;
        this.f42848i = -1;
    }
}
