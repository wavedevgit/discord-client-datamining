package com.facebook.imagepipeline.postprocessors;

import android.graphics.Bitmap;
import com.facebook.cache.common.CacheKey;
import com.facebook.imagepipeline.nativecode.NativeBlurFilter;
import com.facebook.imagepipeline.request.BasePostprocessor;
import j8.h;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class IterativeBoxBlurPostProcessor extends BasePostprocessor {

    /* renamed from: a  reason: collision with root package name */
    private final int f10694a;

    /* renamed from: b  reason: collision with root package name */
    private final int f10695b;

    /* renamed from: c  reason: collision with root package name */
    private CacheKey f10696c;

    public IterativeBoxBlurPostProcessor(int i10, int i11) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        j.b(Boolean.valueOf(i11 > 0));
        this.f10694a = i10;
        this.f10695b = i11;
    }

    @Override // com.facebook.imagepipeline.request.BasePostprocessor, com.facebook.imagepipeline.request.Postprocessor
    public CacheKey getPostprocessorCacheKey() {
        if (this.f10696c == null) {
            this.f10696c = new h(String.format(null, "i%dr%d", Integer.valueOf(this.f10694a), Integer.valueOf(this.f10695b)));
        }
        return this.f10696c;
    }

    @Override // com.facebook.imagepipeline.request.BasePostprocessor
    public void process(Bitmap bitmap) {
        NativeBlurFilter.a(bitmap, this.f10694a, this.f10695b);
    }
}
