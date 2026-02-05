package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f15744a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f15745b;

    /* renamed from: c  reason: collision with root package name */
    private long f15746c;

    /* renamed from: d  reason: collision with root package name */
    private long f15747d;

    /* renamed from: e  reason: collision with root package name */
    private int f15748e;

    /* renamed from: f  reason: collision with root package name */
    private int f15749f;

    /* renamed from: g  reason: collision with root package name */
    private int f15750g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f15751h;

    /* renamed from: i  reason: collision with root package name */
    private String f15752i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f15745b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f15744a, this.f15745b, min);
            int i14 = this.f15745b + min;
            this.f15745b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f15749f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f15746c == -1) {
            long b10 = c1.b(this.f15744a, 0);
            this.f15746c = b10;
            if (b10 == 67324752) {
                this.f15751h = false;
                this.f15747d = c1.b(this.f15744a, 18);
                this.f15750g = c1.a(this.f15744a, 8);
                this.f15748e = c1.a(this.f15744a, 26);
                int a10 = this.f15748e + 30 + c1.a(this.f15744a, 28);
                this.f15749f = a10;
                int length = this.f15744a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f15744a = Arrays.copyOf(this.f15744a, length);
                }
            } else {
                this.f15751h = true;
            }
        }
        int e11 = e(this.f15749f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f15751h && this.f15752i == null) {
            this.f15752i = new String(this.f15744a, 30, this.f15748e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f15745b;
        int i11 = this.f15749f;
        if (i10 < i11) {
            return new v0(this.f15752i, this.f15747d, this.f15750g, true, this.f15751h, Arrays.copyOf(this.f15744a, i10));
        }
        v0 v0Var = new v0(this.f15752i, this.f15747d, this.f15750g, false, this.f15751h, Arrays.copyOf(this.f15744a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f15745b = 0;
        this.f15748e = -1;
        this.f15746c = -1L;
        this.f15751h = false;
        this.f15749f = 30;
        this.f15747d = -1L;
        this.f15750g = -1;
        this.f15752i = null;
    }
}
