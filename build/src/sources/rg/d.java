package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f46616d;

    /* renamed from: e  reason: collision with root package name */
    Collection f46617e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f46618i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f46618i = eVar;
        this.f46616d = eVar.f46628i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f46616d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f46616d.next();
        this.f46617e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f46618i.f46629o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f46617e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f46616d.remove();
        m mVar = this.f46618i.f46629o;
        i10 = mVar.f46995o;
        mVar.f46995o = i10 - this.f46617e.size();
        this.f46617e.clear();
        this.f46617e = null;
    }
}
