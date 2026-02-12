package ng;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o extends j {

    /* renamed from: i  reason: collision with root package name */
    private final transient i f37877i;

    /* renamed from: o  reason: collision with root package name */
    private final transient f f37878o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(i iVar, f fVar) {
        this.f37877i = iVar;
        this.f37878o = fVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.c
    public final int b(Object[] objArr, int i10) {
        return this.f37878o.b(objArr, 0);
    }

    @Override // ng.c, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f37877i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f37878o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f37877i.size();
    }
}
