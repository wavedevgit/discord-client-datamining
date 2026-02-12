package wb;

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
    public static final a f52479o = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final ReactContext f52480d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f52481e;

    /* renamed from: i  reason: collision with root package name */
    private final C0729b f52482i;

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

    /* renamed from: wb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0729b extends BroadcastReceiver {
        C0729b() {
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(intent, "intent");
            Parcelable parcelableExtra = intent.getParcelableExtra("newConfig");
            Intrinsics.checkNotNull(parcelableExtra);
            b.f52479o.b(((Configuration) parcelableExtra).orientation, b.this.f52480d);
        }
    }

    public b(ReactContext reactContext, Function0 onGetCurrentActivity) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onGetCurrentActivity, "onGetCurrentActivity");
        this.f52480d = reactContext;
        this.f52481e = onGetCurrentActivity;
        this.f52482i = new C0729b();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        Activity activity = (Activity) this.f52481e.invoke();
        if (activity != null) {
            try {
                activity.unregisterReceiver(this.f52482i);
                return;
            } catch (IllegalArgumentException e10) {
                q8.a.n(ReactConstants.TAG, "receiver already unregistered", e10);
                return;
            }
        }
        q8.a.m(ReactConstants.TAG, "no activity to un-register receiver");
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        Activity activity = (Activity) this.f52481e.invoke();
        if (activity != null) {
            androidx.core.content.a.l(activity, this.f52482i, new IntentFilter("onConfigurationChanged"), 2);
        } else {
            q8.a.m(ReactConstants.TAG, "no activity to register receiver");
        }
        f52479o.b(this.f52480d.getResources().getConfiguration().orientation, this.f52480d);
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }
}
