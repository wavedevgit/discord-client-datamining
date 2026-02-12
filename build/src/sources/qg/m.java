package qg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44683d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f44684e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f44685i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f44685i = nVar;
        this.f44684e = nVar.f44725e;
        this.f44683d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f44685i.zzb();
        if (this.f44685i.f44725e == this.f44684e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f44683d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f44683d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f44683d.remove();
        q.j(this.f44685i.f44728p);
        this.f44685i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f44685i = nVar;
        Collection collection = nVar.f44725e;
        this.f44684e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f44683d = it;
    }
}
