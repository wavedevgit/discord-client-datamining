package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 extends OutputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f15283d = new e3();

    /* renamed from: e  reason: collision with root package name */
    private final File f15284e;

    /* renamed from: i  reason: collision with root package name */
    private final b4 f15285i;

    /* renamed from: o  reason: collision with root package name */
    private long f15286o;

    /* renamed from: p  reason: collision with root package name */
    private long f15287p;

    /* renamed from: q  reason: collision with root package name */
    private FileOutputStream f15288q;

    /* renamed from: r  reason: collision with root package name */
    private h4 f15289r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2(File file, b4 b4Var) {
        this.f15284e = file;
        this.f15285i = b4Var;
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
            if (this.f15286o == 0 && this.f15287p == 0) {
                int b10 = this.f15283d.b(bArr, i10, i11);
                if (b10 == -1) {
                    return;
                }
                i10 += b10;
                i11 -= b10;
                h4 c10 = this.f15283d.c();
                this.f15289r = c10;
                if (c10.d()) {
                    this.f15286o = 0L;
                    this.f15285i.l(this.f15289r.f(), 0, this.f15289r.f().length);
                    this.f15287p = this.f15289r.f().length;
                } else if (this.f15289r.h() && !this.f15289r.g()) {
                    this.f15285i.j(this.f15289r.f());
                    File file = new File(this.f15284e, this.f15289r.c());
                    file.getParentFile().mkdirs();
                    this.f15286o = this.f15289r.b();
                    this.f15288q = new FileOutputStream(file);
                } else {
                    byte[] f10 = this.f15289r.f();
                    this.f15285i.l(f10, 0, f10.length);
                    this.f15286o = this.f15289r.b();
                }
            }
            int i13 = i10;
            int i14 = i11;
            if (this.f15289r.g()) {
                i11 = i14;
                bArr = bArr;
                i10 = i13;
            } else {
                long j10 = i14;
                if (this.f15289r.d()) {
                    bArr2 = bArr;
                    this.f15285i.e(this.f15287p, bArr2, i13, i14);
                    i12 = i14;
                    this.f15287p += j10;
                } else {
                    bArr2 = bArr;
                    i12 = i14;
                    if (this.f15289r.h()) {
                        i14 = (int) Math.min(j10, this.f15286o);
                        this.f15288q.write(bArr2, i13, i14);
                        long j11 = this.f15286o - i14;
                        this.f15286o = j11;
                        if (j11 == 0) {
                            this.f15288q.close();
                        }
                    } else {
                        i14 = (int) Math.min(j10, this.f15286o);
                        this.f15285i.e((this.f15289r.f().length + this.f15289r.b()) - this.f15286o, bArr2, i13, i14);
                        this.f15286o -= i14;
                    }
                }
                i10 = i13 + i14;
                i11 = i12 - i14;
                bArr = bArr2;
            }
        }
    }
}
