package androidx.metrics.performance;

import android.view.FrameMetrics;
import android.view.View;
import android.view.Window;
import androidx.metrics.performance.g;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a implements Window.OnFrameMetricsAvailableListener {

    /* renamed from: a  reason: collision with root package name */
    private final List f4765a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f4766b;

    /* renamed from: c  reason: collision with root package name */
    private final List f4767c;

    /* renamed from: d  reason: collision with root package name */
    private final List f4768d;

    public a(List delegates) {
        Intrinsics.checkNotNullParameter(delegates, "delegates");
        this.f4765a = delegates;
        this.f4767c = new ArrayList();
        this.f4768d = new ArrayList();
    }

    public final void a(Window.OnFrameMetricsAvailableListener delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        synchronized (this) {
            try {
                if (this.f4766b) {
                    this.f4767c.add(delegate);
                } else {
                    this.f4765a.add(delegate);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b(Window.OnFrameMetricsAvailableListener delegate, Window window) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(window, "window");
        synchronized (this) {
            try {
                if (this.f4766b) {
                    this.f4768d.add(delegate);
                } else {
                    boolean isEmpty = this.f4765a.isEmpty();
                    this.f4765a.remove(delegate);
                    if (!isEmpty && this.f4765a.isEmpty()) {
                        window.removeOnFrameMetricsAvailableListener(this);
                        window.getDecorView().setTag(o3.g.f38559a, null);
                    }
                    Unit unit = Unit.f31988a;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.view.Window.OnFrameMetricsAvailableListener
    public void onFrameMetricsAvailable(Window window, FrameMetrics frameMetrics, int i10) {
        View decorView;
        synchronized (this) {
            try {
                this.f4766b = true;
                for (Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener : this.f4765a) {
                    onFrameMetricsAvailableListener.onFrameMetricsAvailable(window, frameMetrics, i10);
                }
                if (!this.f4767c.isEmpty()) {
                    for (Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener2 : this.f4767c) {
                        this.f4765a.add(onFrameMetricsAvailableListener2);
                    }
                    this.f4767c.clear();
                }
                if (!this.f4768d.isEmpty()) {
                    boolean isEmpty = this.f4765a.isEmpty();
                    for (Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener3 : this.f4768d) {
                        this.f4765a.remove(onFrameMetricsAvailableListener3);
                    }
                    this.f4768d.clear();
                    if (!isEmpty && this.f4765a.isEmpty()) {
                        if (window != null) {
                            window.removeOnFrameMetricsAvailableListener(this);
                        }
                        if (window != null && (decorView = window.getDecorView()) != null) {
                            decorView.setTag(o3.g.f38559a, null);
                        }
                    }
                }
                this.f4766b = false;
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (window != null) {
            g.a aVar = g.f4791f;
            View decorView2 = window.getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView2, "window.decorView");
            g a10 = aVar.b(decorView2).a();
            if (a10 != null) {
                a10.b();
            }
        }
    }
}
