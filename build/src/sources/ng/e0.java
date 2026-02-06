package ng;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f39774d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f39775e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f39776i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var, Iterator it) {
        this.f39776i = f0Var;
        this.f39775e = f0Var.f39795e;
        this.f39774d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f39776i.zzb();
        if (this.f39776i.f39795e == this.f39775e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f39774d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f39774d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f39774d.remove();
        i0 i0Var = this.f39776i.f39798p;
        i10 = i0Var.f39876o;
        i0Var.f39876o = i10 - 1;
        this.f39776i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        Iterator it;
        this.f39776i = f0Var;
        Collection collection = f0Var.f39795e;
        this.f39775e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f39774d = it;
    }
}
