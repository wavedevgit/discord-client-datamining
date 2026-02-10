package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f16613a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f16614b;

    /* renamed from: c  reason: collision with root package name */
    private long f16615c;

    /* renamed from: d  reason: collision with root package name */
    private long f16616d;

    /* renamed from: e  reason: collision with root package name */
    private int f16617e;

    /* renamed from: f  reason: collision with root package name */
    private int f16618f;

    /* renamed from: g  reason: collision with root package name */
    private int f16619g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f16620h;

    /* renamed from: i  reason: collision with root package name */
    private String f16621i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f16614b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f16613a, this.f16614b, min);
            int i14 = this.f16614b + min;
            this.f16614b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f16618f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f16615c == -1) {
            long b10 = c1.b(this.f16613a, 0);
            this.f16615c = b10;
            if (b10 == 67324752) {
                this.f16620h = false;
                this.f16616d = c1.b(this.f16613a, 18);
                this.f16619g = c1.a(this.f16613a, 8);
                this.f16617e = c1.a(this.f16613a, 26);
                int a10 = this.f16617e + 30 + c1.a(this.f16613a, 28);
                this.f16618f = a10;
                int length = this.f16613a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f16613a = Arrays.copyOf(this.f16613a, length);
                }
            } else {
                this.f16620h = true;
            }
        }
        int e11 = e(this.f16618f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f16620h && this.f16621i == null) {
            this.f16621i = new String(this.f16613a, 30, this.f16617e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f16614b;
        int i11 = this.f16618f;
        if (i10 < i11) {
            return new v0(this.f16621i, this.f16616d, this.f16619g, true, this.f16620h, Arrays.copyOf(this.f16613a, i10));
        }
        v0 v0Var = new v0(this.f16621i, this.f16616d, this.f16619g, false, this.f16620h, Arrays.copyOf(this.f16613a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f16614b = 0;
        this.f16617e = -1;
        this.f16615c = -1L;
        this.f16620h = false;
        this.f16618f = 30;
        this.f16616d = -1L;
        this.f16619g = -1;
        this.f16621i = null;
    }
}
