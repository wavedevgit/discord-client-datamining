package rg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f48254d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f48255e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f48256i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f48256i = jVar;
        this.f48255e = jVar.f48305e;
        this.f48254d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f48256i.zzb();
        if (this.f48256i.f48305e == this.f48255e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f48254d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f48254d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f48254d.remove();
        m mVar = this.f48256i.f48308p;
        i10 = mVar.f48541o;
        mVar.f48541o = i10 - 1;
        this.f48256i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f48256i = jVar;
        Collection collection = jVar.f48305e;
        this.f48255e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f48254d = it;
    }
}
