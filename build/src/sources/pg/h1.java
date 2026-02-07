package pg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h1 extends s0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient r0 f44319i;

    /* renamed from: o  reason: collision with root package name */
    private final transient p0 f44320o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(r0 r0Var, p0 p0Var) {
        this.f44319i = r0Var;
        this.f44320o = p0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.k0
    public final int b(Object[] objArr, int i10) {
        return this.f44320o.b(objArr, 0);
    }

    @Override // pg.k0, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (this.f44319i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f44320o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f44319i.size();
    }
}
