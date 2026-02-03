package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 extends OutputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f16315d = new e3();

    /* renamed from: e  reason: collision with root package name */
    private final File f16316e;

    /* renamed from: i  reason: collision with root package name */
    private final b4 f16317i;

    /* renamed from: o  reason: collision with root package name */
    private long f16318o;

    /* renamed from: p  reason: collision with root package name */
    private long f16319p;

    /* renamed from: q  reason: collision with root package name */
    private FileOutputStream f16320q;

    /* renamed from: r  reason: collision with root package name */
    private h4 f16321r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2(File file, b4 b4Var) {
        this.f16316e = file;
        this.f16317i = b4Var;
    }

    @Override // java.io.OutputStream
    public final void write(int i10) {
        write(new byte[]{(byte) i10}, 0, 1);
    }

    @Override // java.io.OutputStream
    public final void write(byte[] bArr) {
        write(bArr, 0, bArr.length);
    }

    @Override // java.io.OutputStream
    public final void write(byte[] bArr, int i10, int i11) {
        byte[] bArr2;
        int i12;
        while (i11 > 0) {
            if (this.f16318o == 0 && this.f16319p == 0) {
                int b10 = this.f16315d.b(bArr, i10, i11);
                if (b10 == -1) {
                    return;
                }
                i10 += b10;
                i11 -= b10;
                h4 c10 = this.f16315d.c();
                this.f16321r = c10;
                if (c10.d()) {
                    this.f16318o = 0L;
                    this.f16317i.l(this.f16321r.f(), 0, this.f16321r.f().length);
                    this.f16319p = this.f16321r.f().length;
                } else if (this.f16321r.h() && !this.f16321r.g()) {
                    this.f16317i.j(this.f16321r.f());
                    File file = new File(this.f16316e, this.f16321r.c());
                    file.getParentFile().mkdirs();
                    this.f16318o = this.f16321r.b();
                    this.f16320q = new FileOutputStream(file);
                } else {
                    byte[] f10 = this.f16321r.f();
                    this.f16317i.l(f10, 0, f10.length);
                    this.f16318o = this.f16321r.b();
                }
            }
            int i13 = i10;
            int i14 = i11;
            if (this.f16321r.g()) {
                i11 = i14;
                bArr = bArr;
                i10 = i13;
            } else {
                long j10 = i14;
                if (this.f16321r.d()) {
                    bArr2 = bArr;
                    this.f16317i.e(this.f16319p, bArr2, i13, i14);
                    i12 = i14;
                    this.f16319p += j10;
                } else {
                    bArr2 = bArr;
                    i12 = i14;
                    if (this.f16321r.h()) {
                        i14 = (int) Math.min(j10, this.f16318o);
                        this.f16320q.write(bArr2, i13, i14);
                        long j11 = this.f16318o - i14;
                        this.f16318o = j11;
                        if (j11 == 0) {
                            this.f16320q.close();
                        }
                    } else {
                        i14 = (int) Math.min(j10, this.f16318o);
                        this.f16317i.e((this.f16321r.f().length + this.f16321r.b()) - this.f16318o, bArr2, i13, i14);
                        this.f16318o -= i14;
                    }
                }
                i10 = i13 + i14;
                i11 = i12 - i14;
                bArr = bArr2;
            }
        }
    }
}
