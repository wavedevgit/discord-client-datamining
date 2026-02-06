package pe;

import android.graphics.SurfaceTexture;
import android.media.MediaFormat;
import android.opengl.GLES20;
import android.opengl.Matrix;
import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import java.util.concurrent.atomic.AtomicBoolean;
import ne.r0;
import ne.t;
import ne.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements oe.l, a {

    /* renamed from: t  reason: collision with root package name */
    private int f43849t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f43850u;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f43853x;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f43841d = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f43842e = new AtomicBoolean(true);

    /* renamed from: i  reason: collision with root package name */
    private final g f43843i = new g();

    /* renamed from: o  reason: collision with root package name */
    private final c f43844o = new c();

    /* renamed from: p  reason: collision with root package name */
    private final r0 f43845p = new r0();

    /* renamed from: q  reason: collision with root package name */
    private final r0 f43846q = new r0();

    /* renamed from: r  reason: collision with root package name */
    private final float[] f43847r = new float[16];

    /* renamed from: s  reason: collision with root package name */
    private final float[] f43848s = new float[16];

    /* renamed from: v  reason: collision with root package name */
    private volatile int f43851v = 0;

    /* renamed from: w  reason: collision with root package name */
    private int f43852w = -1;

    private void h(byte[] bArr, int i10, long j10) {
        e eVar;
        byte[] bArr2 = this.f43853x;
        int i11 = this.f43852w;
        this.f43853x = bArr;
        if (i10 == -1) {
            i10 = this.f43851v;
        }
        this.f43852w = i10;
        if (i11 == i10 && Arrays.equals(bArr2, this.f43853x)) {
            return;
        }
        byte[] bArr3 = this.f43853x;
        if (bArr3 != null) {
            eVar = f.a(bArr3, this.f43852w);
        } else {
            eVar = null;
        }
        if (eVar == null || !g.c(eVar)) {
            eVar = e.b(this.f43852w);
        }
        this.f43846q.a(j10, eVar);
    }

    @Override // oe.l
    public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
        this.f43845p.a(j11, Long.valueOf(j10));
        h(format.G, format.H, j11);
    }

    @Override // pe.a
    public void b(long j10, float[] fArr) {
        this.f43844o.e(j10, fArr);
    }

    @Override // pe.a
    public void c() {
        this.f43845p.c();
        this.f43844o.d();
        this.f43842e.set(true);
    }

    public void e(float[] fArr, boolean z10) {
        GLES20.glClear(16384);
        try {
            t.b();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to draw a frame", e10);
        }
        if (this.f43841d.compareAndSet(true, false)) {
            ((SurfaceTexture) ne.a.e(this.f43850u)).updateTexImage();
            try {
                t.b();
            } catch (t.a e11) {
                y.d("SceneRenderer", "Failed to draw a frame", e11);
            }
            if (this.f43842e.compareAndSet(true, false)) {
                t.j(this.f43847r);
            }
            long timestamp = this.f43850u.getTimestamp();
            Long l10 = (Long) this.f43845p.g(timestamp);
            if (l10 != null) {
                this.f43844o.c(this.f43847r, l10.longValue());
            }
            e eVar = (e) this.f43846q.j(timestamp);
            if (eVar != null) {
                this.f43843i.d(eVar);
            }
        }
        Matrix.multiplyMM(this.f43848s, 0, fArr, 0, this.f43847r, 0);
        this.f43843i.a(this.f43849t, this.f43848s, z10);
    }

    public SurfaceTexture f() {
        try {
            GLES20.glClearColor(0.5f, 0.5f, 0.5f, 1.0f);
            t.b();
            this.f43843i.b();
            t.b();
            this.f43849t = t.f();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to initialize the renderer", e10);
        }
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f43849t);
        this.f43850u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(new SurfaceTexture.OnFrameAvailableListener() { // from class: pe.h
            @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
            public final void onFrameAvailable(SurfaceTexture surfaceTexture2) {
                i.this.f43841d.set(true);
            }
        });
        return this.f43850u;
    }

    public void g(int i10) {
        this.f43851v = i10;
    }
}
