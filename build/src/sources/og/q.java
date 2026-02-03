package og;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.RandomAccess;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q extends s implements Serializable {

    /* renamed from: i */
    private transient Map f43366i;

    /* renamed from: o */
    private transient int f43367o;

    public q(Map map) {
        if (map.isEmpty()) {
            this.f43366i = map;
            return;
        }
        throw new IllegalArgumentException();
    }

    public static /* synthetic */ int i(q qVar) {
        int i10 = qVar.f43367o;
        qVar.f43367o = i10 + 1;
        return i10;
    }

    public static /* synthetic */ int j(q qVar) {
        int i10 = qVar.f43367o;
        qVar.f43367o = i10 - 1;
        return i10;
    }

    public static /* synthetic */ int k(q qVar, int i10) {
        int i11 = qVar.f43367o + i10;
        qVar.f43367o = i11;
        return i11;
    }

    public static /* synthetic */ int l(q qVar, int i10) {
        int i11 = qVar.f43367o - i10;
        qVar.f43367o = i11;
        return i11;
    }

    public static /* synthetic */ Map o(q qVar) {
        return qVar.f43366i;
    }

    public static /* synthetic */ void p(q qVar, Object obj) {
        Object obj2;
        Map map = qVar.f43366i;
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
            qVar.f43367o -= size;
        }
    }

    @Override // og.c1
    public final boolean d(Object obj, Object obj2) {
        Collection collection = (Collection) this.f43366i.get(obj);
        if (collection == null) {
            Collection g10 = g();
            if (g10.add(obj2)) {
                this.f43367o++;
                this.f43366i.put(obj, g10);
                return true;
            }
            throw new AssertionError("New Collection violated the Collection spec");
        } else if (collection.add(obj2)) {
            this.f43367o++;
            return true;
        } else {
            return false;
        }
    }

    @Override // og.s
    final Map e() {
        return new i(this, this.f43366i);
    }

    @Override // og.s
    final Set f() {
        return new k(this, this.f43366i);
    }

    public abstract Collection g();

    public abstract Collection h(Object obj, Collection collection);

    public final Collection m(Object obj) {
        Collection collection = (Collection) this.f43366i.get(obj);
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
        for (Collection collection : this.f43366i.values()) {
            collection.clear();
        }
        this.f43366i.clear();
        this.f43367o = 0;
    }
}
