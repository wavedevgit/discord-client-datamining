package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45067d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45068e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f45069i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f45069i = iVar;
        this.f45067d = iVar.f45114i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45067d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f45067d.next();
        this.f45068e = (Collection) entry.getValue();
        i iVar = this.f45069i;
        Object key = entry.getKey();
        return new l0(key, iVar.f45115o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f45068e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f45067d.remove();
        q.l(this.f45069i.f45115o, this.f45068e.size());
        this.f45068e.clear();
        this.f45068e = null;
    }
}
