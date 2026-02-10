package mk;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f37187a;

    /* renamed from: b  reason: collision with root package name */
    private int f37188b;

    /* renamed from: c  reason: collision with root package name */
    private int f37189c;

    public c(byte[] bArr) {
        this.f37187a = bArr;
    }

    public int a() {
        return ((this.f37187a.length - this.f37188b) * 8) - this.f37189c;
    }

    public int b() {
        return this.f37189c;
    }

    public int c() {
        return this.f37188b;
    }

    public int d(int i10) {
        if (i10 >= 1 && i10 <= 32 && i10 <= a()) {
            int i11 = this.f37189c;
            int i12 = 0;
            if (i11 > 0) {
                int i13 = 8 - i11;
                int min = Math.min(i10, i13);
                int i14 = i13 - min;
                byte[] bArr = this.f37187a;
                int i15 = this.f37188b;
                int i16 = (((SetSpanOperation.SPAN_MAX_PRIORITY >> (8 - min)) << i14) & bArr[i15]) >> i14;
                i10 -= min;
                int i17 = this.f37189c + min;
                this.f37189c = i17;
                if (i17 == 8) {
                    this.f37189c = 0;
                    this.f37188b = i15 + 1;
                }
                i12 = i16;
            }
            if (i10 > 0) {
                while (i10 >= 8) {
                    int i18 = i12 << 8;
                    byte[] bArr2 = this.f37187a;
                    int i19 = this.f37188b;
                    i12 = (bArr2[i19] & 255) | i18;
                    this.f37188b = i19 + 1;
                    i10 -= 8;
                }
                if (i10 > 0) {
                    int i20 = 8 - i10;
                    int i21 = ((((SetSpanOperation.SPAN_MAX_PRIORITY >> i20) << i20) & this.f37187a[this.f37188b]) >> i20) | (i12 << i10);
                    this.f37189c += i10;
                    return i21;
                }
            }
            return i12;
        }
        throw new IllegalArgumentException(String.valueOf(i10));
    }
}
