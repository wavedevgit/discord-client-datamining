package im;

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
    public static final a f28634c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static int f28635d = -1;

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f28636a;

    /* renamed from: b  reason: collision with root package name */
    private im.a f28637b = new im.a(0.0d, 0.0d);

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
        this.f28636a = themedReactContext;
        if (themedReactContext != null && f28635d != themedReactContext.hashCode()) {
            f28635d = themedReactContext.hashCode();
            final ViewGroup a10 = fm.f.a(themedReactContext);
            c(a10);
            if (a10 != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
                viewTreeObserver.addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() { // from class: im.o
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
            im.a aVar = new im.a(fm.d.a(viewGroup.getWidth()), fm.d.a(viewGroup.getHeight()));
            if (!Intrinsics.areEqual(aVar, this.f28637b)) {
                this.f28637b = aVar;
                ThemedReactContext themedReactContext = this.f28636a;
                WritableMap createMap = Arguments.createMap();
                createMap.putDouble("height", aVar.a());
                createMap.putDouble("width", aVar.b());
                Unit unit = Unit.f33282a;
                Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
                fm.g.b(themedReactContext, "KeyboardController::windowDidResize", createMap);
            }
        }
    }
}
