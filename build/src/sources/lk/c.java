package lk;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f36309a;

    /* renamed from: b  reason: collision with root package name */
    private int f36310b;

    /* renamed from: c  reason: collision with root package name */
    private int f36311c;

    public c(byte[] bArr) {
        this.f36309a = bArr;
    }

    public int a() {
        return ((this.f36309a.length - this.f36310b) * 8) - this.f36311c;
    }

    public int b() {
        return this.f36311c;
    }

    public int c() {
        return this.f36310b;
    }

    public int d(int i10) {
        if (i10 >= 1 && i10 <= 32 && i10 <= a()) {
            int i11 = this.f36311c;
            int i12 = 0;
            if (i11 > 0) {
                int i13 = 8 - i11;
                int min = Math.min(i10, i13);
                int i14 = i13 - min;
                byte[] bArr = this.f36309a;
                int i15 = this.f36310b;
                int i16 = (((SetSpanOperation.SPAN_MAX_PRIORITY >> (8 - min)) << i14) & bArr[i15]) >> i14;
                i10 -= min;
                int i17 = this.f36311c + min;
                this.f36311c = i17;
                if (i17 == 8) {
                    this.f36311c = 0;
                    this.f36310b = i15 + 1;
                }
                i12 = i16;
            }
            if (i10 > 0) {
                while (i10 >= 8) {
                    int i18 = i12 << 8;
                    byte[] bArr2 = this.f36309a;
                    int i19 = this.f36310b;
                    i12 = (bArr2[i19] & 255) | i18;
                    this.f36310b = i19 + 1;
                    i10 -= 8;
                }
                if (i10 > 0) {
                    int i20 = 8 - i10;
                    int i21 = ((((SetSpanOperation.SPAN_MAX_PRIORITY >> i20) << i20) & this.f36309a[this.f36310b]) >> i20) | (i12 << i10);
                    this.f36311c += i10;
                    return i21;
                }
            }
            return i12;
        }
        throw new IllegalArgumentException(String.valueOf(i10));
    }
}
