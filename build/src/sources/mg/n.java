package mg;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n extends j {

    /* renamed from: i  reason: collision with root package name */
    private final transient i f37181i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f37182o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f37183p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(i iVar, Object[] objArr, int i10, int i11) {
        this.f37181i = iVar;
        this.f37182o = objArr;
        this.f37183p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.c
    public final int b(Object[] objArr, int i10) {
        return f().b(objArr, 0);
    }

    @Override // mg.c, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f37181i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // mg.j
    final f g() {
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f37183p;
    }
}
