package com.facebook.imagepipeline.common;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import ma.b;
import o8.h;
import qa.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageDecodeOptions {

    /* renamed from: m  reason: collision with root package name */
    private static final ImageDecodeOptions f10326m = b().a();

    /* renamed from: a  reason: collision with root package name */
    public final int f10327a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10328b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f10329c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f10330d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f10331e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f10332f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f10333g;

    /* renamed from: h  reason: collision with root package name */
    public final Bitmap.Config f10334h;

    /* renamed from: i  reason: collision with root package name */
    public final Bitmap.Config f10335i;

    /* renamed from: j  reason: collision with root package name */
    public final c f10336j;

    /* renamed from: k  reason: collision with root package name */
    public final ColorSpace f10337k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10338l;

    public ImageDecodeOptions(b bVar) {
        this.f10327a = bVar.l();
        this.f10328b = bVar.k();
        this.f10329c = bVar.h();
        this.f10330d = bVar.n();
        this.f10331e = bVar.m();
        this.f10332f = bVar.g();
        this.f10333g = bVar.j();
        this.f10334h = bVar.c();
        this.f10335i = bVar.b();
        this.f10336j = bVar.f();
        bVar.d();
        this.f10337k = bVar.e();
        this.f10338l = bVar.i();
    }

    public static ImageDecodeOptions a() {
        return f10326m;
    }

    public static b b() {
        return new b();
    }

    protected h.a c() {
        return h.b(this).a("minDecodeIntervalMs", this.f10327a).a("maxDimensionPx", this.f10328b).c("decodePreviewFrame", this.f10329c).c("useLastFrameForPreview", this.f10330d).c("useEncodedImageForPreview", this.f10331e).c("decodeAllFrames", this.f10332f).c("forceStaticImage", this.f10333g).b("bitmapConfigName", this.f10334h.name()).b("animatedBitmapConfigName", this.f10335i.name()).b("customImageDecoder", this.f10336j).b("bitmapTransformation", null).b("colorSpace", this.f10337k);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageDecodeOptions imageDecodeOptions = (ImageDecodeOptions) obj;
        if (this.f10327a != imageDecodeOptions.f10327a || this.f10328b != imageDecodeOptions.f10328b || this.f10329c != imageDecodeOptions.f10329c || this.f10330d != imageDecodeOptions.f10330d || this.f10331e != imageDecodeOptions.f10331e || this.f10332f != imageDecodeOptions.f10332f || this.f10333g != imageDecodeOptions.f10333g) {
            return false;
        }
        boolean z10 = this.f10338l;
        if (!z10 && this.f10334h != imageDecodeOptions.f10334h) {
            return false;
        }
        if ((z10 || this.f10335i == imageDecodeOptions.f10335i) && this.f10336j == imageDecodeOptions.f10336j && this.f10337k == imageDecodeOptions.f10337k) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12 = (((((((((((this.f10327a * 31) + this.f10328b) * 31) + (this.f10329c ? 1 : 0)) * 31) + (this.f10330d ? 1 : 0)) * 31) + (this.f10331e ? 1 : 0)) * 31) + (this.f10332f ? 1 : 0)) * 31) + (this.f10333g ? 1 : 0);
        if (!this.f10338l) {
            i12 = (i12 * 31) + this.f10334h.ordinal();
        }
        int i13 = 0;
        if (!this.f10338l) {
            int i14 = i12 * 31;
            Bitmap.Config config = this.f10335i;
            if (config != null) {
                i11 = config.ordinal();
            } else {
                i11 = 0;
            }
            i12 = i14 + i11;
        }
        int i15 = i12 * 31;
        c cVar = this.f10336j;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i16 = (i15 + i10) * 961;
        ColorSpace colorSpace = this.f10337k;
        if (colorSpace != null) {
            i13 = colorSpace.hashCode();
        }
        return i16 + i13;
    }

    public String toString() {
        return "ImageDecodeOptions{" + c().toString() + "}";
    }
}
