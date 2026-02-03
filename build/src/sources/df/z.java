package df;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21723a;

    /* renamed from: b  reason: collision with root package name */
    private int f21724b;

    /* renamed from: c  reason: collision with root package name */
    private int f21725c = 0;

    public z(Context context) {
        this.f21723a = context;
    }

    public final synchronized int a() {
        PackageInfo packageInfo;
        if (this.f21724b == 0) {
            try {
                packageInfo = pf.c.a(this.f21723a).e("com.google.android.gms", 0);
            } catch (PackageManager.NameNotFoundException e10) {
                Log.w("Metadata", "Failed to find package ".concat(e10.toString()));
                packageInfo = null;
            }
            if (packageInfo != null) {
                this.f21724b = packageInfo.versionCode;
            }
        }
        return this.f21724b;
    }

    public final synchronized int b() {
        int i10 = this.f21725c;
        if (i10 != 0) {
            return i10;
        }
        Context context = this.f21723a;
        PackageManager packageManager = context.getPackageManager();
        if (pf.c.a(context).b("com.google.android.c2dm.permission.SEND", "com.google.android.gms") == -1) {
            Log.e("Metadata", "Google Play services missing or without correct permission.");
            return 0;
        }
        int i11 = 1;
        if (!com.google.android.gms.common.util.k.e()) {
            Intent intent = new Intent("com.google.android.c2dm.intent.REGISTER");
            intent.setPackage("com.google.android.gms");
            List<ResolveInfo> queryIntentServices = packageManager.queryIntentServices(intent, 0);
            if (queryIntentServices != null && !queryIntentServices.isEmpty()) {
                this.f21725c = i11;
                return i11;
            }
        }
        Intent intent2 = new Intent("com.google.iid.TOKEN_REQUEST");
        intent2.setPackage("com.google.android.gms");
        List<ResolveInfo> queryBroadcastReceivers = packageManager.queryBroadcastReceivers(intent2, 0);
        if (queryBroadcastReceivers != null && !queryBroadcastReceivers.isEmpty()) {
            i11 = 2;
            this.f21725c = i11;
            return i11;
        }
        Log.w("Metadata", "Failed to resolve IID implementation package, falling back");
        if (true == com.google.android.gms.common.util.k.e()) {
            i11 = 2;
        }
        this.f21725c = i11;
        return i11;
    }
}
