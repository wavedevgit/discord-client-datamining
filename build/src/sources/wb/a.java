package wb;

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
    private final ReactContext f53443d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f53444e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f53445i;

    /* renamed from: o  reason: collision with root package name */
    private final String f53446o;

    /* renamed from: p  reason: collision with root package name */
    private ContentObserver f53447p;

    /* renamed from: wb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0739a extends ContentObserver {
        C0739a(Handler handler) {
            super(handler);
        }

        @Override // android.database.ContentObserver
        public boolean deliverSelfNotifications() {
            return true;
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            super.onChange(z10);
            a.this.f53444e.invoke(Boolean.valueOf(a.this.d()));
        }
    }

    public a(ReactContext reactContext, Function1 onAutoRotateEnabled) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onAutoRotateEnabled, "onAutoRotateEnabled");
        this.f53443d = reactContext;
        this.f53444e = onAutoRotateEnabled;
        this.f53445i = Settings.System.getUriFor("accelerometer_rotation");
        this.f53446o = "accelerometer_rotation";
        onAutoRotateEnabled.invoke(Boolean.valueOf(d()));
    }

    private final C0739a c() {
        Looper myLooper = Looper.myLooper();
        Intrinsics.checkNotNull(myLooper);
        return new C0739a(new Handler(myLooper));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean d() {
        if (Settings.System.getInt(this.f53443d.getContentResolver(), this.f53446o, 0) != 1) {
            return false;
        }
        return true;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        ContentObserver contentObserver = this.f53447p;
        if (contentObserver != null) {
            this.f53443d.getContentResolver().unregisterContentObserver(contentObserver);
        }
        this.f53447p = null;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        C0739a c10 = c();
        this.f53447p = c10;
        if (c10 != null) {
            this.f53443d.getContentResolver().registerContentObserver(this.f53445i, false, c10);
        }
        this.f53444e.invoke(Boolean.valueOf(d()));
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }
}
