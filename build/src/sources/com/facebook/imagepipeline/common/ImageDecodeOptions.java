package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import ma.b;
import o8.h;
import qa.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f11074m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f11075a;

    /* renamed from: b  reason: collision with root package name */
    public final int f11076b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f11077c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f11078d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f11079e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f11080f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f11081g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f11082h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f11083i;

    /* renamed from: j  reason: collision with root package name */
    public final c f11084j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f11085k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11086l;

    public ImageDecodeOptions(b bVar) {
        this.f11075a = bVar.l();
        this.f11076b = bVar.k();
        this.f11077c = bVar.h();
        this.f11078d = bVar.n();
        this.f11079e = bVar.m();
        this.f11080f = bVar.g();
        this.f11081g = bVar.j();
        this.f11082h = bVar.c();
        this.f11083i = bVar.b();
        this.f11084j = bVar.f();
        bVar.d();
        this.f11085k = bVar.e();
        this.f11086l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f11074m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f11075a).a("maxDimensionPx", this.f11076b).c("decodePreviewFrame", this.f11077c).c("useLastFrameForPreview", this.f11078d).c("useEncodedImageForPreview", this.f11079e).c("decodeAllFrames", this.f11080f).c("forceStaticImage", this.f11081g).b("bitmapConfigName", this.f11082h.name()).b("animatedBitmapConfigName", this.f11083i.name()).b("customImageDecoder", this.f11084j).b("bitmapTransformation", null).b("colorSpace", this.f11085k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f11075a != imageDecodeOptions.f11075a || this.f11076b != imageDecodeOptions.f11076b || this.f11077c != imageDecodeOptions.f11077c || this.f11078d != imageDecodeOptions.f11078d || this.f11079e != imageDecodeOptions.f11079e || this.f11080f != imageDecodeOptions.f11080f || this.f11081g != imageDecodeOptions.f11081g) {
            return false;
        }
        boolean z10 = this.f11086l;
        if (!z10 && this.f11082h != imageDecodeOptions.f11082h) {
            return false;
        }
        if ((z10 || this.f11083i == imageDecodeOptions.f11083i) && this.f11084j == imageDecodeOptions.f11084j && this.f11085k == imageDecodeOptions.f11085k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f11075a * 31) + this.f11076b) * 31) + (this.f11077c ? 1 : 0)) * 31) + (this.f11078d ? 1 : 0)) * 31) + (this.f11079e ? 1 : 0)) * 31) + (this.f11080f ? 1 : 0)) * 31) + (this.f11081g ? 1 : 0);
        if (!this.f11086l) {
            i12 = (i12 * 31) + this.f11082h.ordinal();
        }
        int i13 = 0;
        if (!this.f11086l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f11083i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f11084j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f11085k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
