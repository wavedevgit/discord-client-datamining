package mg;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z1 extends l1 {

    /* renamed from: i  reason: collision with root package name */
    private final transient k1 f38469i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f38470o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f38471p = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z1(k1 k1Var, Object[] objArr, int i10, int i11) {
        this.f38469i = k1Var;
        this.f38470o = objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final int b(Object[] objArr, int i10) {
        return f().b(objArr, i10);
    }

    @Override // mg.d1, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f38469i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // mg.l1
    final i1 g() {
        return new y1(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f38471p;
    }
}
