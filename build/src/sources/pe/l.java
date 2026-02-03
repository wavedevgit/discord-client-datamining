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
    public static final /* synthetic */ int f45130x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f45131d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f45132e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f45133i;

    /* renamed from: o  reason: collision with root package name */
    private final d f45134o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f45135p;

    /* renamed from: q  reason: collision with root package name */
    private final m f45136q;

    /* renamed from: r  reason: collision with root package name */
    private final i f45137r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f45138s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f45139t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f45140u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f45141v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f45142w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f45143d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f45146o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f45147p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f45148q;

        /* renamed from: r  reason: collision with root package name */
        private float f45149r;

        /* renamed from: s  reason: collision with root package name */
        private float f45150s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f45144e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f45145i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f45151t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f45152u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f45146o = fArr;
            float[] fArr2 = new float[16];
            this.f45147p = fArr2;
            float[] fArr3 = new float[16];
            this.f45148q = fArr3;
            this.f45143d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f45150s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f45147p, 0, -this.f45149r, (float) Math.cos(this.f45150s), (float) Math.sin(this.f45150s), 0.0f);
        }

        @Override // pe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f45146o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f45150s = -f10;
            d();
        }

        @Override // pe.m.a
        public synchronized void b(PointF pointF) {
            this.f45149r = pointF.y;
            d();
            Matrix.setRotateM(this.f45148q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f45152u, 0, this.f45146o, 0, this.f45148q, 0);
                Matrix.multiplyMM(this.f45151t, 0, this.f45147p, 0, this.f45152u, 0);
            }
            Matrix.multiplyMM(this.f45145i, 0, this.f45144e, 0, this.f45151t, 0);
            this.f45143d.e(this.f45145i, false);
        }

        @Override // pe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f45144e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f45143d.f());
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
        Surface surface = lVar.f45139t;
        if (surface != null) {
            Iterator it = lVar.f45131d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f45138s, surface);
        lVar.f45138s = null;
        lVar.f45139t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f45138s;
        Surface surface = lVar.f45139t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f45138s = surfaceTexture;
        lVar.f45139t = surface2;
        Iterator it = lVar.f45131d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f45135p.post(new Runnable() { // from class: pe.j
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
        if (this.f45140u && this.f45141v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f45133i;
        if (sensor != null && z10 != this.f45142w) {
            if (z10) {
                this.f45132e.registerListener(this.f45134o, sensor, 0);
            } else {
                this.f45132e.unregisterListener(this.f45134o);
            }
            this.f45142w = z10;
        }
    }

    public void d(b bVar) {
        this.f45131d.add(bVar);
    }

    public void g(b bVar) {
        this.f45131d.remove(bVar);
    }

    public pe.a getCameraMotionListener() {
        return this.f45137r;
    }

    public oe.l getVideoFrameMetadataListener() {
        return this.f45137r;
    }

    public Surface getVideoSurface() {
        return this.f45139t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f45135p.post(new Runnable() { // from class: pe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f45141v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f45141v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f45137r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f45140u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f45131d = new CopyOnWriteArrayList();
        this.f45135p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) ne.a.e(context.getSystemService("sensor"));
        this.f45132e = sensorManager;
        Sensor defaultSensor = w0.f40197a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f45133i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f45137r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f45136q = mVar;
        this.f45134o = new d(((WindowManager) ne.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f45140u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
