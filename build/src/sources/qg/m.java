package qg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44682d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f44683e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f44684i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f44684i = nVar;
        this.f44683e = nVar.f44724e;
        this.f44682d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f44684i.zzb();
        if (this.f44684i.f44724e == this.f44683e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f44682d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f44682d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f44682d.remove();
        q.j(this.f44684i.f44727p);
        this.f44684i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f44684i = nVar;
        Collection collection = nVar.f44724e;
        this.f44683e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f44682d = it;
    }
}
