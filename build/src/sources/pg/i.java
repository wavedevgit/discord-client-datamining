package pg;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends z0 {

    /* renamed from: i  reason: collision with root package name */
    final transient Map f44315i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ q f44316o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(q qVar, Map map) {
        this.f44316o = qVar;
        this.f44315i = map;
    }

    @Override // pg.z0
    protected final Set a() {
        return new g(this);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        Map map;
        Map map2 = this.f44315i;
        q qVar = this.f44316o;
        map = qVar.f44614i;
        if (map2 == map) {
            qVar.q();
        } else {
            t0.a(new h(this));
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        return a1.b(this.f44315i, obj);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean equals(Object obj) {
        if (this != obj && !this.f44315i.equals(obj)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final /* bridge */ /* synthetic */ Object get(Object obj) {
        Collection collection = (Collection) a1.a(this.f44315i, obj);
        if (collection == null) {
            return null;
        }
        return this.f44316o.h(obj, collection);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int hashCode() {
        return this.f44315i.hashCode();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set keySet() {
        return this.f44316o.c();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final /* bridge */ /* synthetic */ Object remove(Object obj) {
        Collection collection = (Collection) this.f44315i.remove(obj);
        if (collection == null) {
            return null;
        }
        Collection g10 = this.f44316o.g();
        g10.addAll(collection);
        q.l(this.f44316o, collection.size());
        collection.clear();
        return g10;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        return this.f44315i.size();
    }

    @Override // java.util.AbstractMap
    public final String toString() {
        return this.f44315i.toString();
    }
}
