package ng;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f40677d;

    /* renamed from: e  reason: collision with root package name */
    Collection f40678e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f40679i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f40679i = a0Var;
        this.f40677d = a0Var.f39726i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f40677d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f40677d.next();
        this.f40678e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f40679i.f39727o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f40678e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f40677d.remove();
        i0 i0Var = this.f40679i.f39727o;
        i10 = i0Var.f39924o;
        i0Var.f39924o = i10 - this.f40678e.size();
        this.f40678e.clear();
        this.f40678e = null;
    }
}
