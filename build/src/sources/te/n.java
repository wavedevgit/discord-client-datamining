package te;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.internal.gtm.zzav;
import hf.q;
import java.lang.Thread;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: g  reason: collision with root package name */
    private static volatile n f48775g;

    /* renamed from: a  reason: collision with root package name */
    private final Context f48776a;

    /* renamed from: b  reason: collision with root package name */
    private final List f48777b;

    /* renamed from: c  reason: collision with root package name */
    private final e f48778c;

    /* renamed from: d  reason: collision with root package name */
    private final j f48779d;

    /* renamed from: e  reason: collision with root package name */
    private volatile zzav f48780e;

    /* renamed from: f  reason: collision with root package name */
    private Thread.UncaughtExceptionHandler f48781f;

    n(Context context) {
        Context applicationContext = context.getApplicationContext();
        q.l(applicationContext);
        this.f48776a = applicationContext;
        this.f48779d = new j(this);
        this.f48777b = new CopyOnWriteArrayList();
        this.f48778c = new e();
    }

    public static n a(Context context) {
        q.l(context);
        if (f48775g == null) {
            synchronized (n.class) {
                try {
                    if (f48775g == null) {
                        f48775g = new n(context);
                    }
                } finally {
                }
            }
        }
        return f48775g;
    }

    public static void d() {
        if (Thread.currentThread() instanceof m) {
            return;
        }
        throw new IllegalStateException("Call expected from worker thread");
    }

    public final zzav b() {
        String packageName;
        String str;
        if (this.f48780e == null) {
            synchronized (this) {
                try {
                } catch (PackageManager.NameNotFoundException unused) {
                    String valueOf = String.valueOf(packageName);
                    if (valueOf.length() != 0) {
                        str = "Error retrieving package info: appName set to ".concat(valueOf);
                    } else {
                        str = new String("Error retrieving package info: appName set to ");
                    }
                    Log.e("GAv4", str);
                } finally {
                }
                if (this.f48780e == null) {
                    zzav zzavVar = new zzav();
                    PackageManager packageManager = this.f48776a.getPackageManager();
                    packageName = this.f48776a.getPackageName();
                    zzavVar.zzi(packageName);
                    zzavVar.zzj(packageManager.getInstallerPackageName(packageName));
                    String str2 = null;
                    PackageInfo packageInfo = packageManager.getPackageInfo(this.f48776a.getPackageName(), 0);
                    if (packageInfo != null) {
                        CharSequence applicationLabel = packageManager.getApplicationLabel(packageInfo.applicationInfo);
                        if (!TextUtils.isEmpty(applicationLabel)) {
                            packageName = applicationLabel.toString();
                        }
                        str2 = packageInfo.versionName;
                    }
                    zzavVar.zzk(packageName);
                    zzavVar.zzl(str2);
                    this.f48780e = zzavVar;
                }
            }
        }
        return this.f48780e;
    }

    public final void e(Runnable runnable) {
        q.l(runnable);
        this.f48779d.submit(runnable);
    }

    public final void f(Thread.UncaughtExceptionHandler uncaughtExceptionHandler) {
        this.f48781f = uncaughtExceptionHandler;
    }
}
