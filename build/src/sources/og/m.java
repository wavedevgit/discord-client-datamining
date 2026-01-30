package og;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43276d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f43277e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f43278i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f43278i = nVar;
        this.f43277e = nVar.f43318e;
        this.f43276d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f43278i.zzb();
        if (this.f43278i.f43318e == this.f43277e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f43276d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f43276d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f43276d.remove();
        q.j(this.f43278i.f43321p);
        this.f43278i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f43278i = nVar;
        Collection collection = nVar.f43318e;
        this.f43277e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f43276d = it;
    }
}
