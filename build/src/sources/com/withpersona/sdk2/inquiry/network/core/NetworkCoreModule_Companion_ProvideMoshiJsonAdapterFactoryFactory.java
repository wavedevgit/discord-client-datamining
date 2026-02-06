package com.withpersona.sdk2.inquiry.network.core;

import br.g;
import com.squareup.moshi.h;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkCoreModule_Companion_ProvideMoshiJsonAdapterFactoryFactory implements br.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class InstanceHolder {
        static final NetworkCoreModule_Companion_ProvideMoshiJsonAdapterFactoryFactory INSTANCE = new NetworkCoreModule_Companion_ProvideMoshiJsonAdapterFactoryFactory();

        private InstanceHolder() {
        }
    }

    public static NetworkCoreModule_Companion_ProvideMoshiJsonAdapterFactoryFactory create() {
        return InstanceHolder.INSTANCE;
    }

    public static Set<h.e> provideMoshiJsonAdapterFactory() {
        return (Set) g.d(NetworkCoreModule.Companion.provideMoshiJsonAdapterFactory());
    }

    @Override // javax.inject.Provider
    public Set<h.e> get() {
        return provideMoshiJsonAdapterFactory();
    }
}
