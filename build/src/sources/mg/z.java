package mg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f38804d;

    /* renamed from: e  reason: collision with root package name */
    Collection f38805e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f38806i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f38806i = a0Var;
        this.f38804d = a0Var.f37853i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f38804d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f38804d.next();
        this.f38805e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f38806i.f37854o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f38805e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f38804d.remove();
        i0 i0Var = this.f38806i.f37854o;
        i10 = i0Var.f38051o;
        i0Var.f38051o = i10 - this.f38805e.size();
        this.f38805e.clear();
        this.f38805e = null;
    }
}
