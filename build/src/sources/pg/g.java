package pg;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends w0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ i f44280d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(i iVar) {
        this.f44280d = iVar;
    }

    @Override // pg.w0
    final Map b() {
        return this.f44280d;
    }

    @Override // pg.w0, java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        Set entrySet = this.f44280d.f44363i.entrySet();
        entrySet.getClass();
        try {
            return entrySet.contains(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return false;
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        return new h(this.f44280d);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        if (!contains(obj)) {
            return false;
        }
        Map.Entry entry = (Map.Entry) obj;
        entry.getClass();
        q.p(this.f44280d.f44364o, entry.getKey());
        return true;
    }
}
