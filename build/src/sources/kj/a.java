package kj;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import cj.c;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f31710a;

    /* renamed from: b  reason: collision with root package name */
    private final SharedPreferences f31711b;

    /* renamed from: c  reason: collision with root package name */
    private final c f31712c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f31713d;

    public a(Context context, String str, c cVar) {
        Context a10 = a(context);
        this.f31710a = a10;
        this.f31711b = a10.getSharedPreferences("com.google.firebase.common.prefs:" + str, 0);
        this.f31712c = cVar;
        this.f31713d = c();
    }

    private static Context a(Context context) {
        return androidx.core.content.a.b(context);
    }

    private boolean c() {
        if (this.f31711b.contains("firebase_data_collection_default_enabled")) {
            return this.f31711b.getBoolean("firebase_data_collection_default_enabled", true);
        }
        return d();
    }

    private boolean d() {
        ApplicationInfo applicationInfo;
        Bundle bundle;
        try {
            PackageManager packageManager = this.f31710a.getPackageManager();
            if (packageManager != null && (applicationInfo = packageManager.getApplicationInfo(this.f31710a.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) != null && (bundle = applicationInfo.metaData) != null && bundle.containsKey("firebase_data_collection_default_enabled")) {
                return applicationInfo.metaData.getBoolean("firebase_data_collection_default_enabled");
            }
            return true;
        } catch (PackageManager.NameNotFoundException unused) {
            return true;
        }
    }

    public synchronized boolean b() {
        return this.f31713d;
    }
}
