package androidx.camera.core;

import android.graphics.Rect;
import android.util.Size;
import x.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r extends e {

    /* renamed from: o  reason: collision with root package name */
    private final Object f2078o;

    /* renamed from: p  reason: collision with root package name */
    private final p0 f2079p;

    /* renamed from: q  reason: collision with root package name */
    private Rect f2080q;

    /* renamed from: r  reason: collision with root package name */
    private final int f2081r;

    /* renamed from: s  reason: collision with root package name */
    private final int f2082s;

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
        synchronized (this.f2078o) {
            this.f2080q = rect;
        }
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getHeight() {
        return this.f2082s;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public int getWidth() {
        return this.f2081r;
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n
    public p0 z() {
        return this.f2079p;
    }

    public r(n nVar, Size size, p0 p0Var) {
        super(nVar);
        this.f2078o = new Object();
        if (size == null) {
            this.f2081r = super.getWidth();
            this.f2082s = super.getHeight();
        } else {
            this.f2081r = size.getWidth();
            this.f2082s = size.getHeight();
        }
        this.f2079p = p0Var;
    }
}
