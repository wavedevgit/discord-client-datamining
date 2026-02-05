package androidx.camera.view;

import android.graphics.Bitmap;
import android.util.Size;
import android.view.View;
import android.widget.FrameLayout;
import com.google.common.util.concurrent.ListenableFuture;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    Size f2232a;

    /* renamed from: b  reason: collision with root package name */
    FrameLayout f2233b;

    /* renamed from: c  reason: collision with root package name */
    private final e f2234c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f2235d = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(FrameLayout frameLayout, e eVar) {
        this.f2233b = frameLayout;
        this.f2234c = eVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bitmap a() {
        Bitmap c10 = c();
        if (c10 == null) {
            return null;
        }
        return this.f2234c.a(c10, new Size(this.f2233b.getWidth(), this.f2233b.getHeight()), this.f2233b.getLayoutDirection());
    }

    abstract View b();

    abstract Bitmap c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        this.f2235d = true;
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void g(w1 w1Var, a aVar);

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        View b10 = b();
        if (b10 != null && this.f2235d) {
            this.f2234c.s(new Size(this.f2233b.getWidth(), this.f2233b.getHeight()), this.f2233b.getLayoutDirection(), b10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract ListenableFuture i();
}
