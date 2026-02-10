package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f15864a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f15865b;

    /* renamed from: c  reason: collision with root package name */
    private long f15866c;

    /* renamed from: d  reason: collision with root package name */
    private long f15867d;

    /* renamed from: e  reason: collision with root package name */
    private int f15868e;

    /* renamed from: f  reason: collision with root package name */
    private int f15869f;

    /* renamed from: g  reason: collision with root package name */
    private int f15870g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f15871h;

    /* renamed from: i  reason: collision with root package name */
    private String f15872i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f15865b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f15864a, this.f15865b, min);
            int i14 = this.f15865b + min;
            this.f15865b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f15869f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f15866c == -1) {
            long b10 = c1.b(this.f15864a, 0);
            this.f15866c = b10;
            if (b10 == 67324752) {
                this.f15871h = false;
                this.f15867d = c1.b(this.f15864a, 18);
                this.f15870g = c1.a(this.f15864a, 8);
                this.f15868e = c1.a(this.f15864a, 26);
                int a10 = this.f15868e + 30 + c1.a(this.f15864a, 28);
                this.f15869f = a10;
                int length = this.f15864a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f15864a = Arrays.copyOf(this.f15864a, length);
                }
            } else {
                this.f15871h = true;
            }
        }
        int e11 = e(this.f15869f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f15871h && this.f15872i == null) {
            this.f15872i = new String(this.f15864a, 30, this.f15868e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f15865b;
        int i11 = this.f15869f;
        if (i10 < i11) {
            return new v0(this.f15872i, this.f15867d, this.f15870g, true, this.f15871h, Arrays.copyOf(this.f15864a, i10));
        }
        v0 v0Var = new v0(this.f15872i, this.f15867d, this.f15870g, false, this.f15871h, Arrays.copyOf(this.f15864a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f15865b = 0;
        this.f15868e = -1;
        this.f15866c = -1L;
        this.f15871h = false;
        this.f15869f = 30;
        this.f15867d = -1L;
        this.f15870g = -1;
        this.f15872i = null;
    }
}
