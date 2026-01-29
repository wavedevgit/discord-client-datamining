package mg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a2 extends l1 {

    /* renamed from: i  reason: collision with root package name */
    private final transient k1 f38062i;

    /* renamed from: o  reason: collision with root package name */
    private final transient i1 f38063o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2(k1 k1Var, i1 i1Var) {
        this.f38062i = k1Var;
        this.f38063o = i1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final int b(Object[] objArr, int i10) {
        return this.f38063o.b(objArr, i10);
    }

    @Override // mg.d1, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (this.f38062i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f38063o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 1;
    }
}
