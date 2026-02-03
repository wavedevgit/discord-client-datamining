package jm;

import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: c  reason: collision with root package name */
    public static final a f32038c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static int f32039d = -1;

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f32040a;

    /* renamed from: b  reason: collision with root package name */
    private jm.a f32041b = new jm.a(0.0d, 0.0d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public p(ThemedReactContext themedReactContext) {
        ViewTreeObserver viewTreeObserver;
        this.f32040a = themedReactContext;
        if (themedReactContext != null && f32039d != themedReactContext.hashCode()) {
            f32039d = themedReactContext.hashCode();
            final ViewGroup a10 = gm.f.a(themedReactContext);
            c(a10);
            if (a10 != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
                viewTreeObserver.addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() { // from class: jm.o
                    @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                    public final void onGlobalLayout() {
                        p.b(p.this, a10);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(p pVar, ViewGroup viewGroup) {
        pVar.c(viewGroup);
    }

    private final void c(ViewGroup viewGroup) {
        if (viewGroup != null) {
            jm.a aVar = new jm.a(gm.d.a(viewGroup.getWidth()), gm.d.a(viewGroup.getHeight()));
            if (!Intrinsics.areEqual(aVar, this.f32041b)) {
                this.f32041b = aVar;
                ThemedReactContext themedReactContext = this.f32040a;
                WritableMap createMap = Arguments.createMap();
                createMap.putDouble("height", aVar.a());
                createMap.putDouble("width", aVar.b());
                Unit unit = Unit.f33074a;
                Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
                gm.g.b(themedReactContext, "KeyboardController::windowDidResize", createMap);
            }
        }
    }
}
