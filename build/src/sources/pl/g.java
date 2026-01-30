package pl;

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
    protected static final String f46118g = "rotation-degrees";

    /* renamed from: a  reason: collision with root package name */
    private final boolean f46119a;

    /* renamed from: b  reason: collision with root package name */
    private j f46120b;

    /* renamed from: c  reason: collision with root package name */
    private k f46121c;

    /* renamed from: f  reason: collision with root package name */
    private boolean f46124f;

    /* renamed from: e  reason: collision with root package name */
    private float[] f46123e = new float[16];

    /* renamed from: d  reason: collision with root package name */
    private List f46122d = new ArrayList();

    public g(List list) {
        boolean z10;
        if (list != null && !list.isEmpty()) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f46119a = z10;
        if (list == null) {
            this.f46122d.add(new ml.a());
            return;
        }
        Iterator it = list.iterator();
        while (true) {
            if (it.hasNext()) {
                if (((kl.a) it.next()) instanceof kl.b) {
                    break;
                }
            } else {
                this.f46122d.add(new ml.a());
                break;
            }
        }
        this.f46122d.addAll(list);
    }

    private void e(long j10) {
        g();
        GLES20.glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
        GLES20.glClear(16640);
        for (kl.a aVar : this.f46122d) {
            aVar.apply(j10);
        }
        GLES20.glFinish();
    }

    private void g() {
        if (!this.f46124f) {
            for (kl.a aVar : this.f46122d) {
                if (aVar instanceof kl.b) {
                    ((kl.b) aVar).c(this.f46120b.d(), this.f46120b.e());
                }
            }
            this.f46124f = true;
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
            Matrix.setIdentityM(this.f46123e, 0);
            Matrix.multiplyMM(this.f46123e, 0, fArr, 0, fArr2, 0);
        }
        f11 = f13;
        f12 = f14;
        Matrix.setLookAtM(fArr2, 0, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, f12, f11, 0.0f);
        Matrix.setIdentityM(this.f46123e, 0);
        Matrix.multiplyMM(this.f46123e, 0, fArr, 0, fArr2, 0);
    }

    @Override // pl.i
    public boolean a() {
        return this.f46119a;
    }

    @Override // pl.i
    public void b(il.c cVar, long j10) {
        this.f46120b.a();
        e(j10);
        this.f46121c.e(j10);
        this.f46121c.f();
    }

    @Override // pl.i
    public void c(Surface surface, MediaFormat mediaFormat, MediaFormat mediaFormat2) {
        int i10;
        float f10;
        int i11;
        if (surface != null) {
            if (mediaFormat2 != null) {
                String str = f46118g;
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
                this.f46121c = new k(surface);
                int i12 = -1;
                if (mediaFormat != null && mediaFormat.containsKey("width")) {
                    i11 = mediaFormat.getInteger("width");
                } else {
                    i11 = -1;
                }
                if (mediaFormat != null && mediaFormat.containsKey("height")) {
                    i12 = mediaFormat.getInteger("height");
                }
                this.f46120b = new j(i11, i12);
                h(i10, f10);
                for (kl.a aVar : this.f46122d) {
                    aVar.a();
                    float[] fArr = this.f46123e;
                    aVar.b(Arrays.copyOf(fArr, fArr.length), 0);
                }
                return;
            }
            throw new IllegalArgumentException("GlVideoRenderer requires target media format");
        }
        throw new IllegalArgumentException("GlVideoRenderer requires an output surface");
    }

    public Surface f() {
        j jVar = this.f46120b;
        if (jVar != null) {
            return jVar.c();
        }
        return null;
    }

    @Override // pl.i
    public void release() {
        for (kl.a aVar : this.f46122d) {
            aVar.release();
        }
        this.f46120b.f();
        this.f46121c.d();
    }

    @Override // pl.i
    public void d(MediaFormat mediaFormat, MediaFormat mediaFormat2) {
    }
}
