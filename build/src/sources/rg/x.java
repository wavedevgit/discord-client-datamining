package rg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class x implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f47324d;

    /* renamed from: e  reason: collision with root package name */
    int f47325e;

    /* renamed from: i  reason: collision with root package name */
    int f47326i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ c0 f47327o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ x(c0 c0Var, w wVar) {
        int i10;
        this.f47327o = c0Var;
        i10 = c0Var.f46595p;
        this.f47324d = i10;
        this.f47325e = c0Var.h();
        this.f47326i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f47327o.f46595p;
        if (i10 == this.f47324d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f47325e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f47325e;
            this.f47326i = i10;
            Object a10 = a(i10);
            this.f47325e = this.f47327o.i(this.f47325e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f47326i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f47324d += 32;
        int i10 = this.f47326i;
        c0 c0Var = this.f47327o;
        c0Var.remove(c0.j(c0Var, i10));
        this.f47325e--;
        this.f47326i = -1;
    }
}
