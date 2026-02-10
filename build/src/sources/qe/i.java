package qe;

import android.graphics.SurfaceTexture;
import android.media.MediaFormat;
import android.opengl.GLES20;
import android.opengl.Matrix;
import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import java.util.concurrent.atomic.AtomicBoolean;
import oe.r0;
import oe.t;
import oe.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements pe.l, a {

    /* renamed from: t  reason: collision with root package name */
    private int f45411t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f45412u;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f45415x;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f45403d = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f45404e = new AtomicBoolean(true);

    /* renamed from: i  reason: collision with root package name */
    private final g f45405i = new g();

    /* renamed from: o  reason: collision with root package name */
    private final c f45406o = new c();

    /* renamed from: p  reason: collision with root package name */
    private final r0 f45407p = new r0();

    /* renamed from: q  reason: collision with root package name */
    private final r0 f45408q = new r0();

    /* renamed from: r  reason: collision with root package name */
    private final float[] f45409r = new float[16];

    /* renamed from: s  reason: collision with root package name */
    private final float[] f45410s = new float[16];

    /* renamed from: v  reason: collision with root package name */
    private volatile int f45413v = 0;

    /* renamed from: w  reason: collision with root package name */
    private int f45414w = -1;

    private void h(byte[] bArr, int i10, long j10) {
        e eVar;
        byte[] bArr2 = this.f45415x;
        int i11 = this.f45414w;
        this.f45415x = bArr;
        if (i10 == -1) {
            i10 = this.f45413v;
        }
        this.f45414w = i10;
        if (i11 == i10 && Arrays.equals(bArr2, this.f45415x)) {
            return;
        }
        byte[] bArr3 = this.f45415x;
        if (bArr3 != null) {
            eVar = f.a(bArr3, this.f45414w);
        } else {
            eVar = null;
        }
        if (eVar == null || !g.c(eVar)) {
            eVar = e.b(this.f45414w);
        }
        this.f45408q.a(j10, eVar);
    }

    @Override // pe.l
    public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
        this.f45407p.a(j11, Long.valueOf(j10));
        h(format.G, format.H, j11);
    }

    @Override // qe.a
    public void b(long j10, float[] fArr) {
        this.f45406o.e(j10, fArr);
    }

    @Override // qe.a
    public void c() {
        this.f45407p.c();
        this.f45406o.d();
        this.f45404e.set(true);
    }

    public void e(float[] fArr, boolean z10) {
        GLES20.glClear(16384);
        try {
            t.b();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to draw a frame", e10);
        }
        if (this.f45403d.compareAndSet(true, false)) {
            ((SurfaceTexture) oe.a.e(this.f45412u)).updateTexImage();
            try {
                t.b();
            } catch (t.a e11) {
                y.d("SceneRenderer", "Failed to draw a frame", e11);
            }
            if (this.f45404e.compareAndSet(true, false)) {
                t.j(this.f45409r);
            }
            long timestamp = this.f45412u.getTimestamp();
            Long l10 = (Long) this.f45407p.g(timestamp);
            if (l10 != null) {
                this.f45406o.c(this.f45409r, l10.longValue());
            }
            e eVar = (e) this.f45408q.j(timestamp);
            if (eVar != null) {
                this.f45405i.d(eVar);
            }
        }
        Matrix.multiplyMM(this.f45410s, 0, fArr, 0, this.f45409r, 0);
        this.f45405i.a(this.f45411t, this.f45410s, z10);
    }

    public SurfaceTexture f() {
        try {
            GLES20.glClearColor(0.5f, 0.5f, 0.5f, 1.0f);
            t.b();
            this.f45405i.b();
            t.b();
            this.f45411t = t.f();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to initialize the renderer", e10);
        }
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f45411t);
        this.f45412u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(new SurfaceTexture.OnFrameAvailableListener() { // from class: qe.h
            @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
            public final void onFrameAvailable(SurfaceTexture surfaceTexture2) {
                i.this.f45403d.set(true);
            }
        });
        return this.f45412u;
    }

    public void g(int i10) {
        this.f45413v = i10;
    }
}
