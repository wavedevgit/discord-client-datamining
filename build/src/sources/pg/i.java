package pg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45296d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f45297e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f45298i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f45298i = jVar;
        this.f45297e = jVar.f45347e;
        this.f45296d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f45298i.zzb();
        if (this.f45298i.f45347e == this.f45297e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f45296d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f45296d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f45296d.remove();
        m mVar = this.f45298i.f45350p;
        i10 = mVar.f45583o;
        mVar.f45583o = i10 - 1;
        this.f45298i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f45298i = jVar;
        Collection collection = jVar.f45347e;
        this.f45297e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f45296d = it;
    }
}
