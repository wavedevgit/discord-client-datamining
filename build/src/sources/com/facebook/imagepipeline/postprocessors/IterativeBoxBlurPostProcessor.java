package com.facebook.imagepipeline.postprocessors;

import android.graphics.Bitmap;
import com.facebook.cache.common.CacheKey;
import com.facebook.imagepipeline.nativecode.NativeBlurFilter;
import com.facebook.imagepipeline.request.BasePostprocessor;
import i8.h;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class IterativeBoxBlurPostProcessor extends BasePostprocessor {

    /* renamed from: a  reason: collision with root package name */
    private final int f11302a;

    /* renamed from: b  reason: collision with root package name */
    private final int f11303b;

    /* renamed from: c  reason: collision with root package name */
    private CacheKey f11304c;

    public IterativeBoxBlurPostProcessor(int i10, int i11) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        j.b(Boolean.valueOf(i11 > 0));
        this.f11302a = i10;
        this.f11303b = i11;
    }

    @Override // com.facebook.imagepipeline.request.BasePostprocessor, com.facebook.imagepipeline.request.Postprocessor
    public CacheKey getPostprocessorCacheKey() {
        if (this.f11304c == null) {
            this.f11304c = new h(String.format(null, "i%dr%d", Integer.valueOf(this.f11302a), Integer.valueOf(this.f11303b)));
        }
        return this.f11304c;
    }

    @Override // com.facebook.imagepipeline.request.BasePostprocessor
    public void process(Bitmap bitmap) {
        NativeBlurFilter.a(bitmap, this.f11302a, this.f11303b);
    }
}
