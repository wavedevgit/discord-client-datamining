package pe;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.opengl.Matrix;
import android.view.Display;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements SensorEventListener {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f43806a = new float[16];

    /* renamed from: b  reason: collision with root package name */
    private final float[] f43807b = new float[16];

    /* renamed from: c  reason: collision with root package name */
    private final float[] f43808c = new float[16];

    /* renamed from: d  reason: collision with root package name */
    private final float[] f43809d = new float[3];

    /* renamed from: e  reason: collision with root package name */
    private final Display f43810e;

    /* renamed from: f  reason: collision with root package name */
    private final a[] f43811f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f43812g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(float[] fArr, float f10);
    }

    public d(Display display, a... aVarArr) {
        this.f43810e = display;
        this.f43811f = aVarArr;
    }

    private float a(float[] fArr) {
        SensorManager.remapCoordinateSystem(fArr, 1, 131, this.f43807b);
        SensorManager.getOrientation(this.f43807b, this.f43809d);
        return this.f43809d[2];
    }

    private void b(float[] fArr, float f10) {
        for (a aVar : this.f43811f) {
            aVar.a(fArr, f10);
        }
    }

    private void c(float[] fArr) {
        if (!this.f43812g) {
            c.a(this.f43808c, fArr);
            this.f43812g = true;
        }
        float[] fArr2 = this.f43807b;
        System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
        Matrix.multiplyMM(fArr, 0, this.f43807b, 0, this.f43808c, 0);
    }

    private void d(float[] fArr, int i10) {
        if (i10 != 0) {
            int i11 = 129;
            int i12 = 1;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        i11 = 130;
                    } else {
                        throw new IllegalStateException();
                    }
                } else {
                    i12 = 130;
                }
            } else {
                i12 = 129;
                i11 = 2;
            }
            float[] fArr2 = this.f43807b;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            SensorManager.remapCoordinateSystem(this.f43807b, i11, i12, fArr);
        }
    }

    private static void e(float[] fArr) {
        Matrix.rotateM(fArr, 0, 90.0f, 1.0f, 0.0f, 0.0f);
    }

    @Override // android.hardware.SensorEventListener
    public void onSensorChanged(SensorEvent sensorEvent) {
        SensorManager.getRotationMatrixFromVector(this.f43806a, sensorEvent.values);
        d(this.f43806a, this.f43810e.getRotation());
        float a10 = a(this.f43806a);
        e(this.f43806a);
        c(this.f43806a);
        b(this.f43806a, a10);
    }

    @Override // android.hardware.SensorEventListener
    public void onAccuracyChanged(Sensor sensor, int i10) {
    }
}
