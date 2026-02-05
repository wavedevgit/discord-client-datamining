package com.withpersona.sdk2.inquiry.network.core;

import zq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_UseServerStylesFactory implements zq.d {
    private final NetworkCoreModule module;

    public NetworkCoreModule_UseServerStylesFactory(NetworkCoreModule networkCoreModule) {
        this.module = networkCoreModule;
    }

    public static NetworkCoreModule_UseServerStylesFactory create(NetworkCoreModule networkCoreModule) {
        return new NetworkCoreModule_UseServerStylesFactory(networkCoreModule);
    }

    public static String useServerStyles(NetworkCoreModule networkCoreModule) {
        return (String) g.d(networkCoreModule.useServerStyles());
    }

    @Override // javax.inject.Provider
    public String get() {
        return useServerStyles(this.module);
    }
}
