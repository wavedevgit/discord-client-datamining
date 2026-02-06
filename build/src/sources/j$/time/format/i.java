package j$.time.format;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class i implements e {

    /* renamed from: c  reason: collision with root package name */
    public static final String[] f29452c = {"+HH", "+HHmm", "+HH:mm", "+HHMM", "+HH:MM", "+HHMMss", "+HH:MM:ss", "+HHMMSS", "+HH:MM:SS"};

    /* renamed from: d  reason: collision with root package name */
    public static final i f29453d = new i("+HH:MM:ss", "Z");

    /* renamed from: e  reason: collision with root package name */
    public static final i f29454e = new i("+HH:MM:ss", "0");

    /* renamed from: a  reason: collision with root package name */
    public final String f29455a;

    /* renamed from: b  reason: collision with root package name */
    public final int f29456b;

    public i(String str, String str2) {
        Objects.requireNonNull(str, "pattern");
        Objects.requireNonNull(str2, "noOffsetText");
        int i10 = 0;
        while (true) {
            String[] strArr = f29452c;
            if (i10 < strArr.length) {
                if (strArr[i10].equals(str)) {
                    this.f29456b = i10;
                    this.f29455a = str2;
                    return;
                }
                i10++;
            } else {
                throw new IllegalArgumentException("Invalid zone offset pattern: ".concat(str));
            }
        }
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        Long a10 = qVar.a(j$.time.temporal.a.OFFSET_SECONDS);
        if (a10 == null) {
            return false;
        }
        int intExact = Math.toIntExact(a10.longValue());
        String str = this.f29455a;
        if (intExact == 0) {
            sb2.append(str);
            return true;
        }
        int abs = Math.abs((intExact / 3600) % 100);
        int abs2 = Math.abs((intExact / 60) % 60);
        int abs3 = Math.abs(intExact % 60);
        int length = sb2.length();
        sb2.append(intExact < 0 ? "-" : "+");
        sb2.append((char) ((abs / 10) + 48));
        sb2.append((char) ((abs % 10) + 48));
        int i10 = this.f29456b;
        if (i10 >= 3 || (i10 >= 1 && abs2 > 0)) {
            int i11 = i10 % 2;
            sb2.append(i11 == 0 ? ":" : "");
            sb2.append((char) ((abs2 / 10) + 48));
            sb2.append((char) ((abs2 % 10) + 48));
            abs += abs2;
            if (i10 >= 7 || (i10 >= 5 && abs3 > 0)) {
                sb2.append(i11 == 0 ? ":" : "");
                sb2.append((char) ((abs3 / 10) + 48));
                sb2.append((char) ((abs3 % 10) + 48));
                abs += abs3;
            }
        }
        if (abs == 0) {
            sb2.setLength(length);
            sb2.append(str);
        }
        return true;
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        int length = charSequence.length();
        int length2 = this.f29455a.length();
        if (length2 == 0) {
            if (i10 == length) {
                return oVar.f(j$.time.temporal.a.OFFSET_SECONDS, 0L, i10, i10);
            }
        } else if (i10 == length) {
            return ~i10;
        } else {
            if (oVar.g(charSequence, i10, this.f29455a, 0, length2)) {
                return oVar.f(j$.time.temporal.a.OFFSET_SECONDS, 0L, i10, i10 + length2);
            }
        }
        char charAt = charSequence.charAt(i10);
        if (charAt == '+' || charAt == '-') {
            int i11 = charAt == '-' ? -1 : 1;
            int[] iArr = new int[4];
            iArr[0] = i10 + 1;
            if (!a(iArr, 1, charSequence, true)) {
                if (!a(iArr, 2, charSequence, this.f29456b >= 3) && !a(iArr, 3, charSequence, false)) {
                    return oVar.f(j$.time.temporal.a.OFFSET_SECONDS, ((iArr[2] * 60) + (iArr[1] * 3600) + iArr[3]) * i11, i10, iArr[0]);
                }
            }
        }
        return length2 == 0 ? oVar.f(j$.time.temporal.a.OFFSET_SECONDS, 0L, i10, i10 + length2) : ~i10;
    }

    public final boolean a(int[] iArr, int i10, CharSequence charSequence, boolean z10) {
        int i11 = this.f29456b;
        if ((i11 + 3) / 2 < i10) {
            return false;
        }
        int i12 = iArr[0];
        if (i11 % 2 == 0 && i10 > 1) {
            int i13 = i12 + 1;
            if (i13 <= charSequence.length() && charSequence.charAt(i12) == ':') {
                i12 = i13;
            }
            return z10;
        }
        int i14 = i12 + 2;
        if (i14 <= charSequence.length()) {
            int i15 = i12 + 1;
            char charAt = charSequence.charAt(i12);
            char charAt2 = charSequence.charAt(i15);
            if (charAt >= '0' && charAt <= '9' && charAt2 >= '0' && charAt2 <= '9') {
                int i16 = (charAt2 - '0') + ((charAt - '0') * 10);
                if (i16 >= 0 && i16 <= 59) {
                    iArr[i10] = i16;
                    iArr[0] = i14;
                    return false;
                }
            }
        }
        return z10;
    }

    public final String toString() {
        String replace = this.f29455a.replace("'", "''");
        return "Offset(" + f29452c[this.f29456b] + ",'" + replace + "')";
    }
}
