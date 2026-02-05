package mm;

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
    public static final a f38796d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static int f38797e = -1;

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f38798a;

    /* renamed from: b  reason: collision with root package name */
    private mm.a f38799b = new mm.a(0.0d, 0.0d);

    /* renamed from: c  reason: collision with root package name */
    private ViewTreeObserver.OnGlobalLayoutListener f38800c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public p(ThemedReactContext themedReactContext) {
        this.f38798a = themedReactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(p pVar, ViewGroup viewGroup) {
        pVar.e(viewGroup);
    }

    private final void e(ViewGroup viewGroup) {
        if (viewGroup != null) {
            mm.a aVar = new mm.a(jm.d.a(viewGroup.getWidth()), jm.d.a(viewGroup.getHeight()));
            if (!Intrinsics.areEqual(aVar, this.f38799b)) {
                this.f38799b = aVar;
                ThemedReactContext themedReactContext = this.f38798a;
                WritableMap createMap = Arguments.createMap();
                createMap.putDouble("height", aVar.a());
                createMap.putDouble("width", aVar.b());
                Unit unit = Unit.f31988a;
                Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
                jm.g.b(themedReactContext, "KeyboardController::windowDidResize", createMap);
            }
        }
    }

    public final void b() {
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f38798a;
        if (themedReactContext != null && f38797e != themedReactContext.hashCode()) {
            f38797e = this.f38798a.hashCode();
            final ViewGroup a10 = jm.f.a(this.f38798a);
            e(a10);
            this.f38800c = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: mm.o
                @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                public final void onGlobalLayout() {
                    p.c(p.this, a10);
                }
            };
            if (a10 != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
                viewTreeObserver.addOnGlobalLayoutListener(this.f38800c);
            }
        }
    }

    public final void d() {
        ViewGroup a10;
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f38798a;
        if (themedReactContext != null && (a10 = jm.f.a(themedReactContext)) != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
            viewTreeObserver.removeOnGlobalLayoutListener(this.f38800c);
        }
    }
}
