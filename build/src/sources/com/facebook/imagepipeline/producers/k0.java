package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.request.ImageRequest;
import java.io.FileInputStream;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k0 extends j0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a f10817c = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k0(Executor executor, r8.i pooledByteBufferFactory) {
        super(executor, pooledByteBufferFactory);
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(pooledByteBufferFactory, "pooledByteBufferFactory");
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected sa.k d(ImageRequest imageRequest) {
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        return e(new FileInputStream(imageRequest.getSourceFile().toString()), (int) imageRequest.getSourceFile().length());
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected String f() {
        return "LocalFileFetchProducer";
    }
}
