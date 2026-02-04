package vb;

import android.app.Activity;
import android.view.OrientationEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.github.yamill.orientation.f;
import js.v0;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements LifecycleEventListener {

    /* renamed from: o  reason: collision with root package name */
    public static final b f51325o;

    /* renamed from: p  reason: collision with root package name */
    private static Integer f51326p;

    /* renamed from: q  reason: collision with root package name */
    private static final Function2 f51327q;

    /* renamed from: d  reason: collision with root package name */
    private final ReactContext f51328d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f51329e;

    /* renamed from: i  reason: collision with root package name */
    private OrientationEventListener f51330i;

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
            return Unit.f32464a;
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
            return c.f51326p;
        }

        public final Function2 c() {
            return c.f51327q;
        }

        public final void d(Integer num) {
            c.f51326p = num;
        }

        private b() {
        }
    }

    /* renamed from: vb.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0675c extends OrientationEventListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f51331a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0675c(Activity activity, c cVar) {
            super(activity);
            this.f51331a = cVar;
        }

        @Override // android.view.OrientationEventListener
        public void onOrientationChanged(int i10) {
            c.f51325o.c().invoke(Integer.valueOf(i10), this.f51331a.f51328d);
        }
    }

    static {
        b bVar = new b(null);
        f51325o = bVar;
        f51327q = f.b(1000L, v0.f31994d, new a(bVar));
    }

    public c(ReactContext reactContext, Function0 onGetCurrentActivity) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onGetCurrentActivity, "onGetCurrentActivity");
        this.f51328d = reactContext;
        this.f51329e = onGetCurrentActivity;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        Activity activity = (Activity) this.f51329e.invoke();
        if (activity != null && this.f51330i == null) {
            C0675c c0675c = new C0675c(activity, this);
            this.f51330i = c0675c;
            if (c0675c.canDetectOrientation()) {
                OrientationEventListener orientationEventListener = this.f51330i;
                if (orientationEventListener == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("orientationEventListener");
                    orientationEventListener = null;
                }
                orientationEventListener.enable();
                return;
            }
            return;
        }
        p8.a.m(ReactConstants.TAG, "no activity to register receiver");
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
    }
}
