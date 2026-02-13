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
    public static final /* synthetic */ int f44656x = 0;

    /* renamed from: d  reason: collision with root package name */
    private final CopyOnWriteArrayList f44657d;

    /* renamed from: e  reason: collision with root package name */
    private final SensorManager f44658e;

    /* renamed from: i  reason: collision with root package name */
    private final Sensor f44659i;

    /* renamed from: o  reason: collision with root package name */
    private final d f44660o;

    /* renamed from: p  reason: collision with root package name */
    private final Handler f44661p;

    /* renamed from: q  reason: collision with root package name */
    private final m f44662q;

    /* renamed from: r  reason: collision with root package name */
    private final i f44663r;

    /* renamed from: s  reason: collision with root package name */
    private SurfaceTexture f44664s;

    /* renamed from: t  reason: collision with root package name */
    private Surface f44665t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f44666u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f44667v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f44668w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class a implements GLSurfaceView.Renderer, m.a, d.a {

        /* renamed from: d  reason: collision with root package name */
        private final i f44669d;

        /* renamed from: o  reason: collision with root package name */
        private final float[] f44672o;

        /* renamed from: p  reason: collision with root package name */
        private final float[] f44673p;

        /* renamed from: q  reason: collision with root package name */
        private final float[] f44674q;

        /* renamed from: r  reason: collision with root package name */
        private float f44675r;

        /* renamed from: s  reason: collision with root package name */
        private float f44676s;

        /* renamed from: e  reason: collision with root package name */
        private final float[] f44670e = new float[16];

        /* renamed from: i  reason: collision with root package name */
        private final float[] f44671i = new float[16];

        /* renamed from: t  reason: collision with root package name */
        private final float[] f44677t = new float[16];

        /* renamed from: u  reason: collision with root package name */
        private final float[] f44678u = new float[16];

        public a(i iVar) {
            float[] fArr = new float[16];
            this.f44672o = fArr;
            float[] fArr2 = new float[16];
            this.f44673p = fArr2;
            float[] fArr3 = new float[16];
            this.f44674q = fArr3;
            this.f44669d = iVar;
            t.j(fArr);
            t.j(fArr2);
            t.j(fArr3);
            this.f44676s = 3.1415927f;
        }

        private float c(float f10) {
            if (f10 > 1.0f) {
                return (float) (Math.toDegrees(Math.atan(Math.tan(Math.toRadians(45.0d)) / f10)) * 2.0d);
            }
            return 90.0f;
        }

        private void d() {
            Matrix.setRotateM(this.f44673p, 0, -this.f44675r, (float) Math.cos(this.f44676s), (float) Math.sin(this.f44676s), 0.0f);
        }

        @Override // qe.d.a
        public synchronized void a(float[] fArr, float f10) {
            float[] fArr2 = this.f44672o;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            this.f44676s = -f10;
            d();
        }

        @Override // qe.m.a
        public synchronized void b(PointF pointF) {
            this.f44675r = pointF.y;
            d();
            Matrix.setRotateM(this.f44674q, 0, -pointF.x, 0.0f, 1.0f, 0.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            synchronized (this) {
                Matrix.multiplyMM(this.f44678u, 0, this.f44672o, 0, this.f44674q, 0);
                Matrix.multiplyMM(this.f44677t, 0, this.f44673p, 0, this.f44678u, 0);
            }
            Matrix.multiplyMM(this.f44671i, 0, this.f44670e, 0, this.f44677t, 0);
            this.f44669d.e(this.f44671i, false);
        }

        @Override // qe.m.a
        public boolean onSingleTapUp(MotionEvent motionEvent) {
            return l.this.performClick();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
            float f10 = i10 / i11;
            Matrix.perspectiveM(this.f44670e, 0, c(f10), f10, 0.1f, 100.0f);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public synchronized void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            l.this.e(this.f44669d.f());
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
        Surface surface = lVar.f44665t;
        if (surface != null) {
            Iterator it = lVar.f44657d.iterator();
            while (it.hasNext()) {
                ((b) it.next()).u(surface);
            }
        }
        f(lVar.f44664s, surface);
        lVar.f44664s = null;
        lVar.f44665t = null;
    }

    public static /* synthetic */ void b(l lVar, SurfaceTexture surfaceTexture) {
        SurfaceTexture surfaceTexture2 = lVar.f44664s;
        Surface surface = lVar.f44665t;
        Surface surface2 = new Surface(surfaceTexture);
        lVar.f44664s = surfaceTexture;
        lVar.f44665t = surface2;
        Iterator it = lVar.f44657d.iterator();
        while (it.hasNext()) {
            ((b) it.next()).v(surface2);
        }
        f(surfaceTexture2, surface);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e(final SurfaceTexture surfaceTexture) {
        this.f44661p.post(new Runnable() { // from class: qe.j
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
        if (this.f44666u && this.f44667v) {
            z10 = true;
        } else {
            z10 = false;
        }
        Sensor sensor = this.f44659i;
        if (sensor != null && z10 != this.f44668w) {
            if (z10) {
                this.f44658e.registerListener(this.f44660o, sensor, 0);
            } else {
                this.f44658e.unregisterListener(this.f44660o);
            }
            this.f44668w = z10;
        }
    }

    public void d(b bVar) {
        this.f44657d.add(bVar);
    }

    public void g(b bVar) {
        this.f44657d.remove(bVar);
    }

    public qe.a getCameraMotionListener() {
        return this.f44663r;
    }

    public pe.l getVideoFrameMetadataListener() {
        return this.f44663r;
    }

    public Surface getVideoSurface() {
        return this.f44665t;
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f44661p.post(new Runnable() { // from class: qe.k
            @Override // java.lang.Runnable
            public final void run() {
                l.a(l.this);
            }
        });
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        this.f44667v = false;
        h();
        super.onPause();
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        super.onResume();
        this.f44667v = true;
        h();
    }

    public void setDefaultStereoMode(int i10) {
        this.f44663r.g(i10);
    }

    public void setUseSensorRotation(boolean z10) {
        this.f44666u = z10;
        h();
    }

    public l(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f44657d = new CopyOnWriteArrayList();
        this.f44661p = new Handler(Looper.getMainLooper());
        SensorManager sensorManager = (SensorManager) oe.a.e(context.getSystemService("sensor"));
        this.f44658e = sensorManager;
        Sensor defaultSensor = w0.f39606a >= 18 ? sensorManager.getDefaultSensor(15) : null;
        this.f44659i = defaultSensor == null ? sensorManager.getDefaultSensor(11) : defaultSensor;
        i iVar = new i();
        this.f44663r = iVar;
        a aVar = new a(iVar);
        m mVar = new m(context, aVar, 25.0f);
        this.f44662q = mVar;
        this.f44660o = new d(((WindowManager) oe.a.e((WindowManager) context.getSystemService("window"))).getDefaultDisplay(), mVar, aVar);
        this.f44666u = true;
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setOnTouchListener(mVar);
    }
}
