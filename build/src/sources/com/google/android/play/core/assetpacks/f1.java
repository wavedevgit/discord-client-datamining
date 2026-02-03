package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.io.FilterInputStream;
import java.io.InputStream;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f15364d;

    /* renamed from: e  reason: collision with root package name */
    private byte[] f15365e;

    /* renamed from: i  reason: collision with root package name */
    private long f15366i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15367o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f15368p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(InputStream inputStream) {
        super(inputStream);
        this.f15364d = new e3();
        this.f15365e = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
        this.f15367o = false;
        this.f15368p = false;
    }

    private final boolean B(int i10) {
        int x10 = x(this.f15365e, 0, i10);
        if (x10 != i10) {
            int i11 = i10 - x10;
            if (x(this.f15365e, x10, i11) != i11) {
                this.f15364d.b(this.f15365e, 0, x10);
                return false;
            }
        }
        this.f15364d.b(this.f15365e, 0, i10);
        return true;
    }

    private final int x(byte[] bArr, int i10, int i11) {
        return Math.max(0, super.read(bArr, i10, i11));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long a() {
        return this.f15366i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final h4 h() {
        byte[] bArr;
        if (this.f15366i > 0) {
            do {
                bArr = this.f15365e;
            } while (read(bArr, 0, bArr.length) != -1);
            if (this.f15367o && !this.f15368p) {
                if (!B(30)) {
                    this.f15367o = true;
                    return this.f15364d.c();
                }
                h4 c10 = this.f15364d.c();
                if (c10.d()) {
                    this.f15368p = true;
                    return c10;
                } else if (c10.b() != 4294967295L) {
                    int a10 = this.f15364d.a() - 30;
                    int length = this.f15365e.length;
                    long j10 = a10;
                    if (j10 > length) {
                        do {
                            length += length;
                        } while (length < j10);
                        this.f15365e = Arrays.copyOf(this.f15365e, length);
                    }
                    if (!B(a10)) {
                        this.f15367o = true;
                        return this.f15364d.c();
                    }
                    h4 c11 = this.f15364d.c();
                    this.f15366i = c11.b();
                    return c11;
                } else {
                    throw new w1("Files bigger than 4GiB are not supported.");
                }
            }
            return new v0(null, -1L, -1, false, false, null);
        }
        if (this.f15367o) {
        }
        return new v0(null, -1L, -1, false, false, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean l() {
        return this.f15368p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean n() {
        return this.f15367o;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        long j10 = this.f15366i;
        if (j10 <= 0 || this.f15367o) {
            return -1;
        }
        int x10 = x(bArr, i10, (int) Math.min(j10, i11));
        this.f15366i -= x10;
        if (x10 == 0) {
            this.f15367o = true;
            return 0;
        }
        return x10;
    }
}
