package og;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class tc extends pc {

    /* renamed from: i  reason: collision with root package name */
    private final transient oc f42569i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f42570o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f42571p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public tc(oc ocVar, Object[] objArr, int i10, int i11) {
        this.f42569i = ocVar;
        this.f42570o = objArr;
        this.f42571p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.la
    public final int b(Object[] objArr, int i10) {
        return f().b(objArr, 0);
    }

    @Override // og.la, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f42569i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // og.pc
    final mc g() {
        return new sc(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f42571p;
    }
}
