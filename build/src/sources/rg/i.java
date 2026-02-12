package rg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f46709d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f46710e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f46711i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f46711i = jVar;
        this.f46710e = jVar.f46760e;
        this.f46709d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f46711i.zzb();
        if (this.f46711i.f46760e == this.f46710e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f46709d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f46709d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f46709d.remove();
        m mVar = this.f46711i.f46763p;
        i10 = mVar.f46996o;
        mVar.f46996o = i10 - 1;
        this.f46711i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f46711i = jVar;
        Collection collection = jVar.f46760e;
        this.f46710e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f46709d = it;
    }
}
