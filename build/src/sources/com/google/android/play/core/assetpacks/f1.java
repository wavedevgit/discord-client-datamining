package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.io.FilterInputStream;
import java.io.InputStream;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f16628d;

    /* renamed from: e  reason: collision with root package name */
    private byte[] f16629e;

    /* renamed from: i  reason: collision with root package name */
    private long f16630i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f16631o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f16632p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(InputStream inputStream) {
        super(inputStream);
        this.f16628d = new e3();
        this.f16629e = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
        this.f16631o = false;
        this.f16632p = false;
    }

    private final int n(byte[] bArr, int i10, int i11) {
        return Math.max(0, super.read(bArr, i10, i11));
    }

    private final boolean p(int i10) {
        int n10 = n(this.f16629e, 0, i10);
        if (n10 != i10) {
            int i11 = i10 - n10;
            if (n(this.f16629e, n10, i11) != i11) {
                this.f16628d.b(this.f16629e, 0, n10);
                return false;
            }
        }
        this.f16628d.b(this.f16629e, 0, i10);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long a() {
        return this.f16630i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final h4 h() {
        byte[] bArr;
        if (this.f16630i > 0) {
            do {
                bArr = this.f16629e;
            } while (read(bArr, 0, bArr.length) != -1);
            if (this.f16631o && !this.f16632p) {
                if (!p(30)) {
                    this.f16631o = true;
                    return this.f16628d.c();
                }
                h4 c10 = this.f16628d.c();
                if (c10.d()) {
                    this.f16632p = true;
                    return c10;
                } else if (c10.b() != 4294967295L) {
                    int a10 = this.f16628d.a() - 30;
                    int length = this.f16629e.length;
                    long j10 = a10;
                    if (j10 > length) {
                        do {
                            length += length;
                        } while (length < j10);
                        this.f16629e = Arrays.copyOf(this.f16629e, length);
                    }
                    if (!p(a10)) {
                        this.f16631o = true;
                        return this.f16628d.c();
                    }
                    h4 c11 = this.f16628d.c();
                    this.f16630i = c11.b();
                    return c11;
                } else {
                    throw new w1("Files bigger than 4GiB are not supported.");
                }
            }
            return new v0(null, -1L, -1, false, false, null);
        }
        if (this.f16631o) {
        }
        return new v0(null, -1L, -1, false, false, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean i() {
        return this.f16632p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        return this.f16631o;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        long j10 = this.f16630i;
        if (j10 <= 0 || this.f16631o) {
            return -1;
        }
        int n10 = n(bArr, i10, (int) Math.min(j10, i11));
        this.f16630i -= n10;
        if (n10 == 0) {
            this.f16631o = true;
            return 0;
        }
        return n10;
    }
}
