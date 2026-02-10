package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import na.b;
import p8.h;
import ra.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f10466m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f10467a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10468b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f10469c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f10470d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f10471e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f10472f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f10473g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f10474h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f10475i;

    /* renamed from: j  reason: collision with root package name */
    public final c f10476j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f10477k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10478l;

    public ImageDecodeOptions(b bVar) {
        this.f10467a = bVar.l();
        this.f10468b = bVar.k();
        this.f10469c = bVar.h();
        this.f10470d = bVar.n();
        this.f10471e = bVar.m();
        this.f10472f = bVar.g();
        this.f10473g = bVar.j();
        this.f10474h = bVar.c();
        this.f10475i = bVar.b();
        this.f10476j = bVar.f();
        bVar.d();
        this.f10477k = bVar.e();
        this.f10478l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f10466m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f10467a).a("maxDimensionPx", this.f10468b).c("decodePreviewFrame", this.f10469c).c("useLastFrameForPreview", this.f10470d).c("useEncodedImageForPreview", this.f10471e).c("decodeAllFrames", this.f10472f).c("forceStaticImage", this.f10473g).b("bitmapConfigName", this.f10474h.name()).b("animatedBitmapConfigName", this.f10475i.name()).b("customImageDecoder", this.f10476j).b("bitmapTransformation", null).b("colorSpace", this.f10477k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f10467a != imageDecodeOptions.f10467a || this.f10468b != imageDecodeOptions.f10468b || this.f10469c != imageDecodeOptions.f10469c || this.f10470d != imageDecodeOptions.f10470d || this.f10471e != imageDecodeOptions.f10471e || this.f10472f != imageDecodeOptions.f10472f || this.f10473g != imageDecodeOptions.f10473g) {
            return false;
        }
        boolean z10 = this.f10478l;
        if (!z10 && this.f10474h != imageDecodeOptions.f10474h) {
            return false;
        }
        if ((z10 || this.f10475i == imageDecodeOptions.f10475i) && this.f10476j == imageDecodeOptions.f10476j && this.f10477k == imageDecodeOptions.f10477k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f10467a * 31) + this.f10468b) * 31) + (this.f10469c ? 1 : 0)) * 31) + (this.f10470d ? 1 : 0)) * 31) + (this.f10471e ? 1 : 0)) * 31) + (this.f10472f ? 1 : 0)) * 31) + (this.f10473g ? 1 : 0);
        if (!this.f10478l) {
            i12 = (i12 * 31) + this.f10474h.ordinal();
        }
        int i13 = 0;
        if (!this.f10478l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f10475i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f10476j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f10477k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
