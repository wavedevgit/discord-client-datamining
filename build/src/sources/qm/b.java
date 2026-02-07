package qm;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import java.util.Map;
import km.f;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import om.g;
import om.k;
import om.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    public static final a f47948b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private p f47949a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final vm.c a(ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        if (this.f47949a == null) {
            p pVar = new p(reactContext);
            this.f47949a = pVar;
            pVar.b();
        }
        return new vm.c(reactContext);
    }

    public final Map b() {
        f.a aVar = f.f31794f;
        return MapBuilder.of(aVar.c().d(), MapBuilder.of("registrationName", "onKeyboardMove"), aVar.d().d(), MapBuilder.of("registrationName", "onKeyboardMoveStart"), aVar.a().d(), MapBuilder.of("registrationName", "onKeyboardMoveEnd"), aVar.b().d(), MapBuilder.of("registrationName", "onKeyboardMoveInteractive"), "topFocusedInputLayoutChanged", MapBuilder.of("registrationName", "onFocusedInputLayoutChanged"), "topFocusedInputTextChanged", MapBuilder.of("registrationName", "onFocusedInputTextChanged"), "topFocusedInputSelectionChanged", MapBuilder.of("registrationName", "onFocusedInputSelectionChanged"));
    }

    public final void c() {
        p pVar = this.f47949a;
        if (pVar != null) {
            pVar.d();
        }
        this.f47949a = null;
    }

    public final void d(vm.c view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.o();
    }

    public final void e(vm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setActive(z10);
    }

    public final void f(vm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNavigationBarTranslucent(z10);
    }

    public final void g(vm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPreserveEdgeToEdge(z10);
    }

    public final void h(vm.c view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setStatusBarTranslucent(z10);
    }

    public final void i(vm.c view) {
        g i10;
        Intrinsics.checkNotNullParameter(view, "view");
        k callback$react_native_keyboard_controller_release = view.getCallback$react_native_keyboard_controller_release();
        if (callback$react_native_keyboard_controller_release != null && (i10 = callback$react_native_keyboard_controller_release.i()) != null) {
            i10.l();
        }
        ThemedReactContext reactContext = view.getReactContext();
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        lm.g.b(reactContext, "KeyboardController::layoutDidSynchronize", createMap);
    }
}
