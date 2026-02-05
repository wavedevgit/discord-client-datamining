package og;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43110d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f43111e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f43112i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f43112i = nVar;
        this.f43111e = nVar.f43152e;
        this.f43110d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f43112i.zzb();
        if (this.f43112i.f43152e == this.f43111e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f43110d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f43110d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f43110d.remove();
        q.j(this.f43112i.f43155p);
        this.f43112i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f43112i = nVar;
        Collection collection = nVar.f43152e;
        this.f43111e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f43110d = it;
    }
}
