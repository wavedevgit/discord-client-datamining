package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f16614a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f16615b;

    /* renamed from: c  reason: collision with root package name */
    private long f16616c;

    /* renamed from: d  reason: collision with root package name */
    private long f16617d;

    /* renamed from: e  reason: collision with root package name */
    private int f16618e;

    /* renamed from: f  reason: collision with root package name */
    private int f16619f;

    /* renamed from: g  reason: collision with root package name */
    private int f16620g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f16621h;

    /* renamed from: i  reason: collision with root package name */
    private String f16622i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f16615b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f16614a, this.f16615b, min);
            int i14 = this.f16615b + min;
            this.f16615b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f16619f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f16616c == -1) {
            long b10 = c1.b(this.f16614a, 0);
            this.f16616c = b10;
            if (b10 == 67324752) {
                this.f16621h = false;
                this.f16617d = c1.b(this.f16614a, 18);
                this.f16620g = c1.a(this.f16614a, 8);
                this.f16618e = c1.a(this.f16614a, 26);
                int a10 = this.f16618e + 30 + c1.a(this.f16614a, 28);
                this.f16619f = a10;
                int length = this.f16614a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f16614a = Arrays.copyOf(this.f16614a, length);
                }
            } else {
                this.f16621h = true;
            }
        }
        int e11 = e(this.f16619f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f16621h && this.f16622i == null) {
            this.f16622i = new String(this.f16614a, 30, this.f16618e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f16615b;
        int i11 = this.f16619f;
        if (i10 < i11) {
            return new v0(this.f16622i, this.f16617d, this.f16620g, true, this.f16621h, Arrays.copyOf(this.f16614a, i10));
        }
        v0 v0Var = new v0(this.f16622i, this.f16617d, this.f16620g, false, this.f16621h, Arrays.copyOf(this.f16614a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f16615b = 0;
        this.f16618e = -1;
        this.f16616c = -1L;
        this.f16621h = false;
        this.f16619f = 30;
        this.f16617d = -1L;
        this.f16620g = -1;
        this.f16622i = null;
    }
}
