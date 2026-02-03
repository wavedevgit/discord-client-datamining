package mg;

import java.util.AbstractCollection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ y0 f38557d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x0(y0 y0Var) {
        this.f38557d = y0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        this.f38557d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        y0 y0Var = this.f38557d;
        Map o10 = y0Var.o();
        if (o10 != null) {
            return o10.values().iterator();
        }
        return new r0(y0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        return this.f38557d.size();
    }
}
