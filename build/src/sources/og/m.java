package og;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43404d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f43405e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ n f43406i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, Iterator it) {
        this.f43406i = nVar;
        this.f43405e = nVar.f43446e;
        this.f43404d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f43406i.zzb();
        if (this.f43406i.f43446e == this.f43405e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f43404d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f43404d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f43404d.remove();
        q.j(this.f43406i.f43449p);
        this.f43406i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar) {
        Iterator it;
        this.f43406i = nVar;
        Collection collection = nVar.f43446e;
        this.f43405e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f43404d = it;
    }
}
