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
    private int f44080t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f44081u;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f44084x;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f44072d = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f44073e = new AtomicBoolean(true);

    /* renamed from: i  reason: collision with root package name */
    private final g f44074i = new g();

    /* renamed from: o  reason: collision with root package name */
    private final c f44075o = new c();

    /* renamed from: p  reason: collision with root package name */
    private final r0 f44076p = new r0();

    /* renamed from: q  reason: collision with root package name */
    private final r0 f44077q = new r0();

    /* renamed from: r  reason: collision with root package name */
    private final float[] f44078r = new float[16];

    /* renamed from: s  reason: collision with root package name */
    private final float[] f44079s = new float[16];

    /* renamed from: v  reason: collision with root package name */
    private volatile int f44082v = 0;

    /* renamed from: w  reason: collision with root package name */
    private int f44083w = -1;

    private void h(byte[] bArr, int i10, long j10) {
        e eVar;
        byte[] bArr2 = this.f44084x;
        int i11 = this.f44083w;
        this.f44084x = bArr;
        if (i10 == -1) {
            i10 = this.f44082v;
        }
        this.f44083w = i10;
        if (i11 == i10 && Arrays.equals(bArr2, this.f44084x)) {
            return;
        }
        byte[] bArr3 = this.f44084x;
        if (bArr3 != null) {
            eVar = f.a(bArr3, this.f44083w);
        } else {
            eVar = null;
        }
        if (eVar == null || !g.c(eVar)) {
            eVar = e.b(this.f44083w);
        }
        this.f44077q.a(j10, eVar);
    }

    @Override // pe.l
    public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
        this.f44076p.a(j11, Long.valueOf(j10));
        h(format.G, format.H, j11);
    }

    @Override // qe.a
    public void b(long j10, float[] fArr) {
        this.f44075o.e(j10, fArr);
    }

    @Override // qe.a
    public void c() {
        this.f44076p.c();
        this.f44075o.d();
        this.f44073e.set(true);
    }

    public void e(float[] fArr, boolean z10) {
        GLES20.glClear(16384);
        try {
            t.b();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to draw a frame", e10);
        }
        if (this.f44072d.compareAndSet(true, false)) {
            ((SurfaceTexture) oe.a.e(this.f44081u)).updateTexImage();
            try {
                t.b();
            } catch (t.a e11) {
                y.d("SceneRenderer", "Failed to draw a frame", e11);
            }
            if (this.f44073e.compareAndSet(true, false)) {
                t.j(this.f44078r);
            }
            long timestamp = this.f44081u.getTimestamp();
            Long l10 = (Long) this.f44076p.g(timestamp);
            if (l10 != null) {
                this.f44075o.c(this.f44078r, l10.longValue());
            }
            e eVar = (e) this.f44077q.j(timestamp);
            if (eVar != null) {
                this.f44074i.d(eVar);
            }
        }
        Matrix.multiplyMM(this.f44079s, 0, fArr, 0, this.f44078r, 0);
        this.f44074i.a(this.f44080t, this.f44079s, z10);
    }

    public SurfaceTexture f() {
        try {
            GLES20.glClearColor(0.5f, 0.5f, 0.5f, 1.0f);
            t.b();
            this.f44074i.b();
            t.b();
            this.f44080t = t.f();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to initialize the renderer", e10);
        }
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f44080t);
        this.f44081u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(new SurfaceTexture.OnFrameAvailableListener() { // from class: qe.h
            @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
            public final void onFrameAvailable(SurfaceTexture surfaceTexture2) {
                i.this.f44072d.set(true);
            }
        });
        return this.f44081u;
    }

    public void g(int i10) {
        this.f44082v = i10;
    }
}
