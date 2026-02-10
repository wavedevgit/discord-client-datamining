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
    public static final /* synthetic */ int f44087x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f44088d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f44089e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f44090i;

    /* renamed from: o  reason: collision with root package name */
    private final d f44091o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f44092p;

    /* renamed from: q  reason: collision with root package name */
    private final m f44093q;

    /* renamed from: r  reason: collision with root package name */
    private final i f44094r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f44095s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f44096t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f44097u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f44098v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f44099w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f44100d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f44103o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f44104p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f44105q;

        /* renamed from: r  reason: collision with root package name */
        private float f44106r;

        /* renamed from: s  reason: collision with root package name */
        private float f44107s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f44101e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f44102i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f44108t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f44109u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f44103o = fArr;
            float[] fArr2 = new float[16];
            this.f44104p = fArr2;
            float[] fArr3 = new float[16];
            this.f44105q = fArr3;
            this.f44100d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f44107s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f44104p, 0, -this.f44106r, (float) Math.cos(this.f44107s), (float) Math.sin(this.f44107s), 0.0f);
        }

        @Override // qe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f44103o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f44107s = -f10;
            d();
        }

        @Override // qe.m.a
        public synchronized void b(PointF pointF) {
            this.f44106r = pointF.y;
            d();
            Matrix.setRotateM(this.f44105q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f44109u, 0, this.f44103o, 0, this.f44105q, 0);
                Matrix.multiplyMM(this.f44108t, 0, this.f44104p, 0, this.f44109u, 0);
            }
            Matrix.multiplyMM(this.f44102i, 0, this.f44101e, 0, this.f44108t, 0);
            this.f44100d.e(this.f44102i, false);
        }

        @Override // qe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f44101e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f44100d.f());
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
        Surface surface = lVar.f44096t;
        if (surface != null) {
            Iterator it = lVar.f44088d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f44095s, surface);
        lVar.f44095s = null;
        lVar.f44096t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f44095s;
        Surface surface = lVar.f44096t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f44095s = surfaceTexture;
        lVar.f44096t = surface2;
        Iterator it = lVar.f44088d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f44092p.post(new Runnable() { // from class: qe.j
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
        if (this.f44097u && this.f44098v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f44090i;
        if (sensor != null && z10 != this.f44099w) {
            if (z10) {
                this.f44089e.registerListener(this.f44091o, sensor, 0);
            } else {
                this.f44089e.unregisterListener(this.f44091o);
            }
            this.f44099w = z10;
        }
    }

    public void d(b bVar) {
        this.f44088d.add(bVar);
    }

    public void g(b bVar) {
        this.f44088d.remove(bVar);
    }

    public qe.a getCameraMotionListener() {
        return this.f44094r;
    }

    public pe.l getVideoFrameMetadataListener() {
        return this.f44094r;
    }

    public Surface getVideoSurface() {
        return this.f44096t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f44092p.post(new Runnable() { // from class: qe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f44098v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f44098v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f44094r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f44097u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f44088d = new CopyOnWriteArrayList();
        this.f44092p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) oe.a.e(context.getSystemService("sensor"));
        this.f44089e = sensorManager;
        Sensor defaultSensor = w0.f39037a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f44090i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f44094r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f44093q = mVar;
        this.f44091o = new d(((WindowManager) oe.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f44097u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
