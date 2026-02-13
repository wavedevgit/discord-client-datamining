package nj;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import fj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f38517a;

    /* renamed from: b  reason: collision with root package name */
    private final SharedPreferences f38518b;

    /* renamed from: c  reason: collision with root package name */
    private final c f38519c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f38520d;

    public a(Context context, String str, c cVar) {
        Context a10 = a(context);
        this.f38517a = a10;
        this.f38518b = a10.getSharedPreferences("com.google.firebase.common.prefs:" + str, 0);
        this.f38519c = cVar;
        this.f38520d = c();
    }

    private static Context a(Context context) {
        return androidx.core.content.a.b(context);
    }

    private boolean c() {
        if (this.f38518b.contains("firebase_data_collection_default_enabled")) {
            return this.f38518b.getBoolean("firebase_data_collection_default_enabled", true);
        }
        return d();
    }

    private boolean d() {
        ApplicationInfo applicationInfo;
        Bundle bundle;
        try {
            PackageManager packageManager = this.f38517a.getPackageManager();
            if (packageManager != null && (applicationInfo = packageManager.getApplicationInfo(this.f38517a.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) != null && (bundle = applicationInfo.metaData) != null && bundle.containsKey("firebase_data_collection_default_enabled")) {
                return applicationInfo.metaData.getBoolean("firebase_data_collection_default_enabled");
            }
            return true;
        } catch (PackageManager.NameNotFoundException unused) {
            return true;
        }
    }

    public synchronized boolean b() {
        return this.f38520d;
    }
}
