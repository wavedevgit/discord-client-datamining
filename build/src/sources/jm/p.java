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

    /* renamed from: d  reason: collision with root package name */
    public static final a f31834d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static int f31835e = -1;

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f31836a;

    /* renamed from: b  reason: collision with root package name */
    private jm.a f31837b = new jm.a(0.0d, 0.0d);

    /* renamed from: c  reason: collision with root package name */
    private ViewTreeObserver.OnGlobalLayoutListener f31838c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public p(ThemedReactContext themedReactContext) {
        this.f31836a = themedReactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(p pVar, ViewGroup viewGroup) {
        pVar.e(viewGroup);
    }

    private final void e(ViewGroup viewGroup) {
        if (viewGroup != null) {
            jm.a aVar = new jm.a(gm.d.a(viewGroup.getWidth()), gm.d.a(viewGroup.getHeight()));
            if (!Intrinsics.areEqual(aVar, this.f31837b)) {
                this.f31837b = aVar;
                ThemedReactContext themedReactContext = this.f31836a;
                WritableMap createMap = Arguments.createMap();
                createMap.putDouble("height", aVar.a());
                createMap.putDouble("width", aVar.b());
                Unit unit = Unit.f32464a;
                Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
                gm.g.b(themedReactContext, "KeyboardController::windowDidResize", createMap);
            }
        }
    }

    public final void b() {
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f31836a;
        if (themedReactContext != null && f31835e != themedReactContext.hashCode()) {
            f31835e = this.f31836a.hashCode();
            final ViewGroup a10 = gm.f.a(this.f31836a);
            e(a10);
            this.f31838c = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: jm.o
                @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                public final void onGlobalLayout() {
                    p.c(p.this, a10);
                }
            };
            if (a10 != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
                viewTreeObserver.addOnGlobalLayoutListener(this.f31838c);
            }
        }
    }

    public final void d() {
        ViewGroup a10;
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f31836a;
        if (themedReactContext != null && (a10 = gm.f.a(themedReactContext)) != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
            viewTreeObserver.removeOnGlobalLayoutListener(this.f31838c);
        }
    }
}
