package ma;

import com.facebook.cache.common.CacheKey;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements x {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ s f36207a;

        a(s sVar) {
            this.f36207a = sVar;
        }

        @Override // ma.x
        /* renamed from: d */
        public void a(CacheKey cacheKey) {
            this.f36207a.g(cacheKey);
        }

        @Override // ma.x
        /* renamed from: e */
        public void b(CacheKey cacheKey) {
            this.f36207a.a(cacheKey);
        }

        @Override // ma.x
        /* renamed from: f */
        public void c(CacheKey cacheKey) {
            this.f36207a.m(cacheKey);
        }
    }

    public static t a(w wVar, s sVar) {
        sVar.j(wVar);
        return new t(wVar, new a(sVar));
    }
}
