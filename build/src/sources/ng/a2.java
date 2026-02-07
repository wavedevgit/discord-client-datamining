package ng;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a2 extends l1 {

    /* renamed from: i  reason: collision with root package name */
    private final transient k1 f39728i;

    /* renamed from: o  reason: collision with root package name */
    private final transient i1 f39729o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2(k1 k1Var, i1 i1Var) {
        this.f39728i = k1Var;
        this.f39729o = i1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.d1
    public final int b(Object[] objArr, int i10) {
        return this.f39729o.b(objArr, i10);
    }

    @Override // ng.d1, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (this.f39728i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f39729o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 1;
    }
}
