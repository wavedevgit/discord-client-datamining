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
    public static final /* synthetic */ int f45419x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f45420d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f45421e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f45422i;

    /* renamed from: o  reason: collision with root package name */
    private final d f45423o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f45424p;

    /* renamed from: q  reason: collision with root package name */
    private final m f45425q;

    /* renamed from: r  reason: collision with root package name */
    private final i f45426r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f45427s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f45428t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f45429u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f45430v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f45431w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f45432d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f45435o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f45436p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f45437q;

        /* renamed from: r  reason: collision with root package name */
        private float f45438r;

        /* renamed from: s  reason: collision with root package name */
        private float f45439s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f45433e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f45434i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f45440t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f45441u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f45435o = fArr;
            float[] fArr2 = new float[16];
            this.f45436p = fArr2;
            float[] fArr3 = new float[16];
            this.f45437q = fArr3;
            this.f45432d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f45439s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f45436p, 0, -this.f45438r, (float) Math.cos(this.f45439s), (float) Math.sin(this.f45439s), 0.0f);
        }

        @Override // qe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f45435o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f45439s = -f10;
            d();
        }

        @Override // qe.m.a
        public synchronized void b(PointF pointF) {
            this.f45438r = pointF.y;
            d();
            Matrix.setRotateM(this.f45437q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f45441u, 0, this.f45435o, 0, this.f45437q, 0);
                Matrix.multiplyMM(this.f45440t, 0, this.f45436p, 0, this.f45441u, 0);
            }
            Matrix.multiplyMM(this.f45434i, 0, this.f45433e, 0, this.f45440t, 0);
            this.f45432d.e(this.f45434i, false);
        }

        @Override // qe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f45433e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f45432d.f());
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
        Surface surface = lVar.f45428t;
        if (surface != null) {
            Iterator it = lVar.f45420d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f45427s, surface);
        lVar.f45427s = null;
        lVar.f45428t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f45427s;
        Surface surface = lVar.f45428t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f45427s = surfaceTexture;
        lVar.f45428t = surface2;
        Iterator it = lVar.f45420d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f45424p.post(new Runnable() { // from class: qe.j
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
        if (this.f45429u && this.f45430v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f45422i;
        if (sensor != null && z10 != this.f45431w) {
            if (z10) {
                this.f45421e.registerListener(this.f45423o, sensor, 0);
            } else {
                this.f45421e.unregisterListener(this.f45423o);
            }
            this.f45431w = z10;
        }
    }

    public void d(b bVar) {
        this.f45420d.add(bVar);
    }

    public void g(b bVar) {
        this.f45420d.remove(bVar);
    }

    public qe.a getCameraMotionListener() {
        return this.f45426r;
    }

    public pe.l getVideoFrameMetadataListener() {
        return this.f45426r;
    }

    public Surface getVideoSurface() {
        return this.f45428t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f45424p.post(new Runnable() { // from class: qe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f45430v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f45430v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f45426r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f45429u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f45420d = new CopyOnWriteArrayList();
        this.f45424p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) oe.a.e(context.getSystemService("sensor"));
        this.f45421e = sensorManager;
        Sensor defaultSensor = w0.f40711a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f45422i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f45426r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f45425q = mVar;
        this.f45423o = new d(((WindowManager) oe.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f45429u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
