package wb;

import android.app.Activity;
import android.view.OrientationEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.github.yamill.orientation.f;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import ys.v0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements LifecycleEventListener {

    /* renamed from: o  reason: collision with root package name */
    public static final b f52484o;

    /* renamed from: p  reason: collision with root package name */
    private static Integer f52485p;

    /* renamed from: q  reason: collision with root package name */
    private static final Function2 f52486q;

    /* renamed from: d  reason: collision with root package name */
    private final ReactContext f52487d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f52488e;

    /* renamed from: i  reason: collision with root package name */
    private OrientationEventListener f52489i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, b.class, "tryEmitOrientationDegreesChange", "tryEmitOrientationDegreesChange(ILcom/facebook/react/bridge/ReactContext;)V", 0);
        }

        public final void a(int i10, ReactContext p12) {
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((b) this.receiver).e(i10, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a(((Number) obj).intValue(), (ReactContext) obj2);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void e(int i10, ReactContext reactContext) {
            if (reactContext.hasActiveReactInstance()) {
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                Integer b10 = b();
                if (b10 == null || i10 != b10.intValue()) {
                    createMap.putInt("orientationDegrees", i10);
                    ((DeviceEventManagerModule.RCTDeviceEventEmitter) reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).emit("orientationDegreesDidChange", createMap);
                    d(Integer.valueOf(i10));
                }
            }
        }

        public final Integer b() {
            return c.f52485p;
        }

        public final Function2 c() {
            return c.f52486q;
        }

        public final void d(Integer num) {
            c.f52485p = num;
        }

        private b() {
        }
    }

    /* renamed from: wb.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0730c extends OrientationEventListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f52490a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0730c(Activity activity, c cVar) {
            super(activity);
            this.f52490a = cVar;
        }

        @Override // android.view.OrientationEventListener
        public void onOrientationChanged(int i10) {
            c.f52484o.c().invoke(Integer.valueOf(i10), this.f52490a.f52487d);
        }
    }

    static {
        b bVar = new b(null);
        f52484o = bVar;
        f52486q = f.b(1000L, v0.f55830d, new a(bVar));
    }

    public c(ReactContext reactContext, Function0 onGetCurrentActivity) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onGetCurrentActivity, "onGetCurrentActivity");
        this.f52487d = reactContext;
        this.f52488e = onGetCurrentActivity;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        Activity activity = (Activity) this.f52488e.invoke();
        if (activity != null && this.f52489i == null) {
            C0730c c0730c = new C0730c(activity, this);
            this.f52489i = c0730c;
            if (c0730c.canDetectOrientation()) {
                OrientationEventListener orientationEventListener = this.f52489i;
                if (orientationEventListener == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("orientationEventListener");
                    orientationEventListener = null;
                }
                orientationEventListener.enable();
                return;
            }
            return;
        }
        q8.a.m(ReactConstants.TAG, "no activity to register receiver");
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }
}
