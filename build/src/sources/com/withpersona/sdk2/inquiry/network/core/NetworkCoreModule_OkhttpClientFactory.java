package com.withpersona.sdk2.inquiry.network.core;

import android.content.Context;
import java.util.Map;
import java.util.Set;
import javax.inject.Provider;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import uq.h;
import uq.i;
import vn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_OkhttpClientFactory implements uq.d {
    private final h contextProvider;
    private final h deviceInfoProvider;
    private final h deviceVendorIDProvider;
    private final h headersProvider;
    private final h interceptorsProvider;
    private final h loggerProvider;
    private final NetworkCoreModule module;

    public NetworkCoreModule_OkhttpClientFactory(NetworkCoreModule networkCoreModule, h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.module = networkCoreModule;
        this.interceptorsProvider = hVar;
        this.headersProvider = hVar2;
        this.contextProvider = hVar3;
        this.deviceVendorIDProvider = hVar4;
        this.deviceInfoProvider = hVar5;
        this.loggerProvider = hVar6;
    }

    public static NetworkCoreModule_OkhttpClientFactory create(NetworkCoreModule networkCoreModule, Provider provider, Provider provider2, Provider provider3, Provider provider4, Provider provider5, Provider provider6) {
        return new NetworkCoreModule_OkhttpClientFactory(networkCoreModule, i.a(provider), i.a(provider2), i.a(provider3), i.a(provider4), i.a(provider5), i.a(provider6));
    }

    public static OkHttpClient okhttpClient(NetworkCoreModule networkCoreModule, Set<Interceptor> set, Map<String, String> map, Context context, g gVar, vn.b bVar, wo.b bVar2) {
        return (OkHttpClient) uq.g.d(networkCoreModule.okhttpClient(set, map, context, gVar, bVar, bVar2));
    }

    public static NetworkCoreModule_OkhttpClientFactory create(NetworkCoreModule networkCoreModule, h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new NetworkCoreModule_OkhttpClientFactory(networkCoreModule, hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    @Override // javax.inject.Provider
    public OkHttpClient get() {
        return okhttpClient(this.module, (Set) this.interceptorsProvider.get(), (Map) this.headersProvider.get(), (Context) this.contextProvider.get(), (g) this.deviceVendorIDProvider.get(), (vn.b) this.deviceInfoProvider.get(), (wo.b) this.loggerProvider.get());
    }
}
