package com.facebook.imagepipeline.producers;

import android.content.res.AssetFileDescriptor;
import android.content.res.Resources;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.IOException;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f10822d = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private final Resources f10823c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int b(ImageRequest imageRequest) {
            String path = imageRequest.getSourceUri().getPath();
            if (path != null) {
                String substring = path.substring(1);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                return Integer.parseInt(substring);
            }
            throw new IllegalStateException("Required value was null.");
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l0(Executor executor, r8.i pooledByteBufferFactory, Resources resources) {
        super(executor, pooledByteBufferFactory);
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(pooledByteBufferFactory, "pooledByteBufferFactory");
        Intrinsics.checkNotNullParameter(resources, "resources");
        this.f10823c = resources;
    }

    private final int g(ImageRequest imageRequest) {
        AssetFileDescriptor assetFileDescriptor = null;
        try {
            assetFileDescriptor = this.f10823c.openRawResourceFd(f10822d.b(imageRequest));
            int length = (int) assetFileDescriptor.getLength();
            try {
                assetFileDescriptor.close();
                return length;
            } catch (IOException unused) {
                return length;
            }
        } catch (Resources.NotFoundException unused2) {
            if (assetFileDescriptor != null) {
                try {
                    assetFileDescriptor.close();
                } catch (IOException unused3) {
                }
            }
            return -1;
        } catch (Throwable th2) {
            if (assetFileDescriptor != null) {
                try {
                    assetFileDescriptor.close();
                } catch (IOException unused4) {
                }
            }
            throw th2;
        }
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected sa.k d(ImageRequest imageRequest) {
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        return e(this.f10823c.openRawResource(f10822d.b(imageRequest)), g(imageRequest));
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected String f() {
        return "LocalResourceFetchProducer";
    }
}
