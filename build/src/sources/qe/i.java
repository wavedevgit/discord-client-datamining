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
    private int f44648t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f44649u;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f44652x;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f44640d = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f44641e = new AtomicBoolean(true);

    /* renamed from: i  reason: collision with root package name */
    private final g f44642i = new g();

    /* renamed from: o  reason: collision with root package name */
    private final c f44643o = new c();

    /* renamed from: p  reason: collision with root package name */
    private final r0 f44644p = new r0();

    /* renamed from: q  reason: collision with root package name */
    private final r0 f44645q = new r0();

    /* renamed from: r  reason: collision with root package name */
    private final float[] f44646r = new float[16];

    /* renamed from: s  reason: collision with root package name */
    private final float[] f44647s = new float[16];

    /* renamed from: v  reason: collision with root package name */
    private volatile int f44650v = 0;

    /* renamed from: w  reason: collision with root package name */
    private int f44651w = -1;

    private void h(byte[] bArr, int i10, long j10) {
        e eVar;
        byte[] bArr2 = this.f44652x;
        int i11 = this.f44651w;
        this.f44652x = bArr;
        if (i10 == -1) {
            i10 = this.f44650v;
        }
        this.f44651w = i10;
        if (i11 == i10 && Arrays.equals(bArr2, this.f44652x)) {
            return;
        }
        byte[] bArr3 = this.f44652x;
        if (bArr3 != null) {
            eVar = f.a(bArr3, this.f44651w);
        } else {
            eVar = null;
        }
        if (eVar == null || !g.c(eVar)) {
            eVar = e.b(this.f44651w);
        }
        this.f44645q.a(j10, eVar);
    }

    @Override // pe.l
    public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
        this.f44644p.a(j11, Long.valueOf(j10));
        h(format.G, format.H, j11);
    }

    @Override // qe.a
    public void b(long j10, float[] fArr) {
        this.f44643o.e(j10, fArr);
    }

    @Override // qe.a
    public void c() {
        this.f44644p.c();
        this.f44643o.d();
        this.f44641e.set(true);
    }

    public void e(float[] fArr, boolean z10) {
        GLES20.glClear(16384);
        try {
            t.b();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to draw a frame", e10);
        }
        if (this.f44640d.compareAndSet(true, false)) {
            ((SurfaceTexture) oe.a.e(this.f44649u)).updateTexImage();
            try {
                t.b();
            } catch (t.a e11) {
                y.d("SceneRenderer", "Failed to draw a frame", e11);
            }
            if (this.f44641e.compareAndSet(true, false)) {
                t.j(this.f44646r);
            }
            long timestamp = this.f44649u.getTimestamp();
            Long l10 = (Long) this.f44644p.g(timestamp);
            if (l10 != null) {
                this.f44643o.c(this.f44646r, l10.longValue());
            }
            e eVar = (e) this.f44645q.j(timestamp);
            if (eVar != null) {
                this.f44642i.d(eVar);
            }
        }
        Matrix.multiplyMM(this.f44647s, 0, fArr, 0, this.f44646r, 0);
        this.f44642i.a(this.f44648t, this.f44647s, z10);
    }

    public SurfaceTexture f() {
        try {
            GLES20.glClearColor(0.5f, 0.5f, 0.5f, 1.0f);
            t.b();
            this.f44642i.b();
            t.b();
            this.f44648t = t.f();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to initialize the renderer", e10);
        }
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f44648t);
        this.f44649u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(new SurfaceTexture.OnFrameAvailableListener() { // from class: qe.h
            @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
            public final void onFrameAvailable(SurfaceTexture surfaceTexture2) {
                i.this.f44640d.set(true);
            }
        });
        return this.f44649u;
    }

    public void g(int i10) {
        this.f44650v = i10;
    }
}
