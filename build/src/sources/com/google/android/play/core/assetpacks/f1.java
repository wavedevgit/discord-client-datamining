package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.io.FilterInputStream;
import java.io.InputStream;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f15878d;

    /* renamed from: e  reason: collision with root package name */
    private byte[] f15879e;

    /* renamed from: i  reason: collision with root package name */
    private long f15880i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15881o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f15882p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(InputStream inputStream) {
        super(inputStream);
        this.f15878d = new e3();
        this.f15879e = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
        this.f15881o = false;
        this.f15882p = false;
    }

    private final int n(byte[] bArr, int i10, int i11) {
        return Math.max(0, super.read(bArr, i10, i11));
    }

    private final boolean p(int i10) {
        int n10 = n(this.f15879e, 0, i10);
        if (n10 != i10) {
            int i11 = i10 - n10;
            if (n(this.f15879e, n10, i11) != i11) {
                this.f15878d.b(this.f15879e, 0, n10);
                return false;
            }
        }
        this.f15878d.b(this.f15879e, 0, i10);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long a() {
        return this.f15880i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final h4 g() {
        byte[] bArr;
        if (this.f15880i > 0) {
            do {
                bArr = this.f15879e;
            } while (read(bArr, 0, bArr.length) != -1);
            if (this.f15881o && !this.f15882p) {
                if (!p(30)) {
                    this.f15881o = true;
                    return this.f15878d.c();
                }
                h4 c10 = this.f15878d.c();
                if (c10.d()) {
                    this.f15882p = true;
                    return c10;
                } else if (c10.b() != 4294967295L) {
                    int a10 = this.f15878d.a() - 30;
                    int length = this.f15879e.length;
                    long j10 = a10;
                    if (j10 > length) {
                        do {
                            length += length;
                        } while (length < j10);
                        this.f15879e = Arrays.copyOf(this.f15879e, length);
                    }
                    if (!p(a10)) {
                        this.f15881o = true;
                        return this.f15878d.c();
                    }
                    h4 c11 = this.f15878d.c();
                    this.f15880i = c11.b();
                    return c11;
                } else {
                    throw new w1("Files bigger than 4GiB are not supported.");
                }
            }
            return new v0(null, -1L, -1, false, false, null);
        }
        if (this.f15881o) {
        }
        return new v0(null, -1L, -1, false, false, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean k() {
        return this.f15882p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        return this.f15881o;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        long j10 = this.f15880i;
        if (j10 <= 0 || this.f15881o) {
            return -1;
        }
        int n10 = n(bArr, i10, (int) Math.min(j10, i11));
        this.f15880i -= n10;
        if (n10 == 0) {
            this.f15881o = true;
            return 0;
        }
        return n10;
    }
}
