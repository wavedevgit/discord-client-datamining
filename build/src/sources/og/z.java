package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f40597d;

    /* renamed from: e  reason: collision with root package name */
    Collection f40598e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f40599i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f40599i = a0Var;
        this.f40597d = a0Var.f39646i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f40597d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f40597d.next();
        this.f40598e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f40599i.f39647o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f40598e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f40597d.remove();
        i0 i0Var = this.f40599i.f39647o;
        i10 = i0Var.f39844o;
        i0Var.f39844o = i10 - this.f40598e.size();
        this.f40598e.clear();
        this.f40598e = null;
    }
}
