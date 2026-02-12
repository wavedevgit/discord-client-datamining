package qg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h1 extends s0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient r0 f44502i;

    /* renamed from: o  reason: collision with root package name */
    private final transient p0 f44503o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(r0 r0Var, p0 p0Var) {
        this.f44502i = r0Var;
        this.f44503o = p0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final int b(Object[] objArr, int i10) {
        return this.f44503o.b(objArr, 0);
    }

    @Override // qg.k0, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (this.f44502i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f44503o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f44502i.size();
    }
}
