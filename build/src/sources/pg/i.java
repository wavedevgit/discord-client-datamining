package pg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45258d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f45259e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f45260i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f45260i = jVar;
        this.f45259e = jVar.f45309e;
        this.f45258d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f45260i.zzb();
        if (this.f45260i.f45309e == this.f45259e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f45258d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f45258d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f45258d.remove();
        m mVar = this.f45260i.f45312p;
        i10 = mVar.f45545o;
        mVar.f45545o = i10 - 1;
        this.f45260i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f45260i = jVar;
        Collection collection = jVar.f45309e;
        this.f45259e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f45258d = it;
    }
}
