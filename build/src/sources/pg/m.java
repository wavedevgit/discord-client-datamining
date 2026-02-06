package pg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44452d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f44453e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f44454i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f44454i = nVar;
        this.f44453e = nVar.f44494e;
        this.f44452d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f44454i.zzb();
        if (this.f44454i.f44494e == this.f44453e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f44452d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f44452d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f44452d.remove();
        q.j(this.f44454i.f44497p);
        this.f44454i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f44454i = nVar;
        Collection collection = nVar.f44494e;
        this.f44453e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f44452d = it;
    }
}
