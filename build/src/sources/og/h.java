package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43020d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43021e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f43022i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f43022i = iVar;
        this.f43020d = iVar.f43067i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f43020d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f43020d.next();
        this.f43021e = (Collection) entry.getValue();
        i iVar = this.f43022i;
        Object key = entry.getKey();
        return new l0(key, iVar.f43068o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f43021e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f43020d.remove();
        q.l(this.f43022i.f43068o, this.f43021e.size());
        this.f43021e.clear();
        this.f43021e = null;
    }
}
