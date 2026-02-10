package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ProducerContext extends z9.a {
    Priority C();

    ImageRequest I();

    boolean Q();

    Object a();

    String getId();

    void h(x0 x0Var);

    oa.r i();

    void m(String str, String str2);

    String n();

    void s(String str);

    y0 y();

    boolean z();

    ImageRequest.RequestLevel z0();
}
