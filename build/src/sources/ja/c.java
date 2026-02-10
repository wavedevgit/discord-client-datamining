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
    private final CacheKey f30882a;

    /* renamed from: b  reason: collision with root package name */
    private final n f30883b;

    /* renamed from: d  reason: collision with root package name */
    private final LinkedHashSet f30885d = new LinkedHashSet();

    /* renamed from: c  reason: collision with root package name */
    private final n.b f30884c = new a();

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
        private final CacheKey f30887a;

        /* renamed from: b  reason: collision with root package name */
        private final int f30888b;

        public b(CacheKey cacheKey, int i10) {
            this.f30887a = cacheKey;
            this.f30888b = i10;
        }

        @Override // com.facebook.cache.common.CacheKey
        public String a() {
            return null;
        }

        @Override // com.facebook.cache.common.CacheKey
        public boolean b(Uri uri) {
            return this.f30887a.b(uri);
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
                if (this.f30888b == bVar.f30888b && this.f30887a.equals(bVar.f30887a)) {
                    return true;
                }
            }
            return false;
        }

        @Override // com.facebook.cache.common.CacheKey
        public int hashCode() {
            return (this.f30887a.hashCode() * 1013) + this.f30888b;
        }

        public String toString() {
            return h.b(this).b("imageCacheKey", this.f30887a).a("frameIndex", this.f30888b).toString();
        }
    }

    public c(CacheKey cacheKey, n nVar) {
        this.f30882a = cacheKey;
        this.f30883b = nVar;
    }

    private b e(int i10) {
        return new b(this.f30882a, i10);
    }

    private synchronized CacheKey g() {
        CacheKey cacheKey;
        Iterator it = this.f30885d.iterator();
        if (it.hasNext()) {
            cacheKey = (CacheKey) it.next();
            it.remove();
        } else {
            cacheKey = null;
        }
        return cacheKey;
    }

    public CloseableReference a(int i10, CloseableReference closeableReference) {
        return this.f30883b.d(e(i10), closeableReference, this.f30884c);
    }

    public boolean b(int i10) {
        return this.f30883b.contains(e(i10));
    }

    public CloseableReference c(int i10) {
        return this.f30883b.get(e(i10));
    }

    public CloseableReference d() {
        CloseableReference f10;
        do {
            CacheKey g10 = g();
            if (g10 == null) {
                return null;
            }
            f10 = this.f30883b.f(g10);
        } while (f10 == null);
        return f10;
    }

    public synchronized void f(CacheKey cacheKey, boolean z10) {
        try {
            if (z10) {
                this.f30885d.add(cacheKey);
            } else {
                this.f30885d.remove(cacheKey);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
