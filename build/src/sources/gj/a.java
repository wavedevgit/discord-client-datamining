package gj;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f26279a;

    /* renamed from: b  reason: collision with root package name */
    private final SharedPreferences f26280b;

    /* renamed from: c  reason: collision with root package name */
    private final c f26281c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f26282d;

    public a(Context context, String str, c cVar) {
        Context a10 = a(context);
        this.f26279a = a10;
        this.f26280b = a10.getSharedPreferences("com.google.firebase.common.prefs:" + str, 0);
        this.f26281c = cVar;
        this.f26282d = c();
    }

    private static Context a(Context context) {
        return androidx.core.content.a.b(context);
    }

    private boolean c() {
        if (this.f26280b.contains("firebase_data_collection_default_enabled")) {
            return this.f26280b.getBoolean("firebase_data_collection_default_enabled", true);
        }
        return d();
    }

    private boolean d() {
        ApplicationInfo applicationInfo;
        Bundle bundle;
        try {
            PackageManager packageManager = this.f26279a.getPackageManager();
            if (packageManager != null && (applicationInfo = packageManager.getApplicationInfo(this.f26279a.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) != null && (bundle = applicationInfo.metaData) != null && bundle.containsKey("firebase_data_collection_default_enabled")) {
                return applicationInfo.metaData.getBoolean("firebase_data_collection_default_enabled");
            }
            return true;
        } catch (PackageManager.NameNotFoundException unused) {
            return true;
        }
    }

    public synchronized boolean b() {
        return this.f26282d;
    }
}
