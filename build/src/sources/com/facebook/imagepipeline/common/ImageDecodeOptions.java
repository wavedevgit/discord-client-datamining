package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import na.b;
import p8.h;
import ra.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f11044m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f11045a;

    /* renamed from: b  reason: collision with root package name */
    public final int f11046b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f11047c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f11048d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f11049e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f11050f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f11051g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f11052h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f11053i;

    /* renamed from: j  reason: collision with root package name */
    public final c f11054j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f11055k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11056l;

    public ImageDecodeOptions(b bVar) {
        this.f11045a = bVar.l();
        this.f11046b = bVar.k();
        this.f11047c = bVar.h();
        this.f11048d = bVar.n();
        this.f11049e = bVar.m();
        this.f11050f = bVar.g();
        this.f11051g = bVar.j();
        this.f11052h = bVar.c();
        this.f11053i = bVar.b();
        this.f11054j = bVar.f();
        bVar.d();
        this.f11055k = bVar.e();
        this.f11056l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f11044m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f11045a).a("maxDimensionPx", this.f11046b).c("decodePreviewFrame", this.f11047c).c("useLastFrameForPreview", this.f11048d).c("useEncodedImageForPreview", this.f11049e).c("decodeAllFrames", this.f11050f).c("forceStaticImage", this.f11051g).b("bitmapConfigName", this.f11052h.name()).b("animatedBitmapConfigName", this.f11053i.name()).b("customImageDecoder", this.f11054j).b("bitmapTransformation", null).b("colorSpace", this.f11055k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f11045a != imageDecodeOptions.f11045a || this.f11046b != imageDecodeOptions.f11046b || this.f11047c != imageDecodeOptions.f11047c || this.f11048d != imageDecodeOptions.f11048d || this.f11049e != imageDecodeOptions.f11049e || this.f11050f != imageDecodeOptions.f11050f || this.f11051g != imageDecodeOptions.f11051g) {
            return false;
        }
        boolean z10 = this.f11056l;
        if (!z10 && this.f11052h != imageDecodeOptions.f11052h) {
            return false;
        }
        if ((z10 || this.f11053i == imageDecodeOptions.f11053i) && this.f11054j == imageDecodeOptions.f11054j && this.f11055k == imageDecodeOptions.f11055k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f11045a * 31) + this.f11046b) * 31) + (this.f11047c ? 1 : 0)) * 31) + (this.f11048d ? 1 : 0)) * 31) + (this.f11049e ? 1 : 0)) * 31) + (this.f11050f ? 1 : 0)) * 31) + (this.f11051g ? 1 : 0);
        if (!this.f11056l) {
            i12 = (i12 * 31) + this.f11052h.ordinal();
        }
        int i13 = 0;
        if (!this.f11056l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f11053i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f11054j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f11055k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
