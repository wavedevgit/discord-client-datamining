package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f47075d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f47076e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f47077i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f47076e = it;
        this.f47077i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f47076e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f47076e.next();
        this.f47075d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f47075d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f47075d.getValue();
        this.f47076e.remove();
        m mVar = this.f47077i.f47094e;
        i10 = mVar.f47423o;
        mVar.f47423o = i10 - collection.size();
        collection.clear();
        this.f47075d = null;
    }
}
