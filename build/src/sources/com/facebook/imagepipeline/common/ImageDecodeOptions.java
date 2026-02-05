package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import ma.b;
import o8.h;
import qa.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f10427m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f10428a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10429b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f10430c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f10431d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f10432e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f10433f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f10434g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f10435h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f10436i;

    /* renamed from: j  reason: collision with root package name */
    public final c f10437j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f10438k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10439l;

    public ImageDecodeOptions(b bVar) {
        this.f10428a = bVar.l();
        this.f10429b = bVar.k();
        this.f10430c = bVar.h();
        this.f10431d = bVar.n();
        this.f10432e = bVar.m();
        this.f10433f = bVar.g();
        this.f10434g = bVar.j();
        this.f10435h = bVar.c();
        this.f10436i = bVar.b();
        this.f10437j = bVar.f();
        bVar.d();
        this.f10438k = bVar.e();
        this.f10439l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f10427m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f10428a).a("maxDimensionPx", this.f10429b).c("decodePreviewFrame", this.f10430c).c("useLastFrameForPreview", this.f10431d).c("useEncodedImageForPreview", this.f10432e).c("decodeAllFrames", this.f10433f).c("forceStaticImage", this.f10434g).b("bitmapConfigName", this.f10435h.name()).b("animatedBitmapConfigName", this.f10436i.name()).b("customImageDecoder", this.f10437j).b("bitmapTransformation", null).b("colorSpace", this.f10438k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f10428a != imageDecodeOptions.f10428a || this.f10429b != imageDecodeOptions.f10429b || this.f10430c != imageDecodeOptions.f10430c || this.f10431d != imageDecodeOptions.f10431d || this.f10432e != imageDecodeOptions.f10432e || this.f10433f != imageDecodeOptions.f10433f || this.f10434g != imageDecodeOptions.f10434g) {
            return false;
        }
        boolean z10 = this.f10439l;
        if (!z10 && this.f10435h != imageDecodeOptions.f10435h) {
            return false;
        }
        if ((z10 || this.f10436i == imageDecodeOptions.f10436i) && this.f10437j == imageDecodeOptions.f10437j && this.f10438k == imageDecodeOptions.f10438k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f10428a * 31) + this.f10429b) * 31) + (this.f10430c ? 1 : 0)) * 31) + (this.f10431d ? 1 : 0)) * 31) + (this.f10432e ? 1 : 0)) * 31) + (this.f10433f ? 1 : 0)) * 31) + (this.f10434g ? 1 : 0);
        if (!this.f10439l) {
            i12 = (i12 * 31) + this.f10435h.ordinal();
        }
        int i13 = 0;
        if (!this.f10439l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f10436i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f10437j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f10438k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
