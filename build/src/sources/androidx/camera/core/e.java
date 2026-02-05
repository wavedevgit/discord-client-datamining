package androidx.camera.core;

import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.n;
import java.util.HashSet;
import java.util.Set;
import x.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e implements n {

    /* renamed from: e  reason: collision with root package name */
    protected final n f2070e;

    /* renamed from: d  reason: collision with root package name */
    private final Object f2069d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final Set f2071i = new HashSet();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(n nVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e(n nVar) {
        this.f2070e = nVar;
    }

    @Override // androidx.camera.core.n
    public p0 A() {
        return this.f2070e.A();
    }

    @Override // androidx.camera.core.n
    public void A0(Rect rect) {
        this.f2070e.A0(rect);
    }

    @Override // androidx.camera.core.n
    public Image B() {
        return this.f2070e.B();
    }

    public void a(a aVar) {
        synchronized (this.f2069d) {
            this.f2071i.add(aVar);
        }
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f2070e.close();
        h();
    }

    @Override // androidx.camera.core.n
    public n.a[] d1() {
        return this.f2070e.d1();
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f2070e.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f2070e.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f2070e.getWidth();
    }

    protected void h() {
        HashSet<a> hashSet;
        synchronized (this.f2069d) {
            hashSet = new HashSet(this.f2071i);
        }
        for (a aVar : hashSet) {
            aVar.a(this);
        }
    }
}
