package mg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f38156d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f38157e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f38158i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var, Iterator it) {
        this.f38158i = f0Var;
        this.f38157e = f0Var.f38177e;
        this.f38156d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f38158i.zzb();
        if (this.f38158i.f38177e == this.f38157e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f38156d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f38156d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f38156d.remove();
        i0 i0Var = this.f38158i.f38180p;
        i10 = i0Var.f38258o;
        i0Var.f38258o = i10 - 1;
        this.f38158i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        Iterator it;
        this.f38158i = f0Var;
        Collection collection = f0Var.f38177e;
        this.f38157e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f38156d = it;
    }
}
