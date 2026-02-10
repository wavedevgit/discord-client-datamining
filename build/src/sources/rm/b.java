package rm;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lm.f;
import pm.g;
import pm.k;
import pm.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    public static final a f49066b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private p f49067a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final wm.c a(ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        if (this.f49067a == null) {
            p pVar = new p(reactContext);
            this.f49067a = pVar;
            pVar.b();
        }
        return new wm.c(reactContext);
    }

    public final Map b() {
        f.a aVar = f.f36014f;
        return MapBuilder.of(aVar.c().d(), MapBuilder.of("registrationName", "onKeyboardMove"), aVar.d().d(), MapBuilder.of("registrationName", "onKeyboardMoveStart"), aVar.a().d(), MapBuilder.of("registrationName", "onKeyboardMoveEnd"), aVar.b().d(), MapBuilder.of("registrationName", "onKeyboardMoveInteractive"), "topFocusedInputLayoutChanged", MapBuilder.of("registrationName", "onFocusedInputLayoutChanged"), "topFocusedInputTextChanged", MapBuilder.of("registrationName", "onFocusedInputTextChanged"), "topFocusedInputSelectionChanged", MapBuilder.of("registrationName", "onFocusedInputSelectionChanged"));
    }

    public final void c() {
        p pVar = this.f49067a;
        if (pVar != null) {
            pVar.d();
        }
        this.f49067a = null;
    }

    public final void d(wm.c view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.o();
    }

    public final void e(wm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setActive(z10);
    }

    public final void f(wm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarTranslucent(z10);
    }

    public final void g(wm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPreserveEdgeToEdge(z10);
    }

    public final void h(wm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarTranslucent(z10);
    }

    public final void i(wm.c view) {
        g i10;
        Intrinsics.checkNotNullParameter(view, "view");
        k callback$react_native_keyboard_controller_release = view.getCallback$react_native_keyboard_controller_release();
        if (callback$react_native_keyboard_controller_release != null && (i10 = callback$react_native_keyboard_controller_release.i()) != null) {
            i10.l();
        }
        ThemedReactContext reactContext = view.getReactContext();
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        mm.g.b(reactContext, "KeyboardController::layoutDidSynchronize", createMap);
    }
}
