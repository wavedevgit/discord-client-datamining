package qg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45251d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f45252e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f45253i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f45253i = nVar;
        this.f45252e = nVar.f45293e;
        this.f45251d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f45253i.zzb();
        if (this.f45253i.f45293e == this.f45252e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f45251d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f45251d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f45251d.remove();
        q.j(this.f45253i.f45296p);
        this.f45253i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f45253i = nVar;
        Collection collection = nVar.f45293e;
        this.f45252e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f45251d = it;
    }
}
