package pg;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.RandomAccess;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q extends s implements Serializable {

    /* renamed from: i */
    private transient Map f44662i;

    /* renamed from: o */
    private transient int f44663o;

    public q(Map map) {
        if (map.isEmpty()) {
            this.f44662i = map;
            return;
        }
        throw new IllegalArgumentException();
    }

    public static /* synthetic */ int i(q qVar) {
        int i10 = qVar.f44663o;
        qVar.f44663o = i10 + 1;
        return i10;
    }

    public static /* synthetic */ int j(q qVar) {
        int i10 = qVar.f44663o;
        qVar.f44663o = i10 - 1;
        return i10;
    }

    public static /* synthetic */ int k(q qVar, int i10) {
        int i11 = qVar.f44663o + i10;
        qVar.f44663o = i11;
        return i11;
    }

    public static /* synthetic */ int l(q qVar, int i10) {
        int i11 = qVar.f44663o - i10;
        qVar.f44663o = i11;
        return i11;
    }

    public static /* synthetic */ Map o(q qVar) {
        return qVar.f44662i;
    }

    public static /* synthetic */ void p(q qVar, Object obj) {
        Object obj2;
        Map map = qVar.f44662i;
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
            qVar.f44663o -= size;
        }
    }

    @Override // pg.c1
    public final boolean d(Object obj, Object obj2) {
        Collection collection = (Collection) this.f44662i.get(obj);
        if (collection == null) {
            Collection g10 = g();
            if (g10.add(obj2)) {
                this.f44663o++;
                this.f44662i.put(obj, g10);
                return true;
            }
            throw new AssertionError("New Collection violated the Collection spec");
        } else if (collection.add(obj2)) {
            this.f44663o++;
            return true;
        } else {
            return false;
        }
    }

    @Override // pg.s
    final Map e() {
        return new i(this, this.f44662i);
    }

    @Override // pg.s
    final Set f() {
        return new k(this, this.f44662i);
    }

    public abstract Collection g();

    public abstract Collection h(Object obj, Collection collection);

    public final Collection m(Object obj) {
        Collection collection = (Collection) this.f44662i.get(obj);
        if (collection == null) {
            collection = g();
        }
        return h(obj, collection);
    }

    public final List n(Object obj, List list, n nVar) {
        if (list instanceof RandomAccess) {
            return new l(this, obj, list, nVar);
        }
        return new p(this, obj, list, nVar);
    }

    public final void q() {
        for (Collection collection : this.f44662i.values()) {
            collection.clear();
        }
        this.f44662i.clear();
        this.f44663o = 0;
    }
}
