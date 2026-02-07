package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f44394d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f44395e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ k f44396i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, Iterator it) {
        this.f44396i = kVar;
        this.f44395e = it;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f44395e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f44395e.next();
        this.f44394d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f44394d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f44394d.getValue();
        this.f44395e.remove();
        q.l(this.f44396i.f44437e, collection.size());
        collection.clear();
        this.f44394d = null;
    }
}
