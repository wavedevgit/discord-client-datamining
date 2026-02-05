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
    private final float[] f45009a = new float[16];

    /* renamed from: b  reason: collision with root package name */
    private final float[] f45010b = new float[16];

    /* renamed from: c  reason: collision with root package name */
    private final float[] f45011c = new float[16];

    /* renamed from: d  reason: collision with root package name */
    private final float[] f45012d = new float[3];

    /* renamed from: e  reason: collision with root package name */
    private final Display f45013e;

    /* renamed from: f  reason: collision with root package name */
    private final a[] f45014f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f45015g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(float[] fArr, float f10);
    }

    public d(Display display, a... aVarArr) {
        this.f45013e = display;
        this.f45014f = aVarArr;
    }

    private float a(float[] fArr) {
        SensorManager.remapCoordinateSystem(fArr, 1, 131, this.f45010b);
        SensorManager.getOrientation(this.f45010b, this.f45012d);
        return this.f45012d[2];
    }

    private void b(float[] fArr, float f10) {
        for (a aVar : this.f45014f) {
            aVar.a(fArr, f10);
        }
    }

    private void c(float[] fArr) {
        if (!this.f45015g) {
            c.a(this.f45011c, fArr);
            this.f45015g = true;
        }
        float[] fArr2 = this.f45010b;
        System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
        Matrix.multiplyMM(fArr, 0, this.f45010b, 0, this.f45011c, 0);
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
            float[] fArr2 = this.f45010b;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            SensorManager.remapCoordinateSystem(this.f45010b, i11, i12, fArr);
        }
    }

    private static void e(float[] fArr) {
        Matrix.rotateM(fArr, 0, 90.0f, 1.0f, 0.0f, 0.0f);
    }

    @Override // android.hardware.SensorEventListener
    public void onSensorChanged(SensorEvent sensorEvent) {
        SensorManager.getRotationMatrixFromVector(this.f45009a, sensorEvent.values);
        d(this.f45009a, this.f45013e.getRotation());
        float a10 = a(this.f45009a);
        e(this.f45009a);
        c(this.f45009a);
        b(this.f45009a, a10);
    }

    @Override // android.hardware.SensorEventListener
    public void onAccuracyChanged(Sensor sensor, int i10) {
    }
}
