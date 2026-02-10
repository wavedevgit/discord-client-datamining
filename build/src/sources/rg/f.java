package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f48193d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f48194e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f48195i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f48194e = it;
        this.f48195i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f48194e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f48194e.next();
        this.f48193d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f48193d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f48193d.getValue();
        this.f48194e.remove();
        m mVar = this.f48195i.f48212e;
        i10 = mVar.f48541o;
        mVar.f48541o = i10 - collection.size();
        collection.clear();
        this.f48193d = null;
    }
}
