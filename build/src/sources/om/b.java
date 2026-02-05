package om;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import im.f;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mm.g;
import mm.k;
import mm.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    public static final a f44088b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private p f44089a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final tm.c a(ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        if (this.f44089a == null) {
            p pVar = new p(reactContext);
            this.f44089a = pVar;
            pVar.b();
        }
        return new tm.c(reactContext);
    }

    public final Map b() {
        f.a aVar = f.f27456f;
        return MapBuilder.of(aVar.c().d(), MapBuilder.of("registrationName", "onKeyboardMove"), aVar.d().d(), MapBuilder.of("registrationName", "onKeyboardMoveStart"), aVar.a().d(), MapBuilder.of("registrationName", "onKeyboardMoveEnd"), aVar.b().d(), MapBuilder.of("registrationName", "onKeyboardMoveInteractive"), "topFocusedInputLayoutChanged", MapBuilder.of("registrationName", "onFocusedInputLayoutChanged"), "topFocusedInputTextChanged", MapBuilder.of("registrationName", "onFocusedInputTextChanged"), "topFocusedInputSelectionChanged", MapBuilder.of("registrationName", "onFocusedInputSelectionChanged"));
    }

    public final void c() {
        p pVar = this.f44089a;
        if (pVar != null) {
            pVar.d();
        }
        this.f44089a = null;
    }

    public final void d(tm.c view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.o();
    }

    public final void e(tm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setActive(z10);
    }

    public final void f(tm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarTranslucent(z10);
    }

    public final void g(tm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPreserveEdgeToEdge(z10);
    }

    public final void h(tm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarTranslucent(z10);
    }

    public final void i(tm.c view) {
        g i10;
        Intrinsics.checkNotNullParameter(view, "view");
        k callback$react_native_keyboard_controller_release = view.getCallback$react_native_keyboard_controller_release();
        if (callback$react_native_keyboard_controller_release != null && (i10 = callback$react_native_keyboard_controller_release.i()) != null) {
            i10.l();
        }
        ThemedReactContext reactContext = view.getReactContext();
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        jm.g.b(reactContext, "KeyboardController::layoutDidSynchronize", createMap);
    }
}
