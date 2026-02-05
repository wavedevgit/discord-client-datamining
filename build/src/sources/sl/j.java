package sl;

import android.graphics.SurfaceTexture;
import android.opengl.GLES20;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class j implements SurfaceTexture.OnFrameAvailableListener {

    /* renamed from: d  reason: collision with root package name */
    private SurfaceTexture f49773d;

    /* renamed from: e  reason: collision with root package name */
    private Surface f49774e;

    /* renamed from: p  reason: collision with root package name */
    private boolean f49777p;

    /* renamed from: o  reason: collision with root package name */
    private final Object f49776o = new Object();

    /* renamed from: i  reason: collision with root package name */
    private int f49775i = b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(int i10, int i11) {
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f49775i);
        this.f49773d = surfaceTexture;
        if (i10 != -1 && i11 != -1) {
            surfaceTexture.setDefaultBufferSize(i10, i11);
        }
        this.f49774e = new Surface(this.f49773d);
        this.f49773d.setOnFrameAvailableListener(this);
    }

    private int b() {
        int[] iArr = new int[1];
        GLES20.glGenTextures(1, iArr, 0);
        int i10 = iArr[0];
        GLES20.glBindTexture(36197, i10);
        f.a("glBindTexture textureID");
        GLES20.glTexParameterf(36197, 10241, 9729.0f);
        GLES20.glTexParameterf(36197, 10240, 9729.0f);
        GLES20.glTexParameteri(36197, 10242, 33071);
        GLES20.glTexParameteri(36197, 10243, 33071);
        f.a("glTexParameter");
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        synchronized (this.f49776o) {
            while (!this.f49777p) {
                try {
                    this.f49776o.wait(10000L);
                    if (!this.f49777p) {
                        throw new RuntimeException("Surface frame wait timed out");
                    }
                } catch (InterruptedException e10) {
                    throw new RuntimeException(e10);
                }
            }
            this.f49777p = false;
        }
        f.a("before updateTexImage");
        this.f49773d.updateTexImage();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Surface c() {
        return this.f49774e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f49775i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float[] e() {
        float[] fArr = new float[16];
        this.f49773d.getTransformMatrix(fArr);
        return fArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        Surface surface = this.f49774e;
        if (surface != null) {
            surface.release();
            this.f49774e = null;
        }
    }

    @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
    public void onFrameAvailable(SurfaceTexture surfaceTexture) {
        synchronized (this.f49776o) {
            try {
                if (!this.f49777p) {
                    this.f49777p = true;
                    this.f49776o.notifyAll();
                } else {
                    throw new RuntimeException("frameAvailable already set, frame could be dropped");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
