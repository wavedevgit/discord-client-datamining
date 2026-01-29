package com.facebook.imagepipeline.producers;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z0 {
    void onProducerEvent(String str, String str2, String str3);

    void onProducerFinishWithCancellation(String str, String str2, Map map);

    void onProducerFinishWithFailure(String str, String str2, Throwable th2, Map map);

    void onProducerFinishWithSuccess(String str, String str2, Map map);

    void onProducerStart(String str, String str2);

    void onUltimateProducerReached(String str, String str2, boolean z10);

    boolean requiresExtraMap(String str);
}
