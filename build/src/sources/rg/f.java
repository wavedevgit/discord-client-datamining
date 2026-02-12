package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f46648d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f46649e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f46650i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f46649e = it;
        this.f46650i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f46649e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f46649e.next();
        this.f46648d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f46648d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f46648d.getValue();
        this.f46649e.remove();
        m mVar = this.f46650i.f46667e;
        i10 = mVar.f46996o;
        mVar.f46996o = i10 - collection.size();
        collection.clear();
        this.f46648d = null;
    }
}
