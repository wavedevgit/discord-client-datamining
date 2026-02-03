package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f15350a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f15351b;

    /* renamed from: c  reason: collision with root package name */
    private long f15352c;

    /* renamed from: d  reason: collision with root package name */
    private long f15353d;

    /* renamed from: e  reason: collision with root package name */
    private int f15354e;

    /* renamed from: f  reason: collision with root package name */
    private int f15355f;

    /* renamed from: g  reason: collision with root package name */
    private int f15356g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f15357h;

    /* renamed from: i  reason: collision with root package name */
    private String f15358i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f15351b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f15350a, this.f15351b, min);
            int i14 = this.f15351b + min;
            this.f15351b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f15355f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f15352c == -1) {
            long b10 = c1.b(this.f15350a, 0);
            this.f15352c = b10;
            if (b10 == 67324752) {
                this.f15357h = false;
                this.f15353d = c1.b(this.f15350a, 18);
                this.f15356g = c1.a(this.f15350a, 8);
                this.f15354e = c1.a(this.f15350a, 26);
                int a10 = this.f15354e + 30 + c1.a(this.f15350a, 28);
                this.f15355f = a10;
                int length = this.f15350a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f15350a = Arrays.copyOf(this.f15350a, length);
                }
            } else {
                this.f15357h = true;
            }
        }
        int e11 = e(this.f15355f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f15357h && this.f15358i == null) {
            this.f15358i = new String(this.f15350a, 30, this.f15354e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f15351b;
        int i11 = this.f15355f;
        if (i10 < i11) {
            return new v0(this.f15358i, this.f15353d, this.f15356g, true, this.f15357h, Arrays.copyOf(this.f15350a, i10));
        }
        v0 v0Var = new v0(this.f15358i, this.f15353d, this.f15356g, false, this.f15357h, Arrays.copyOf(this.f15350a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f15351b = 0;
        this.f15354e = -1;
        this.f15352c = -1L;
        this.f15357h = false;
        this.f15355f = 30;
        this.f15353d = -1L;
        this.f15356g = -1;
        this.f15358i = null;
    }
}
