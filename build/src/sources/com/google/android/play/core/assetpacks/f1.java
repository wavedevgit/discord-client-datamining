package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.io.FilterInputStream;
import java.io.InputStream;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f15738d;

    /* renamed from: e  reason: collision with root package name */
    private byte[] f15739e;

    /* renamed from: i  reason: collision with root package name */
    private long f15740i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15741o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f15742p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(InputStream inputStream) {
        super(inputStream);
        this.f15738d = new e3();
        this.f15739e = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
        this.f15741o = false;
        this.f15742p = false;
    }

    private final int n(byte[] bArr, int i10, int i11) {
        return Math.max(0, super.read(bArr, i10, i11));
    }

    private final boolean p(int i10) {
        int n10 = n(this.f15739e, 0, i10);
        if (n10 != i10) {
            int i11 = i10 - n10;
            if (n(this.f15739e, n10, i11) != i11) {
                this.f15738d.b(this.f15739e, 0, n10);
                return false;
            }
        }
        this.f15738d.b(this.f15739e, 0, i10);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long a() {
        return this.f15740i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final h4 g() {
        byte[] bArr;
        if (this.f15740i > 0) {
            do {
                bArr = this.f15739e;
            } while (read(bArr, 0, bArr.length) != -1);
            if (this.f15741o && !this.f15742p) {
                if (!p(30)) {
                    this.f15741o = true;
                    return this.f15738d.c();
                }
                h4 c10 = this.f15738d.c();
                if (c10.d()) {
                    this.f15742p = true;
                    return c10;
                } else if (c10.b() != 4294967295L) {
                    int a10 = this.f15738d.a() - 30;
                    int length = this.f15739e.length;
                    long j10 = a10;
                    if (j10 > length) {
                        do {
                            length += length;
                        } while (length < j10);
                        this.f15739e = Arrays.copyOf(this.f15739e, length);
                    }
                    if (!p(a10)) {
                        this.f15741o = true;
                        return this.f15738d.c();
                    }
                    h4 c11 = this.f15738d.c();
                    this.f15740i = c11.b();
                    return c11;
                } else {
                    throw new w1("Files bigger than 4GiB are not supported.");
                }
            }
            return new v0(null, -1L, -1, false, false, null);
        }
        if (this.f15741o) {
        }
        return new v0(null, -1L, -1, false, false, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean k() {
        return this.f15742p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        return this.f15741o;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        long j10 = this.f15740i;
        if (j10 <= 0 || this.f15741o) {
            return -1;
        }
        int n10 = n(bArr, i10, (int) Math.min(j10, i11));
        this.f15740i -= n10;
        if (n10 == 0) {
            this.f15741o = true;
            return 0;
        }
        return n10;
    }
}
