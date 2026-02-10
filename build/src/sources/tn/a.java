package tn;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: d  reason: collision with root package name */
    public static final C0663a f48945d = new C0663a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ReactContext f48946a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48947b;

    /* renamed from: c  reason: collision with root package name */
    private final EventDispatcher f48948c;

    /* renamed from: tn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0663a {
        public /* synthetic */ C0663a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0663a() {
        }
    }

    public a(ReactContext reactContext, int i10) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f48946a = reactContext;
        this.f48947b = i10;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, i10);
        if (eventDispatcherForReactTag != null) {
            this.f48948c = eventDispatcherForReactTag;
            return;
        }
        throw new IllegalStateException(("[RNScreens] Nullish event dispatcher for view with tag: " + i10).toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final EventDispatcher e() {
        return this.f48948c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int f() {
        return UIManagerHelper.getSurfaceId(this.f48946a);
    }

    public final int g() {
        return this.f48947b;
    }
}
