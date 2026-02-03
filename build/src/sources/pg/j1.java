package pg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient o0 f45383i;

    /* renamed from: o  reason: collision with root package name */
    private final transient m0 f45384o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1(o0 o0Var, m0 m0Var) {
        this.f45383i = o0Var;
        this.f45384o = m0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.h0
    public final int b(Object[] objArr, int i10) {
        return this.f45384o.b(objArr, 0);
    }

    @Override // pg.h0, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f45383i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f45384o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 1;
    }
}
