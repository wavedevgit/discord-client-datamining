package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f42926d;

    /* renamed from: e  reason: collision with root package name */
    Collection f42927e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f42928i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f42928i = iVar;
        this.f42926d = iVar.f42973i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f42926d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f42926d.next();
        this.f42927e = (Collection) entry.getValue();
        i iVar = this.f42928i;
        Object key = entry.getKey();
        return new l0(key, iVar.f42974o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f42927e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f42926d.remove();
        q.l(this.f42928i.f42974o, this.f42927e.size());
        this.f42927e.clear();
        this.f42927e = null;
    }
}
