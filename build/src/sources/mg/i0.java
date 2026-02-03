package mg;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.RandomAccess;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i0 extends k0 implements Serializable {

    /* renamed from: i */
    private final transient Map f38050i;

    /* renamed from: o */
    private transient int f38051o;

    public i0(Map map) {
        t.c(map.isEmpty());
        this.f38050i = map;
    }

    public static /* bridge */ /* synthetic */ int i(i0 i0Var) {
        return i0Var.f38051o;
    }

    public static /* bridge */ /* synthetic */ Map l(i0 i0Var) {
        return i0Var.f38050i;
    }

    public static /* bridge */ /* synthetic */ void m(i0 i0Var, int i10) {
        i0Var.f38051o = i10;
    }

    public static /* bridge */ /* synthetic */ void n(i0 i0Var, Object obj) {
        Object obj2;
        try {
            obj2 = i0Var.f38050i.remove(obj);
        } catch (ClassCastException | NullPointerException unused) {
            obj2 = null;
        }
        Collection collection = (Collection) obj2;
        if (collection != null) {
            int size = collection.size();
            collection.clear();
            i0Var.f38051o -= size;
        }
    }

    @Override // mg.u1
    public final boolean c(Object obj, Object obj2) {
        Collection collection = (Collection) this.f38050i.get(obj);
        if (collection == null) {
            Collection g10 = g();
            if (g10.add(obj2)) {
                this.f38051o++;
                this.f38050i.put(obj, g10);
                return true;
            }
            throw new AssertionError("New Collection violated the Collection spec");
        } else if (collection.add(obj2)) {
            this.f38051o++;
            return true;
        } else {
            return false;
        }
    }

    @Override // mg.k0
    final Map e() {
        return new a0(this, this.f38050i);
    }

    @Override // mg.k0
    final Set f() {
        return new c0(this, this.f38050i);
    }

    public abstract Collection g();

    public abstract Collection h(Object obj, Collection collection);

    public final Collection j(Object obj) {
        Collection collection = (Collection) this.f38050i.get(obj);
        if (collection == null) {
            collection = g();
        }
        return h(obj, collection);
    }

    public final List k(Object obj, List list, f0 f0Var) {
        if (list instanceof RandomAccess) {
            return new d0(this, obj, list, f0Var);
        }
        return new h0(this, obj, list, f0Var);
    }

    public final void o() {
        for (Collection collection : this.f38050i.values()) {
            collection.clear();
        }
        this.f38050i.clear();
        this.f38051o = 0;
    }
}
