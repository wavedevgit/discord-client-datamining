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
    public static final /* synthetic */ int f43905x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f43906d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f43907e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f43908i;

    /* renamed from: o  reason: collision with root package name */
    private final d f43909o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f43910p;

    /* renamed from: q  reason: collision with root package name */
    private final m f43911q;

    /* renamed from: r  reason: collision with root package name */
    private final i f43912r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f43913s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f43914t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f43915u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f43916v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f43917w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f43918d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f43921o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f43922p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f43923q;

        /* renamed from: r  reason: collision with root package name */
        private float f43924r;

        /* renamed from: s  reason: collision with root package name */
        private float f43925s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f43919e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f43920i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f43926t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f43927u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f43921o = fArr;
            float[] fArr2 = new float[16];
            this.f43922p = fArr2;
            float[] fArr3 = new float[16];
            this.f43923q = fArr3;
            this.f43918d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f43925s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f43922p, 0, -this.f43924r, (float) Math.cos(this.f43925s), (float) Math.sin(this.f43925s), 0.0f);
        }

        @Override // pe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f43921o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f43925s = -f10;
            d();
        }

        @Override // pe.m.a
        public synchronized void b(PointF pointF) {
            this.f43924r = pointF.y;
            d();
            Matrix.setRotateM(this.f43923q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f43927u, 0, this.f43921o, 0, this.f43923q, 0);
                Matrix.multiplyMM(this.f43926t, 0, this.f43922p, 0, this.f43927u, 0);
            }
            Matrix.multiplyMM(this.f43920i, 0, this.f43919e, 0, this.f43926t, 0);
            this.f43918d.e(this.f43920i, false);
        }

        @Override // pe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f43919e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f43918d.f());
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
        Surface surface = lVar.f43914t;
        if (surface != null) {
            Iterator it = lVar.f43906d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f43913s, surface);
        lVar.f43913s = null;
        lVar.f43914t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f43913s;
        Surface surface = lVar.f43914t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f43913s = surfaceTexture;
        lVar.f43914t = surface2;
        Iterator it = lVar.f43906d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f43910p.post(new Runnable() { // from class: pe.j
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
        if (this.f43915u && this.f43916v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f43908i;
        if (sensor != null && z10 != this.f43917w) {
            if (z10) {
                this.f43907e.registerListener(this.f43909o, sensor, 0);
            } else {
                this.f43907e.unregisterListener(this.f43909o);
            }
            this.f43917w = z10;
        }
    }

    public void d(b bVar) {
        this.f43906d.add(bVar);
    }

    public void g(b bVar) {
        this.f43906d.remove(bVar);
    }

    public pe.a getCameraMotionListener() {
        return this.f43912r;
    }

    public oe.l getVideoFrameMetadataListener() {
        return this.f43912r;
    }

    public Surface getVideoSurface() {
        return this.f43914t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f43910p.post(new Runnable() { // from class: pe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f43916v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f43916v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f43912r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f43915u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f43906d = new CopyOnWriteArrayList();
        this.f43910p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) ne.a.e(context.getSystemService("sensor"));
        this.f43907e = sensorManager;
        Sensor defaultSensor = w0.f39060a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f43908i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f43912r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f43911q = mVar;
        this.f43909o = new d(((WindowManager) ne.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f43915u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
