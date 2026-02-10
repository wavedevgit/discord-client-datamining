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
    private final u f45013a;

    /* renamed from: b  reason: collision with root package name */
    private final MutableLiveData f45014b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f45015c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f45016d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f45017e;

    /* renamed from: f  reason: collision with root package name */
    c.a f45018f;

    /* renamed from: g  reason: collision with root package name */
    boolean f45019g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w4(u uVar, r.a0 a0Var, Executor executor) {
        this.f45013a = uVar;
        this.f45016d = executor;
        Objects.requireNonNull(a0Var);
        this.f45015c = u.g.a(new w0(a0Var));
        this.f45014b = new MutableLiveData(0);
        uVar.v(new u.c() { // from class: q.v4
            @Override // q.u.c
            public final boolean a(TotalCaptureResult totalCaptureResult) {
                return w4.b(w4.this, totalCaptureResult);
            }
        });
    }

    public static /* synthetic */ Object a(final w4 w4Var, final boolean z10, final c.a aVar) {
        w4Var.f45016d.execute(new Runnable() { // from class: q.t4
            @Override // java.lang.Runnable
            public final void run() {
                w4.this.e(aVar, z10);
            }
        });
        return "enableTorch: " + z10;
    }

    public static /* synthetic */ boolean b(w4 w4Var, TotalCaptureResult totalCaptureResult) {
        boolean z10;
        if (w4Var.f45018f != null) {
            Integer num = (Integer) totalCaptureResult.getRequest().get(CaptureRequest.FLASH_MODE);
            if (num != null && num.intValue() == 2) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 == w4Var.f45019g) {
                w4Var.f45018f.c(null);
                w4Var.f45018f = null;
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
        if (!this.f45015c) {
            x.y0.a("TorchControl", "Unable to enableTorch due to there is no flash unit.");
            return d0.n.n(new IllegalStateException("No flash unit"));
        }
        h(this.f45014b, Integer.valueOf(z10 ? 1 : 0));
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: q.u4
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return w4.a(w4.this, z10, aVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(c.a aVar, boolean z10) {
        if (!this.f45015c) {
            if (aVar != null) {
                aVar.f(new IllegalStateException("No flash unit"));
            }
        } else if (!this.f45017e) {
            h(this.f45014b, 0);
            if (aVar != null) {
                aVar.f(new j.a("Camera is not active."));
            }
        } else {
            this.f45019g = z10;
            this.f45013a.y(z10);
            h(this.f45014b, Integer.valueOf(z10 ? 1 : 0));
            c.a aVar2 = this.f45018f;
            if (aVar2 != null) {
                aVar2.f(new j.a("There is a new enableTorch being set"));
            }
            this.f45018f = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LiveData f() {
        return this.f45014b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(boolean z10) {
        if (this.f45017e != z10) {
            this.f45017e = z10;
            if (!z10) {
                if (this.f45019g) {
                    this.f45019g = false;
                    this.f45013a.y(false);
                    h(this.f45014b, 0);
                }
                c.a aVar = this.f45018f;
                if (aVar != null) {
                    aVar.f(new j.a("Camera is not active."));
                    this.f45018f = null;
                }
            }
        }
    }
}
