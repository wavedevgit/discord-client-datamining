package q;

import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import androidx.concurrent.futures.c;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Objects;
import java.util.concurrent.Executor;
import q.u;
import x.j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w4 {

    /* renamed from: a  reason: collision with root package name */
    private final u f43682a;

    /* renamed from: b  reason: collision with root package name */
    private final MutableLiveData f43683b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f43684c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f43685d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f43686e;

    /* renamed from: f  reason: collision with root package name */
    c.a f43687f;

    /* renamed from: g  reason: collision with root package name */
    boolean f43688g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w4(u uVar, r.a0 a0Var, Executor executor) {
        this.f43682a = uVar;
        this.f43685d = executor;
        Objects.requireNonNull(a0Var);
        this.f43684c = u.g.a(new w0(a0Var));
        this.f43683b = new MutableLiveData(0);
        uVar.v(new u.c() { // from class: q.v4
            @Override // q.u.c
            public final boolean a(TotalCaptureResult totalCaptureResult) {
                return w4.b(w4.this, totalCaptureResult);
            }
        });
    }

    public static /* synthetic */ Object a(final w4 w4Var, final boolean z10, final c.a aVar) {
        w4Var.f43685d.execute(new Runnable() { // from class: q.t4
            @Override // java.lang.Runnable
            public final void run() {
                w4.this.e(aVar, z10);
            }
        });
        return "enableTorch: " + z10;
    }

    public static /* synthetic */ boolean b(w4 w4Var, TotalCaptureResult totalCaptureResult) {
        boolean z10;
        if (w4Var.f43687f != null) {
            Integer num = (Integer) totalCaptureResult.getRequest().get(CaptureRequest.FLASH_MODE);
            if (num != null && num.intValue() == 2) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 == w4Var.f43688g) {
                w4Var.f43687f.c(null);
                w4Var.f43687f = null;
            }
        }
        return false;
    }

    private void h(MutableLiveData mutableLiveData, Object obj) {
        if (b0.p.c()) {
            mutableLiveData.o(obj);
        } else {
            mutableLiveData.m(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ListenableFuture d(final boolean z10) {
        if (!this.f43684c) {
            x.y0.a("TorchControl", "Unable to enableTorch due to there is no flash unit.");
            return d0.n.n(new IllegalStateException("No flash unit"));
        }
        h(this.f43683b, Integer.valueOf(z10 ? 1 : 0));
        return androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: q.u4
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar) {
                return w4.a(w4.this, z10, aVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(c.a aVar, boolean z10) {
        if (!this.f43684c) {
            if (aVar != null) {
                aVar.f(new IllegalStateException("No flash unit"));
            }
        } else if (!this.f43686e) {
            h(this.f43683b, 0);
            if (aVar != null) {
                aVar.f(new j.a("Camera is not active."));
            }
        } else {
            this.f43688g = z10;
            this.f43682a.y(z10);
            h(this.f43683b, Integer.valueOf(z10 ? 1 : 0));
            c.a aVar2 = this.f43687f;
            if (aVar2 != null) {
                aVar2.f(new j.a("There is a new enableTorch being set"));
            }
            this.f43687f = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LiveData f() {
        return this.f43683b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        if (this.f43686e != z10) {
            this.f43686e = z10;
            if (!z10) {
                if (this.f43688g) {
                    this.f43688g = false;
                    this.f43682a.y(false);
                    h(this.f43683b, 0);
                }
                c.a aVar = this.f43687f;
                if (aVar != null) {
                    aVar.f(new j.a("Camera is not active."));
                    this.f43687f = null;
                }
            }
        }
    }
}
