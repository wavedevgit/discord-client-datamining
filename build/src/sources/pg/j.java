package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f44346d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f44347e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ k f44348i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, Iterator it) {
        this.f44348i = kVar;
        this.f44347e = it;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f44347e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f44347e.next();
        this.f44346d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f44346d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f44346d.getValue();
        this.f44347e.remove();
        q.l(this.f44348i.f44389e, collection.size());
        collection.clear();
        this.f44346d = null;
    }
}
