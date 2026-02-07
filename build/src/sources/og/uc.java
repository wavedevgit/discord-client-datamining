package og;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class uc extends pc {

    /* renamed from: i  reason: collision with root package name */
    private final transient oc f42602i;

    /* renamed from: o  reason: collision with root package name */
    private final transient mc f42603o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public uc(oc ocVar, mc mcVar) {
        this.f42602i = ocVar;
        this.f42603o = mcVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.la
    public final int b(Object[] objArr, int i10) {
        return this.f42603o.b(objArr, 0);
    }

    @Override // og.la, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (this.f42602i.get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return this.f42603o.listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f42602i.size();
    }
}
