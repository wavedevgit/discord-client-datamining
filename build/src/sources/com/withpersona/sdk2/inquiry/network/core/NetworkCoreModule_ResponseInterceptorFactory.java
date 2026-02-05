package com.withpersona.sdk2.inquiry.network.core;

import okhttp3.Interceptor;
import zq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_ResponseInterceptorFactory implements zq.d {
    private final NetworkCoreModule module;

    public NetworkCoreModule_ResponseInterceptorFactory(NetworkCoreModule networkCoreModule) {
        this.module = networkCoreModule;
    }

    public static NetworkCoreModule_ResponseInterceptorFactory create(NetworkCoreModule networkCoreModule) {
        return new NetworkCoreModule_ResponseInterceptorFactory(networkCoreModule);
    }

    public static Interceptor responseInterceptor(NetworkCoreModule networkCoreModule) {
        return (Interceptor) g.d(networkCoreModule.responseInterceptor());
    }

    @Override // javax.inject.Provider
    public Interceptor get() {
        return responseInterceptor(this.module);
    }
}
