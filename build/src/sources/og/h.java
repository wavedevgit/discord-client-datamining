package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43220d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43221e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f43222i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f43222i = iVar;
        this.f43220d = iVar.f43267i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f43220d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f43220d.next();
        this.f43221e = (Collection) entry.getValue();
        i iVar = this.f43222i;
        Object key = entry.getKey();
        return new l0(key, iVar.f43268o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f43221e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f43220d.remove();
        q.l(this.f43222i.f43268o, this.f43221e.size());
        this.f43221e.clear();
        this.f43221e = null;
    }
}
