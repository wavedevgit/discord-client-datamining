package uc;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50638a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50639b;

    /* renamed from: c  reason: collision with root package name */
    private int f50640c;

    /* renamed from: d  reason: collision with root package name */
    private int f50641d;

    public d0(byte[] bArr) {
        this.f50638a = bArr;
        this.f50639b = bArr.length;
    }

    private void a() {
        boolean z10;
        int i10;
        int i11 = this.f50640c;
        if (i11 >= 0 && (i11 < (i10 = this.f50639b) || (i11 == i10 && this.f50641d == 0))) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
    }

    public int b() {
        return (this.f50640c * 8) + this.f50641d;
    }

    public boolean c() {
        boolean z10;
        if ((((this.f50638a[this.f50640c] & 255) >> this.f50641d) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        e(1);
        return z10;
    }

    public int d(int i10) {
        int i11 = this.f50640c;
        int min = Math.min(i10, 8 - this.f50641d);
        int i12 = i11 + 1;
        int i13 = ((this.f50638a[i11] & 255) >> this.f50641d) & (SetSpanOperation.SPAN_MAX_PRIORITY >> (8 - min));
        while (min < i10) {
            i13 |= (this.f50638a[i12] & 255) << min;
            min += 8;
            i12++;
        }
        int i14 = i13 & ((-1) >>> (32 - i10));
        e(i10);
        return i14;
    }

    public void e(int i10) {
        int i11 = i10 / 8;
        int i12 = this.f50640c + i11;
        this.f50640c = i12;
        int i13 = this.f50641d + (i10 - (i11 * 8));
        this.f50641d = i13;
        if (i13 > 7) {
            this.f50640c = i12 + 1;
            this.f50641d = i13 - 8;
        }
        a();
    }
}
