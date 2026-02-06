package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ProducerContext extends y9.a {
    Priority C();

    ImageRequest.RequestLevel E0();

    ImageRequest I();

    boolean P();

    Object a();

    void g(x0 x0Var);

    String getId();

    na.r k();

    void m(String str, String str2);

    String n();

    void s(String str);

    y0 y();

    boolean z();
}
