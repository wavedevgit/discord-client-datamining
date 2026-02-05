package androidx.camera.core;

import android.graphics.Rect;
import android.util.Size;
import x.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r extends e {

    /* renamed from: o  reason: collision with root package name */
    private final Object f2159o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f2160p;

    /* renamed from: q  reason: collision with root package name */
    private Rect f2161q;

    /* renamed from: r  reason: collision with root package name */
    private final int f2162r;

    /* renamed from: s  reason: collision with root package name */
    private final int f2163s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(n nVar, p0 p0Var) {
        this(nVar, null, p0Var);
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public p0 A() {
        return this.f2160p;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public void A0(Rect rect) {
        if (rect != null) {
            Rect rect2 = new Rect(rect);
            if (!rect2.intersect(0, 0, getWidth(), getHeight())) {
                rect2.setEmpty();
            }
            rect = rect2;
        }
        synchronized (this.f2159o) {
            this.f2161q = rect;
        }
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getHeight() {
        return this.f2163s;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getWidth() {
        return this.f2162r;
    }

    public r(n nVar, Size size, p0 p0Var) {
        super(nVar);
        this.f2159o = new Object();
        if (size == null) {
            this.f2162r = super.getWidth();
            this.f2163s = super.getHeight();
        } else {
            this.f2162r = size.getWidth();
            this.f2163s = size.getHeight();
        }
        this.f2160p = p0Var;
    }
}
