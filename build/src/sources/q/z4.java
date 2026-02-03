package q;

import android.graphics.Rect;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.TotalCaptureResult;
import android.os.Build;
import android.os.Looper;
import android.util.Range;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import java.util.concurrent.Executor;
import p.a;
import q.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z4 {

    /* renamed from: a  reason: collision with root package name */
    private final u f47050a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f47051b;

    /* renamed from: c  reason: collision with root package name */
    private final a5 f47052c;

    /* renamed from: d  reason: collision with root package name */
    private final MutableLiveData f47053d;

    /* renamed from: e  reason: collision with root package name */
    final b f47054e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f47055f = false;

    /* renamed from: g  reason: collision with root package name */
    private u.c f47056g = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements u.c {
        a() {
        }

        @Override // q.u.c
        public boolean a(TotalCaptureResult totalCaptureResult) {
            z4.this.f47054e.a(totalCaptureResult);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(TotalCaptureResult totalCaptureResult);

        float b();

        void c();

        float d();

        Rect e();

        void f(a.C0558a c0558a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z4(u uVar, r.a0 a0Var, Executor executor) {
        this.f47050a = uVar;
        this.f47051b = executor;
        b b10 = b(a0Var);
        this.f47054e = b10;
        a5 a5Var = new a5(b10.d(), b10.b());
        this.f47052c = a5Var;
        a5Var.f(1.0f);
        this.f47053d = new MutableLiveData(e0.g.e(a5Var));
        uVar.v(this.f47056g);
    }

    private static b b(r.a0 a0Var) {
        if (f(a0Var)) {
            return new c(a0Var);
        }
        return new d3(a0Var);
    }

    private static Range d(r.a0 a0Var) {
        CameraCharacteristics.Key key;
        try {
            key = CameraCharacteristics.CONTROL_ZOOM_RATIO_RANGE;
            return (Range) a0Var.a(key);
        } catch (AssertionError e10) {
            x.y0.m("ZoomControl", "AssertionError, fail to get camera characteristic.", e10);
            return null;
        }
    }

    static boolean f(r.a0 a0Var) {
        if (Build.VERSION.SDK_INT >= 30 && d(a0Var) != null) {
            return true;
        }
        return false;
    }

    private void h(x.a2 a2Var) {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            this.f47053d.o(a2Var);
        } else {
            this.f47053d.m(a2Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(a.C0558a c0558a) {
        this.f47054e.f(c0558a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect c() {
        return this.f47054e.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LiveData e() {
        return this.f47053d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        x.a2 e10;
        if (this.f47055f != z10) {
            this.f47055f = z10;
            if (!z10) {
                synchronized (this.f47052c) {
                    this.f47052c.f(1.0f);
                    e10 = e0.g.e(this.f47052c);
                }
                h(e10);
                this.f47054e.c();
                this.f47050a.f0();
            }
        }
    }
}
