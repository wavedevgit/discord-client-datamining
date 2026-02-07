package qg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f47136d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f47137e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f47138i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f47138i = jVar;
        this.f47137e = jVar.f47187e;
        this.f47136d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f47138i.zzb();
        if (this.f47138i.f47187e == this.f47137e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f47136d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f47136d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f47136d.remove();
        m mVar = this.f47138i.f47190p;
        i10 = mVar.f47423o;
        mVar.f47423o = i10 - 1;
        this.f47138i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f47138i = jVar;
        Collection collection = jVar.f47187e;
        this.f47137e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f47136d = it;
    }
}
