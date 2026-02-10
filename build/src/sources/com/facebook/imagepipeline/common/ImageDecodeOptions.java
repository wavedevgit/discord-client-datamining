package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import na.b;
import p8.h;
import ra.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f11043m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f11044a;

    /* renamed from: b  reason: collision with root package name */
    public final int f11045b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f11046c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f11047d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f11048e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f11049f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f11050g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f11051h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f11052i;

    /* renamed from: j  reason: collision with root package name */
    public final c f11053j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f11054k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11055l;

    public ImageDecodeOptions(b bVar) {
        this.f11044a = bVar.l();
        this.f11045b = bVar.k();
        this.f11046c = bVar.h();
        this.f11047d = bVar.n();
        this.f11048e = bVar.m();
        this.f11049f = bVar.g();
        this.f11050g = bVar.j();
        this.f11051h = bVar.c();
        this.f11052i = bVar.b();
        this.f11053j = bVar.f();
        bVar.d();
        this.f11054k = bVar.e();
        this.f11055l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f11043m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f11044a).a("maxDimensionPx", this.f11045b).c("decodePreviewFrame", this.f11046c).c("useLastFrameForPreview", this.f11047d).c("useEncodedImageForPreview", this.f11048e).c("decodeAllFrames", this.f11049f).c("forceStaticImage", this.f11050g).b("bitmapConfigName", this.f11051h.name()).b("animatedBitmapConfigName", this.f11052i.name()).b("customImageDecoder", this.f11053j).b("bitmapTransformation", null).b("colorSpace", this.f11054k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f11044a != imageDecodeOptions.f11044a || this.f11045b != imageDecodeOptions.f11045b || this.f11046c != imageDecodeOptions.f11046c || this.f11047d != imageDecodeOptions.f11047d || this.f11048e != imageDecodeOptions.f11048e || this.f11049f != imageDecodeOptions.f11049f || this.f11050g != imageDecodeOptions.f11050g) {
            return false;
        }
        boolean z10 = this.f11055l;
        if (!z10 && this.f11051h != imageDecodeOptions.f11051h) {
            return false;
        }
        if ((z10 || this.f11052i == imageDecodeOptions.f11052i) && this.f11053j == imageDecodeOptions.f11053j && this.f11054k == imageDecodeOptions.f11054k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f11044a * 31) + this.f11045b) * 31) + (this.f11046c ? 1 : 0)) * 31) + (this.f11047d ? 1 : 0)) * 31) + (this.f11048e ? 1 : 0)) * 31) + (this.f11049f ? 1 : 0)) * 31) + (this.f11050g ? 1 : 0);
        if (!this.f11055l) {
            i12 = (i12 * 31) + this.f11051h.ordinal();
        }
        int i13 = 0;
        if (!this.f11055l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f11052i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f11053j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f11054k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
