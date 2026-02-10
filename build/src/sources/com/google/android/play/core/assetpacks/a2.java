package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 extends OutputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f16546d = new e3();

    /* renamed from: e  reason: collision with root package name */
    private final File f16547e;

    /* renamed from: i  reason: collision with root package name */
    private final b4 f16548i;

    /* renamed from: o  reason: collision with root package name */
    private long f16549o;

    /* renamed from: p  reason: collision with root package name */
    private long f16550p;

    /* renamed from: q  reason: collision with root package name */
    private FileOutputStream f16551q;

    /* renamed from: r  reason: collision with root package name */
    private h4 f16552r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2(File file, b4 b4Var) {
        this.f16547e = file;
        this.f16548i = b4Var;
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
            if (this.f16549o == 0 && this.f16550p == 0) {
                int b10 = this.f16546d.b(bArr, i10, i11);
                if (b10 == -1) {
                    return;
                }
                i10 += b10;
                i11 -= b10;
                h4 c10 = this.f16546d.c();
                this.f16552r = c10;
                if (c10.d()) {
                    this.f16549o = 0L;
                    this.f16548i.l(this.f16552r.f(), 0, this.f16552r.f().length);
                    this.f16550p = this.f16552r.f().length;
                } else if (this.f16552r.h() && !this.f16552r.g()) {
                    this.f16548i.j(this.f16552r.f());
                    File file = new File(this.f16547e, this.f16552r.c());
                    file.getParentFile().mkdirs();
                    this.f16549o = this.f16552r.b();
                    this.f16551q = new FileOutputStream(file);
                } else {
                    byte[] f10 = this.f16552r.f();
                    this.f16548i.l(f10, 0, f10.length);
                    this.f16549o = this.f16552r.b();
                }
            }
            int i13 = i10;
            int i14 = i11;
            if (this.f16552r.g()) {
                i11 = i14;
                bArr = bArr;
                i10 = i13;
            } else {
                long j10 = i14;
                if (this.f16552r.d()) {
                    bArr2 = bArr;
                    this.f16548i.e(this.f16550p, bArr2, i13, i14);
                    i12 = i14;
                    this.f16550p += j10;
                } else {
                    bArr2 = bArr;
                    i12 = i14;
                    if (this.f16552r.h()) {
                        i14 = (int) Math.min(j10, this.f16549o);
                        this.f16551q.write(bArr2, i13, i14);
                        long j11 = this.f16549o - i14;
                        this.f16549o = j11;
                        if (j11 == 0) {
                            this.f16551q.close();
                        }
                    } else {
                        i14 = (int) Math.min(j10, this.f16549o);
                        this.f16548i.e((this.f16552r.f().length + this.f16552r.b()) - this.f16549o, bArr2, i13, i14);
                        this.f16549o -= i14;
                    }
                }
                i10 = i13 + i14;
                i11 = i12 - i14;
                bArr = bArr2;
            }
        }
    }
}
