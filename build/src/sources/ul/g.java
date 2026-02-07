package ul;

import android.media.MediaFormat;
import android.opengl.GLES20;
import android.opengl.Matrix;
import android.view.Surface;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g implements i {

    /* renamed from: g  reason: collision with root package name */
    protected static final String f51660g = "rotation-degrees";

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51661a;

    /* renamed from: b  reason: collision with root package name */
    private j f51662b;

    /* renamed from: c  reason: collision with root package name */
    private k f51663c;

    /* renamed from: f  reason: collision with root package name */
    private boolean f51666f;

    /* renamed from: e  reason: collision with root package name */
    private float[] f51665e = new float[16];

    /* renamed from: d  reason: collision with root package name */
    private List f51664d = new ArrayList();

    public g(List list) {
        boolean z10;
        if (list != null && !list.isEmpty()) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f51661a = z10;
        if (list == null) {
            this.f51664d.add(new rl.a());
            return;
        }
        Iterator it = list.iterator();
        while (true) {
            if (it.hasNext()) {
                if (((pl.a) it.next()) instanceof pl.b) {
                    break;
                }
            } else {
                this.f51664d.add(new rl.a());
                break;
            }
        }
        this.f51664d.addAll(list);
    }

    private void e(long j10) {
        g();
        GLES20.glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
        GLES20.glClear(16640);
        for (pl.a aVar : this.f51664d) {
            aVar.apply(j10);
        }
        GLES20.glFinish();
    }

    private void g() {
        if (!this.f51666f) {
            for (pl.a aVar : this.f51664d) {
                if (aVar instanceof pl.b) {
                    ((pl.b) aVar).c(this.f51662b.d(), this.f51662b.e());
                }
            }
            this.f51666f = true;
        }
    }

    private void h(int i10, float f10) {
        float f11;
        float f12;
        float[] fArr = new float[16];
        Matrix.setIdentityM(fArr, 0);
        Matrix.orthoM(fArr, 0, -f10, f10, -1.0f, 1.0f, -1.0f, 1.0f);
        float[] fArr2 = new float[16];
        Matrix.setIdentityM(fArr2, 0);
        float f13 = 1.0f;
        float f14 = 0.0f;
        if (i10 != 0) {
            if (i10 != 90) {
                f13 = -1.0f;
                if (i10 != 180) {
                    if (i10 != 270) {
                        double d10 = (i10 / 180) * 3.141592653589793d;
                        f14 = (float) Math.sin(d10);
                        f13 = (float) Math.cos(d10);
                    }
                }
            }
            f12 = f13;
            f11 = 0.0f;
            Matrix.setLookAtM(fArr2, 0, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, f12, f11, 0.0f);
            Matrix.setIdentityM(this.f51665e, 0);
            Matrix.multiplyMM(this.f51665e, 0, fArr, 0, fArr2, 0);
        }
        f11 = f13;
        f12 = f14;
        Matrix.setLookAtM(fArr2, 0, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, f12, f11, 0.0f);
        Matrix.setIdentityM(this.f51665e, 0);
        Matrix.multiplyMM(this.f51665e, 0, fArr, 0, fArr2, 0);
    }

    @Override // ul.i
    public boolean a() {
        return this.f51661a;
    }

    @Override // ul.i
    public void b(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        int i10;
        float f10;
        int i11;
        if (surface != null) {
            if (mediaFormat2 != null) {
                String str = f51660g;
                if (mediaFormat2.containsKey(str)) {
                    i10 = mediaFormat2.getInteger(str);
                } else if (mediaFormat != null && mediaFormat.containsKey(str)) {
                    i10 = mediaFormat.getInteger(str);
                } else {
                    i10 = 0;
                }
                if (mediaFormat2.containsKey("width") && mediaFormat2.containsKey("height")) {
                    f10 = mediaFormat2.getInteger("width") / mediaFormat2.getInteger("height");
                } else {
                    f10 = 1.0f;
                }
                this.f51663c = new k(surface);
                int i12 = -1;
                if (mediaFormat != null && mediaFormat.containsKey("width")) {
                    i11 = mediaFormat.getInteger("width");
                } else {
                    i11 = -1;
                }
                if (mediaFormat != null && mediaFormat.containsKey("height")) {
                    i12 = mediaFormat.getInteger("height");
                }
                this.f51662b = new j(i11, i12);
                h(i10, f10);
                for (pl.a aVar : this.f51664d) {
                    aVar.a();
                    float[] fArr = this.f51665e;
                    aVar.b(Arrays.copyOf(fArr, fArr.length), 0);
                }
                return;
            }
            throw new IllegalArgumentException("GlVideoRenderer requires target media format");
        }
        throw new IllegalArgumentException("GlVideoRenderer requires an output surface");
    }

    @Override // ul.i
    public void c(nl.c cVar, long j10) {
        this.f51662b.a();
        e(j10);
        this.f51663c.e(j10);
        this.f51663c.f();
    }

    public Surface f() {
        j jVar = this.f51662b;
        if (jVar != null) {
            return jVar.c();
        }
        return null;
    }

    @Override // ul.i
    public void release() {
        for (pl.a aVar : this.f51664d) {
            aVar.release();
        }
        this.f51662b.f();
        this.f51663c.d();
    }

    @Override // ul.i
    public void d(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
    }
}
