package pg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45280d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f45281e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j f45282i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, Iterator it) {
        this.f45282i = jVar;
        this.f45281e = jVar.f45331e;
        this.f45280d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f45282i.zzb();
        if (this.f45282i.f45331e == this.f45281e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f45280d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f45280d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f45280d.remove();
        m mVar = this.f45282i.f45334p;
        i10 = mVar.f45567o;
        mVar.f45567o = i10 - 1;
        this.f45282i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar) {
        Iterator it;
        this.f45282i = jVar;
        Collection collection = jVar.f45331e;
        this.f45281e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f45280d = it;
    }
}
