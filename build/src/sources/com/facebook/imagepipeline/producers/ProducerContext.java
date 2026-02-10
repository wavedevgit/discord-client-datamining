package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ProducerContext extends z9.a {
    Priority C();

    ImageRequest.RequestLevel C0();

    ImageRequest I();

    boolean Q();

    Object a();

    void g(x0 x0Var);

    String getId();

    oa.r k();

    void m(String str, String str2);

    String n();

    void s(String str);

    y0 y();

    boolean z();
}
