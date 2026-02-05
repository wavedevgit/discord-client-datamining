package og;

import java.util.AbstractCollection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e0 extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ f0 f42805d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        this.f42805d = f0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        this.f42805d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        f0 f0Var = this.f42805d;
        Map n10 = f0Var.n();
        if (n10 != null) {
            return n10.values().iterator();
        }
        return new y(f0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        return this.f42805d.size();
    }
}
