package og;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z1 extends l1 {

    /* renamed from: i  reason: collision with root package name */
    private final transient k1 f40032i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f40033o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f40034p = 1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z1(k1 k1Var, Object[] objArr, int i10, int i11) {
        this.f40032i = k1Var;
        this.f40033o = objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final int b(Object[] objArr, int i10) {
        return f().b(objArr, i10);
    }

    @Override // og.d1, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f40032i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // og.l1
    final i1 g() {
        return new y1(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f40034p;
    }
}
