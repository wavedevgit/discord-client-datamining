package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f47216d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f47217e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f47218i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f47217e = it;
        this.f47218i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f47217e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f47217e.next();
        this.f47216d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f47216d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f47216d.getValue();
        this.f47217e.remove();
        m mVar = this.f47218i.f47235e;
        i10 = mVar.f47564o;
        mVar.f47564o = i10 - collection.size();
        collection.clear();
        this.f47216d = null;
    }
}
