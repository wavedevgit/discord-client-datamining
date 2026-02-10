package com.facebook.imagepipeline.nativecode;

import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import java.io.InputStream;
import java.io.OutputStream;
import p8.j;
import ta.k;
@p8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeJpegTranscoder implements ab.c {

    /* renamed from: a  reason: collision with root package name */
    private boolean f10681a;

    /* renamed from: b  reason: collision with root package name */
    private int f10682b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f10683c;

    public NativeJpegTranscoder(boolean z10, int i10, boolean z11, boolean z12) {
        this.f10681a = z10;
        this.f10682b = i10;
        this.f10683c = z11;
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
        j.b(Boolean.valueOf(ab.e.j(i10)));
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
        j.b(Boolean.valueOf(ab.e.i(i10)));
        if (i11 != 8 || i10 != 1) {
            z14 = true;
        }
        j.c(z14, "no transformation requested");
        nativeTranscodeJpegWithExifOrientation((InputStream) j.g(inputStream), (OutputStream) j.g(outputStream), i10, i11, i12);
    }

    @p8.d
    private static native void nativeTranscodeJpeg(InputStream inputStream, OutputStream outputStream, int i10, int i11, int i12);

    @p8.d
    private static native void nativeTranscodeJpegWithExifOrientation(InputStream inputStream, OutputStream outputStream, int i10, int i11, int i12);

    @Override // ab.c
    public String a() {
        return "NativeJpegTranscoder";
    }

    @Override // ab.c
    public boolean b(ga.c cVar) {
        if (cVar == ga.b.f24082b) {
            return true;
        }
        return false;
    }

    @Override // ab.c
    public ab.b c(k kVar, OutputStream outputStream, RotationOptions rotationOptions, ResizeOptions resizeOptions, ga.c cVar, Integer num, ColorSpace colorSpace) {
        if (num == null) {
            num = 85;
        }
        if (rotationOptions == null) {
            rotationOptions = RotationOptions.d();
        }
        int b10 = ab.a.b(rotationOptions, resizeOptions, kVar, this.f10682b);
        try {
            int f10 = ab.e.f(rotationOptions, resizeOptions, kVar, this.f10681a);
            int a10 = ab.e.a(b10);
            if (this.f10683c) {
                f10 = a10;
            }
            InputStream C = kVar.C();
            if (ab.e.f530b.contains(Integer.valueOf(kVar.X0()))) {
                f((InputStream) j.h(C, "Cannot transcode from null input stream!"), outputStream, ab.e.d(rotationOptions, kVar), f10, num.intValue());
            } else {
                e((InputStream) j.h(C, "Cannot transcode from null input stream!"), outputStream, ab.e.e(rotationOptions, kVar), f10, num.intValue());
            }
            p8.b.b(C);
            int i10 = 1;
            if (b10 != 1) {
                i10 = 0;
            }
            return new ab.b(i10);
        } catch (Throwable th2) {
            p8.b.b(null);
            throw th2;
        }
    }

    @Override // ab.c
    public boolean d(k kVar, RotationOptions rotationOptions, ResizeOptions resizeOptions) {
        if (rotationOptions == null) {
            rotationOptions = RotationOptions.d();
        }
        if (ab.e.f(rotationOptions, resizeOptions, kVar, this.f10681a) < 8) {
            return true;
        }
        return false;
    }
}
