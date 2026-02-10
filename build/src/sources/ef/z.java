package ef;

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
    private final Context f21642a;

    /* renamed from: b  reason: collision with root package name */
    private int f21643b;

    /* renamed from: c  reason: collision with root package name */
    private int f21644c = 0;

    public z(Context context) {
        this.f21642a = context;
    }

    public final synchronized int a() {
        PackageInfo packageInfo;
        if (this.f21643b == 0) {
            try {
                packageInfo = qf.c.a(this.f21642a).e("com.google.android.gms", 0);
            } catch (PackageManager.NameNotFoundException e10) {
                Log.w("Metadata", "Failed to find package ".concat(e10.toString()));
                packageInfo = null;
            }
            if (packageInfo != null) {
                this.f21643b = packageInfo.versionCode;
            }
        }
        return this.f21643b;
    }

    public final synchronized int b() {
        int i10 = this.f21644c;
        if (i10 != 0) {
            return i10;
        }
        Context context = this.f21642a;
        PackageManager packageManager = context.getPackageManager();
        if (qf.c.a(context).b("com.google.android.c2dm.permission.SEND", "com.google.android.gms") == -1) {
            Log.e("Metadata", "Google Play services missing or without correct permission.");
            return 0;
        }
        int i11 = 1;
        if (!com.google.android.gms.common.util.k.e()) {
            Intent intent = new Intent("com.google.android.c2dm.intent.REGISTER");
            intent.setPackage("com.google.android.gms");
            List<ResolveInfo> queryIntentServices = packageManager.queryIntentServices(intent, 0);
            if (queryIntentServices != null && !queryIntentServices.isEmpty()) {
                this.f21644c = i11;
                return i11;
            }
        }
        Intent intent2 = new Intent("com.google.iid.TOKEN_REQUEST");
        intent2.setPackage("com.google.android.gms");
        List<ResolveInfo> queryBroadcastReceivers = packageManager.queryBroadcastReceivers(intent2, 0);
        if (queryBroadcastReceivers != null && !queryBroadcastReceivers.isEmpty()) {
            i11 = 2;
            this.f21644c = i11;
            return i11;
        }
        Log.w("Metadata", "Failed to resolve IID implementation package, falling back");
        if (true == com.google.android.gms.common.util.k.e()) {
            i11 = 2;
        }
        this.f21644c = i11;
        return i11;
    }
}
