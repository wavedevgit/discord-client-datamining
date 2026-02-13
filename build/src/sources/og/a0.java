package og;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 extends s1 {

    /* renamed from: i  reason: collision with root package name */
    final transient Map f39646i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ i0 f39647o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(i0 i0Var, Map map) {
        this.f39647o = i0Var;
        this.f39646i = map;
    }

    @Override // og.s1
    protected final Set a() {
        return new y(this);
    }

    @Override // java.util.AbstractMap, java.util.Map
    /* renamed from: b */
    public final Collection get(Object obj) {
        Collection collection = (Collection) t1.a(this.f39646i, obj);
        if (collection == null) {
            return null;
        }
        return this.f39647o.h(obj, collection);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        Map map;
        i0 i0Var = this.f39647o;
        Map map2 = this.f39646i;
        map = i0Var.f39843i;
        if (map2 == map) {
            i0Var.o();
        } else {
            m1.a(new z(this));
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        return t1.b(this.f39646i, obj);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean equals(Object obj) {
        if (this != obj && !this.f39646i.equals(obj)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int hashCode() {
        return this.f39646i.hashCode();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set keySet() {
        return this.f39647o.b();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final /* bridge */ /* synthetic */ Object remove(Object obj) {
        int i10;
        Collection collection = (Collection) this.f39646i.remove(obj);
        if (collection == null) {
            return null;
        }
        Collection g10 = this.f39647o.g();
        g10.addAll(collection);
        i0 i0Var = this.f39647o;
        i10 = i0Var.f39844o;
        i0Var.f39844o = i10 - collection.size();
        collection.clear();
        return g10;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        return this.f39646i.size();
    }

    @Override // java.util.AbstractMap
    public final String toString() {
        return this.f39646i.toString();
    }
}
