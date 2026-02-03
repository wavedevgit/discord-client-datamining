package androidx.metrics.performance;

import android.os.Build;
import android.view.View;
import android.view.Window;
import androidx.metrics.performance.g;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class JankStats {

    /* renamed from: f  reason: collision with root package name */
    public static final a f4611f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final OnFrameListener f4612a;

    /* renamed from: b  reason: collision with root package name */
    private final g.b f4613b;

    /* renamed from: c  reason: collision with root package name */
    private final f f4614c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4615d;

    /* renamed from: e  reason: collision with root package name */
    private float f4616e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface OnFrameListener {
        void a(FrameData frameData);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final JankStats a(Window window, OnFrameListener frameListener) {
            Intrinsics.checkNotNullParameter(window, "window");
            Intrinsics.checkNotNullParameter(frameListener, "frameListener");
            return new JankStats(window, frameListener, null);
        }

        private a() {
        }
    }

    public /* synthetic */ JankStats(Window window, OnFrameListener onFrameListener, DefaultConstructorMarker defaultConstructorMarker) {
        this(window, onFrameListener);
    }

    public final float a() {
        return this.f4616e;
    }

    public final void b(FrameData volatileFrameData) {
        Intrinsics.checkNotNullParameter(volatileFrameData, "volatileFrameData");
        this.f4612a.a(volatileFrameData);
    }

    public final void c(float f10) {
        f.f4640b.b(-1L);
        this.f4616e = f10;
    }

    public final void d(boolean z10) {
        this.f4614c.c(z10);
        this.f4615d = z10;
    }

    private JankStats(Window window, OnFrameListener onFrameListener) {
        f dVar;
        this.f4612a = onFrameListener;
        View peekDecorView = window.peekDecorView();
        if (peekDecorView != null) {
            this.f4613b = g.f4643f.a(peekDecorView);
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 31) {
                dVar = new e(this, peekDecorView, window);
            } else if (i10 >= 26) {
                dVar = new o3.e(this, peekDecorView, window);
            } else {
                dVar = new d(this, peekDecorView, window);
            }
            this.f4614c = dVar;
            dVar.c(true);
            this.f4615d = true;
            this.f4616e = 2.0f;
            return;
        }
        throw new IllegalStateException("window.peekDecorView() is null: JankStats can only be created with a Window that has a non-null DecorView");
    }
}
