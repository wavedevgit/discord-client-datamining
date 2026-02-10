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
    private final u f45115a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f45116b;

    /* renamed from: c  reason: collision with root package name */
    private final a5 f45117c;

    /* renamed from: d  reason: collision with root package name */
    private final MutableLiveData f45118d;

    /* renamed from: e  reason: collision with root package name */
    final b f45119e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f45120f = false;

    /* renamed from: g  reason: collision with root package name */
    private u.c f45121g = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements u.c {
        a() {
        }

        @Override // q.u.c
        public boolean a(TotalCaptureResult totalCaptureResult) {
            z4.this.f45119e.a(totalCaptureResult);
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

        void f(a.C0606a c0606a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z4(u uVar, r.a0 a0Var, Executor executor) {
        this.f45115a = uVar;
        this.f45116b = executor;
        b b10 = b(a0Var);
        this.f45119e = b10;
        a5 a5Var = new a5(b10.d(), b10.b());
        this.f45117c = a5Var;
        a5Var.f(1.0f);
        this.f45118d = new MutableLiveData(e0.g.e(a5Var));
        uVar.v(this.f45121g);
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
            this.f45118d.o(a2Var);
        } else {
            this.f45118d.m(a2Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(a.C0606a c0606a) {
        this.f45119e.f(c0606a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect c() {
        return this.f45119e.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LiveData e() {
        return this.f45118d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        x.a2 e10;
        if (this.f45120f != z10) {
            this.f45120f = z10;
            if (!z10) {
                synchronized (this.f45117c) {
                    this.f45117c.f(1.0f);
                    e10 = e0.g.e(this.f45117c);
                }
                h(e10);
                this.f45119e.c();
                this.f45115a.f0();
            }
        }
    }
}
