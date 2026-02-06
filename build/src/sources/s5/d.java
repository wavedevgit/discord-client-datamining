package s5;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f49671a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f49672b;

    public d(float[] fArr, int[] iArr) {
        this.f49671a = fArr;
        this.f49672b = iArr;
    }

    private void a(d dVar) {
        int i10 = 0;
        while (true) {
            int[] iArr = dVar.f49672b;
            if (i10 < iArr.length) {
                this.f49671a[i10] = dVar.f49671a[i10];
                this.f49672b[i10] = iArr[i10];
                i10++;
            } else {
                return;
            }
        }
    }

    private int c(float f10) {
        int binarySearch = Arrays.binarySearch(this.f49671a, f10);
        if (binarySearch >= 0) {
            return this.f49672b[binarySearch];
        }
        int i10 = -(binarySearch + 1);
        if (i10 == 0) {
            return this.f49672b[0];
        }
        int[] iArr = this.f49672b;
        if (i10 == iArr.length - 1) {
            return iArr[iArr.length - 1];
        }
        float[] fArr = this.f49671a;
        int i11 = i10 - 1;
        float f11 = fArr[i11];
        return x5.b.c((f10 - f11) / (fArr[i10] - f11), iArr[i11], iArr[i10]);
    }

    public d b(float[] fArr) {
        int[] iArr = new int[fArr.length];
        for (int i10 = 0; i10 < fArr.length; i10++) {
            iArr[i10] = c(fArr[i10]);
        }
        return new d(fArr, iArr);
    }

    public int[] d() {
        return this.f49672b;
    }

    public float[] e() {
        return this.f49671a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            d dVar = (d) obj;
            if (Arrays.equals(this.f49671a, dVar.f49671a) && Arrays.equals(this.f49672b, dVar.f49672b)) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        return this.f49672b.length;
    }

    public void g(d dVar, d dVar2, float f10) {
        int[] iArr;
        if (dVar.equals(dVar2)) {
            a(dVar);
        } else if (f10 <= 0.0f) {
            a(dVar);
        } else if (f10 >= 1.0f) {
            a(dVar2);
        } else if (dVar.f49672b.length == dVar2.f49672b.length) {
            int i10 = 0;
            while (true) {
                iArr = dVar.f49672b;
                if (i10 >= iArr.length) {
                    break;
                }
                this.f49671a[i10] = x5.i.i(dVar.f49671a[i10], dVar2.f49671a[i10], f10);
                this.f49672b[i10] = x5.b.c(f10, dVar.f49672b[i10], dVar2.f49672b[i10]);
                i10++;
            }
            int length = iArr.length;
            while (true) {
                float[] fArr = this.f49671a;
                if (length < fArr.length) {
                    int[] iArr2 = dVar.f49672b;
                    fArr[length] = fArr[iArr2.length - 1];
                    int[] iArr3 = this.f49672b;
                    iArr3[length] = iArr3[iArr2.length - 1];
                    length++;
                } else {
                    return;
                }
            }
        } else {
            throw new IllegalArgumentException("Cannot interpolate between gradients. Lengths vary (" + dVar.f49672b.length + " vs " + dVar2.f49672b.length + ")");
        }
    }

    public int hashCode() {
        return (Arrays.hashCode(this.f49671a) * 31) + Arrays.hashCode(this.f49672b);
    }
}
