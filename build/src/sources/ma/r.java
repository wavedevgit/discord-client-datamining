package ma;

import com.facebook.cache.common.CacheKey;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements x {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ s f36773a;

        a(s sVar) {
            this.f36773a = sVar;
        }

        @Override // ma.x
        /* renamed from: d */
        public void a(CacheKey cacheKey) {
            this.f36773a.i(cacheKey);
        }

        @Override // ma.x
        /* renamed from: e */
        public void b(CacheKey cacheKey) {
            this.f36773a.f(cacheKey);
        }

        @Override // ma.x
        /* renamed from: f */
        public void c(CacheKey cacheKey) {
            this.f36773a.d(cacheKey);
        }
    }

    public static t a(w wVar, s sVar) {
        sVar.l(wVar);
        return new t(wVar, new a(sVar));
    }
}
