package og;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43204d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f43205e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f43206i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f43206i = nVar;
        this.f43205e = nVar.f43246e;
        this.f43204d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f43206i.zzb();
        if (this.f43206i.f43246e == this.f43205e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f43204d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f43204d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f43204d.remove();
        q.j(this.f43206i.f43249p);
        this.f43206i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f43206i = nVar;
        Collection collection = nVar.f43246e;
        this.f43205e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f43204d = it;
    }
}
