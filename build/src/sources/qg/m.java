package qg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f46014d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f46015e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f46016i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f46016i = nVar;
        this.f46015e = nVar.f46056e;
        this.f46014d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f46016i.zzb();
        if (this.f46016i.f46056e == this.f46015e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f46014d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f46014d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f46014d.remove();
        q.j(this.f46016i.f46059p);
        this.f46016i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f46016i = nVar;
        Collection collection = nVar.f46056e;
        this.f46015e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f46014d = it;
    }
}
