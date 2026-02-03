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
    protected final n f1989e;

    /* renamed from: d  reason: collision with root package name */
    private final Object f1988d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final Set f1990i = new HashSet();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(n nVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e(n nVar) {
        this.f1989e = nVar;
    }

    @Override // androidx.camera.core.n
    public Image A() {
        return this.f1989e.A();
    }

    @Override // androidx.camera.core.n
    public void B0(Rect rect) {
        this.f1989e.B0(rect);
    }

    public void a(a aVar) {
        synchronized (this.f1988d) {
            this.f1990i.add(aVar);
        }
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f1989e.close();
        h();
    }

    @Override // androidx.camera.core.n
    public n.a[] d1() {
        return this.f1989e.d1();
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f1989e.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f1989e.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f1989e.getWidth();
    }

    protected void h() {
        HashSet<a> hashSet;
        synchronized (this.f1988d) {
            hashSet = new HashSet(this.f1990i);
        }
        for (a aVar : hashSet) {
            aVar.a(this);
        }
    }

    @Override // androidx.camera.core.n
    public p0 z() {
        return this.f1989e.z();
    }
}
