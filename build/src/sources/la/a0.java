package la;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a0 {

    /* renamed from: b  reason: collision with root package name */
    private static final Class f35901b = a0.class;

    /* renamed from: a  reason: collision with root package name */
    private Map f35902a = new HashMap();

    private a0() {
    }

    public static a0 d() {
        return new a0();
    }

    private synchronized void e() {
        p8.a.z(f35901b, "Count = %d", Integer.valueOf(this.f35902a.size()));
    }

    public void a() {
        ArrayList arrayList;
        synchronized (this) {
            arrayList = new ArrayList(this.f35902a.values());
            this.f35902a.clear();
        }
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            sa.k kVar = (sa.k) arrayList.get(i10);
            if (kVar != null) {
                kVar.close();
            }
        }
    }

    public synchronized boolean b(CacheKey cacheKey) {
        o8.j.g(cacheKey);
        if (!this.f35902a.containsKey(cacheKey)) {
            return false;
        }
        sa.k kVar = (sa.k) this.f35902a.get(cacheKey);
        synchronized (kVar) {
            if (!sa.k.L0(kVar)) {
                this.f35902a.remove(cacheKey);
                p8.a.H(f35901b, "Found closed reference %d for key %s (%d)", Integer.valueOf(System.identityHashCode(kVar)), cacheKey.a(), Integer.valueOf(System.identityHashCode(cacheKey)));
                return false;
            }
            return true;
        }
    }

    public synchronized sa.k c(CacheKey cacheKey) {
        o8.j.g(cacheKey);
        sa.k kVar = (sa.k) this.f35902a.get(cacheKey);
        if (kVar != null) {
            synchronized (kVar) {
                if (!sa.k.L0(kVar)) {
                    this.f35902a.remove(cacheKey);
                    p8.a.H(f35901b, "Found closed reference %d for key %s (%d)", Integer.valueOf(System.identityHashCode(kVar)), cacheKey.a(), Integer.valueOf(System.identityHashCode(cacheKey)));
                    return null;
                }
                kVar = sa.k.g(kVar);
            }
        }
        return kVar;
    }

    public synchronized void f(CacheKey cacheKey, sa.k kVar) {
        o8.j.g(cacheKey);
        o8.j.b(Boolean.valueOf(sa.k.L0(kVar)));
        sa.k.k((sa.k) this.f35902a.put(cacheKey, sa.k.g(kVar)));
        e();
    }

    public boolean g(CacheKey cacheKey) {
        sa.k kVar;
        o8.j.g(cacheKey);
        synchronized (this) {
            kVar = (sa.k) this.f35902a.remove(cacheKey);
        }
        if (kVar == null) {
            return false;
        }
        try {
            return kVar.K0();
        } finally {
            kVar.close();
        }
    }

    public synchronized boolean h(CacheKey cacheKey, sa.k kVar) {
        o8.j.g(cacheKey);
        o8.j.g(kVar);
        o8.j.b(Boolean.valueOf(sa.k.L0(kVar)));
        sa.k kVar2 = (sa.k) this.f35902a.get(cacheKey);
        if (kVar2 == null) {
            return false;
        }
        CloseableReference n10 = kVar2.n();
        CloseableReference n11 = kVar.n();
        if (n10 != null && n11 != null && n10.J() == n11.J()) {
            this.f35902a.remove(cacheKey);
            CloseableReference.z(n11);
            CloseableReference.z(n10);
            sa.k.k(kVar2);
            e();
            return true;
        }
        CloseableReference.z(n11);
        CloseableReference.z(n10);
        sa.k.k(kVar2);
        return false;
    }
}
