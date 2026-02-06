package uk;

import tk.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a extends k {

    /* renamed from: b  reason: collision with root package name */
    private final int[] f51569b;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f51572e;

    /* renamed from: f  reason: collision with root package name */
    private final int[] f51573f;

    /* renamed from: a  reason: collision with root package name */
    private final int[] f51568a = new int[4];

    /* renamed from: c  reason: collision with root package name */
    private final float[] f51570c = new float[4];

    /* renamed from: d  reason: collision with root package name */
    private final float[] f51571d = new float[4];

    /* JADX INFO: Access modifiers changed from: protected */
    public a() {
        int[] iArr = new int[8];
        this.f51569b = iArr;
        this.f51572e = new int[iArr.length / 2];
        this.f51573f = new int[iArr.length / 2];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void g(int[] iArr, float[] fArr) {
        int i10 = 0;
        float f10 = fArr[0];
        for (int i11 = 1; i11 < iArr.length; i11++) {
            float f11 = fArr[i11];
            if (f11 < f10) {
                i10 = i11;
                f10 = f11;
            }
        }
        iArr[i10] = iArr[i10] - 1;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void n(int[] iArr, float[] fArr) {
        int i10 = 0;
        float f10 = fArr[0];
        for (int i11 = 1; i11 < iArr.length; i11++) {
            float f11 = fArr[i11];
            if (f11 > f10) {
                i10 = i11;
                f10 = f11;
            }
        }
        iArr[i10] = iArr[i10] + 1;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static boolean o(int[] iArr) {
        int i10;
        float f10 = (iArr[0] + iArr[1]) / ((iArr[2] + i10) + iArr[3]);
        if (f10 >= 0.7916667f && f10 <= 0.89285713f) {
            int i11 = Integer.MAX_VALUE;
            int i12 = Integer.MIN_VALUE;
            for (int i13 : iArr) {
                if (i13 > i12) {
                    i12 = i13;
                }
                if (i13 < i11) {
                    i11 = i13;
                }
            }
            if (i12 < i11 * 10) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static int p(int[] iArr, int[][] iArr2) {
        for (int i10 = 0; i10 < iArr2.length; i10++) {
            if (k.d(iArr, iArr2[i10], 0.45f) < 0.2f) {
                return i10;
            }
        }
        throw hk.k.a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int[] h() {
        return this.f51569b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int[] i() {
        return this.f51568a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int[] j() {
        return this.f51573f;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final float[] k() {
        return this.f51571d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int[] l() {
        return this.f51572e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final float[] m() {
        return this.f51570c;
    }
}
