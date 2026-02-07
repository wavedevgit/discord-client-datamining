package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f47044d;

    /* renamed from: e  reason: collision with root package name */
    Collection f47045e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f47046i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f47046i = eVar;
        this.f47044d = eVar.f47056i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f47044d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f47044d.next();
        this.f47045e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f47046i.f47057o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f47045e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f47044d.remove();
        m mVar = this.f47046i.f47057o;
        i10 = mVar.f47423o;
        mVar.f47423o = i10 - this.f47045e.size();
        this.f47045e.clear();
        this.f47045e = null;
    }
}
