package og;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends z0 {

    /* renamed from: i  reason: collision with root package name */
    final transient Map f42973i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ q f42974o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(q qVar, Map map) {
        this.f42974o = qVar;
        this.f42973i = map;
    }

    @Override // og.z0
    protected final Set a() {
        return new g(this);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        Map map;
        Map map2 = this.f42973i;
        q qVar = this.f42974o;
        map = qVar.f43272i;
        if (map2 == map) {
            qVar.q();
        } else {
            t0.a(new h(this));
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        return a1.b(this.f42973i, obj);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean equals(Object obj) {
        if (this != obj && !this.f42973i.equals(obj)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final /* bridge */ /* synthetic */ Object get(Object obj) {
        Collection collection = (Collection) a1.a(this.f42973i, obj);
        if (collection == null) {
            return null;
        }
        return this.f42974o.h(obj, collection);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int hashCode() {
        return this.f42973i.hashCode();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set keySet() {
        return this.f42974o.c();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final /* bridge */ /* synthetic */ Object remove(Object obj) {
        Collection collection = (Collection) this.f42973i.remove(obj);
        if (collection == null) {
            return null;
        }
        Collection g10 = this.f42974o.g();
        g10.addAll(collection);
        q.l(this.f42974o, collection.size());
        collection.clear();
        return g10;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        return this.f42973i.size();
    }

    @Override // java.util.AbstractMap
    public final String toString() {
        return this.f42973i.toString();
    }
}
