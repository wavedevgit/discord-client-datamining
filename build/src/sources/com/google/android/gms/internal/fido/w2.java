package com.google.android.gms.internal.fido;

import java.math.RoundingMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class w2 {
    public static int a(int i10, int i11, RoundingMode roundingMode) {
        roundingMode.getClass();
        if (i11 != 0) {
            int i12 = i10 / i11;
            int i13 = i10 - (i11 * i12);
            if (i13 != 0) {
                int i14 = 1;
                int i15 = ((i10 ^ i11) >> 31) | 1;
                switch (v2.f14098a[roundingMode.ordinal()]) {
                    case 1:
                        x2.a(false);
                        return i12;
                    case 2:
                        return i12;
                    case 3:
                        if (i15 >= 0) {
                            return i12;
                        }
                        break;
                    case 4:
                        break;
                    case 5:
                        if (i15 <= 0) {
                            return i12;
                        }
                        break;
                    case 6:
                    case 7:
                    case 8:
                        int abs = Math.abs(i13);
                        int abs2 = abs - (Math.abs(i11) - abs);
                        if (abs2 == 0) {
                            if (roundingMode != RoundingMode.HALF_UP) {
                                if (roundingMode != RoundingMode.HALF_EVEN) {
                                    i14 = 0;
                                }
                                if ((i12 & 1 & i14) == 0) {
                                    return i12;
                                }
                            }
                        } else if (abs2 <= 0) {
                            return i12;
                        }
                        break;
                    default:
                        throw new AssertionError();
                }
                return i12 + i15;
            }
            return i12;
        }
        throw new ArithmeticException("/ by zero");
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public static int b(int i10, RoundingMode roundingMode) {
        boolean z10;
        if (i10 > 0) {
            switch (v2.f14098a[roundingMode.ordinal()]) {
                case 1:
                    if (((i10 - 1) & i10) == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    x2.a(z10);
                    break;
                case 2:
                case 3:
                    break;
                case 4:
                case 5:
                    return 32 - Integer.numberOfLeadingZeros(i10 - 1);
                case 6:
                case 7:
                case 8:
                    int numberOfLeadingZeros = Integer.numberOfLeadingZeros(i10);
                    return (31 - numberOfLeadingZeros) + ((((-1257966797) >>> numberOfLeadingZeros) - i10) >>> 31);
                default:
                    throw new AssertionError();
            }
            return 31 - Integer.numberOfLeadingZeros(i10);
        }
        throw new IllegalArgumentException("x (0) must be > 0");
    }
}
