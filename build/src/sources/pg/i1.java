package pg;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i1 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient o0 f45333i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f45334o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f45335p = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i1(o0 o0Var, Object[] objArr, int i10, int i11) {
        this.f45333i = o0Var;
        this.f45334o = objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.h0
    public final int b(Object[] objArr, int i10) {
        return f().b(objArr, 0);
    }

    @Override // pg.h0, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f45333i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // pg.p0
    final m0 g() {
        return new h1(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f45335p;
    }
}
