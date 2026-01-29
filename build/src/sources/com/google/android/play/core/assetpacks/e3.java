package com.google.android.play.core.assetpacks;

import androidx.recyclerview.widget.RecyclerView;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e3 {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f16753a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    /* renamed from: b  reason: collision with root package name */
    private int f16754b;

    /* renamed from: c  reason: collision with root package name */
    private long f16755c;

    /* renamed from: d  reason: collision with root package name */
    private long f16756d;

    /* renamed from: e  reason: collision with root package name */
    private int f16757e;

    /* renamed from: f  reason: collision with root package name */
    private int f16758f;

    /* renamed from: g  reason: collision with root package name */
    private int f16759g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f16760h;

    /* renamed from: i  reason: collision with root package name */
    private String f16761i;

    public e3() {
        d();
    }

    private final int e(int i10, byte[] bArr, int i11, int i12) {
        int i13 = this.f16754b;
        if (i13 < i10) {
            int min = Math.min(i12, i10 - i13);
            System.arraycopy(bArr, i11, this.f16753a, this.f16754b, min);
            int i14 = this.f16754b + min;
            this.f16754b = i14;
            if (i14 < i10) {
                return -1;
            }
            return min;
        }
        return 0;
    }

    public final int a() {
        return this.f16758f;
    }

    public final int b(byte[] bArr, int i10, int i11) {
        int e10 = e(30, bArr, i10, i11);
        if (e10 == -1) {
            return -1;
        }
        if (this.f16755c == -1) {
            long b10 = c1.b(this.f16753a, 0);
            this.f16755c = b10;
            if (b10 == 67324752) {
                this.f16760h = false;
                this.f16756d = c1.b(this.f16753a, 18);
                this.f16759g = c1.a(this.f16753a, 8);
                this.f16757e = c1.a(this.f16753a, 26);
                int a10 = this.f16757e + 30 + c1.a(this.f16753a, 28);
                this.f16758f = a10;
                int length = this.f16753a.length;
                if (length < a10) {
                    do {
                        length += length;
                    } while (length < a10);
                    this.f16753a = Arrays.copyOf(this.f16753a, length);
                }
            } else {
                this.f16760h = true;
            }
        }
        int e11 = e(this.f16758f, bArr, i10 + e10, i11 - e10);
        if (e11 == -1) {
            return -1;
        }
        int i12 = e10 + e11;
        if (!this.f16760h && this.f16761i == null) {
            this.f16761i = new String(this.f16753a, 30, this.f16757e);
        }
        return i12;
    }

    public final h4 c() {
        int i10 = this.f16754b;
        int i11 = this.f16758f;
        if (i10 < i11) {
            return new v0(this.f16761i, this.f16756d, this.f16759g, true, this.f16760h, Arrays.copyOf(this.f16753a, i10));
        }
        v0 v0Var = new v0(this.f16761i, this.f16756d, this.f16759g, false, this.f16760h, Arrays.copyOf(this.f16753a, i11));
        d();
        return v0Var;
    }

    public final void d() {
        this.f16754b = 0;
        this.f16757e = -1;
        this.f16755c = -1L;
        this.f16760h = false;
        this.f16758f = 30;
        this.f16756d = -1L;
        this.f16759g = -1;
        this.f16761i = null;
    }
}
