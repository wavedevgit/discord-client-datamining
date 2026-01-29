package androidx.core.view;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f3344a = new float[20];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f3345b = new long[20];

    /* renamed from: c  reason: collision with root package name */
    private float f3346c = 0.0f;

    /* renamed from: d  reason: collision with root package name */
    private int f3347d = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f3348e = 0;

    private void b() {
        this.f3347d = 0;
        this.f3346c = 0.0f;
    }

    private float e() {
        long[] jArr;
        long j10;
        int i10 = this.f3347d;
        if (i10 < 2) {
            return 0.0f;
        }
        int i11 = this.f3348e;
        int i12 = ((i11 + 20) - (i10 - 1)) % 20;
        long j11 = this.f3345b[i11];
        while (true) {
            jArr = this.f3345b;
            j10 = jArr[i12];
            if (j11 - j10 <= 100) {
                break;
            }
            this.f3347d--;
            i12 = (i12 + 1) % 20;
        }
        int i13 = this.f3347d;
        if (i13 < 2) {
            return 0.0f;
        }
        if (i13 == 2) {
            int i14 = (i12 + 1) % 20;
            long j12 = jArr[i14];
            if (j10 == j12) {
                return 0.0f;
            }
            return this.f3344a[i14] / ((float) (j12 - j10));
        }
        float f10 = 0.0f;
        int i15 = 0;
        for (int i16 = 0; i16 < this.f3347d - 1; i16++) {
            int i17 = i16 + i12;
            long[] jArr2 = this.f3345b;
            long j13 = jArr2[i17 % 20];
            int i18 = (i17 + 1) % 20;
            if (jArr2[i18] != j13) {
                i15++;
                float f11 = f(f10);
                float f12 = this.f3344a[i18] / ((float) (this.f3345b[i18] - j13));
                f10 += (f12 - f11) * Math.abs(f12);
                if (i15 == 1) {
                    f10 *= 0.5f;
                }
            }
        }
        return f(f10);
    }

    private static float f(float f10) {
        float f11;
        if (f10 < 0.0f) {
            f11 = -1.0f;
        } else {
            f11 = 1.0f;
        }
        return f11 * ((float) Math.sqrt(Math.abs(f10) * 2.0f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(MotionEvent motionEvent) {
        long eventTime = motionEvent.getEventTime();
        if (this.f3347d != 0 && eventTime - this.f3345b[this.f3348e] > 40) {
            b();
        }
        int i10 = (this.f3348e + 1) % 20;
        this.f3348e = i10;
        int i11 = this.f3347d;
        if (i11 != 20) {
            this.f3347d = i11 + 1;
        }
        this.f3344a[i10] = motionEvent.getAxisValue(26);
        this.f3345b[this.f3348e] = eventTime;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(int i10, float f10) {
        float e10 = e() * i10;
        this.f3346c = e10;
        if (e10 < (-Math.abs(f10))) {
            this.f3346c = -Math.abs(f10);
        } else if (this.f3346c > Math.abs(f10)) {
            this.f3346c = Math.abs(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float d(int i10) {
        if (i10 != 26) {
            return 0.0f;
        }
        return this.f3346c;
    }
}
