package pm;

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
    public static final a f44383d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static int f44384e = -1;

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f44385a;

    /* renamed from: b  reason: collision with root package name */
    private pm.a f44386b = new pm.a(0.0d, 0.0d);

    /* renamed from: c  reason: collision with root package name */
    private ViewTreeObserver.OnGlobalLayoutListener f44387c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public p(ThemedReactContext themedReactContext) {
        this.f44385a = themedReactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(p pVar, ViewGroup viewGroup) {
        pVar.e(viewGroup);
    }

    private final void e(ViewGroup viewGroup) {
        if (viewGroup != null) {
            pm.a aVar = new pm.a(mm.d.a(viewGroup.getWidth()), mm.d.a(viewGroup.getHeight()));
            if (!Intrinsics.areEqual(aVar, this.f44386b)) {
                this.f44386b = aVar;
                ThemedReactContext themedReactContext = this.f44385a;
                WritableMap createMap = Arguments.createMap();
                createMap.putDouble("height", aVar.a());
                createMap.putDouble("width", aVar.b());
                Unit unit = Unit.f31765a;
                Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
                mm.g.b(themedReactContext, "KeyboardController::windowDidResize", createMap);
            }
        }
    }

    public final void b() {
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f44385a;
        if (themedReactContext != null && f44384e != themedReactContext.hashCode()) {
            f44384e = this.f44385a.hashCode();
            final ViewGroup a10 = mm.f.a(this.f44385a);
            e(a10);
            this.f44387c = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: pm.o
                @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                public final void onGlobalLayout() {
                    p.c(p.this, a10);
                }
            };
            if (a10 != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
                viewTreeObserver.addOnGlobalLayoutListener(this.f44387c);
            }
        }
    }

    public final void d() {
        ViewGroup a10;
        ViewTreeObserver viewTreeObserver;
        ThemedReactContext themedReactContext = this.f44385a;
        if (themedReactContext != null && (a10 = mm.f.a(themedReactContext)) != null && (viewTreeObserver = a10.getViewTreeObserver()) != null) {
            viewTreeObserver.removeOnGlobalLayoutListener(this.f44387c);
        }
    }
}
