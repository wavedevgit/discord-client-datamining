package pg;

import java.util.AbstractCollection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ c0 f45119d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(c0 c0Var) {
        this.f45119d = c0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        this.f45119d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        c0 c0Var = this.f45119d;
        Map o10 = c0Var.o();
        if (o10 != null) {
            return o10.values().iterator();
        }
        return new u(c0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        return this.f45119d.size();
    }
}
