package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f45235d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f45236e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f45237i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f45236e = it;
        this.f45237i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45236e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f45236e.next();
        this.f45235d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f45235d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f45235d.getValue();
        this.f45236e.remove();
        m mVar = this.f45237i.f45254e;
        i10 = mVar.f45583o;
        mVar.f45583o = i10 - collection.size();
        collection.clear();
        this.f45235d = null;
    }
}
