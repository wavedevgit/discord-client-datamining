package qe;

import android.content.Context;
import android.graphics.PointF;
import android.graphics.SurfaceTexture;
import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.opengl.GLES20;
import android.opengl.GLSurfaceView;
import android.opengl.Matrix;
import android.os.Handler;
import android.os.Looper;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.Surface;
import android.view.WindowManager;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import oe.t;
import oe.w0;
import qe.d;
import qe.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends GLSurfaceView {

    /* renamed from: x  reason: collision with root package name */
    public static final /* synthetic */ int f44088x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f44089d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f44090e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f44091i;

    /* renamed from: o  reason: collision with root package name */
    private final d f44092o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f44093p;

    /* renamed from: q  reason: collision with root package name */
    private final m f44094q;

    /* renamed from: r  reason: collision with root package name */
    private final i f44095r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f44096s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f44097t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f44098u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f44099v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f44100w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f44101d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f44104o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f44105p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f44106q;

        /* renamed from: r  reason: collision with root package name */
        private float f44107r;

        /* renamed from: s  reason: collision with root package name */
        private float f44108s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f44102e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f44103i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f44109t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f44110u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f44104o = fArr;
            float[] fArr2 = new float[16];
            this.f44105p = fArr2;
            float[] fArr3 = new float[16];
            this.f44106q = fArr3;
            this.f44101d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f44108s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f44105p, 0, -this.f44107r, (float) Math.cos(this.f44108s), (float) Math.sin(this.f44108s), 0.0f);
        }

        @Override // qe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f44104o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f44108s = -f10;
            d();
        }

        @Override // qe.m.a
        public synchronized void b(PointF pointF) {
            this.f44107r = pointF.y;
            d();
            Matrix.setRotateM(this.f44106q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f44110u, 0, this.f44104o, 0, this.f44106q, 0);
                Matrix.multiplyMM(this.f44109t, 0, this.f44105p, 0, this.f44110u, 0);
            }
            Matrix.multiplyMM(this.f44103i, 0, this.f44102e, 0, this.f44109t, 0);
            this.f44101d.e(this.f44103i, false);
        }

        @Override // qe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f44102e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f44101d.f());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void u(Surface surface);

        void v(Surface surface);
    }

    public l(Context context) {
        this(context, null);
    }

    public static /* synthetic */ void a(l lVar) {
        Surface surface = lVar.f44097t;
        if (surface != null) {
            Iterator it = lVar.f44089d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f44096s, surface);
        lVar.f44096s = null;
        lVar.f44097t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f44096s;
        Surface surface = lVar.f44097t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f44096s = surfaceTexture;
        lVar.f44097t = surface2;
        Iterator it = lVar.f44089d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f44093p.post(new Runnable() { // from class: qe.j
            @Override // java.lang.Runnable
            public final void run() {
                l.b(l.this, surfaceTexture);
            }
        });
    }

    private static void f(SurfaceTexture surfaceTexture, Surface surface) {
        if (surfaceTexture != null) {
            surfaceTexture.release();
        }
        if (surface != null) {
            surface.release();
        }
    }

    private void h() {
        boolean z10;
        if (this.f44098u && this.f44099v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f44091i;
        if (sensor != null && z10 != this.f44100w) {
            if (z10) {
                this.f44090e.registerListener(this.f44092o, sensor, 0);
            } else {
                this.f44090e.unregisterListener(this.f44092o);
            }
            this.f44100w = z10;
        }
    }

    public void d(b bVar) {
        this.f44089d.add(bVar);
    }

    public void g(b bVar) {
        this.f44089d.remove(bVar);
    }

    public qe.a getCameraMotionListener() {
        return this.f44095r;
    }

    public pe.l getVideoFrameMetadataListener() {
        return this.f44095r;
    }

    public Surface getVideoSurface() {
        return this.f44097t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f44093p.post(new Runnable() { // from class: qe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f44099v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f44099v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f44095r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f44098u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f44089d = new CopyOnWriteArrayList();
        this.f44093p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) oe.a.e(context.getSystemService("sensor"));
        this.f44090e = sensorManager;
        Sensor defaultSensor = w0.f39038a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f44091i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f44095r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f44094q = mVar;
        this.f44092o = new d(((WindowManager) oe.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f44098u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
