package lg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o extends j {

    /* renamed from: i  reason: collision with root package name */
    private final transient i f37324i;

    /* renamed from: o  reason: collision with root package name */
    private final transient f f37325o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(i iVar, f fVar) {
        this.f37324i = iVar;
        this.f37325o = fVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final int b(Object[] objArr, int i10) {
        return this.f37325o.b(objArr, 0);
    }

    @Override // lg.c, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f37324i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f37325o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f37324i.size();
    }
}
