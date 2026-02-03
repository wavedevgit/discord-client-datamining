package pf;

import android.app.AppOpsManager;
import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    protected final Context f45162a;

    public b(Context context) {
        this.f45162a = context;
    }

    public int a(String str) {
        return this.f45162a.checkCallingOrSelfPermission(str);
    }

    public int b(String str, String str2) {
        return this.f45162a.getPackageManager().checkPermission(str, str2);
    }

    public ApplicationInfo c(String str, int i10) {
        return this.f45162a.getPackageManager().getApplicationInfo(str, i10);
    }

    public CharSequence d(String str) {
        Context context = this.f45162a;
        return context.getPackageManager().getApplicationLabel(context.getPackageManager().getApplicationInfo(str, 0));
    }

    public PackageInfo e(String str, int i10) {
        return this.f45162a.getPackageManager().getPackageInfo(str, i10);
    }

    public final boolean f(int i10, String str) {
        try {
            AppOpsManager appOpsManager = (AppOpsManager) this.f45162a.getSystemService("appops");
            if (appOpsManager != null) {
                appOpsManager.checkPackage(i10, str);
                return true;
            }
            throw new NullPointerException("context.getSystemService(Context.APP_OPS_SERVICE) is null");
        } catch (SecurityException unused) {
            return false;
        }
    }
}
