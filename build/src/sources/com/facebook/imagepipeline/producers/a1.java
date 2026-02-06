package com.facebook.imagepipeline.producers;

import android.content.ContentResolver;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.InputStream;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a1 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f10572d = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private final ContentResolver f10573c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a1(Executor executor, r8.i pooledByteBufferFactory, ContentResolver contentResolver) {
        super(executor, pooledByteBufferFactory);
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(pooledByteBufferFactory, "pooledByteBufferFactory");
        Intrinsics.checkNotNullParameter(contentResolver, "contentResolver");
        this.f10573c = contentResolver;
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected sa.k d(ImageRequest imageRequest) {
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        InputStream openInputStream = this.f10573c.openInputStream(imageRequest.getSourceUri());
        if (openInputStream != null) {
            sa.k e10 = e(openInputStream, -1);
            Intrinsics.checkNotNullExpressionValue(e10, "getEncodedImage(...)");
            return e10;
        }
        throw new IllegalStateException("ContentResolver returned null InputStream");
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected String f() {
        return "QualifiedResourceFetchProducer";
    }
}
