package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45236d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45237e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f45238i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f45238i = eVar;
        this.f45236d = eVar.f45248i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45236d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f45236d.next();
        this.f45237e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f45238i.f45249o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f45237e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f45236d.remove();
        m mVar = this.f45238i.f45249o;
        i10 = mVar.f45615o;
        mVar.f45615o = i10 - this.f45237e.size();
        this.f45237e.clear();
        this.f45237e = null;
    }
}
