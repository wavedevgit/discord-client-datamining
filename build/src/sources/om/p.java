package om;

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
    public static final a f43277d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static int f43278e = -1;

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f43279a;

    /* renamed from: b  reason: collision with root package name */
    private om.a f43280b = new om.a(0.0d, 0.0d);

    /* renamed from: c  reason: collision with root package name */
    private ViewTreeObserver.OnGlobalLayoutListener f43281c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public p(ThemedReactContext themedReactContext) {
        this.f43279a = themedReactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(p pVar, ViewGroup viewGroup) {
        pVar.e(viewGroup);
    }

    private final void e(ViewGroup viewGroup) {
        if (viewGroup != null) {
            om.a aVar = new om.a(lm.d.a(viewGroup.getWidth()), lm.d.a(viewGroup.getHeight()));
            if (!Intrinsics.areEqual(aVar, this.f43280b)) {
                this.f43280b = aVar;
                ThemedReactContext themedReactContext = this.f43279a;
                WritableMap createMap = Arguments.createMap();
                createMap.putDouble("height", aVar.a());
                createMap.putDouble("width", aVar.b());
                Unit unit = Unit.f32008a;
                Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
                lm.g.b(themedReactContext, "KeyboardController::windowDidResize", createMap);
            }
        }
    }

    public final void b() {
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f43279a;
        if (themedReactContext != null && f43278e != themedReactContext.hashCode()) {
            f43278e = this.f43279a.hashCode();
            final ViewGroup a10 = lm.f.a(this.f43279a);
            e(a10);
            this.f43281c = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: om.o
                @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                public final void onGlobalLayout() {
                    p.c(p.this, a10);
                }
            };
            if (a10 != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
                viewTreeObserver.addOnGlobalLayoutListener(this.f43281c);
            }
        }
    }

    public final void d() {
        ViewGroup a10;
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f43279a;
        if (themedReactContext != null && (a10 = lm.f.a(themedReactContext)) != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
            viewTreeObserver.removeOnGlobalLayoutListener(this.f43281c);
        }
    }
}
