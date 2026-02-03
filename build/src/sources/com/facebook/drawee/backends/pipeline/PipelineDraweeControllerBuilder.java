package com.facebook.drawee.backends.pipeline;

import android.content.Context;
import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.imagepipeline.common.RotationOptions;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.listener.RequestListener;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import e9.f;
import java.util.Set;
import la.k;
import o8.e;
import ya.b;
import z9.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PipelineDraweeControllerBuilder extends AbstractDraweeControllerBuilder {

    /* renamed from: t  reason: collision with root package name */
    private final ImagePipeline f9562t;

    /* renamed from: u  reason: collision with root package name */
    private final f f9563u;

    /* renamed from: v  reason: collision with root package name */
    private e f9564v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f9565a;

        static {
            int[] iArr = new int[AbstractDraweeControllerBuilder.c.values().length];
            f9565a = iArr;
            try {
                iArr[AbstractDraweeControllerBuilder.c.FULL_FETCH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f9565a[AbstractDraweeControllerBuilder.c.DISK_CACHE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f9565a[AbstractDraweeControllerBuilder.c.BITMAP_MEMORY_CACHE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public PipelineDraweeControllerBuilder(Context context, f fVar, ImagePipeline imagePipeline, Set set, Set set2) {
        super(context, set, set2);
        this.f9562t = imagePipeline;
        this.f9563u = fVar;
    }

    public static ImageRequest.RequestLevel I(AbstractDraweeControllerBuilder.c cVar) {
        int i10 = a.f9565a[cVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return ImageRequest.RequestLevel.BITMAP_MEMORY_CACHE;
                }
                throw new RuntimeException("Cache level" + cVar + "is not supported. ");
            }
            return ImageRequest.RequestLevel.DISK_CACHE;
        }
        return ImageRequest.RequestLevel.FULL_FETCH;
    }

    private CacheKey J() {
        ImageRequest imageRequest = (ImageRequest) n();
        k r10 = this.f9562t.r();
        if (r10 != null && imageRequest != null) {
            if (imageRequest.getPostprocessor() != null) {
                return r10.getPostprocessedBitmapCacheKey(imageRequest, f());
            }
            return r10.getBitmapCacheKey(imageRequest, f());
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.AbstractDraweeControllerBuilder
    /* renamed from: K */
    public DataSource i(DraweeController draweeController, String str, ImageRequest imageRequest, Object obj, AbstractDraweeControllerBuilder.c cVar) {
        return this.f9562t.m(imageRequest, obj, I(cVar), L(draweeController), str);
    }

    protected RequestListener L(DraweeController draweeController) {
        if (draweeController instanceof com.facebook.drawee.backends.pipeline.a) {
            return ((com.facebook.drawee.backends.pipeline.a) draweeController).k0();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.AbstractDraweeControllerBuilder
    /* renamed from: M */
    public com.facebook.drawee.backends.pipeline.a x() {
        com.facebook.drawee.backends.pipeline.a c10;
        if (b.d()) {
            b.a("PipelineDraweeControllerBuilder#obtainController");
        }
        try {
            DraweeController p10 = p();
            String e10 = AbstractDraweeControllerBuilder.e();
            if (p10 instanceof com.facebook.drawee.backends.pipeline.a) {
                c10 = (com.facebook.drawee.backends.pipeline.a) p10;
            } else {
                c10 = this.f9563u.c();
            }
            com.facebook.drawee.backends.pipeline.a aVar = c10;
            aVar.m0(y(aVar, e10), e10, J(), f(), this.f9564v);
            aVar.n0(null, this);
            if (b.d()) {
                b.b();
            }
            return aVar;
        } catch (Throwable th2) {
            if (b.d()) {
                b.b();
            }
            throw th2;
        }
    }

    public PipelineDraweeControllerBuilder N(g gVar) {
        return (PipelineDraweeControllerBuilder) r();
    }

    @Override // n9.b
    /* renamed from: O */
    public PipelineDraweeControllerBuilder a(Uri uri) {
        if (uri == null) {
            return (PipelineDraweeControllerBuilder) super.E(null);
        }
        return (PipelineDraweeControllerBuilder) super.E(ImageRequestBuilder.x(uri).P(RotationOptions.e()).a());
    }

    public PipelineDraweeControllerBuilder P(String str) {
        if (str != null && !str.isEmpty()) {
            return a(Uri.parse(str));
        }
        return (PipelineDraweeControllerBuilder) super.E(ImageRequest.fromUri(str));
    }
}
