package uc;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50637a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50638b;

    /* renamed from: c  reason: collision with root package name */
    private int f50639c;

    /* renamed from: d  reason: collision with root package name */
    private int f50640d;

    public d0(byte[] bArr) {
        this.f50637a = bArr;
        this.f50638b = bArr.length;
    }

    private void a() {
        boolean z10;
        int i10;
        int i11 = this.f50639c;
        if (i11 >= 0 && (i11 < (i10 = this.f50638b) || (i11 == i10 && this.f50640d == 0))) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
    }

    public int b() {
        return (this.f50639c * 8) + this.f50640d;
    }

    public boolean c() {
        boolean z10;
        if ((((this.f50637a[this.f50639c] & 255) >> this.f50640d) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        e(1);
        return z10;
    }

    public int d(int i10) {
        int i11 = this.f50639c;
        int min = Math.min(i10, 8 - this.f50640d);
        int i12 = i11 + 1;
        int i13 = ((this.f50637a[i11] & 255) >> this.f50640d) & (SetSpanOperation.SPAN_MAX_PRIORITY >> (8 - min));
        while (min < i10) {
            i13 |= (this.f50637a[i12] & 255) << min;
            min += 8;
            i12++;
        }
        int i14 = i13 & ((-1) >>> (32 - i10));
        e(i10);
        return i14;
    }

    public void e(int i10) {
        int i11 = i10 / 8;
        int i12 = this.f50639c + i11;
        this.f50639c = i12;
        int i13 = this.f50640d + (i10 - (i11 * 8));
        this.f50640d = i13;
        if (i13 > 7) {
            this.f50639c = i12 + 1;
            this.f50640d = i13 - 8;
        }
        a();
    }
}
