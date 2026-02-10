package ma;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a0 {

    /* renamed from: b  reason: collision with root package name */
    private static final Class f36779b = a0.class;

    /* renamed from: a  reason: collision with root package name */
    private Map f36780a = new HashMap();

    private a0() {
    }

    public static a0 d() {
        return new a0();
    }

    private synchronized void e() {
        q8.a.z(f36779b, "Count = %d", Integer.valueOf(this.f36780a.size()));
    }

    public void a() {
        ArrayList arrayList;
        synchronized (this) {
            arrayList = new ArrayList(this.f36780a.values());
            this.f36780a.clear();
        }
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            ta.k kVar = (ta.k) arrayList.get(i10);
            if (kVar != null) {
                kVar.close();
            }
        }
    }

    public synchronized boolean b(CacheKey cacheKey) {
        p8.j.g(cacheKey);
        if (!this.f36780a.containsKey(cacheKey)) {
            return false;
        }
        ta.k kVar = (ta.k) this.f36780a.get(cacheKey);
        synchronized (kVar) {
            if (!ta.k.O0(kVar)) {
                this.f36780a.remove(cacheKey);
                q8.a.H(f36779b, "Found closed reference %d for key %s (%d)", Integer.valueOf(System.identityHashCode(kVar)), cacheKey.a(), Integer.valueOf(System.identityHashCode(cacheKey)));
                return false;
            }
            return true;
        }
    }

    public synchronized ta.k c(CacheKey cacheKey) {
        p8.j.g(cacheKey);
        ta.k kVar = (ta.k) this.f36780a.get(cacheKey);
        if (kVar != null) {
            synchronized (kVar) {
                if (!ta.k.O0(kVar)) {
                    this.f36780a.remove(cacheKey);
                    q8.a.H(f36779b, "Found closed reference %d for key %s (%d)", Integer.valueOf(System.identityHashCode(kVar)), cacheKey.a(), Integer.valueOf(System.identityHashCode(cacheKey)));
                    return null;
                }
                kVar = ta.k.g(kVar);
            }
        }
        return kVar;
    }

    public synchronized void f(CacheKey cacheKey, ta.k kVar) {
        p8.j.g(cacheKey);
        p8.j.b(Boolean.valueOf(ta.k.O0(kVar)));
        ta.k.k((ta.k) this.f36780a.put(cacheKey, ta.k.g(kVar)));
        e();
    }

    public boolean g(CacheKey cacheKey) {
        ta.k kVar;
        p8.j.g(cacheKey);
        synchronized (this) {
            kVar = (ta.k) this.f36780a.remove(cacheKey);
        }
        if (kVar == null) {
            return false;
        }
        try {
            return kVar.J0();
        } finally {
            kVar.close();
        }
    }

    public synchronized boolean h(CacheKey cacheKey, ta.k kVar) {
        p8.j.g(cacheKey);
        p8.j.g(kVar);
        p8.j.b(Boolean.valueOf(ta.k.O0(kVar)));
        ta.k kVar2 = (ta.k) this.f36780a.get(cacheKey);
        if (kVar2 == null) {
            return false;
        }
        CloseableReference n10 = kVar2.n();
        CloseableReference n11 = kVar.n();
        if (n10 != null && n11 != null && n10.J() == n11.J()) {
            this.f36780a.remove(cacheKey);
            CloseableReference.z(n11);
            CloseableReference.z(n10);
            ta.k.k(kVar2);
            e();
            return true;
        }
        CloseableReference.z(n11);
        CloseableReference.z(n10);
        ta.k.k(kVar2);
        return false;
    }
}
