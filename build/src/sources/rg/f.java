package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f46647d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f46648e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f46649i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f46648e = it;
        this.f46649i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f46648e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f46648e.next();
        this.f46647d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f46647d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f46647d.getValue();
        this.f46648e.remove();
        m mVar = this.f46649i.f46666e;
        i10 = mVar.f46995o;
        mVar.f46995o = i10 - collection.size();
        collection.clear();
        this.f46647d = null;
    }
}
