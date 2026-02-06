package qg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f47088d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f47089e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f47090i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f47090i = jVar;
        this.f47089e = jVar.f47139e;
        this.f47088d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f47090i.zzb();
        if (this.f47090i.f47139e == this.f47089e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f47088d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f47088d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f47088d.remove();
        m mVar = this.f47090i.f47142p;
        i10 = mVar.f47375o;
        mVar.f47375o = i10 - 1;
        this.f47090i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f47090i = jVar;
        Collection collection = jVar.f47139e;
        this.f47089e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f47088d = it;
    }
}
