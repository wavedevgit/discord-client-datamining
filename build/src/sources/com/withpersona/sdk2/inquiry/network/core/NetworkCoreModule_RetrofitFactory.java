package com.withpersona.sdk2.inquiry.network.core;

import br.g;
import br.h;
import br.i;
import com.squareup.moshi.w;
import javax.inject.Provider;
import okhttp3.OkHttpClient;
import vv.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_RetrofitFactory implements br.d {
    private final NetworkCoreModule module;
    private final h moshiProvider;
    private final h okHttpClientProvider;
    private final h serverEndpointProvider;

    public NetworkCoreModule_RetrofitFactory(NetworkCoreModule networkCoreModule, h hVar, h hVar2, h hVar3) {
        this.module = networkCoreModule;
        this.serverEndpointProvider = hVar;
        this.okHttpClientProvider = hVar2;
        this.moshiProvider = hVar3;
    }

    public static NetworkCoreModule_RetrofitFactory create(NetworkCoreModule networkCoreModule, Provider provider, Provider provider2, Provider provider3) {
        return new NetworkCoreModule_RetrofitFactory(networkCoreModule, i.a(provider), i.a(provider2), i.a(provider3));
    }

    public static a0 retrofit(NetworkCoreModule networkCoreModule, String str, OkHttpClient okHttpClient, w wVar) {
        return (a0) g.d(networkCoreModule.retrofit(str, okHttpClient, wVar));
    }

    public static NetworkCoreModule_RetrofitFactory create(NetworkCoreModule networkCoreModule, h hVar, h hVar2, h hVar3) {
        return new NetworkCoreModule_RetrofitFactory(networkCoreModule, hVar, hVar2, hVar3);
    }

    @Override // javax.inject.Provider
    public a0 get() {
        return retrofit(this.module, (String) this.serverEndpointProvider.get(), (OkHttpClient) this.okHttpClientProvider.get(), (w) this.moshiProvider.get());
    }
}
