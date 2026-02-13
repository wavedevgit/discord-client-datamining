package xl;

import android.graphics.SurfaceTexture;
import android.opengl.GLES20;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class j implements SurfaceTexture.OnFrameAvailableListener {

    /* renamed from: d  reason: collision with root package name */
    private SurfaceTexture f55492d;

    /* renamed from: e  reason: collision with root package name */
    private Surface f55493e;

    /* renamed from: p  reason: collision with root package name */
    private boolean f55496p;

    /* renamed from: o  reason: collision with root package name */
    private final Object f55495o = new Object();

    /* renamed from: i  reason: collision with root package name */
    private int f55494i = b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(int i10, int i11) {
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f55494i);
        this.f55492d = surfaceTexture;
        if (i10 != -1 && i11 != -1) {
            surfaceTexture.setDefaultBufferSize(i10, i11);
        }
        this.f55493e = new Surface(this.f55492d);
        this.f55492d.setOnFrameAvailableListener(this);
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
        synchronized (this.f55495o) {
            while (!this.f55496p) {
                try {
                    this.f55495o.wait(10000L);
                    if (!this.f55496p) {
                        throw new RuntimeException("Surface frame wait timed out");
                    }
                } catch (InterruptedException e10) {
                    throw new RuntimeException(e10);
                }
            }
            this.f55496p = false;
        }
        f.a("before updateTexImage");
        this.f55492d.updateTexImage();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Surface c() {
        return this.f55493e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f55494i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float[] e() {
        float[] fArr = new float[16];
        this.f55492d.getTransformMatrix(fArr);
        return fArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        Surface surface = this.f55493e;
        if (surface != null) {
            surface.release();
            this.f55493e = null;
        }
    }

    @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
    public void onFrameAvailable(SurfaceTexture surfaceTexture) {
        synchronized (this.f55495o) {
            try {
                if (!this.f55496p) {
                    this.f55496p = true;
                    this.f55495o.notifyAll();
                } else {
                    throw new RuntimeException("frameAvailable already set, frame could be dropped");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
