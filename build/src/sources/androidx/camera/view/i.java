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
    Size f2258a;

    /* renamed from: b  reason: collision with root package name */
    FrameLayout f2259b;

    /* renamed from: c  reason: collision with root package name */
    private final e f2260c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f2261d = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(FrameLayout frameLayout, e eVar) {
        this.f2259b = frameLayout;
        this.f2260c = eVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bitmap a() {
        Bitmap c10 = c();
        if (c10 == null) {
            return null;
        }
        return this.f2260c.a(c10, new Size(this.f2259b.getWidth(), this.f2259b.getHeight()), this.f2259b.getLayoutDirection());
    }

    abstract View b();

    abstract Bitmap c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        this.f2261d = true;
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void g(w1 w1Var, a aVar);

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        View b10 = b();
        if (b10 != null && this.f2261d) {
            this.f2260c.s(new Size(this.f2259b.getWidth(), this.f2259b.getHeight()), this.f2259b.getLayoutDirection(), b10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract ListenableFuture i();
}
