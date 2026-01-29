package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43076d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43077e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f43078i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f43078i = iVar;
        this.f43076d = iVar.f43123i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f43076d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f43076d.next();
        this.f43077e = (Collection) entry.getValue();
        i iVar = this.f43078i;
        Object key = entry.getKey();
        return new l0(key, iVar.f43124o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f43077e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f43076d.remove();
        q.l(this.f43078i.f43124o, this.f43077e.size());
        this.f43077e.clear();
        this.f43077e = null;
    }
}
