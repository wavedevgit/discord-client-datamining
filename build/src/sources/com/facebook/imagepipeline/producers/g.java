package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends i {

    /* renamed from: d  reason: collision with root package name */
    public static final a f10754d = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(la.w memoryCache, la.k cacheKeyFactory, w0 inputProducer) {
        super(memoryCache, cacheKeyFactory, inputProducer);
        Intrinsics.checkNotNullParameter(memoryCache, "memoryCache");
        Intrinsics.checkNotNullParameter(cacheKeyFactory, "cacheKeyFactory");
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
    }

    @Override // com.facebook.imagepipeline.producers.i
    protected String d() {
        return "pipe_ui";
    }

    @Override // com.facebook.imagepipeline.producers.i
    protected String e() {
        return "BitmapMemoryCacheGetProducer";
    }

    @Override // com.facebook.imagepipeline.producers.i
    protected Consumer g(Consumer consumer, CacheKey cacheKey, boolean z10) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
        return consumer;
    }
}
