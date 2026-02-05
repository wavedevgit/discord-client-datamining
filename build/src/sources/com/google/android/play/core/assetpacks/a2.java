package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 extends OutputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f15677d = new e3();

    /* renamed from: e  reason: collision with root package name */
    private final File f15678e;

    /* renamed from: i  reason: collision with root package name */
    private final b4 f15679i;

    /* renamed from: o  reason: collision with root package name */
    private long f15680o;

    /* renamed from: p  reason: collision with root package name */
    private long f15681p;

    /* renamed from: q  reason: collision with root package name */
    private FileOutputStream f15682q;

    /* renamed from: r  reason: collision with root package name */
    private h4 f15683r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2(File file, b4 b4Var) {
        this.f15678e = file;
        this.f15679i = b4Var;
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
            if (this.f15680o == 0 && this.f15681p == 0) {
                int b10 = this.f15677d.b(bArr, i10, i11);
                if (b10 == -1) {
                    return;
                }
                i10 += b10;
                i11 -= b10;
                h4 c10 = this.f15677d.c();
                this.f15683r = c10;
                if (c10.d()) {
                    this.f15680o = 0L;
                    this.f15679i.l(this.f15683r.f(), 0, this.f15683r.f().length);
                    this.f15681p = this.f15683r.f().length;
                } else if (this.f15683r.h() && !this.f15683r.g()) {
                    this.f15679i.j(this.f15683r.f());
                    File file = new File(this.f15678e, this.f15683r.c());
                    file.getParentFile().mkdirs();
                    this.f15680o = this.f15683r.b();
                    this.f15682q = new FileOutputStream(file);
                } else {
                    byte[] f10 = this.f15683r.f();
                    this.f15679i.l(f10, 0, f10.length);
                    this.f15680o = this.f15683r.b();
                }
            }
            int i13 = i10;
            int i14 = i11;
            if (this.f15683r.g()) {
                i11 = i14;
                bArr = bArr;
                i10 = i13;
            } else {
                long j10 = i14;
                if (this.f15683r.d()) {
                    bArr2 = bArr;
                    this.f15679i.e(this.f15681p, bArr2, i13, i14);
                    i12 = i14;
                    this.f15681p += j10;
                } else {
                    bArr2 = bArr;
                    i12 = i14;
                    if (this.f15683r.h()) {
                        i14 = (int) Math.min(j10, this.f15680o);
                        this.f15682q.write(bArr2, i13, i14);
                        long j11 = this.f15680o - i14;
                        this.f15680o = j11;
                        if (j11 == 0) {
                            this.f15682q.close();
                        }
                    } else {
                        i14 = (int) Math.min(j10, this.f15680o);
                        this.f15679i.e((this.f15683r.f().length + this.f15683r.b()) - this.f15680o, bArr2, i13, i14);
                        this.f15680o -= i14;
                    }
                }
                i10 = i13 + i14;
                i11 = i12 - i14;
                bArr = bArr2;
            }
        }
    }
}
