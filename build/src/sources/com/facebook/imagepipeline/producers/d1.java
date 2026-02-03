package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d1 extends e {
    public d1(ImageRequest imageRequest, ProducerContext producerContext) {
        this(imageRequest, producerContext.getId(), producerContext.x(), producerContext.F(), producerContext.a(), producerContext.E0(), producerContext.C0(), producerContext.L(), producerContext.N(), producerContext.l());
    }

    public d1(ImageRequest imageRequest, String str, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        super(imageRequest, str, y0Var, obj, requestLevel, z10, z11, priority, rVar);
    }

    public d1(ImageRequest imageRequest, String str, String str2, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        super(imageRequest, str, str2, null, y0Var, obj, requestLevel, z10, z11, priority, rVar);
    }
}
