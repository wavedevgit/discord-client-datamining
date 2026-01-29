package og;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43260d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f43261e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f43262i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f43262i = nVar;
        this.f43261e = nVar.f43302e;
        this.f43260d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f43262i.zzb();
        if (this.f43262i.f43302e == this.f43261e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f43260d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f43260d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f43260d.remove();
        q.j(this.f43262i.f43305p);
        this.f43262i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f43262i = nVar;
        Collection collection = nVar.f43302e;
        this.f43261e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f43260d = it;
    }
}
