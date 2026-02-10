package rg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class x implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f48869d;

    /* renamed from: e  reason: collision with root package name */
    int f48870e;

    /* renamed from: i  reason: collision with root package name */
    int f48871i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ c0 f48872o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ x(c0 c0Var, w wVar) {
        int i10;
        this.f48872o = c0Var;
        i10 = c0Var.f48140p;
        this.f48869d = i10;
        this.f48870e = c0Var.h();
        this.f48871i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f48872o.f48140p;
        if (i10 == this.f48869d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f48870e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f48870e;
            this.f48871i = i10;
            Object a10 = a(i10);
            this.f48870e = this.f48872o.i(this.f48870e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f48871i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f48869d += 32;
        int i10 = this.f48871i;
        c0 c0Var = this.f48872o;
        c0Var.remove(c0.j(c0Var, i10));
        this.f48870e--;
        this.f48871i = -1;
    }
}
