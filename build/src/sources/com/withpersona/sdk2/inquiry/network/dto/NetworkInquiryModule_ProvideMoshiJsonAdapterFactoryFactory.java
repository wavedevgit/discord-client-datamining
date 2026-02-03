package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import java.util.Set;
import uq.d;
import uq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory implements d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class InstanceHolder {
        static final NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory INSTANCE = new NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory();

        private InstanceHolder() {
        }
    }

    public static NetworkInquiryModule_ProvideMoshiJsonAdapterFactoryFactory create() {
        return InstanceHolder.INSTANCE;
    }

    public static Set<h.e> provideMoshiJsonAdapterFactory() {
        return (Set) g.d(NetworkInquiryModule.provideMoshiJsonAdapterFactory());
    }

    @Override // javax.inject.Provider
    public Set<h.e> get() {
        return provideMoshiJsonAdapterFactory();
    }
}
