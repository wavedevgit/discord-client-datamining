package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f15724a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f15725b;

    /* renamed from: c  reason: collision with root package name */
    private long f15726c;

    /* renamed from: d  reason: collision with root package name */
    private long f15727d;

    /* renamed from: e  reason: collision with root package name */
    private int f15728e;

    /* renamed from: f  reason: collision with root package name */
    private int f15729f;

    /* renamed from: g  reason: collision with root package name */
    private int f15730g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f15731h;

    /* renamed from: i  reason: collision with root package name */
    private String f15732i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f15725b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f15724a, this.f15725b, min);
            int i14 = this.f15725b + min;
            this.f15725b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f15729f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f15726c == -1) {
            long b10 = c1.b(this.f15724a, 0);
            this.f15726c = b10;
            if (b10 == 67324752) {
                this.f15731h = false;
                this.f15727d = c1.b(this.f15724a, 18);
                this.f15730g = c1.a(this.f15724a, 8);
                this.f15728e = c1.a(this.f15724a, 26);
                int a10 = this.f15728e + 30 + c1.a(this.f15724a, 28);
                this.f15729f = a10;
                int length = this.f15724a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f15724a = Arrays.copyOf(this.f15724a, length);
                }
            } else {
                this.f15731h = true;
            }
        }
        int e11 = e(this.f15729f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f15731h && this.f15732i == null) {
            this.f15732i = new String(this.f15724a, 30, this.f15728e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f15725b;
        int i11 = this.f15729f;
        if (i10 < i11) {
            return new v0(this.f15732i, this.f15727d, this.f15730g, true, this.f15731h, Arrays.copyOf(this.f15724a, i10));
        }
        v0 v0Var = new v0(this.f15732i, this.f15727d, this.f15730g, false, this.f15731h, Arrays.copyOf(this.f15724a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f15725b = 0;
        this.f15728e = -1;
        this.f15726c = -1L;
        this.f15731h = false;
        this.f15729f = 30;
        this.f15727d = -1L;
        this.f15730g = -1;
        this.f15732i = null;
    }
}
