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
    private int f45052t;

    /* renamed from: u  reason: collision with root package name */
    private SurfaceTexture f45053u;

    /* renamed from: x  reason: collision with root package name */
    private byte[] f45056x;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f45044d = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f45045e = new AtomicBoolean(true);

    /* renamed from: i  reason: collision with root package name */
    private final g f45046i = new g();

    /* renamed from: o  reason: collision with root package name */
    private final c f45047o = new c();

    /* renamed from: p  reason: collision with root package name */
    private final r0 f45048p = new r0();

    /* renamed from: q  reason: collision with root package name */
    private final r0 f45049q = new r0();

    /* renamed from: r  reason: collision with root package name */
    private final float[] f45050r = new float[16];

    /* renamed from: s  reason: collision with root package name */
    private final float[] f45051s = new float[16];

    /* renamed from: v  reason: collision with root package name */
    private volatile int f45054v = 0;

    /* renamed from: w  reason: collision with root package name */
    private int f45055w = -1;

    private void h(byte[] bArr, int i10, long j10) {
        e eVar;
        byte[] bArr2 = this.f45056x;
        int i11 = this.f45055w;
        this.f45056x = bArr;
        if (i10 == -1) {
            i10 = this.f45054v;
        }
        this.f45055w = i10;
        if (i11 == i10 && Arrays.equals(bArr2, this.f45056x)) {
            return;
        }
        byte[] bArr3 = this.f45056x;
        if (bArr3 != null) {
            eVar = f.a(bArr3, this.f45055w);
        } else {
            eVar = null;
        }
        if (eVar == null || !g.c(eVar)) {
            eVar = e.b(this.f45055w);
        }
        this.f45049q.a(j10, eVar);
    }

    @Override // oe.l
    public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
        this.f45048p.a(j11, Long.valueOf(j10));
        h(format.G, format.H, j11);
    }

    @Override // pe.a
    public void b(long j10, float[] fArr) {
        this.f45047o.e(j10, fArr);
    }

    @Override // pe.a
    public void c() {
        this.f45048p.c();
        this.f45047o.d();
        this.f45045e.set(true);
    }

    public void e(float[] fArr, boolean z10) {
        GLES20.glClear(16384);
        try {
            t.b();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to draw a frame", e10);
        }
        if (this.f45044d.compareAndSet(true, false)) {
            ((SurfaceTexture) ne.a.e(this.f45053u)).updateTexImage();
            try {
                t.b();
            } catch (t.a e11) {
                y.d("SceneRenderer", "Failed to draw a frame", e11);
            }
            if (this.f45045e.compareAndSet(true, false)) {
                t.j(this.f45050r);
            }
            long timestamp = this.f45053u.getTimestamp();
            Long l10 = (Long) this.f45048p.g(timestamp);
            if (l10 != null) {
                this.f45047o.c(this.f45050r, l10.longValue());
            }
            e eVar = (e) this.f45049q.j(timestamp);
            if (eVar != null) {
                this.f45046i.d(eVar);
            }
        }
        Matrix.multiplyMM(this.f45051s, 0, fArr, 0, this.f45050r, 0);
        this.f45046i.a(this.f45052t, this.f45051s, z10);
    }

    public SurfaceTexture f() {
        try {
            GLES20.glClearColor(0.5f, 0.5f, 0.5f, 1.0f);
            t.b();
            this.f45046i.b();
            t.b();
            this.f45052t = t.f();
        } catch (t.a e10) {
            y.d("SceneRenderer", "Failed to initialize the renderer", e10);
        }
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f45052t);
        this.f45053u = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(new SurfaceTexture.OnFrameAvailableListener() { // from class: pe.h
            @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
            public final void onFrameAvailable(SurfaceTexture surfaceTexture2) {
                i.this.f45044d.set(true);
            }
        });
        return this.f45053u;
    }

    public void g(int i10) {
        this.f45054v = i10;
    }
}
