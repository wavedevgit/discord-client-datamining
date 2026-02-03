package lm;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import fm.f;
import java.util.Map;
import jm.g;
import jm.k;
import jm.p;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    public static final a f36976b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private p f36977a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final qm.c a(ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        if (this.f36977a == null) {
            p pVar = new p(reactContext);
            this.f36977a = pVar;
            pVar.b();
        }
        return new qm.c(reactContext);
    }

    public final Map b() {
        f.a aVar = f.f24064f;
        return MapBuilder.of(aVar.c().d(), MapBuilder.of("registrationName", "onKeyboardMove"), aVar.d().d(), MapBuilder.of("registrationName", "onKeyboardMoveStart"), aVar.a().d(), MapBuilder.of("registrationName", "onKeyboardMoveEnd"), aVar.b().d(), MapBuilder.of("registrationName", "onKeyboardMoveInteractive"), "topFocusedInputLayoutChanged", MapBuilder.of("registrationName", "onFocusedInputLayoutChanged"), "topFocusedInputTextChanged", MapBuilder.of("registrationName", "onFocusedInputTextChanged"), "topFocusedInputSelectionChanged", MapBuilder.of("registrationName", "onFocusedInputSelectionChanged"));
    }

    public final void c() {
        p pVar = this.f36977a;
        if (pVar != null) {
            pVar.d();
        }
        this.f36977a = null;
    }

    public final void d(qm.c view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.n();
    }

    public final void e(qm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setActive(z10);
    }

    public final void f(qm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarTranslucent(z10);
    }

    public final void g(qm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPreserveEdgeToEdge(z10);
    }

    public final void h(qm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarTranslucent(z10);
    }

    public final void i(qm.c view) {
        g i10;
        Intrinsics.checkNotNullParameter(view, "view");
        k callback$react_native_keyboard_controller_release = view.getCallback$react_native_keyboard_controller_release();
        if (callback$react_native_keyboard_controller_release != null && (i10 = callback$react_native_keyboard_controller_release.i()) != null) {
            i10.l();
        }
        ThemedReactContext reactContext = view.getReactContext();
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        gm.g.b(reactContext, "KeyboardController::layoutDidSynchronize", createMap);
    }
}
