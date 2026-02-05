package io.sentry.vendor;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: io.sentry.vendor.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class AbstractC0415a {

        /* renamed from: a  reason: collision with root package name */
        public byte[] f29852a;

        /* renamed from: b  reason: collision with root package name */
        public int f29853b;

        AbstractC0415a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends AbstractC0415a {

        /* renamed from: f  reason: collision with root package name */
        private static final int[] f29854f = {-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -2, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1};

        /* renamed from: g  reason: collision with root package name */
        private static final int[] f29855g = {-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -2, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, 63, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1};

        /* renamed from: c  reason: collision with root package name */
        private int f29856c;

        /* renamed from: d  reason: collision with root package name */
        private int f29857d;

        /* renamed from: e  reason: collision with root package name */
        private final int[] f29858e;

        public b(int i10, byte[] bArr) {
            int[] iArr;
            this.f29852a = bArr;
            if ((i10 & 8) == 0) {
                iArr = f29854f;
            } else {
                iArr = f29855g;
            }
            this.f29858e = iArr;
            this.f29856c = 0;
            this.f29857d = 0;
        }

        public boolean a(byte[] bArr, int i10, int i11, boolean z10) {
            int i12 = this.f29856c;
            if (i12 == 6) {
                return false;
            }
            int i13 = i11 + i10;
            int i14 = this.f29857d;
            byte[] bArr2 = this.f29852a;
            int[] iArr = this.f29858e;
            int i15 = 0;
            int i16 = i14;
            int i17 = i12;
            int i18 = i10;
            while (i18 < i13) {
                if (i17 == 0) {
                    while (true) {
                        int i19 = i18 + 4;
                        if (i19 > i13 || (i16 = (iArr[bArr[i18] & 255] << 18) | (iArr[bArr[i18 + 1] & 255] << 12) | (iArr[bArr[i18 + 2] & 255] << 6) | iArr[bArr[i18 + 3] & 255]) < 0) {
                            break;
                        }
                        bArr2[i15 + 2] = (byte) i16;
                        bArr2[i15 + 1] = (byte) (i16 >> 8);
                        bArr2[i15] = (byte) (i16 >> 16);
                        i15 += 3;
                        i18 = i19;
                    }
                    if (i18 >= i13) {
                        break;
                    }
                }
                int i20 = i18 + 1;
                int i21 = iArr[bArr[i18] & 255];
                if (i17 != 0) {
                    if (i17 != 1) {
                        if (i17 != 2) {
                            if (i17 != 3) {
                                if (i17 != 4) {
                                    if (i17 == 5 && i21 != -1) {
                                        this.f29856c = 6;
                                        return false;
                                    }
                                } else if (i21 == -2) {
                                    i17++;
                                } else if (i21 != -1) {
                                    this.f29856c = 6;
                                    return false;
                                }
                            } else if (i21 >= 0) {
                                int i22 = i21 | (i16 << 6);
                                bArr2[i15 + 2] = (byte) i22;
                                bArr2[i15 + 1] = (byte) (i22 >> 8);
                                bArr2[i15] = (byte) (i22 >> 16);
                                i15 += 3;
                                i16 = i22;
                                i17 = 0;
                            } else if (i21 == -2) {
                                bArr2[i15 + 1] = (byte) (i16 >> 2);
                                bArr2[i15] = (byte) (i16 >> 10);
                                i15 += 2;
                                i17 = 5;
                            } else if (i21 != -1) {
                                this.f29856c = 6;
                                return false;
                            }
                        } else {
                            if (i21 < 0) {
                                if (i21 == -2) {
                                    bArr2[i15] = (byte) (i16 >> 4);
                                    i15++;
                                    i17 = 4;
                                } else if (i21 != -1) {
                                    this.f29856c = 6;
                                    return false;
                                }
                            }
                            i21 |= i16 << 6;
                        }
                    } else {
                        if (i21 < 0) {
                            if (i21 != -1) {
                                this.f29856c = 6;
                                return false;
                            }
                        }
                        i21 |= i16 << 6;
                    }
                    i17++;
                    i16 = i21;
                } else {
                    if (i21 < 0) {
                        if (i21 != -1) {
                            this.f29856c = 6;
                            return false;
                        }
                    }
                    i17++;
                    i16 = i21;
                }
                i18 = i20;
            }
            if (!z10) {
                this.f29856c = i17;
                this.f29857d = i16;
                this.f29853b = i15;
                return true;
            } else if (i17 != 1) {
                if (i17 != 2) {
                    if (i17 != 3) {
                        if (i17 == 4) {
                            this.f29856c = 6;
                            return false;
                        }
                    } else {
                        int i23 = i15 + 1;
                        bArr2[i15] = (byte) (i16 >> 10);
                        i15 += 2;
                        bArr2[i23] = (byte) (i16 >> 2);
                    }
                } else {
                    bArr2[i15] = (byte) (i16 >> 4);
                    i15++;
                }
                this.f29856c = i17;
                this.f29853b = i15;
                return true;
            } else {
                this.f29856c = 6;
                return false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends AbstractC0415a {

        /* renamed from: j  reason: collision with root package name */
        private static final byte[] f29859j = {65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47};

        /* renamed from: k  reason: collision with root package name */
        private static final byte[] f29860k = {65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 95};

        /* renamed from: c  reason: collision with root package name */
        private final byte[] f29861c;

        /* renamed from: d  reason: collision with root package name */
        int f29862d;

        /* renamed from: e  reason: collision with root package name */
        private int f29863e;

        /* renamed from: f  reason: collision with root package name */
        public final boolean f29864f;

        /* renamed from: g  reason: collision with root package name */
        public final boolean f29865g;

        /* renamed from: h  reason: collision with root package name */
        public final boolean f29866h;

        /* renamed from: i  reason: collision with root package name */
        private final byte[] f29867i;

        public c(int i10, byte[] bArr) {
            boolean z10;
            boolean z11;
            byte[] bArr2;
            int i11;
            this.f29852a = bArr;
            if ((i10 & 1) == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f29864f = z10;
            if ((i10 & 2) == 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f29865g = z11;
            this.f29866h = (i10 & 4) != 0;
            if ((i10 & 8) == 0) {
                bArr2 = f29859j;
            } else {
                bArr2 = f29860k;
            }
            this.f29867i = bArr2;
            this.f29861c = new byte[2];
            this.f29862d = 0;
            if (z11) {
                i11 = 19;
            } else {
                i11 = -1;
            }
            this.f29863e = i11;
        }

        public boolean a(byte[] bArr, int i10, int i11, boolean z10) {
            int i12;
            int i13;
            int i14;
            int i15;
            byte b10;
            byte b11;
            byte b12;
            int i16;
            int i17;
            byte[] bArr2 = this.f29867i;
            byte[] bArr3 = this.f29852a;
            int i18 = this.f29863e;
            int i19 = i11 + i10;
            int i20 = this.f29862d;
            char c10 = 2;
            int i21 = 0;
            if (i20 != 1) {
                if (i20 == 2 && (i17 = i10 + 1) <= i19) {
                    byte[] bArr4 = this.f29861c;
                    i13 = ((bArr4[1] & 255) << 8) | ((bArr4[0] & 255) << 16) | (bArr[i10] & 255);
                    this.f29862d = 0;
                    i12 = i17;
                }
                i12 = i10;
                i13 = -1;
            } else {
                if (i10 + 2 <= i19) {
                    i12 = i10 + 2;
                    i13 = (bArr[i10 + 1] & 255) | ((this.f29861c[0] & 255) << 16) | ((bArr[i10] & 255) << 8);
                    this.f29862d = 0;
                }
                i12 = i10;
                i13 = -1;
            }
            if (i13 != -1) {
                bArr3[0] = bArr2[(i13 >> 18) & 63];
                bArr3[1] = bArr2[(i13 >> 12) & 63];
                bArr3[2] = bArr2[(i13 >> 6) & 63];
                bArr3[3] = bArr2[i13 & 63];
                i18--;
                if (i18 == 0) {
                    if (this.f29866h) {
                        bArr3[4] = 13;
                        i16 = 5;
                    } else {
                        i16 = 4;
                    }
                    i14 = i16 + 1;
                    bArr3[i16] = 10;
                    i18 = 19;
                } else {
                    i14 = 4;
                }
            } else {
                i14 = 0;
            }
            while (true) {
                int i22 = i12 + 3;
                if (i22 > i19) {
                    break;
                }
                char c11 = c10;
                int i23 = ((bArr[i12 + 1] & 255) << 8) | ((bArr[i12] & 255) << 16) | (bArr[i12 + 2] & 255);
                bArr3[i14] = bArr2[(i23 >> 18) & 63];
                bArr3[i14 + 1] = bArr2[(i23 >> 12) & 63];
                bArr3[i14 + 2] = bArr2[(i23 >> 6) & 63];
                bArr3[i14 + 3] = bArr2[i23 & 63];
                int i24 = i14 + 4;
                i18--;
                if (i18 == 0) {
                    if (this.f29866h) {
                        bArr3[i24] = 13;
                        i24 = i14 + 5;
                    }
                    i14 = i24 + 1;
                    bArr3[i24] = 10;
                    c10 = c11;
                    i18 = 19;
                    i12 = i22;
                } else {
                    i14 = i24;
                    i12 = i22;
                    c10 = c11;
                }
            }
            if (z10) {
                int i25 = this.f29862d;
                if (i12 - i25 == i19 - 1) {
                    if (i25 > 0) {
                        b12 = this.f29861c[0];
                        i21 = 1;
                    } else {
                        b12 = bArr[i12];
                    }
                    int i26 = (b12 & 255) << 4;
                    this.f29862d = i25 - i21;
                    bArr3[i14] = bArr2[(i26 >> 6) & 63];
                    int i27 = i14 + 2;
                    bArr3[i14 + 1] = bArr2[i26 & 63];
                    if (this.f29864f) {
                        bArr3[i27] = 61;
                        i27 = i14 + 4;
                        bArr3[i14 + 3] = 61;
                    }
                    if (this.f29865g) {
                        if (this.f29866h) {
                            bArr3[i27] = 13;
                            i27++;
                        }
                        i15 = i27 + 1;
                        bArr3[i27] = 10;
                        i14 = i15;
                    } else {
                        i14 = i27;
                    }
                } else if (i12 - i25 == i19 - 2) {
                    if (i25 > 1) {
                        b10 = this.f29861c[0];
                        i21 = 1;
                    } else {
                        byte b13 = bArr[i12];
                        i12++;
                        b10 = b13;
                    }
                    int i28 = (b10 & 255) << 10;
                    if (i25 > 0) {
                        b11 = this.f29861c[i21];
                        i21++;
                    } else {
                        b11 = bArr[i12];
                    }
                    int i29 = i28 | ((b11 & 255) << 2);
                    this.f29862d = i25 - i21;
                    bArr3[i14] = bArr2[(i29 >> 12) & 63];
                    bArr3[i14 + 1] = bArr2[(i29 >> 6) & 63];
                    int i30 = i14 + 3;
                    bArr3[i14 + 2] = bArr2[i29 & 63];
                    if (this.f29864f) {
                        bArr3[i30] = 61;
                        i30 = i14 + 4;
                    }
                    if (this.f29865g) {
                        if (this.f29866h) {
                            bArr3[i30] = 13;
                            i30++;
                        }
                        i15 = i30 + 1;
                        bArr3[i30] = 10;
                        i14 = i15;
                    } else {
                        i14 = i30;
                    }
                } else if (this.f29865g && i14 > 0 && i18 != 19) {
                    if (this.f29866h) {
                        bArr3[i14] = 13;
                        i14++;
                    }
                    i15 = i14 + 1;
                    bArr3[i14] = 10;
                    i14 = i15;
                }
            } else if (i12 == i19 - 1) {
                byte[] bArr5 = this.f29861c;
                int i31 = this.f29862d;
                this.f29862d = i31 + 1;
                bArr5[i31] = bArr[i12];
            } else if (i12 == i19 - 2) {
                byte[] bArr6 = this.f29861c;
                int i32 = this.f29862d;
                int i33 = i32 + 1;
                this.f29862d = i33;
                bArr6[i32] = bArr[i12];
                this.f29862d = i32 + 2;
                bArr6[i33] = bArr[i12 + 1];
            }
            this.f29853b = i14;
            this.f29863e = i18;
            return true;
        }
    }

    public static byte[] a(String str, int i10) {
        return b(str.getBytes(), i10);
    }

    public static byte[] b(byte[] bArr, int i10) {
        return c(bArr, 0, bArr.length, i10);
    }

    public static byte[] c(byte[] bArr, int i10, int i11, int i12) {
        b bVar = new b(i12, new byte[(i11 * 3) / 4]);
        if (bVar.a(bArr, i10, i11, true)) {
            int i13 = bVar.f29853b;
            byte[] bArr2 = bVar.f29852a;
            if (i13 == bArr2.length) {
                return bArr2;
            }
            byte[] bArr3 = new byte[i13];
            System.arraycopy(bArr2, 0, bArr3, 0, i13);
            return bArr3;
        }
        throw new IllegalArgumentException("bad base-64");
    }

    public static byte[] d(byte[] bArr, int i10) {
        return e(bArr, 0, bArr.length, i10);
    }

    public static byte[] e(byte[] bArr, int i10, int i11, int i12) {
        c cVar = new c(i12, null);
        int i13 = (i11 / 3) * 4;
        int i14 = 2;
        if (cVar.f29864f) {
            if (i11 % 3 > 0) {
                i13 += 4;
            }
        } else {
            int i15 = i11 % 3;
            if (i15 != 1) {
                if (i15 == 2) {
                    i13 += 3;
                }
            } else {
                i13 += 2;
            }
        }
        if (cVar.f29865g && i11 > 0) {
            int i16 = ((i11 - 1) / 57) + 1;
            if (!cVar.f29866h) {
                i14 = 1;
            }
            i13 += i16 * i14;
        }
        cVar.f29852a = new byte[i13];
        cVar.a(bArr, i10, i11, true);
        return cVar.f29852a;
    }

    public static String f(byte[] bArr, int i10) {
        try {
            return new String(d(bArr, i10), "US-ASCII");
        } catch (UnsupportedEncodingException e10) {
            throw new AssertionError(e10);
        }
    }
}
