package ia;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import java.util.Iterator;
import java.util.LinkedHashSet;
import la.n;
import o8.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final CacheKey f28433a;

    /* renamed from: b  reason: collision with root package name */
    private final n f28434b;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f28436d = new LinkedHashSet();

    /* renamed from: c  reason: collision with root package name */
    private final n.b f28435c = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements n.b {
        a() {
        }

        @Override // la.n.b
        /* renamed from: b */
        public void a(CacheKey cacheKey, boolean z10) {
            c.this.f(cacheKey, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements CacheKey {

        /* renamed from: a  reason: collision with root package name */
        private final CacheKey f28438a;

        /* renamed from: b  reason: collision with root package name */
        private final int f28439b;

        public b(CacheKey cacheKey, int i10) {
            this.f28438a = cacheKey;
            this.f28439b = i10;
        }

        @Override // com.facebook.cache.common.CacheKey
        public String a() {
            return null;
        }

        @Override // com.facebook.cache.common.CacheKey
        public boolean b(Uri uri) {
            return this.f28438a.b(uri);
        }

        @Override // com.facebook.cache.common.CacheKey
        public boolean c() {
            return false;
        }

        @Override // com.facebook.cache.common.CacheKey
        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (obj instanceof b) {
                b bVar = (b) obj;
                if (this.f28439b == bVar.f28439b && this.f28438a.equals(bVar.f28438a)) {
                    return true;
                }
            }
            return false;
        }

        @Override // com.facebook.cache.common.CacheKey
        public int hashCode() {
            return (this.f28438a.hashCode() * 1013) + this.f28439b;
        }

        public String toString() {
            return h.b(this).b("imageCacheKey", this.f28438a).a("frameIndex", this.f28439b).toString();
        }
    }

    public c(CacheKey cacheKey, n nVar) {
        this.f28433a = cacheKey;
        this.f28434b = nVar;
    }

    private b e(int i10) {
        return new b(this.f28433a, i10);
    }

    private synchronized CacheKey g() {
        CacheKey cacheKey;
        Iterator it = this.f28436d.iterator();
        if (it.hasNext()) {
            cacheKey = (CacheKey) it.next();
            it.remove();
        } else {
            cacheKey = null;
        }
        return cacheKey;
    }

    public CloseableReference a(int i10, CloseableReference closeableReference) {
        return this.f28434b.a(e(i10), closeableReference, this.f28435c);
    }

    public boolean b(int i10) {
        return this.f28434b.contains(e(i10));
    }

    public CloseableReference c(int i10) {
        return this.f28434b.get(e(i10));
    }

    public CloseableReference d() {
        CloseableReference d10;
        do {
            CacheKey g10 = g();
            if (g10 == null) {
                return null;
            }
            d10 = this.f28434b.d(g10);
        } while (d10 == null);
        return d10;
    }

    public synchronized void f(CacheKey cacheKey, boolean z10) {
        try {
            if (z10) {
                this.f28436d.add(cacheKey);
            } else {
                this.f28436d.remove(cacheKey);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
