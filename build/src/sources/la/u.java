package la;

import com.facebook.cache.common.CacheKey;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements x {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ s f36002a;

        a(s sVar) {
            this.f36002a = sVar;
        }

        @Override // la.x
        /* renamed from: d */
        public void a(CacheKey cacheKey) {
            this.f36002a.h(cacheKey);
        }

        @Override // la.x
        /* renamed from: e */
        public void b(CacheKey cacheKey) {
            this.f36002a.a(cacheKey);
        }

        @Override // la.x
        /* renamed from: f */
        public void c(CacheKey cacheKey) {
            this.f36002a.m(cacheKey);
        }
    }

    public static t a(w wVar, s sVar) {
        sVar.g(wVar);
        return new t(wVar, new a(sVar));
    }
}
