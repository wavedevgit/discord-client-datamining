package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f40029d;

    /* renamed from: e  reason: collision with root package name */
    Collection f40030e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f40031i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f40031i = a0Var;
        this.f40029d = a0Var.f39078i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f40029d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f40029d.next();
        this.f40030e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f40031i.f39079o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f40030e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f40029d.remove();
        i0 i0Var = this.f40031i.f39079o;
        i10 = i0Var.f39276o;
        i0Var.f39276o = i10 - this.f40030e.size();
        this.f40030e.clear();
        this.f40030e = null;
    }
}
