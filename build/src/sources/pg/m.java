package pg;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.RandomAccess;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m extends o implements Serializable {

    /* renamed from: i */
    private transient Map f45656i;

    /* renamed from: o */
    private transient int f45657o;

    public m(Map map) {
        if (map.isEmpty()) {
            this.f45656i = map;
            return;
        }
        throw new IllegalArgumentException();
    }

    public static /* bridge */ /* synthetic */ int i(m mVar) {
        return mVar.f45657o;
    }

    public static /* bridge */ /* synthetic */ Map l(m mVar) {
        return mVar.f45656i;
    }

    public static /* bridge */ /* synthetic */ void m(m mVar, int i10) {
        mVar.f45657o = i10;
    }

    public static /* bridge */ /* synthetic */ void n(m mVar, Object obj) {
        Object obj2;
        Map map = mVar.f45656i;
        map.getClass();
        try {
            obj2 = map.remove(obj);
        } catch (ClassCastException | NullPointerException unused) {
            obj2 = null;
        }
        Collection collection = (Collection) obj2;
        if (collection != null) {
            int size = collection.size();
            collection.clear();
            mVar.f45657o -= size;
        }
    }

    @Override // pg.e1
    public final boolean b(Object obj, Object obj2) {
        Collection collection = (Collection) this.f45656i.get(obj);
        if (collection == null) {
            Collection g10 = g();
            if (g10.add(obj2)) {
                this.f45657o++;
                this.f45656i.put(obj, g10);
                return true;
            }
            throw new AssertionError("New Collection violated the Collection spec");
        } else if (collection.add(obj2)) {
            this.f45657o++;
            return true;
        } else {
            return false;
        }
    }

    @Override // pg.o
    final Map e() {
        return new e(this, this.f45656i);
    }

    @Override // pg.o
    final Set f() {
        return new g(this, this.f45656i);
    }

    public abstract Collection g();

    public abstract Collection h(Object obj, Collection collection);

    public final Collection j(Object obj) {
        Collection collection = (Collection) this.f45656i.get(obj);
        if (collection == null) {
            collection = g();
        }
        return h(obj, collection);
    }

    public final List k(Object obj, List list, j jVar) {
        if (list instanceof RandomAccess) {
            return new h(this, obj, list, jVar);
        }
        return new l(this, obj, list, jVar);
    }

    public final void o() {
        for (Collection collection : this.f45656i.values()) {
            collection.clear();
        }
        this.f45656i.clear();
        this.f45657o = 0;
    }
}
