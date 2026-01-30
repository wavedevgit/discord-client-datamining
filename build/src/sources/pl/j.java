package pl;

import android.graphics.SurfaceTexture;
import android.opengl.GLES20;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class j implements SurfaceTexture.OnFrameAvailableListener {

    /* renamed from: d  reason: collision with root package name */
    private SurfaceTexture f46125d;

    /* renamed from: e  reason: collision with root package name */
    private Surface f46126e;

    /* renamed from: p  reason: collision with root package name */
    private boolean f46129p;

    /* renamed from: o  reason: collision with root package name */
    private final Object f46128o = new Object();

    /* renamed from: i  reason: collision with root package name */
    private int f46127i = b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(int i10, int i11) {
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f46127i);
        this.f46125d = surfaceTexture;
        if (i10 != -1 && i11 != -1) {
            surfaceTexture.setDefaultBufferSize(i10, i11);
        }
        this.f46126e = new Surface(this.f46125d);
        this.f46125d.setOnFrameAvailableListener(this);
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
        synchronized (this.f46128o) {
            while (!this.f46129p) {
                try {
                    this.f46128o.wait(10000L);
                    if (!this.f46129p) {
                        throw new RuntimeException("Surface frame wait timed out");
                    }
                } catch (InterruptedException e10) {
                    throw new RuntimeException(e10);
                }
            }
            this.f46129p = false;
        }
        f.a("before updateTexImage");
        this.f46125d.updateTexImage();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Surface c() {
        return this.f46126e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f46127i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float[] e() {
        float[] fArr = new float[16];
        this.f46125d.getTransformMatrix(fArr);
        return fArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        Surface surface = this.f46126e;
        if (surface != null) {
            surface.release();
            this.f46126e = null;
        }
    }

    @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
    public void onFrameAvailable(SurfaceTexture surfaceTexture) {
        synchronized (this.f46128o) {
            try {
                if (!this.f46129p) {
                    this.f46129p = true;
                    this.f46128o.notifyAll();
                } else {
                    throw new RuntimeException("frameAvailable already set, frame could be dropped");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
