package pg;

import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class x implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    int f45873d;

    /* renamed from: e  reason: collision with root package name */
    int f45874e;

    /* renamed from: i  reason: collision with root package name */
    int f45875i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ c0 f45876o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ x(c0 c0Var, w wVar) {
        int i10;
        this.f45876o = c0Var;
        i10 = c0Var.f45144p;
        this.f45873d = i10;
        this.f45874e = c0Var.h();
        this.f45875i = -1;
    }

    private final void b() {
        int i10;
        i10 = this.f45876o.f45144p;
        if (i10 == this.f45873d) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    abstract Object a(int i10);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        if (this.f45874e >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public final Object next() {
        b();
        if (hasNext()) {
            int i10 = this.f45874e;
            this.f45875i = i10;
            Object a10 = a(i10);
            this.f45874e = this.f45876o.i(this.f45874e);
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        b();
        if (this.f45875i >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f45873d += 32;
        int i10 = this.f45875i;
        c0 c0Var = this.f45876o;
        c0Var.remove(c0.j(c0Var, i10));
        this.f45874e--;
        this.f45875i = -1;
    }
}
