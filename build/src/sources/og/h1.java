package og;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h1 extends s0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient r0 f43079i;

    /* renamed from: o  reason: collision with root package name */
    private final transient p0 f43080o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(r0 r0Var, p0 p0Var) {
        this.f43079i = r0Var;
        this.f43080o = p0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.k0
    public final int b(Object[] objArr, int i10) {
        return this.f43080o.b(objArr, 0);
    }

    @Override // og.k0, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (this.f43079i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f43080o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f43079i.size();
    }
}
