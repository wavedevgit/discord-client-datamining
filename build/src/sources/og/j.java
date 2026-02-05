package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f43004d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f43005e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ k f43006i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, Iterator it) {
        this.f43006i = kVar;
        this.f43005e = it;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f43005e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f43005e.next();
        this.f43004d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f43004d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f43004d.getValue();
        this.f43005e.remove();
        q.l(this.f43006i.f43047e, collection.size());
        collection.clear();
        this.f43004d = null;
    }
}
