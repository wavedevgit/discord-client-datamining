package pg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45328d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f45329e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f45330i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f45330i = jVar;
        this.f45329e = jVar.f45379e;
        this.f45328d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f45330i.zzb();
        if (this.f45330i.f45379e == this.f45329e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f45328d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f45328d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f45328d.remove();
        m mVar = this.f45330i.f45382p;
        i10 = mVar.f45615o;
        mVar.f45615o = i10 - 1;
        this.f45330i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f45330i = jVar;
        Collection collection = jVar.f45379e;
        this.f45329e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f45328d = it;
    }
}
