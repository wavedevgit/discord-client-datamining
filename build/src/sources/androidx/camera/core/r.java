package androidx.camera.core;

import android.graphics.Rect;
import android.util.Size;
import x.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r extends e {

    /* renamed from: o  reason: collision with root package name */
    private final Object f2188o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f2189p;

    /* renamed from: q  reason: collision with root package name */
    private Rect f2190q;

    /* renamed from: r  reason: collision with root package name */
    private final int f2191r;

    /* renamed from: s  reason: collision with root package name */
    private final int f2192s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(n nVar, p0 p0Var) {
        this(nVar, null, p0Var);
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public void B0(Rect rect) {
        if (rect != null) {
            Rect rect2 = new Rect(rect);
            if (!rect2.intersect(0, 0, getWidth(), getHeight())) {
                rect2.setEmpty();
            }
            rect = rect2;
        }
        synchronized (this.f2188o) {
            this.f2190q = rect;
        }
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public p0 E() {
        return this.f2189p;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getHeight() {
        return this.f2192s;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getWidth() {
        return this.f2191r;
    }

    public r(n nVar, Size size, p0 p0Var) {
        super(nVar);
        this.f2188o = new Object();
        if (size == null) {
            this.f2191r = super.getWidth();
            this.f2192s = super.getHeight();
        } else {
            this.f2191r = size.getWidth();
            this.f2192s = size.getHeight();
        }
        this.f2189p = p0Var;
    }
}
