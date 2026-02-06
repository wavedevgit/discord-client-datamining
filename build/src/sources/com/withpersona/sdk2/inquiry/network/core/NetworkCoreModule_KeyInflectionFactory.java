package com.withpersona.sdk2.inquiry.network.core;

import br.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_KeyInflectionFactory implements br.d {
    private final NetworkCoreModule module;

    public NetworkCoreModule_KeyInflectionFactory(NetworkCoreModule networkCoreModule) {
        this.module = networkCoreModule;
    }

    public static NetworkCoreModule_KeyInflectionFactory create(NetworkCoreModule networkCoreModule) {
        return new NetworkCoreModule_KeyInflectionFactory(networkCoreModule);
    }

    public static String keyInflection(NetworkCoreModule networkCoreModule) {
        return (String) g.d(networkCoreModule.keyInflection());
    }

    @Override // javax.inject.Provider
    public String get() {
        return keyInflection(this.module);
    }
}
