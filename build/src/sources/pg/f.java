package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f45219d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f45220e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ g f45221i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(g gVar, Iterator it) {
        this.f45220e = it;
        this.f45221i = gVar;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45220e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f45220e.next();
        this.f45219d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f45219d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f45219d.getValue();
        this.f45220e.remove();
        m mVar = this.f45221i.f45238e;
        i10 = mVar.f45567o;
        mVar.f45567o = i10 - collection.size();
        collection.clear();
        this.f45219d = null;
    }
}
