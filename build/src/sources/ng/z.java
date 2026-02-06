package ng;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f40629d;

    /* renamed from: e  reason: collision with root package name */
    Collection f40630e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f40631i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f40631i = a0Var;
        this.f40629d = a0Var.f39678i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f40629d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f40629d.next();
        this.f40630e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f40631i.f39679o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f40630e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f40629d.remove();
        i0 i0Var = this.f40631i.f39679o;
        i10 = i0Var.f39876o;
        i0Var.f39876o = i10 - this.f40630e.size();
        this.f40630e.clear();
        this.f40630e = null;
    }
}
