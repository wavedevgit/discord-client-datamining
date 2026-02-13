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
    private final ReactContext f53041d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f53042e;

    /* renamed from: i  reason: collision with root package name */
    private final Uri f53043i;

    /* renamed from: o  reason: collision with root package name */
    private final String f53044o;

    /* renamed from: p  reason: collision with root package name */
    private ContentObserver f53045p;

    /* renamed from: wb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0728a extends ContentObserver {
        C0728a(Handler handler) {
            super(handler);
        }

        @Override // android.database.ContentObserver
        public boolean deliverSelfNotifications() {
            return true;
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            super.onChange(z10);
            a.this.f53042e.invoke(Boolean.valueOf(a.this.d()));
        }
    }

    public a(ReactContext reactContext, Function1 onAutoRotateEnabled) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(onAutoRotateEnabled, "onAutoRotateEnabled");
        this.f53041d = reactContext;
        this.f53042e = onAutoRotateEnabled;
        this.f53043i = Settings.System.getUriFor("accelerometer_rotation");
        this.f53044o = "accelerometer_rotation";
        onAutoRotateEnabled.invoke(Boolean.valueOf(d()));
    }

    private final C0728a c() {
        Looper myLooper = Looper.myLooper();
        Intrinsics.checkNotNull(myLooper);
        return new C0728a(new Handler(myLooper));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean d() {
        if (Settings.System.getInt(this.f53041d.getContentResolver(), this.f53044o, 0) != 1) {
            return false;
        }
        return true;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        ContentObserver contentObserver = this.f53045p;
        if (contentObserver != null) {
            this.f53041d.getContentResolver().unregisterContentObserver(contentObserver);
        }
        this.f53045p = null;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        C0728a c10 = c();
        this.f53045p = c10;
        if (c10 != null) {
            this.f53041d.getContentResolver().registerContentObserver(this.f53043i, false, c10);
        }
        this.f53042e.invoke(Boolean.valueOf(d()));
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }
}
