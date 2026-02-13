package qg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f44693d;

    /* renamed from: e  reason: collision with root package name */
    int f44694e;

    /* renamed from: i  reason: collision with root package name */
    int f44695i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f0 f44696o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(f0 f0Var, w wVar) {
        int i10;
        this.f44696o = f0Var;
        i10 = f0Var.f44998p;
        this.f44693d = i10;
        this.f44694e = f0Var.g();
        this.f44695i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f44696o.f44998p;
        if (i10 == this.f44693d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f44694e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f44694e;
            this.f44695i = i10;
            Object a10 = a(i10);
            this.f44694e = this.f44696o.h(this.f44694e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f44695i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f44693d += 32;
        f0 f0Var = this.f44696o;
        f0Var.remove(f0.i(f0Var, this.f44695i));
        this.f44694e--;
        this.f44695i = -1;
    }
}
