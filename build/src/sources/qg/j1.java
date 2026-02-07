package qg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient o0 f47191i;

    /* renamed from: o  reason: collision with root package name */
    private final transient m0 f47192o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1(o0 o0Var, m0 m0Var) {
        this.f47191i = o0Var;
        this.f47192o = m0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.h0
    public final int b(Object[] objArr, int i10) {
        return this.f47192o.b(objArr, 0);
    }

    @Override // qg.h0, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f47191i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f47192o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 1;
    }
}
