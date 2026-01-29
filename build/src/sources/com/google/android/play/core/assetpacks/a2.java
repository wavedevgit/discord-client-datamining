package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a2 extends OutputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f16686d = new e3();

    /* renamed from: e  reason: collision with root package name */
    private final File f16687e;

    /* renamed from: i  reason: collision with root package name */
    private final b4 f16688i;

    /* renamed from: o  reason: collision with root package name */
    private long f16689o;

    /* renamed from: p  reason: collision with root package name */
    private long f16690p;

    /* renamed from: q  reason: collision with root package name */
    private FileOutputStream f16691q;

    /* renamed from: r  reason: collision with root package name */
    private h4 f16692r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a2(File file, b4 b4Var) {
        this.f16687e = file;
        this.f16688i = b4Var;
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
            if (this.f16689o == 0 && this.f16690p == 0) {
                int b10 = this.f16686d.b(bArr, i10, i11);
                if (b10 == -1) {
                    return;
                }
                i10 += b10;
                i11 -= b10;
                h4 c10 = this.f16686d.c();
                this.f16692r = c10;
                if (c10.d()) {
                    this.f16689o = 0L;
                    this.f16688i.l(this.f16692r.f(), 0, this.f16692r.f().length);
                    this.f16690p = this.f16692r.f().length;
                } else if (this.f16692r.h() && !this.f16692r.g()) {
                    this.f16688i.j(this.f16692r.f());
                    File file = new File(this.f16687e, this.f16692r.c());
                    file.getParentFile().mkdirs();
                    this.f16689o = this.f16692r.b();
                    this.f16691q = new FileOutputStream(file);
                } else {
                    byte[] f10 = this.f16692r.f();
                    this.f16688i.l(f10, 0, f10.length);
                    this.f16689o = this.f16692r.b();
                }
            }
            int i13 = i10;
            int i14 = i11;
            if (this.f16692r.g()) {
                i11 = i14;
                bArr = bArr;
                i10 = i13;
            } else {
                long j10 = i14;
                if (this.f16692r.d()) {
                    bArr2 = bArr;
                    this.f16688i.e(this.f16690p, bArr2, i13, i14);
                    i12 = i14;
                    this.f16690p += j10;
                } else {
                    bArr2 = bArr;
                    i12 = i14;
                    if (this.f16692r.h()) {
                        i14 = (int) Math.min(j10, this.f16689o);
                        this.f16691q.write(bArr2, i13, i14);
                        long j11 = this.f16689o - i14;
                        this.f16689o = j11;
                        if (j11 == 0) {
                            this.f16691q.close();
                        }
                    } else {
                        i14 = (int) Math.min(j10, this.f16689o);
                        this.f16688i.e((this.f16692r.f().length + this.f16692r.b()) - this.f16689o, bArr2, i13, i14);
                        this.f16689o -= i14;
                    }
                }
                i10 = i13 + i14;
                i11 = i12 - i14;
                bArr = bArr2;
            }
        }
    }
}
