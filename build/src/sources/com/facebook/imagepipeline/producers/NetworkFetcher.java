package com.facebook.imagepipeline.producers;

import java.io.InputStream;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface NetworkFetcher {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface Callback {
        void a();

        void b(InputStream inputStream, int i10);

        void onFailure(Throwable th2);
    }

    FetchState createFetchState(Consumer consumer, ProducerContext producerContext);

    void fetch(FetchState fetchState, Callback callback);

    Map getExtraMap(FetchState fetchState, int i10);

    void onFetchCompletion(FetchState fetchState, int i10);

    boolean shouldPropagate(FetchState fetchState);
}
