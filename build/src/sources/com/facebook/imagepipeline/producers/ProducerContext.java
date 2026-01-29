package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ProducerContext extends y9.a {
    boolean C0();

    void E(String str);

    ImageRequest.RequestLevel E0();

    y0 F();

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
