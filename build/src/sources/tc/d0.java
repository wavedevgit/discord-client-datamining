package tc;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f49441a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49442b;

    /* renamed from: c  reason: collision with root package name */
    private int f49443c;

    /* renamed from: d  reason: collision with root package name */
    private int f49444d;

    public d0(byte[] bArr) {
        this.f49441a = bArr;
        this.f49442b = bArr.length;
    }

    private void a() {
        boolean z10;
        int i10;
        int i11 = this.f49443c;
        if (i11 >= 0 && (i11 < (i10 = this.f49442b) || (i11 == i10 && this.f49444d == 0))) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
    }

    public int b() {
        return (this.f49443c * 8) + this.f49444d;
    }

    public boolean c() {
        boolean z10;
        if ((((this.f49441a[this.f49443c] & 255) >> this.f49444d) & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        e(1);
        return z10;
    }

    public int d(int i10) {
        int i11 = this.f49443c;
        int min = Math.min(i10, 8 - this.f49444d);
        int i12 = i11 + 1;
        int i13 = ((this.f49441a[i11] & 255) >> this.f49444d) & (SetSpanOperation.SPAN_MAX_PRIORITY >> (8 - min));
        while (min < i10) {
            i13 |= (this.f49441a[i12] & 255) << min;
            min += 8;
            i12++;
        }
        int i14 = i13 & ((-1) >>> (32 - i10));
        e(i10);
        return i14;
    }

    public void e(int i10) {
        int i11 = i10 / 8;
        int i12 = this.f49443c + i11;
        this.f49443c = i12;
        int i13 = this.f49444d + (i10 - (i11 * 8));
        this.f49444d = i13;
        if (i13 > 7) {
            this.f49443c = i12 + 1;
            this.f49444d = i13 - 8;
        }
        a();
    }
}
