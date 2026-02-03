package vb;

import android.database.ContentObserver;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements LifecycleEventListener {

    /* renamed from: d  reason: collision with root package name */
    private final ReactContext f51317d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f51318e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f51319i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51320o;

    /* renamed from: p  reason: collision with root package name */
    private ContentObserver f51321p;

    /* renamed from: vb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0673a extends ContentObserver {
        C0673a(Handler handler) {
            super(handler);
        }

        @Override // android.database.ContentObserver
        public boolean deliverSelfNotifications() {
            return true;
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            super.onChange(z10);
            a.this.f51318e.invoke(Boolean.valueOf(a.this.d()));
        }
    }

    public a(ReactContext reactContext, Function1 onAutoRotateEnabled) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onAutoRotateEnabled, "onAutoRotateEnabled");
        this.f51317d = reactContext;
        this.f51318e = onAutoRotateEnabled;
        this.f51319i = Settings.System.getUriFor("accelerometer_rotation");
        this.f51320o = "accelerometer_rotation";
        onAutoRotateEnabled.invoke(Boolean.valueOf(d()));
    }

    private final C0673a c() {
        Looper myLooper = Looper.myLooper();
        Intrinsics.checkNotNull(myLooper);
        return new C0673a(new Handler(myLooper));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean d() {
        if (Settings.System.getInt(this.f51317d.getContentResolver(), this.f51320o, 0) != 1) {
            return false;
        }
        return true;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        ContentObserver contentObserver = this.f51321p;
        if (contentObserver != null) {
            this.f51317d.getContentResolver().unregisterContentObserver(contentObserver);
        }
        this.f51321p = null;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        C0673a c10 = c();
        this.f51321p = c10;
        if (c10 != null) {
            this.f51317d.getContentResolver().registerContentObserver(this.f51319i, false, c10);
        }
        this.f51318e.invoke(Boolean.valueOf(d()));
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }
}
