package wp;

import android.view.View;
import android.view.ViewTreeObserver;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements ViewTreeObserver.OnPreDrawListener, View.OnAttachStateChangeListener {

    /* renamed from: o  reason: collision with root package name */
    public static final a f52626o = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final View f52627d;

    /* renamed from: e  reason: collision with root package name */
    private final Runnable f52628e;

    /* renamed from: i  reason: collision with root package name */
    private ViewTreeObserver f52629i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a(View view, Runnable runnable) {
            Intrinsics.checkNotNullParameter(view, "view");
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            g gVar = new g(view, runnable, null);
            view.getViewTreeObserver().addOnPreDrawListener(gVar);
            view.addOnAttachStateChangeListener(gVar);
            return gVar;
        }

        private a() {
        }
    }

    public /* synthetic */ g(View view, Runnable runnable, DefaultConstructorMarker defaultConstructorMarker) {
        this(view, runnable);
    }

    private final void a() {
        if (this.f52629i.isAlive()) {
            this.f52629i.removeOnPreDrawListener(this);
        } else {
            this.f52627d.getViewTreeObserver().removeOnPreDrawListener(this);
        }
        this.f52627d.removeOnAttachStateChangeListener(this);
    }

    @Override // android.view.ViewTreeObserver.OnPreDrawListener
    public boolean onPreDraw() {
        a();
        this.f52628e.run();
        return false;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        this.f52629i = v10.getViewTreeObserver();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        a();
    }

    private g(View view, Runnable runnable) {
        this.f52627d = view;
        this.f52628e = runnable;
        ViewTreeObserver viewTreeObserver = view.getViewTreeObserver();
        Intrinsics.checkNotNullExpressionValue(viewTreeObserver, "getViewTreeObserver(...)");
        this.f52629i = viewTreeObserver;
    }
}
