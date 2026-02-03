package pg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45370d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f45371e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f45372i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f45372i = jVar;
        this.f45371e = jVar.f45421e;
        this.f45370d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f45372i.zzb();
        if (this.f45372i.f45421e == this.f45371e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f45370d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f45370d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f45370d.remove();
        m mVar = this.f45372i.f45424p;
        i10 = mVar.f45657o;
        mVar.f45657o = i10 - 1;
        this.f45372i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f45372i = jVar;
        Collection collection = jVar.f45421e;
        this.f45371e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f45370d = it;
    }
}
