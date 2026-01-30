package km;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import em.f;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0448a f33283a = new C0448a(null);

    /* renamed from: km.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0448a {
        public /* synthetic */ C0448a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0448a() {
        }
    }

    public a(ReactApplicationContext mReactContext) {
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
    }

    public final om.c a(ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new om.c(reactContext);
    }

    public final Map b() {
        f.a aVar = f.f22941f;
        return MapBuilder.of(aVar.c().d(), MapBuilder.of("registrationName", "onKeyboardMove"), aVar.d().d(), MapBuilder.of("registrationName", "onKeyboardMoveStart"), aVar.a().d(), MapBuilder.of("registrationName", "onKeyboardMoveEnd"), aVar.b().d(), MapBuilder.of("registrationName", "onKeyboardMoveInteractive"), "topFocusedInputLayoutChanged", MapBuilder.of("registrationName", "onFocusedInputLayoutChanged"), "topFocusedInputTextChanged", MapBuilder.of("registrationName", "onFocusedInputTextChanged"), "topFocusedInputSelectionChanged", MapBuilder.of("registrationName", "onFocusedInputSelectionChanged"));
    }

    public final void c(om.c view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.m();
    }

    public final void d(om.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setActive(z10);
    }

    public final void e(om.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarTranslucent(z10);
    }

    public final void f(om.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPreserveEdgeToEdge(z10);
    }

    public final void g(om.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarTranslucent(z10);
    }
}
