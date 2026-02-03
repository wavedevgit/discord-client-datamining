package androidx.camera.core;

import android.graphics.Rect;
import android.util.Size;
import x.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r extends e {

    /* renamed from: o  reason: collision with root package name */
    private final Object f2047o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f2048p;

    /* renamed from: q  reason: collision with root package name */
    private Rect f2049q;

    /* renamed from: r  reason: collision with root package name */
    private final int f2050r;

    /* renamed from: s  reason: collision with root package name */
    private final int f2051s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(n nVar, p0 p0Var) {
        this(nVar, null, p0Var);
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getHeight() {
        return this.f2051s;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getWidth() {
        return this.f2050r;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public p0 z() {
        return this.f2048p;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public void z0(Rect rect) {
        if (rect != null) {
            Rect rect2 = new Rect(rect);
            if (!rect2.intersect(0, 0, getWidth(), getHeight())) {
                rect2.setEmpty();
            }
            rect = rect2;
        }
        synchronized (this.f2047o) {
            this.f2049q = rect;
        }
    }

    public r(n nVar, Size size, p0 p0Var) {
        super(nVar);
        this.f2047o = new Object();
        if (size == null) {
            this.f2050r = super.getWidth();
            this.f2051s = super.getHeight();
        } else {
            this.f2050r = size.getWidth();
            this.f2051s = size.getHeight();
        }
        this.f2048p = p0Var;
    }
}
