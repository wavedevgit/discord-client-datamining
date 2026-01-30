package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43092d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43093e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f43094i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f43094i = iVar;
        this.f43092d = iVar.f43139i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f43092d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f43092d.next();
        this.f43093e = (Collection) entry.getValue();
        i iVar = this.f43094i;
        Object key = entry.getKey();
        return new l0(key, iVar.f43140o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f43093e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f43092d.remove();
        q.l(this.f43094i.f43140o, this.f43093e.size());
        this.f43093e.clear();
        this.f43093e = null;
    }
}
