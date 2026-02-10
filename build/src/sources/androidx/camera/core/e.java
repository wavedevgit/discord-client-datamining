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
    protected final n f2099e;

    /* renamed from: d  reason: collision with root package name */
    private final Object f2098d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final Set f2100i = new HashSet();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(n nVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e(n nVar) {
        this.f2099e = nVar;
    }

    @Override // androidx.camera.core.n
    public void B0(Rect rect) {
        this.f2099e.B0(rect);
    }

    @Override // androidx.camera.core.n
    public p0 E() {
        return this.f2099e.E();
    }

    @Override // androidx.camera.core.n
    public Image F() {
        return this.f2099e.F();
    }

    public void a(a aVar) {
        synchronized (this.f2098d) {
            this.f2100i.add(aVar);
        }
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f2099e.close();
        h();
    }

    @Override // androidx.camera.core.n
    public n.a[] e1() {
        return this.f2099e.e1();
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f2099e.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f2099e.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f2099e.getWidth();
    }

    protected void h() {
        HashSet<a> hashSet;
        synchronized (this.f2098d) {
            hashSet = new HashSet(this.f2100i);
        }
        for (a aVar : hashSet) {
            aVar.a(this);
        }
    }
}
