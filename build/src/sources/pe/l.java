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
    public static final /* synthetic */ int f43857x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f43858d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f43859e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f43860i;

    /* renamed from: o  reason: collision with root package name */
    private final d f43861o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f43862p;

    /* renamed from: q  reason: collision with root package name */
    private final m f43863q;

    /* renamed from: r  reason: collision with root package name */
    private final i f43864r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f43865s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f43866t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f43867u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f43868v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f43869w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f43870d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f43873o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f43874p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f43875q;

        /* renamed from: r  reason: collision with root package name */
        private float f43876r;

        /* renamed from: s  reason: collision with root package name */
        private float f43877s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f43871e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f43872i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f43878t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f43879u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f43873o = fArr;
            float[] fArr2 = new float[16];
            this.f43874p = fArr2;
            float[] fArr3 = new float[16];
            this.f43875q = fArr3;
            this.f43870d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f43877s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f43874p, 0, -this.f43876r, (float) Math.cos(this.f43877s), (float) Math.sin(this.f43877s), 0.0f);
        }

        @Override // pe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f43873o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f43877s = -f10;
            d();
        }

        @Override // pe.m.a
        public synchronized void b(PointF pointF) {
            this.f43876r = pointF.y;
            d();
            Matrix.setRotateM(this.f43875q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f43879u, 0, this.f43873o, 0, this.f43875q, 0);
                Matrix.multiplyMM(this.f43878t, 0, this.f43874p, 0, this.f43879u, 0);
            }
            Matrix.multiplyMM(this.f43872i, 0, this.f43871e, 0, this.f43878t, 0);
            this.f43870d.e(this.f43872i, false);
        }

        @Override // pe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f43871e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f43870d.f());
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
        Surface surface = lVar.f43866t;
        if (surface != null) {
            Iterator it = lVar.f43858d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f43865s, surface);
        lVar.f43865s = null;
        lVar.f43866t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f43865s;
        Surface surface = lVar.f43866t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f43865s = surfaceTexture;
        lVar.f43866t = surface2;
        Iterator it = lVar.f43858d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f43862p.post(new Runnable() { // from class: pe.j
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
        if (this.f43867u && this.f43868v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f43860i;
        if (sensor != null && z10 != this.f43869w) {
            if (z10) {
                this.f43859e.registerListener(this.f43861o, sensor, 0);
            } else {
                this.f43859e.unregisterListener(this.f43861o);
            }
            this.f43869w = z10;
        }
    }

    public void d(b bVar) {
        this.f43858d.add(bVar);
    }

    public void g(b bVar) {
        this.f43858d.remove(bVar);
    }

    public pe.a getCameraMotionListener() {
        return this.f43864r;
    }

    public oe.l getVideoFrameMetadataListener() {
        return this.f43864r;
    }

    public Surface getVideoSurface() {
        return this.f43866t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f43862p.post(new Runnable() { // from class: pe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f43868v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f43868v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f43864r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f43867u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f43858d = new CopyOnWriteArrayList();
        this.f43862p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) ne.a.e(context.getSystemService("sensor"));
        this.f43859e = sensorManager;
        Sensor defaultSensor = w0.f39012a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f43860i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f43864r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f43863q = mVar;
        this.f43861o = new d(((WindowManager) ne.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f43867u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
