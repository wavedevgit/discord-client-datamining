package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ProducerContext extends y9.a {
    boolean D0();

    void E(String str);

    y0 F();

    ImageRequest.RequestLevel F0();

    boolean L();

    Priority N();

    ImageRequest V();

    Object a();

    String getId();

    void h(x0 x0Var);

    na.r l();

    void n(String str, String str2);

    String x();
}
