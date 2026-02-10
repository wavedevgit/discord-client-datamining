package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f48162d;

    /* renamed from: e  reason: collision with root package name */
    Collection f48163e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f48164i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f48164i = eVar;
        this.f48162d = eVar.f48174i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f48162d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f48162d.next();
        this.f48163e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f48164i.f48175o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f48163e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f48162d.remove();
        m mVar = this.f48164i.f48175o;
        i10 = mVar.f48541o;
        mVar.f48541o = i10 - this.f48163e.size();
        this.f48163e.clear();
        this.f48163e = null;
    }
}
