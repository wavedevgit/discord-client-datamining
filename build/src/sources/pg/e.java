package pg;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends c1 {

    /* renamed from: i  reason: collision with root package name */
    final transient Map f45248i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ m f45249o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(m mVar, Map map) {
        this.f45249o = mVar;
        this.f45248i = map;
    }

    @Override // pg.c1
    protected final Set a() {
        return new c(this);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        Map map;
        m mVar = this.f45249o;
        Map map2 = this.f45248i;
        map = mVar.f45614i;
        if (map2 == map) {
            mVar.o();
        } else {
            q0.a(new d(this));
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        return d1.b(this.f45248i, obj);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean equals(Object obj) {
        if (this != obj && !this.f45248i.equals(obj)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final /* bridge */ /* synthetic */ Object get(Object obj) {
        Collection collection = (Collection) d1.a(this.f45248i, obj);
        if (collection == null) {
            return null;
        }
        return this.f45249o.h(obj, collection);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int hashCode() {
        return this.f45248i.hashCode();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set keySet() {
        return this.f45249o.d();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final /* bridge */ /* synthetic */ Object remove(Object obj) {
        int i10;
        Collection collection = (Collection) this.f45248i.remove(obj);
        if (collection == null) {
            return null;
        }
        Collection g10 = this.f45249o.g();
        g10.addAll(collection);
        m mVar = this.f45249o;
        i10 = mVar.f45615o;
        mVar.f45615o = i10 - collection.size();
        collection.clear();
        return g10;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        return this.f45248i.size();
    }

    @Override // java.util.AbstractMap
    public final String toString() {
        return this.f45248i.toString();
    }
}
