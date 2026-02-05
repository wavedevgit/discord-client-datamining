package og;

import java.io.Serializable;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r0 implements Map, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private transient s0 f43315d;

    /* renamed from: e  reason: collision with root package name */
    private transient s0 f43316e;

    /* renamed from: i  reason: collision with root package name */
    private transient k0 f43317i;

    public static r0 c(Object obj, Object obj2) {
        v.b("optional-module-barcode", "com.google.android.gms.vision.barcode");
        return j1.g(1, new Object[]{"optional-module-barcode", "com.google.android.gms.vision.barcode"}, null);
    }

    abstract k0 a();

    @Override // java.util.Map
    /* renamed from: b */
    public final k0 values() {
        k0 k0Var = this.f43317i;
        if (k0Var == null) {
            k0 a10 = a();
            this.f43317i = a10;
            return a10;
        }
        return k0Var;
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

    abstract s0 d();

    abstract s0 e();

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
    public final s0 entrySet() {
        s0 s0Var = this.f43315d;
        if (s0Var == null) {
            s0 d10 = d();
            this.f43315d = d10;
            return d10;
        }
        return s0Var;
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
        return l1.a(entrySet());
    }

    @Override // java.util.Map
    public final boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Map
    public final /* bridge */ /* synthetic */ Set keySet() {
        s0 s0Var = this.f43316e;
        if (s0Var == null) {
            s0 e10 = e();
            this.f43316e = e10;
            return e10;
        }
        return s0Var;
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
        v.a(size, "size");
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
