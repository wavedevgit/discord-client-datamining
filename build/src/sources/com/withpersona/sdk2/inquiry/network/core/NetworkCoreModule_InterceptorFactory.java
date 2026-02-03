package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.w;
import javax.inject.Provider;
import okhttp3.Interceptor;
import wq.g;
import wq.h;
import wq.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_InterceptorFactory implements wq.d {
    private final NetworkCoreModule module;
    private final h moshiProvider;

    public NetworkCoreModule_InterceptorFactory(NetworkCoreModule networkCoreModule, h hVar) {
        this.module = networkCoreModule;
        this.moshiProvider = hVar;
    }

    public static NetworkCoreModule_InterceptorFactory create(NetworkCoreModule networkCoreModule, Provider provider) {
        return new NetworkCoreModule_InterceptorFactory(networkCoreModule, i.a(provider));
    }

    public static Interceptor interceptor(NetworkCoreModule networkCoreModule, w wVar) {
        return (Interceptor) g.d(networkCoreModule.interceptor(wVar));
    }

    public static NetworkCoreModule_InterceptorFactory create(NetworkCoreModule networkCoreModule, h hVar) {
        return new NetworkCoreModule_InterceptorFactory(networkCoreModule, hVar);
    }

    @Override // javax.inject.Provider
    public Interceptor get() {
        return interceptor(this.module, (w) this.moshiProvider.get());
    }
}
