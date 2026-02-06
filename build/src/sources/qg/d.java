package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f46996d;

    /* renamed from: e  reason: collision with root package name */
    Collection f46997e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f46998i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f46998i = eVar;
        this.f46996d = eVar.f47008i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f46996d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f46996d.next();
        this.f46997e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f46998i.f47009o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f46997e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f46996d.remove();
        m mVar = this.f46998i.f47009o;
        i10 = mVar.f47375o;
        mVar.f47375o = i10 - this.f46997e.size();
        this.f46997e.clear();
        this.f46997e = null;
    }
}
