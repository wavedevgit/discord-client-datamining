package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.io.FilterInputStream;
import java.io.InputStream;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private final e3 f15758d;

    /* renamed from: e  reason: collision with root package name */
    private byte[] f15759e;

    /* renamed from: i  reason: collision with root package name */
    private long f15760i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15761o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f15762p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(InputStream inputStream) {
        super(inputStream);
        this.f15758d = new e3();
        this.f15759e = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
        this.f15761o = false;
        this.f15762p = false;
    }

    private final int o(byte[] bArr, int i10, int i11) {
        return Math.max(0, super.read(bArr, i10, i11));
    }

    private final boolean y(int i10) {
        int o10 = o(this.f15759e, 0, i10);
        if (o10 != i10) {
            int i11 = i10 - o10;
            if (o(this.f15759e, o10, i11) != i11) {
                this.f15758d.b(this.f15759e, 0, o10);
                return false;
            }
        }
        this.f15758d.b(this.f15759e, 0, i10);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long a() {
        return this.f15760i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final h4 h() {
        byte[] bArr;
        if (this.f15760i > 0) {
            do {
                bArr = this.f15759e;
            } while (read(bArr, 0, bArr.length) != -1);
            if (this.f15761o && !this.f15762p) {
                if (!y(30)) {
                    this.f15761o = true;
                    return this.f15758d.c();
                }
                h4 c10 = this.f15758d.c();
                if (c10.d()) {
                    this.f15762p = true;
                    return c10;
                } else if (c10.b() != 4294967295L) {
                    int a10 = this.f15758d.a() - 30;
                    int length = this.f15759e.length;
                    long j10 = a10;
                    if (j10 > length) {
                        do {
                            length += length;
                        } while (length < j10);
                        this.f15759e = Arrays.copyOf(this.f15759e, length);
                    }
                    if (!y(a10)) {
                        this.f15761o = true;
                        return this.f15758d.c();
                    }
                    h4 c11 = this.f15758d.c();
                    this.f15760i = c11.b();
                    return c11;
                } else {
                    throw new w1("Files bigger than 4GiB are not supported.");
                }
            }
            return new v0(null, -1L, -1, false, false, null);
        }
        if (this.f15761o) {
        }
        return new v0(null, -1L, -1, false, false, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean k() {
        return this.f15762p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        return this.f15761o;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        long j10 = this.f15760i;
        if (j10 <= 0 || this.f15761o) {
            return -1;
        }
        int o10 = o(bArr, i10, (int) Math.min(j10, i11));
        this.f15760i -= o10;
        if (o10 == 0) {
            this.f15761o = true;
            return 0;
        }
        return o10;
    }
}
