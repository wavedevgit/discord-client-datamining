package pg;

import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends y0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ e f45208d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(e eVar) {
        this.f45208d = eVar;
    }

    @Override // pg.y0
    final Map b() {
        return this.f45208d;
    }

    @Override // pg.y0, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        Set entrySet = this.f45208d.f45248i.entrySet();
        entrySet.getClass();
        try {
            return entrySet.contains(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return false;
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        return new d(this.f45208d);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        if (!contains(obj)) {
            return false;
        }
        Map.Entry entry = (Map.Entry) obj;
        Objects.requireNonNull(entry);
        e eVar = this.f45208d;
        m.n(eVar.f45249o, entry.getKey());
        return true;
    }
}
