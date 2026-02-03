package mg;

import java.io.Serializable;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class k1 implements Map, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private transient l1 f38306d;

    /* renamed from: e  reason: collision with root package name */
    private transient l1 f38307e;

    /* renamed from: i  reason: collision with root package name */
    private transient d1 f38308i;

    public static k1 c(Object obj, Object obj2) {
        n0.b("optional-module-barcode", "com.google.android.gms.vision.barcode");
        return c2.g(1, new Object[]{"optional-module-barcode", "com.google.android.gms.vision.barcode"}, null);
    }

    abstract d1 a();

    @Override // java.util.Map
    /* renamed from: b */
    public final d1 values() {
        d1 d1Var = this.f38308i;
        if (d1Var == null) {
            d1 a10 = a();
            this.f38308i = a10;
            return a10;
        }
        return d1Var;
    }

    @Override // java.util.Map
    public final void clear() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.Map
    public final boolean containsKey(Object obj) {
        if (get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.Map
    public final boolean containsValue(Object obj) {
        return values().contains(obj);
    }

    abstract l1 d();

    abstract l1 e();

    @Override // java.util.Map
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Map)) {
            return false;
        }
        return entrySet().equals(((Map) obj).entrySet());
    }

    @Override // java.util.Map
    /* renamed from: f */
    public final l1 entrySet() {
        l1 l1Var = this.f38306d;
        if (l1Var == null) {
            l1 d10 = d();
            this.f38306d = d10;
            return d10;
        }
        return l1Var;
    }

    @Override // java.util.Map
    public abstract Object get(Object obj);

    @Override // java.util.Map
    public final Object getOrDefault(Object obj, Object obj2) {
        Object obj3 = get(obj);
        if (obj3 != null) {
            return obj3;
        }
        return obj2;
    }

    @Override // java.util.Map
    public final int hashCode() {
        return e2.a(entrySet());
    }

    @Override // java.util.Map
    public final boolean isEmpty() {
        return false;
    }

    @Override // java.util.Map
    public final /* bridge */ /* synthetic */ Set keySet() {
        l1 l1Var = this.f38307e;
        if (l1Var == null) {
            l1 e10 = e();
            this.f38307e = e10;
            return e10;
        }
        return l1Var;
    }

    @Override // java.util.Map
    public final Object put(Object obj, Object obj2) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.Map
    public final void putAll(Map map) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.Map
    public final Object remove(Object obj) {
        throw new UnsupportedOperationException();
    }

    public final String toString() {
        int size = size();
        n0.a(size, "size");
        StringBuilder sb2 = new StringBuilder((int) Math.min(size * 8, 1073741824L));
        sb2.append('{');
        boolean z10 = true;
        for (Map.Entry entry : entrySet()) {
            if (!z10) {
                sb2.append(", ");
            }
            sb2.append(entry.getKey());
            sb2.append('=');
            sb2.append(entry.getValue());
            z10 = false;
        }
        sb2.append('}');
        return sb2.toString();
    }
}
