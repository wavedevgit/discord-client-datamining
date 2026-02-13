package qe;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.opengl.Matrix;
import android.view.Display;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements SensorEventListener {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f44605a = new float[16];

    /* renamed from: b  reason: collision with root package name */
    private final float[] f44606b = new float[16];

    /* renamed from: c  reason: collision with root package name */
    private final float[] f44607c = new float[16];

    /* renamed from: d  reason: collision with root package name */
    private final float[] f44608d = new float[3];

    /* renamed from: e  reason: collision with root package name */
    private final Display f44609e;

    /* renamed from: f  reason: collision with root package name */
    private final a[] f44610f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f44611g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(float[] fArr, float f10);
    }

    public d(Display display, a... aVarArr) {
        this.f44609e = display;
        this.f44610f = aVarArr;
    }

    private float a(float[] fArr) {
        SensorManager.remapCoordinateSystem(fArr, 1, 131, this.f44606b);
        SensorManager.getOrientation(this.f44606b, this.f44608d);
        return this.f44608d[2];
    }

    private void b(float[] fArr, float f10) {
        for (a aVar : this.f44610f) {
            aVar.a(fArr, f10);
        }
    }

    private void c(float[] fArr) {
        if (!this.f44611g) {
            c.a(this.f44607c, fArr);
            this.f44611g = true;
        }
        float[] fArr2 = this.f44606b;
        System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
        Matrix.multiplyMM(fArr, 0, this.f44606b, 0, this.f44607c, 0);
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
            float[] fArr2 = this.f44606b;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            SensorManager.remapCoordinateSystem(this.f44606b, i11, i12, fArr);
        }
    }

    private static void e(float[] fArr) {
        Matrix.rotateM(fArr, 0, 90.0f, 1.0f, 0.0f, 0.0f);
    }

    @Override // android.hardware.SensorEventListener
    public void onSensorChanged(SensorEvent sensorEvent) {
        SensorManager.getRotationMatrixFromVector(this.f44605a, sensorEvent.values);
        d(this.f44605a, this.f44609e.getRotation());
        float a10 = a(this.f44605a);
        e(this.f44605a);
        c(this.f44605a);
        b(this.f44605a, a10);
    }

    @Override // android.hardware.SensorEventListener
    public void onAccuracyChanged(Sensor sensor, int i10) {
    }
}
