package oa;

import com.facebook.cache.disk.DiskCacheConfig;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import k8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements o {

    /* renamed from: a  reason: collision with root package name */
    private l f38694a;

    public k(l lVar) {
        this.f38694a = lVar;
    }

    private static k8.f b(DiskCacheConfig diskCacheConfig, k8.e eVar) {
        return c(diskCacheConfig, eVar, Executors.newSingleThreadExecutor());
    }

    private static k8.f c(DiskCacheConfig diskCacheConfig, k8.e eVar, Executor executor) {
        return new k8.f(eVar, diskCacheConfig.h(), new f.c(diskCacheConfig.k(), diskCacheConfig.j(), diskCacheConfig.f()), diskCacheConfig.e(), diskCacheConfig.d(), diskCacheConfig.g(), executor, diskCacheConfig.i());
    }

    @Override // oa.o
    public k8.j a(DiskCacheConfig diskCacheConfig) {
        return b(diskCacheConfig, this.f38694a.a(diskCacheConfig));
    }
}
