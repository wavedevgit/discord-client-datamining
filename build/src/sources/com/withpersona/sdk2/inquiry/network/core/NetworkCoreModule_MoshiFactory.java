package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.w;
import java.util.Set;
import javax.inject.Provider;
import zq.g;
import zq.h;
import zq.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_MoshiFactory implements zq.d {
    private final h jsonAdapterBindingsProvider;
    private final h jsonAdapterFactoryProvider;
    private final h jsonAdaptersProvider;
    private final NetworkCoreModule module;

    public NetworkCoreModule_MoshiFactory(NetworkCoreModule networkCoreModule, h hVar, h hVar2, h hVar3) {
        this.module = networkCoreModule;
        this.jsonAdaptersProvider = hVar;
        this.jsonAdapterBindingsProvider = hVar2;
        this.jsonAdapterFactoryProvider = hVar3;
    }

    public static NetworkCoreModule_MoshiFactory create(NetworkCoreModule networkCoreModule, Provider provider, Provider provider2, Provider provider3) {
        return new NetworkCoreModule_MoshiFactory(networkCoreModule, i.a(provider), i.a(provider2), i.a(provider3));
    }

    public static w moshi(NetworkCoreModule networkCoreModule, Set<Object> set, Set<JsonAdapterBinding<?>> set2, Set<h.e> set3) {
        return (w) g.d(networkCoreModule.moshi(set, set2, set3));
    }

    public static NetworkCoreModule_MoshiFactory create(NetworkCoreModule networkCoreModule, zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new NetworkCoreModule_MoshiFactory(networkCoreModule, hVar, hVar2, hVar3);
    }

    @Override // javax.inject.Provider
    public w get() {
        return moshi(this.module, (Set) this.jsonAdaptersProvider.get(), (Set) this.jsonAdapterBindingsProvider.get(), (Set) this.jsonAdapterFactoryProvider.get());
    }
}
