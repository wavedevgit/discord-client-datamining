package pg;

import java.io.Serializable;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o0 implements Map, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private transient p0 f45606d;

    /* renamed from: e  reason: collision with root package name */
    private transient p0 f45607e;

    /* renamed from: i  reason: collision with root package name */
    private transient h0 f45608i;

    public static o0 c(Object obj, Object obj2) {
        r.b("optional-module-barcode", "com.google.android.gms.vision.barcode");
        return l1.g(1, new Object[]{"optional-module-barcode", "com.google.android.gms.vision.barcode"}, null);
    }

    abstract h0 a();

    @Override // java.util.Map
    /* renamed from: b */
    public final h0 values() {
        h0 h0Var = this.f45608i;
        if (h0Var == null) {
            h0 a10 = a();
            this.f45608i = a10;
            return a10;
        }
        return h0Var;
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

    abstract p0 d();

    abstract p0 e();

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
    public final p0 entrySet() {
        p0 p0Var = this.f45606d;
        if (p0Var == null) {
            p0 d10 = d();
            this.f45606d = d10;
            return d10;
        }
        return p0Var;
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
        return n1.a(entrySet());
    }

    @Override // java.util.Map
    public final boolean isEmpty() {
        return false;
    }

    @Override // java.util.Map
    public final /* bridge */ /* synthetic */ Set keySet() {
        p0 p0Var = this.f45607e;
        if (p0Var == null) {
            p0 e10 = e();
            this.f45607e = e10;
            return e10;
        }
        return p0Var;
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
        r.a(size, "size");
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
