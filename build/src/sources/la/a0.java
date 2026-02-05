package la;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a0 {

    /* renamed from: b  reason: collision with root package name */
    private static final Class f36508b = a0.class;

    /* renamed from: a  reason: collision with root package name */
    private Map f36509a = new HashMap();

    private a0() {
    }

    public static a0 d() {
        return new a0();
    }

    private synchronized void e() {
        p8.a.z(f36508b, "Count = %d", Integer.valueOf(this.f36509a.size()));
    }

    public void a() {
        ArrayList arrayList;
        synchronized (this) {
            arrayList = new ArrayList(this.f36509a.values());
            this.f36509a.clear();
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
        if (!this.f36509a.containsKey(cacheKey)) {
            return false;
        }
        sa.k kVar = (sa.k) this.f36509a.get(cacheKey);
        synchronized (kVar) {
            if (!sa.k.S0(kVar)) {
                this.f36509a.remove(cacheKey);
                p8.a.H(f36508b, "Found closed reference %d for key %s (%d)", Integer.valueOf(System.identityHashCode(kVar)), cacheKey.a(), Integer.valueOf(System.identityHashCode(cacheKey)));
                return false;
            }
            return true;
        }
    }

    public synchronized sa.k c(CacheKey cacheKey) {
        o8.j.g(cacheKey);
        sa.k kVar = (sa.k) this.f36509a.get(cacheKey);
        if (kVar != null) {
            synchronized (kVar) {
                if (!sa.k.S0(kVar)) {
                    this.f36509a.remove(cacheKey);
                    p8.a.H(f36508b, "Found closed reference %d for key %s (%d)", Integer.valueOf(System.identityHashCode(kVar)), cacheKey.a(), Integer.valueOf(System.identityHashCode(cacheKey)));
                    return null;
                }
                kVar = sa.k.h(kVar);
            }
        }
        return kVar;
    }

    public synchronized void f(CacheKey cacheKey, sa.k kVar) {
        o8.j.g(cacheKey);
        o8.j.b(Boolean.valueOf(sa.k.S0(kVar)));
        sa.k.k((sa.k) this.f36509a.put(cacheKey, sa.k.h(kVar)));
        e();
    }

    public boolean g(CacheKey cacheKey) {
        sa.k kVar;
        o8.j.g(cacheKey);
        synchronized (this) {
            kVar = (sa.k) this.f36509a.remove(cacheKey);
        }
        if (kVar == null) {
            return false;
        }
        try {
            return kVar.N0();
        } finally {
            kVar.close();
        }
    }

    public synchronized boolean h(CacheKey cacheKey, sa.k kVar) {
        o8.j.g(cacheKey);
        o8.j.g(kVar);
        o8.j.b(Boolean.valueOf(sa.k.S0(kVar)));
        sa.k kVar2 = (sa.k) this.f36509a.get(cacheKey);
        if (kVar2 == null) {
            return false;
        }
        CloseableReference o10 = kVar2.o();
        CloseableReference o11 = kVar.o();
        if (o10 != null && o11 != null && o10.E0() == o11.E0()) {
            this.f36509a.remove(cacheKey);
            CloseableReference.N(o11);
            CloseableReference.N(o10);
            sa.k.k(kVar2);
            e();
            return true;
        }
        CloseableReference.N(o11);
        CloseableReference.N(o10);
        sa.k.k(kVar2);
        return false;
    }
}
