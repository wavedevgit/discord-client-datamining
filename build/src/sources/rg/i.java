package rg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f47277d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f47278e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f47279i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f47279i = jVar;
        this.f47278e = jVar.f47328e;
        this.f47277d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f47279i.zzb();
        if (this.f47279i.f47328e == this.f47278e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f47277d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f47277d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f47277d.remove();
        m mVar = this.f47279i.f47331p;
        i10 = mVar.f47564o;
        mVar.f47564o = i10 - 1;
        this.f47279i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f47279i = jVar;
        Collection collection = jVar.f47328e;
        this.f47278e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f47277d = it;
    }
}
