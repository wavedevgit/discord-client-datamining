package rm;

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

    /* renamed from: d  reason: collision with root package name */
    public static final a f47512d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static int f47513e = -1;

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f47514a;

    /* renamed from: b  reason: collision with root package name */
    private rm.a f47515b = new rm.a(0.0d, 0.0d);

    /* renamed from: c  reason: collision with root package name */
    private ViewTreeObserver.OnGlobalLayoutListener f47516c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public p(ThemedReactContext themedReactContext) {
        this.f47514a = themedReactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(p pVar, ViewGroup viewGroup) {
        pVar.e(viewGroup);
    }

    private final void e(ViewGroup viewGroup) {
        if (viewGroup != null) {
            rm.a aVar = new rm.a(om.d.a(viewGroup.getWidth()), om.d.a(viewGroup.getHeight()));
            if (!Intrinsics.areEqual(aVar, this.f47515b)) {
                this.f47515b = aVar;
                ThemedReactContext themedReactContext = this.f47514a;
                WritableMap createMap = Arguments.createMap();
                createMap.putDouble("height", aVar.a());
                createMap.putDouble("width", aVar.b());
                Unit unit = Unit.f31988a;
                Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
                om.g.b(themedReactContext, "KeyboardController::windowDidResize", createMap);
            }
        }
    }

    public final void b() {
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f47514a;
        if (themedReactContext != null && f47513e != themedReactContext.hashCode()) {
            f47513e = this.f47514a.hashCode();
            final ViewGroup a10 = om.f.a(this.f47514a);
            e(a10);
            this.f47516c = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: rm.o
                @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                public final void onGlobalLayout() {
                    p.c(p.this, a10);
                }
            };
            if (a10 != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
                viewTreeObserver.addOnGlobalLayoutListener(this.f47516c);
            }
        }
    }

    public final void d() {
        ViewGroup a10;
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f47514a;
        if (themedReactContext != null && (a10 = om.f.a(themedReactContext)) != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
            viewTreeObserver.removeOnGlobalLayoutListener(this.f47516c);
        }
    }
}
