package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f44577d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f44578e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ k f44579i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, Iterator it) {
        this.f44579i = kVar;
        this.f44578e = it;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f44578e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f44578e.next();
        this.f44577d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f44577d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f44577d.getValue();
        this.f44578e.remove();
        q.l(this.f44579i.f44620e, collection.size());
        collection.clear();
        this.f44577d = null;
    }
}
