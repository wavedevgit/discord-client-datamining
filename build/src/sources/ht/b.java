package ht;

import com.facebook.react.views.text.ReactFontManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    public static void a(int i10, int i11, int i12) {
        if (i10 >= -999999999 && i10 <= 999999999) {
            if (i11 >= 1 && i11 <= 12) {
                if (i12 >= 1 && i12 <= 31) {
                    if (i12 <= d(i10, i11)) {
                        return;
                    }
                    throw new IllegalArgumentException("DAY_OF_MONTH exceeds month length in given year: " + m(i10, i11, i12));
                }
                throw new IllegalArgumentException("DAY_OF_MONTH out of range: " + i12);
            }
            throw new IllegalArgumentException("MONTH out of range: " + i11);
        }
        throw new IllegalArgumentException("YEAR out of range: " + i10);
    }

    private static int b(int i10) {
        switch (i10) {
            case 1:
                return 28;
            case 2:
                return 31;
            case 3:
                return 2;
            case 4:
                return 5;
            case 5:
                return 7;
            case 6:
                return 10;
            case 7:
                return 12;
            case 8:
                return 15;
            case 9:
                return 18;
            case 10:
                return 20;
            case 11:
                return 23;
            case 12:
                return 25;
            default:
                throw new IllegalArgumentException("Month out of range: " + i10);
        }
    }

    public static int c(int i10, int i11, int i12) {
        if (i12 >= 1 && i12 <= 31) {
            if (i12 <= d(i10, i11)) {
                int b10 = b(i11);
                int i13 = i10 % 100;
                int a10 = c.a(i10, 100);
                if (i13 < 0) {
                    i13 += 100;
                }
                if (i11 <= 2 && i13 - 1 < 0) {
                    a10--;
                    i13 = 99;
                }
                int a11 = (((((i12 + b10) + i13) + (i13 / 4)) + c.a(a10, 4)) - (a10 * 2)) % 7;
                if (a11 <= 0) {
                    return a11 + 7;
                }
                return a11;
            }
            throw new IllegalArgumentException("Day exceeds month length: " + m(i10, i11, i12));
        }
        throw new IllegalArgumentException("Day out of range: " + i12);
    }

    public static int d(int i10, int i11) {
        switch (i11) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 2:
                if (e(i10)) {
                    return 29;
                }
                return 28;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            default:
                throw new IllegalArgumentException("Invalid month: " + i11);
        }
    }

    public static boolean e(int i10) {
        if (i10 > 1900 && i10 < 2100) {
            if ((i10 & 3) != 0) {
                return false;
            }
            return true;
        } else if (((i10 & 3) != 0 || i10 % 100 == 0) && i10 % ReactFontManager.TypefaceStyle.NORMAL != 0) {
            return false;
        } else {
            return true;
        }
    }

    public static boolean f(int i10, int i11, int i12) {
        if (i10 >= -999999999 && i10 <= 999999999 && i11 >= 1 && i11 <= 12 && i12 >= 1 && i12 <= d(i10, i11)) {
            return true;
        }
        return false;
    }

    public static int g(long j10) {
        return (int) (j10 & 255);
    }

    public static int h(long j10) {
        return (int) ((j10 >> 16) & 255);
    }

    public static int i(long j10) {
        return (int) (j10 >> 32);
    }

    public static long j(int i10, int i11, int i12) {
        a(i10, i11, i12);
        long j10 = i10;
        if (i11 < 3) {
            j10--;
            i11 += 12;
        }
        return (((((((365 * j10) + c.b(j10, 4)) - c.b(j10, 100)) + c.b(j10, ReactFontManager.TypefaceStyle.NORMAL)) + (((i11 + 1) * 153) / 5)) - 123) + i12) - 678881;
    }

    public static long k(a aVar) {
        return j(aVar.f(), aVar.r(), aVar.g());
    }

    public static long l(long j10) {
        long j11;
        long f10 = c.f(j10, 678881L);
        long b10 = c.b(f10, 146097);
        int d10 = c.d(f10, 146097);
        int i10 = 29;
        int i11 = 2;
        if (d10 == 146096) {
            j11 = (b10 + 1) * 400;
        } else {
            int i12 = d10 / 36524;
            int i13 = d10 % 36524;
            int i14 = i13 / 1461;
            int i15 = i13 % 1461;
            if (i15 == 1460) {
                j11 = (b10 * 400) + (i12 * 100) + ((i14 + 1) * 4);
            } else {
                int i16 = i15 / 365;
                int i17 = i15 % 365;
                j11 = (b10 * 400) + (i12 * 100) + (i14 * 4) + i16;
                int i18 = ((i17 + 31) * 5) / 153;
                i11 = i18 + 2;
                i10 = (i17 - (((i18 + 3) * 153) / 5)) + 123;
                if (i11 > 12) {
                    j11++;
                    i11 = i18 - 10;
                }
            }
        }
        if (j11 >= -999999999 && j11 <= 999999999) {
            return (j11 << 32) | (i11 << 16) | i10;
        }
        throw new IllegalArgumentException("Year out of range: " + j11);
    }

    static String m(int i10, int i11, int i12) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(i10);
        sb2.append('-');
        if (i11 < 10) {
            sb2.append('0');
        }
        sb2.append(i11);
        sb2.append('-');
        if (i12 < 10) {
            sb2.append('0');
        }
        sb2.append(i12);
        return sb2.toString();
    }
}
