package qg;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g1 extends s0 {

    /* renamed from: i  reason: collision with root package name */
    private final transient r0 f45795i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f45796o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f45797p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g1(r0 r0Var, Object[] objArr, int i10, int i11) {
        this.f45795i = r0Var;
        this.f45796o = objArr;
        this.f45797p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final int b(Object[] objArr, int i10) {
        return f().b(objArr, 0);
    }

    @Override // qg.k0, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f45795i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // qg.s0
    final p0 g() {
        return new f1(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f45797p;
    }
}
