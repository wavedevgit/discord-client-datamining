package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import ma.b;
import o8.h;
import qa.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f11445m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f11446a;

    /* renamed from: b  reason: collision with root package name */
    public final int f11447b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f11448c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f11449d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f11450e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f11451f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f11452g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f11453h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f11454i;

    /* renamed from: j  reason: collision with root package name */
    public final c f11455j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f11456k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11457l;

    public ImageDecodeOptions(b bVar) {
        this.f11446a = bVar.l();
        this.f11447b = bVar.k();
        this.f11448c = bVar.h();
        this.f11449d = bVar.n();
        this.f11450e = bVar.m();
        this.f11451f = bVar.g();
        this.f11452g = bVar.j();
        this.f11453h = bVar.c();
        this.f11454i = bVar.b();
        this.f11455j = bVar.f();
        bVar.d();
        this.f11456k = bVar.e();
        this.f11457l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f11445m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f11446a).a("maxDimensionPx", this.f11447b).c("decodePreviewFrame", this.f11448c).c("useLastFrameForPreview", this.f11449d).c("useEncodedImageForPreview", this.f11450e).c("decodeAllFrames", this.f11451f).c("forceStaticImage", this.f11452g).b("bitmapConfigName", this.f11453h.name()).b("animatedBitmapConfigName", this.f11454i.name()).b("customImageDecoder", this.f11455j).b("bitmapTransformation", null).b("colorSpace", this.f11456k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f11446a != imageDecodeOptions.f11446a || this.f11447b != imageDecodeOptions.f11447b || this.f11448c != imageDecodeOptions.f11448c || this.f11449d != imageDecodeOptions.f11449d || this.f11450e != imageDecodeOptions.f11450e || this.f11451f != imageDecodeOptions.f11451f || this.f11452g != imageDecodeOptions.f11452g) {
            return false;
        }
        boolean z10 = this.f11457l;
        if (!z10 && this.f11453h != imageDecodeOptions.f11453h) {
            return false;
        }
        if ((z10 || this.f11454i == imageDecodeOptions.f11454i) && this.f11455j == imageDecodeOptions.f11455j && this.f11456k == imageDecodeOptions.f11456k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f11446a * 31) + this.f11447b) * 31) + (this.f11448c ? 1 : 0)) * 31) + (this.f11449d ? 1 : 0)) * 31) + (this.f11450e ? 1 : 0)) * 31) + (this.f11451f ? 1 : 0)) * 31) + (this.f11452g ? 1 : 0);
        if (!this.f11457l) {
            i12 = (i12 * 31) + this.f11453h.ordinal();
        }
        int i13 = 0;
        if (!this.f11457l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f11454i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f11455j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f11456k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
