package na;

import com.facebook.cache.disk.DiskCacheConfig;
import j8.f;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements o {

    /* renamed from: a  reason: collision with root package name */
    private l f38717a;

    public k(l lVar) {
        this.f38717a = lVar;
    }

    private static j8.f b(DiskCacheConfig diskCacheConfig, j8.e eVar) {
        return c(diskCacheConfig, eVar, Executors.newSingleThreadExecutor());
    }

    private static j8.f c(DiskCacheConfig diskCacheConfig, j8.e eVar, Executor executor) {
        return new j8.f(eVar, diskCacheConfig.h(), new f.c(diskCacheConfig.k(), diskCacheConfig.j(), diskCacheConfig.f()), diskCacheConfig.e(), diskCacheConfig.d(), diskCacheConfig.g(), executor, diskCacheConfig.i());
    }

    @Override // na.o
    public j8.j a(DiskCacheConfig diskCacheConfig) {
        return b(diskCacheConfig, this.f38717a.a(diskCacheConfig));
    }
}
