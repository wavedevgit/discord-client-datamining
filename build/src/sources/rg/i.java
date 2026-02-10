package rg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f46708d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f46709e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f46710i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f46710i = jVar;
        this.f46709e = jVar.f46759e;
        this.f46708d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f46710i.zzb();
        if (this.f46710i.f46759e == this.f46709e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f46708d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f46708d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f46708d.remove();
        m mVar = this.f46710i.f46762p;
        i10 = mVar.f46995o;
        mVar.f46995o = i10 - 1;
        this.f46710i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f46710i = jVar;
        Collection collection = jVar.f46759e;
        this.f46709e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f46708d = it;
    }
}
