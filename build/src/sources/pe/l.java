package pe;

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
import ne.t;
import ne.w0;
import pe.d;
import pe.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends GLSurfaceView {

    /* renamed from: x  reason: collision with root package name */
    public static final /* synthetic */ int f45172x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f45173d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f45174e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f45175i;

    /* renamed from: o  reason: collision with root package name */
    private final d f45176o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f45177p;

    /* renamed from: q  reason: collision with root package name */
    private final m f45178q;

    /* renamed from: r  reason: collision with root package name */
    private final i f45179r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f45180s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f45181t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f45182u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f45183v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f45184w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f45185d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f45188o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f45189p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f45190q;

        /* renamed from: r  reason: collision with root package name */
        private float f45191r;

        /* renamed from: s  reason: collision with root package name */
        private float f45192s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f45186e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f45187i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f45193t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f45194u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f45188o = fArr;
            float[] fArr2 = new float[16];
            this.f45189p = fArr2;
            float[] fArr3 = new float[16];
            this.f45190q = fArr3;
            this.f45185d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f45192s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f45189p, 0, -this.f45191r, (float) Math.cos(this.f45192s), (float) Math.sin(this.f45192s), 0.0f);
        }

        @Override // pe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f45188o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f45192s = -f10;
            d();
        }

        @Override // pe.m.a
        public synchronized void b(PointF pointF) {
            this.f45191r = pointF.y;
            d();
            Matrix.setRotateM(this.f45190q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f45194u, 0, this.f45188o, 0, this.f45190q, 0);
                Matrix.multiplyMM(this.f45193t, 0, this.f45189p, 0, this.f45194u, 0);
            }
            Matrix.multiplyMM(this.f45187i, 0, this.f45186e, 0, this.f45193t, 0);
            this.f45185d.e(this.f45187i, false);
        }

        @Override // pe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f45186e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f45185d.f());
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
        Surface surface = lVar.f45181t;
        if (surface != null) {
            Iterator it = lVar.f45173d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f45180s, surface);
        lVar.f45180s = null;
        lVar.f45181t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f45180s;
        Surface surface = lVar.f45181t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f45180s = surfaceTexture;
        lVar.f45181t = surface2;
        Iterator it = lVar.f45173d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f45177p.post(new Runnable() { // from class: pe.j
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
        if (this.f45182u && this.f45183v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f45175i;
        if (sensor != null && z10 != this.f45184w) {
            if (z10) {
                this.f45174e.registerListener(this.f45176o, sensor, 0);
            } else {
                this.f45174e.unregisterListener(this.f45176o);
            }
            this.f45184w = z10;
        }
    }

    public void d(b bVar) {
        this.f45173d.add(bVar);
    }

    public void g(b bVar) {
        this.f45173d.remove(bVar);
    }

    public pe.a getCameraMotionListener() {
        return this.f45179r;
    }

    public oe.l getVideoFrameMetadataListener() {
        return this.f45179r;
    }

    public Surface getVideoSurface() {
        return this.f45181t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f45177p.post(new Runnable() { // from class: pe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f45183v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f45183v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f45179r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f45182u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f45173d = new CopyOnWriteArrayList();
        this.f45177p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) ne.a.e(context.getSystemService("sensor"));
        this.f45174e = sensorManager;
        Sensor defaultSensor = w0.f40158a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f45175i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f45179r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f45178q = mVar;
        this.f45176o = new d(((WindowManager) ne.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f45182u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
