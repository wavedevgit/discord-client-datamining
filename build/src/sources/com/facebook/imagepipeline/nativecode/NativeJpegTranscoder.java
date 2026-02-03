package com.facebook.imagepipeline.nativecode;

import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import java.io.InputStream;
import java.io.OutputStream;
import o8.j;
import sa.k;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeJpegTranscoder implements za.c {

    /* renamed from: a  reason: collision with root package name */
    private boolean f11289a;

    /* renamed from: b  reason: collision with root package name */
    private int f11290b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f11291c;

    public NativeJpegTranscoder(boolean z10, int i10, boolean z11, boolean z12) {
        this.f11289a = z10;
        this.f11290b = i10;
        this.f11291c = z11;
        if (z12) {
            e.a();
        }
    }

    public static void e(InputStream inputStream, OutputStream outputStream, int i10, int i11, int i12) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        e.a();
        boolean z14 = false;
        if (i11 >= 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        if (i11 <= 16) {
            z11 = true;
        } else {
            z11 = false;
        }
        j.b(Boolean.valueOf(z11));
        if (i12 >= 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        j.b(Boolean.valueOf(z12));
        if (i12 <= 100) {
            z13 = true;
        } else {
            z13 = false;
        }
        j.b(Boolean.valueOf(z13));
        j.b(Boolean.valueOf(za.e.j(i10)));
        if (i11 != 8 || i10 != 0) {
            z14 = true;
        }
        j.c(z14, "no transformation requested");
        nativeTranscodeJpeg((InputStream) j.g(inputStream), (OutputStream) j.g(outputStream), i10, i11, i12);
    }

    public static void f(InputStream inputStream, OutputStream outputStream, int i10, int i11, int i12) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        e.a();
        boolean z14 = false;
        if (i11 >= 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        if (i11 <= 16) {
            z11 = true;
        } else {
            z11 = false;
        }
        j.b(Boolean.valueOf(z11));
        if (i12 >= 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        j.b(Boolean.valueOf(z12));
        if (i12 <= 100) {
            z13 = true;
        } else {
            z13 = false;
        }
        j.b(Boolean.valueOf(z13));
        j.b(Boolean.valueOf(za.e.i(i10)));
        if (i11 != 8 || i10 != 1) {
            z14 = true;
        }
        j.c(z14, "no transformation requested");
        nativeTranscodeJpegWithExifOrientation((InputStream) j.g(inputStream), (OutputStream) j.g(outputStream), i10, i11, i12);
    }

    @o8.d
    private static native void nativeTranscodeJpeg(InputStream inputStream, OutputStream outputStream, int i10, int i11, int i12);

    @o8.d
    private static native void nativeTranscodeJpegWithExifOrientation(InputStream inputStream, OutputStream outputStream, int i10, int i11, int i12);

    @Override // za.c
    public String a() {
        return "NativeJpegTranscoder";
    }

    @Override // za.c
    public boolean b(k kVar, RotationOptions rotationOptions, ResizeOptions resizeOptions) {
        if (rotationOptions == null) {
            rotationOptions = RotationOptions.d();
        }
        if (za.e.f(rotationOptions, resizeOptions, kVar, this.f11289a) < 8) {
            return true;
        }
        return false;
    }

    @Override // za.c
    public za.b c(k kVar, OutputStream outputStream, RotationOptions rotationOptions, ResizeOptions resizeOptions, fa.c cVar, Integer num, ColorSpace colorSpace) {
        if (num == null) {
            num = 85;
        }
        if (rotationOptions == null) {
            rotationOptions = RotationOptions.d();
        }
        int b10 = za.a.b(rotationOptions, resizeOptions, kVar, this.f11290b);
        try {
            int f10 = za.e.f(rotationOptions, resizeOptions, kVar, this.f11289a);
            int a10 = za.e.a(b10);
            if (this.f11291c) {
                f10 = a10;
            }
            InputStream N = kVar.N();
            if (za.e.f55559b.contains(Integer.valueOf(kVar.b1()))) {
                f((InputStream) j.h(N, "Cannot transcode from null input stream!"), outputStream, za.e.d(rotationOptions, kVar), f10, num.intValue());
            } else {
                e((InputStream) j.h(N, "Cannot transcode from null input stream!"), outputStream, za.e.e(rotationOptions, kVar), f10, num.intValue());
            }
            o8.b.b(N);
            int i10 = 1;
            if (b10 != 1) {
                i10 = 0;
            }
            return new za.b(i10);
        } catch (Throwable th2) {
            o8.b.b(null);
            throw th2;
        }
    }

    @Override // za.c
    public boolean d(fa.c cVar) {
        if (cVar == fa.b.f24079b) {
            return true;
        }
        return false;
    }
}
