package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import ma.b;
import o8.h;
import qa.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f10042m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f10043a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10044b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f10045c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f10046d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f10047e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f10048f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f10049g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f10050h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f10051i;

    /* renamed from: j  reason: collision with root package name */
    public final c f10052j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f10053k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10054l;

    public ImageDecodeOptions(b bVar) {
        this.f10043a = bVar.l();
        this.f10044b = bVar.k();
        this.f10045c = bVar.h();
        this.f10046d = bVar.n();
        this.f10047e = bVar.m();
        this.f10048f = bVar.g();
        this.f10049g = bVar.j();
        this.f10050h = bVar.c();
        this.f10051i = bVar.b();
        this.f10052j = bVar.f();
        bVar.d();
        this.f10053k = bVar.e();
        this.f10054l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f10042m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f10043a).a("maxDimensionPx", this.f10044b).c("decodePreviewFrame", this.f10045c).c("useLastFrameForPreview", this.f10046d).c("useEncodedImageForPreview", this.f10047e).c("decodeAllFrames", this.f10048f).c("forceStaticImage", this.f10049g).b("bitmapConfigName", this.f10050h.name()).b("animatedBitmapConfigName", this.f10051i.name()).b("customImageDecoder", this.f10052j).b("bitmapTransformation", null).b("colorSpace", this.f10053k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f10043a != imageDecodeOptions.f10043a || this.f10044b != imageDecodeOptions.f10044b || this.f10045c != imageDecodeOptions.f10045c || this.f10046d != imageDecodeOptions.f10046d || this.f10047e != imageDecodeOptions.f10047e || this.f10048f != imageDecodeOptions.f10048f || this.f10049g != imageDecodeOptions.f10049g) {
            return false;
        }
        boolean z10 = this.f10054l;
        if (!z10 && this.f10050h != imageDecodeOptions.f10050h) {
            return false;
        }
        if ((z10 || this.f10051i == imageDecodeOptions.f10051i) && this.f10052j == imageDecodeOptions.f10052j && this.f10053k == imageDecodeOptions.f10053k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f10043a * 31) + this.f10044b) * 31) + (this.f10045c ? 1 : 0)) * 31) + (this.f10046d ? 1 : 0)) * 31) + (this.f10047e ? 1 : 0)) * 31) + (this.f10048f ? 1 : 0)) * 31) + (this.f10049g ? 1 : 0);
        if (!this.f10054l) {
            i12 = (i12 * 31) + this.f10050h.ordinal();
        }
        int i13 = 0;
        if (!this.f10054l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f10051i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f10052j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f10053k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
