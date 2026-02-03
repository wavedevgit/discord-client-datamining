package lm;

import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import qm.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f36978a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final f a(ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new f(reactContext);
    }

    public final void b(f view, String interpolator) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(interpolator, "interpolator");
        view.setInterpolator(interpolator);
    }

    public final void c(f view, double d10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setOffset(d10);
    }

    public final void d(f view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScrollKeyboardOffScreenWhenVisible(z10);
    }

    public final void e(f view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScrollKeyboardOnScreenWhenNotVisible(z10);
    }
}
