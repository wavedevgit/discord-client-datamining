package ng;

import java.util.AbstractCollection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ y0 f40382d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x0(y0 y0Var) {
        this.f40382d = y0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        this.f40382d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        y0 y0Var = this.f40382d;
        Map o10 = y0Var.o();
        if (o10 != null) {
            return o10.values().iterator();
        }
        return new r0(y0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        return this.f40382d.size();
    }
}
