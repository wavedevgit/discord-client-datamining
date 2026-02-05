package se;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.internal.gtm.zzav;
import gf.q;
import java.lang.Thread;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: g  reason: collision with root package name */
    private static volatile n f49633g;

    /* renamed from: a  reason: collision with root package name */
    private final Context f49634a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49635b;

    /* renamed from: c  reason: collision with root package name */
    private final e f49636c;

    /* renamed from: d  reason: collision with root package name */
    private final j f49637d;

    /* renamed from: e  reason: collision with root package name */
    private volatile zzav f49638e;

    /* renamed from: f  reason: collision with root package name */
    private Thread.UncaughtExceptionHandler f49639f;

    n(Context context) {
        Context applicationContext = context.getApplicationContext();
        q.l(applicationContext);
        this.f49634a = applicationContext;
        this.f49637d = new j(this);
        this.f49635b = new CopyOnWriteArrayList();
        this.f49636c = new e();
    }

    public static n a(Context context) {
        q.l(context);
        if (f49633g == null) {
            synchronized (n.class) {
                try {
                    if (f49633g == null) {
                        f49633g = new n(context);
                    }
                } finally {
                }
            }
        }
        return f49633g;
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
        if (this.f49638e == null) {
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
                if (this.f49638e == null) {
                    zzav zzavVar = new zzav();
                    PackageManager packageManager = this.f49634a.getPackageManager();
                    packageName = this.f49634a.getPackageName();
                    zzavVar.zzi(packageName);
                    zzavVar.zzj(packageManager.getInstallerPackageName(packageName));
                    String str2 = null;
                    PackageInfo packageInfo = packageManager.getPackageInfo(this.f49634a.getPackageName(), 0);
                    if (packageInfo != null) {
                        CharSequence applicationLabel = packageManager.getApplicationLabel(packageInfo.applicationInfo);
                        if (!TextUtils.isEmpty(applicationLabel)) {
                            packageName = applicationLabel.toString();
                        }
                        str2 = packageInfo.versionName;
                    }
                    zzavVar.zzk(packageName);
                    zzavVar.zzl(str2);
                    this.f49638e = zzavVar;
                }
            }
        }
        return this.f49638e;
    }

    public final void e(Runnable runnable) {
        q.l(runnable);
        this.f49637d.submit(runnable);
    }

    public final void f(Thread.UncaughtExceptionHandler uncaughtExceptionHandler) {
        this.f49639f = uncaughtExceptionHandler;
    }
}
