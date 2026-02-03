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
    private int f45122t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f45123u;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f45126x;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f45114d = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f45115e = new AtomicBoolean(true);

    /* renamed from: i  reason: collision with root package name */
    private final g f45116i = new g();

    /* renamed from: o  reason: collision with root package name */
    private final c f45117o = new c();

    /* renamed from: p  reason: collision with root package name */
    private final r0 f45118p = new r0();

    /* renamed from: q  reason: collision with root package name */
    private final r0 f45119q = new r0();

    /* renamed from: r  reason: collision with root package name */
    private final float[] f45120r = new float[16];

    /* renamed from: s  reason: collision with root package name */
    private final float[] f45121s = new float[16];

    /* renamed from: v  reason: collision with root package name */
    private volatile int f45124v = 0;

    /* renamed from: w  reason: collision with root package name */
    private int f45125w = -1;

    private void h(byte[] bArr, int i10, long j10) {
        e eVar;
        byte[] bArr2 = this.f45126x;
        int i11 = this.f45125w;
        this.f45126x = bArr;
        if (i10 == -1) {
            i10 = this.f45124v;
        }
        this.f45125w = i10;
        if (i11 == i10 && Arrays.equals(bArr2, this.f45126x)) {
            return;
        }
        byte[] bArr3 = this.f45126x;
        if (bArr3 != null) {
            eVar = f.a(bArr3, this.f45125w);
        } else {
            eVar = null;
        }
        if (eVar == null || !g.c(eVar)) {
            eVar = e.b(this.f45125w);
        }
        this.f45119q.a(j10, eVar);
    }

    @Override // oe.l
    public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
        this.f45118p.a(j11, Long.valueOf(j10));
        h(format.G, format.H, j11);
    }

    @Override // pe.a
    public void b(long j10, float[] fArr) {
        this.f45117o.e(j10, fArr);
    }

    @Override // pe.a
    public void c() {
        this.f45118p.c();
        this.f45117o.d();
        this.f45115e.set(true);
    }

    public void e(float[] fArr, boolean z10) {
        GLES20.glClear(16384);
        try {
            t.b();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to draw a frame", e10);
        }
        if (this.f45114d.compareAndSet(true, false)) {
            ((SurfaceTexture) ne.a.e(this.f45123u)).updateTexImage();
            try {
                t.b();
            } catch (t.a e11) {
                y.d("SceneRenderer", "Failed to draw a frame", e11);
            }
            if (this.f45115e.compareAndSet(true, false)) {
                t.j(this.f45120r);
            }
            long timestamp = this.f45123u.getTimestamp();
            Long l10 = (Long) this.f45118p.g(timestamp);
            if (l10 != null) {
                this.f45117o.c(this.f45120r, l10.longValue());
            }
            e eVar = (e) this.f45119q.j(timestamp);
            if (eVar != null) {
                this.f45116i.d(eVar);
            }
        }
        Matrix.multiplyMM(this.f45121s, 0, fArr, 0, this.f45120r, 0);
        this.f45116i.a(this.f45122t, this.f45121s, z10);
    }

    public SurfaceTexture f() {
        try {
            GLES20.glClearColor(0.5f, 0.5f, 0.5f, 1.0f);
            t.b();
            this.f45116i.b();
            t.b();
            this.f45122t = t.f();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to initialize the renderer", e10);
        }
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f45122t);
        this.f45123u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(new SurfaceTexture.OnFrameAvailableListener() { // from class: pe.h
            @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
            public final void onFrameAvailable(SurfaceTexture surfaceTexture2) {
                i.this.f45114d.set(true);
            }
        });
        return this.f45123u;
    }

    public void g(int i10) {
        this.f45124v = i10;
    }
}
