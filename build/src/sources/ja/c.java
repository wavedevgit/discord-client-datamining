package ja;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import java.util.Iterator;
import java.util.LinkedHashSet;
import ma.n;
import p8.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private final CacheKey f30883a;

    /* renamed from: b  reason: collision with root package name */
    private final n f30884b;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f30886d = new LinkedHashSet();

    /* renamed from: c  reason: collision with root package name */
    private final n.b f30885c = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements n.b {
        a() {
        }

        @Override // ma.n.b
        /* renamed from: b */
        public void a(CacheKey cacheKey, boolean z10) {
            c.this.f(cacheKey, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements CacheKey {

        /* renamed from: a  reason: collision with root package name */
        private final CacheKey f30888a;

        /* renamed from: b  reason: collision with root package name */
        private final int f30889b;

        public b(CacheKey cacheKey, int i10) {
            this.f30888a = cacheKey;
            this.f30889b = i10;
        }

        @Override // com.facebook.cache.common.CacheKey
        public String a() {
            return null;
        }

        @Override // com.facebook.cache.common.CacheKey
        public boolean b(Uri uri) {
            return this.f30888a.b(uri);
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
                if (this.f30889b == bVar.f30889b && this.f30888a.equals(bVar.f30888a)) {
                    return true;
                }
            }
            return false;
        }

        @Override // com.facebook.cache.common.CacheKey
        public int hashCode() {
            return (this.f30888a.hashCode() * 1013) + this.f30889b;
        }

        public String toString() {
            return h.b(this).b("imageCacheKey", this.f30888a).a("frameIndex", this.f30889b).toString();
        }
    }

    public c(CacheKey cacheKey, n nVar) {
        this.f30883a = cacheKey;
        this.f30884b = nVar;
    }

    private b e(int i10) {
        return new b(this.f30883a, i10);
    }

    private synchronized CacheKey g() {
        CacheKey cacheKey;
        Iterator it = this.f30886d.iterator();
        if (it.hasNext()) {
            cacheKey = (CacheKey) it.next();
            it.remove();
        } else {
            cacheKey = null;
        }
        return cacheKey;
    }

    public CloseableReference a(int i10, CloseableReference closeableReference) {
        return this.f30884b.d(e(i10), closeableReference, this.f30885c);
    }

    public boolean b(int i10) {
        return this.f30884b.contains(e(i10));
    }

    public CloseableReference c(int i10) {
        return this.f30884b.get(e(i10));
    }

    public CloseableReference d() {
        CloseableReference f10;
        do {
            CacheKey g10 = g();
            if (g10 == null) {
                return null;
            }
            f10 = this.f30884b.f(g10);
        } while (f10 == null);
        return f10;
    }

    public synchronized void f(CacheKey cacheKey, boolean z10) {
        try {
            if (z10) {
                this.f30886d.add(cacheKey);
            } else {
                this.f30886d.remove(cacheKey);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
