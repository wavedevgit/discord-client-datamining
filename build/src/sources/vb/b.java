package vb;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.res.Configuration;
import android.os.Parcelable;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements LifecycleEventListener {

    /* renamed from: o  reason: collision with root package name */
    public static final a f52009o = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ReactContext f52010d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f52011e;

    /* renamed from: i  reason: collision with root package name */
    private final C0678b f52012i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(Activity activity, Configuration newConfig) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            Intrinsics.checkNotNullParameter(newConfig, "newConfig");
            Intent intent = new Intent("onConfigurationChanged");
            intent.putExtra("newConfig", newConfig);
            activity.sendBroadcast(intent);
        }

        public final void b(int i10, ReactContext reactContext) {
            String str;
            Intrinsics.checkNotNullParameter(reactContext, "reactContext");
            if (reactContext.hasActiveReactInstance()) {
                if (i10 == 1) {
                    str = "PORTRAIT";
                } else {
                    str = "LANDSCAPE";
                }
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putString("orientation", str);
                ((DeviceEventManagerModule.RCTDeviceEventEmitter) reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).emit("orientationDidChange", createMap);
            }
        }

        private a() {
        }
    }

    /* renamed from: vb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0678b extends BroadcastReceiver {
        C0678b() {
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(intent, "intent");
            Parcelable parcelableExtra = intent.getParcelableExtra("newConfig");
            Intrinsics.checkNotNull(parcelableExtra);
            b.f52009o.b(((Configuration) parcelableExtra).orientation, b.this.f52010d);
        }
    }

    public b(ReactContext reactContext, Function0 onGetCurrentActivity) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onGetCurrentActivity, "onGetCurrentActivity");
        this.f52010d = reactContext;
        this.f52011e = onGetCurrentActivity;
        this.f52012i = new C0678b();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        Activity activity = (Activity) this.f52011e.invoke();
        if (activity != null) {
            try {
                activity.unregisterReceiver(this.f52012i);
                return;
            } catch (IllegalArgumentException e10) {
                p8.a.n(ReactConstants.TAG, "receiver already unregistered", e10);
                return;
            }
        }
        p8.a.m(ReactConstants.TAG, "no activity to un-register receiver");
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        Activity activity = (Activity) this.f52011e.invoke();
        if (activity != null) {
            androidx.core.content.a.l(activity, this.f52012i, new IntentFilter("onConfigurationChanged"), 2);
        } else {
            p8.a.m(ReactConstants.TAG, "no activity to register receiver");
        }
        f52009o.b(this.f52010d.getResources().getConfiguration().orientation, this.f52010d);
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }
}
