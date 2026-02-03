package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f16382a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f16383b;

    /* renamed from: c  reason: collision with root package name */
    private long f16384c;

    /* renamed from: d  reason: collision with root package name */
    private long f16385d;

    /* renamed from: e  reason: collision with root package name */
    private int f16386e;

    /* renamed from: f  reason: collision with root package name */
    private int f16387f;

    /* renamed from: g  reason: collision with root package name */
    private int f16388g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f16389h;

    /* renamed from: i  reason: collision with root package name */
    private String f16390i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f16383b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f16382a, this.f16383b, min);
            int i14 = this.f16383b + min;
            this.f16383b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f16387f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f16384c == -1) {
            long b10 = c1.b(this.f16382a, 0);
            this.f16384c = b10;
            if (b10 == 67324752) {
                this.f16389h = false;
                this.f16385d = c1.b(this.f16382a, 18);
                this.f16388g = c1.a(this.f16382a, 8);
                this.f16386e = c1.a(this.f16382a, 26);
                int a10 = this.f16386e + 30 + c1.a(this.f16382a, 28);
                this.f16387f = a10;
                int length = this.f16382a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f16382a = Arrays.copyOf(this.f16382a, length);
                }
            } else {
                this.f16389h = true;
            }
        }
        int e11 = e(this.f16387f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f16389h && this.f16390i == null) {
            this.f16390i = new String(this.f16382a, 30, this.f16386e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f16383b;
        int i11 = this.f16387f;
        if (i10 < i11) {
            return new v0(this.f16390i, this.f16385d, this.f16388g, true, this.f16389h, Arrays.copyOf(this.f16382a, i10));
        }
        v0 v0Var = new v0(this.f16390i, this.f16385d, this.f16388g, false, this.f16389h, Arrays.copyOf(this.f16382a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f16383b = 0;
        this.f16386e = -1;
        this.f16384c = -1L;
        this.f16389h = false;
        this.f16387f = 30;
        this.f16385d = -1L;
        this.f16388g = -1;
        this.f16390i = null;
    }
}
