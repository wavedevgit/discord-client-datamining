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
    private final ReactContext f52416d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f52417e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f52418i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52419o;

    /* renamed from: p  reason: collision with root package name */
    private ContentObserver f52420p;

    /* renamed from: vb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0686a extends ContentObserver {
        C0686a(Handler handler) {
            super(handler);
        }

        @Override // android.database.ContentObserver
        public boolean deliverSelfNotifications() {
            return true;
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            super.onChange(z10);
            a.this.f52417e.invoke(Boolean.valueOf(a.this.d()));
        }
    }

    public a(ReactContext reactContext, Function1 onAutoRotateEnabled) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onAutoRotateEnabled, "onAutoRotateEnabled");
        this.f52416d = reactContext;
        this.f52417e = onAutoRotateEnabled;
        this.f52418i = Settings.System.getUriFor("accelerometer_rotation");
        this.f52419o = "accelerometer_rotation";
        onAutoRotateEnabled.invoke(Boolean.valueOf(d()));
    }

    private final C0686a c() {
        Looper myLooper = Looper.myLooper();
        Intrinsics.checkNotNull(myLooper);
        return new C0686a(new Handler(myLooper));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean d() {
        if (Settings.System.getInt(this.f52416d.getContentResolver(), this.f52419o, 0) != 1) {
            return false;
        }
        return true;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        ContentObserver contentObserver = this.f52420p;
        if (contentObserver != null) {
            this.f52416d.getContentResolver().unregisterContentObserver(contentObserver);
        }
        this.f52420p = null;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        C0686a c10 = c();
        this.f52420p = c10;
        if (c10 != null) {
            this.f52416d.getContentResolver().registerContentObserver(this.f52418i, false, c10);
        }
        this.f52417e.invoke(Boolean.valueOf(d()));
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }
}
