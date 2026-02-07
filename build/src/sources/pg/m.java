package pg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44500d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f44501e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f44502i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f44502i = nVar;
        this.f44501e = nVar.f44542e;
        this.f44500d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f44502i.zzb();
        if (this.f44502i.f44542e == this.f44501e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f44500d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f44500d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f44500d.remove();
        q.j(this.f44502i.f44545p);
        this.f44502i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f44502i = nVar;
        Collection collection = nVar.f44542e;
        this.f44501e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f44500d = it;
    }
}
