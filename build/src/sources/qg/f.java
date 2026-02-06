package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f47027d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f47028e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f47029i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f47028e = it;
        this.f47029i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f47028e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f47028e.next();
        this.f47027d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f47027d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f47027d.getValue();
        this.f47028e.remove();
        m mVar = this.f47029i.f47046e;
        i10 = mVar.f47375o;
        mVar.f47375o = i10 - collection.size();
        collection.clear();
        this.f47027d = null;
    }
}
