package rg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient o0 f48309i;

    /* renamed from: o  reason: collision with root package name */
    private final transient m0 f48310o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1(o0 o0Var, m0 m0Var) {
        this.f48309i = o0Var;
        this.f48310o = m0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final int b(Object[] objArr, int i10) {
        return this.f48310o.b(objArr, 0);
    }

    @Override // rg.h0, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f48309i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f48310o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 1;
    }
}
