package nc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u {

    /* renamed from: a  reason: collision with root package name */
    private static final String[] f40066a = {"audio/mpeg-L1", "audio/mpeg-L2", "audio/mpeg"};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f40067b = {44100, 48000, 32000};

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f40068c = {32000, 64000, 96000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 352000, 384000, 416000, 448000};

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f40069d = {32000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 144000, 160000, 176000, 192000, 224000, 256000};

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f40070e = {32000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000, 384000};

    /* renamed from: f  reason: collision with root package name */
    private static final int[] f40071f = {32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000};

    /* renamed from: g  reason: collision with root package name */
    private static final int[] f40072g = {8000, 16000, 24000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 144000, 160000};

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public int f40073a;

        /* renamed from: b  reason: collision with root package name */
        public String f40074b;

        /* renamed from: c  reason: collision with root package name */
        public int f40075c;

        /* renamed from: d  reason: collision with root package name */
        public int f40076d;

        /* renamed from: e  reason: collision with root package name */
        public int f40077e;

        /* renamed from: f  reason: collision with root package name */
        public int f40078f;

        /* renamed from: g  reason: collision with root package name */
        public int f40079g;

        public boolean a(int i10) {
            int i11;
            int i12;
            int i13;
            int i14;
            int i15;
            int i16;
            if (!u.l(i10) || (i11 = (i10 >>> 19) & 3) == 1 || (i12 = (i10 >>> 17) & 3) == 0 || (i13 = (i10 >>> 12) & 15) == 0 || i13 == 15 || (i14 = (i10 >>> 10) & 3) == 3) {
                return false;
            }
            this.f40073a = i11;
            this.f40074b = u.f40066a[3 - i12];
            int i17 = u.f40067b[i14];
            this.f40076d = i17;
            int i18 = 2;
            if (i11 == 2) {
                this.f40076d = i17 / 2;
            } else if (i11 == 0) {
                this.f40076d = i17 / 4;
            }
            int i19 = (i10 >>> 9) & 1;
            this.f40079g = u.k(i11, i12);
            if (i12 == 3) {
                if (i11 == 3) {
                    i16 = u.f40068c[i13 - 1];
                } else {
                    i16 = u.f40069d[i13 - 1];
                }
                this.f40078f = i16;
                this.f40075c = (((i16 * 12) / this.f40076d) + i19) * 4;
            } else {
                int i20 = 144;
                if (i11 == 3) {
                    if (i12 == 2) {
                        i15 = u.f40070e[i13 - 1];
                    } else {
                        i15 = u.f40071f[i13 - 1];
                    }
                    this.f40078f = i15;
                    this.f40075c = ((i15 * 144) / this.f40076d) + i19;
                } else {
                    int i21 = u.f40072g[i13 - 1];
                    this.f40078f = i21;
                    if (i12 == 1) {
                        i20 = 72;
                    }
                    this.f40075c = ((i20 * i21) / this.f40076d) + i19;
                }
            }
            if (((i10 >> 6) & 3) == 3) {
                i18 = 1;
            }
            this.f40077e = i18;
            return true;
        }
    }

    public static int j(int i10) {
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        if (!l(i10) || (i11 = (i10 >>> 19) & 3) == 1 || (i12 = (i10 >>> 17) & 3) == 0 || (i13 = (i10 >>> 12) & 15) == 0 || i13 == 15 || (i14 = (i10 >>> 10) & 3) == 3) {
            return -1;
        }
        int i17 = f40067b[i14];
        if (i11 == 2) {
            i17 /= 2;
        } else if (i11 == 0) {
            i17 /= 4;
        }
        int i18 = (i10 >>> 9) & 1;
        if (i12 == 3) {
            if (i11 == 3) {
                i16 = f40068c[i13 - 1];
            } else {
                i16 = f40069d[i13 - 1];
            }
            return (((i16 * 12) / i17) + i18) * 4;
        }
        if (i11 == 3) {
            if (i12 == 2) {
                i15 = f40070e[i13 - 1];
            } else {
                i15 = f40071f[i13 - 1];
            }
        } else {
            i15 = f40072g[i13 - 1];
        }
        int i19 = 144;
        if (i11 == 3) {
            return ((i15 * 144) / i17) + i18;
        }
        if (i12 == 1) {
            i19 = 72;
        }
        return ((i19 * i15) / i17) + i18;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int k(int i10, int i11) {
        if (i11 != 1) {
            if (i11 == 2) {
                return 1152;
            }
            if (i11 == 3) {
                return 384;
            }
            throw new IllegalArgumentException();
        } else if (i10 == 3) {
            return 1152;
        } else {
            return 576;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean l(int i10) {
        if ((i10 & (-2097152)) == -2097152) {
            return true;
        }
        return false;
    }

    public static int m(int i10) {
        int i11;
        int i12;
        if (!l(i10) || (i11 = (i10 >>> 19) & 3) == 1 || (i12 = (i10 >>> 17) & 3) == 0) {
            return -1;
        }
        int i13 = (i10 >>> 12) & 15;
        int i14 = (i10 >>> 10) & 3;
        if (i13 == 0 || i13 == 15 || i14 == 3) {
            return -1;
        }
        return k(i11, i12);
    }
}
