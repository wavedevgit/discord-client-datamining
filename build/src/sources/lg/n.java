package lg;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n extends j {

    /* renamed from: i  reason: collision with root package name */
    private final transient i f36844i;

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f36845o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f36846p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(i iVar, Object[] objArr, int i10, int i11) {
        this.f36844i = iVar;
        this.f36845o = objArr;
        this.f36846p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // lg.c
    public final int b(Object[] objArr, int i10) {
        return f().b(objArr, 0);
    }

    @Override // lg.c, java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        if (obj instanceof Map.Entry) {
            Map.Entry entry = (Map.Entry) obj;
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (value != null && value.equals(this.f36844i.get(key))) {
                return true;
            }
        }
        return false;
    }

    @Override // lg.j
    final f g() {
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return f().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f36846p;
    }
}
