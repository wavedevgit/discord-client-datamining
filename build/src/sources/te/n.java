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
    private static volatile n f50843g;

    /* renamed from: a  reason: collision with root package name */
    private final Context f50844a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50845b;

    /* renamed from: c  reason: collision with root package name */
    private final e f50846c;

    /* renamed from: d  reason: collision with root package name */
    private final j f50847d;

    /* renamed from: e  reason: collision with root package name */
    private volatile zzav f50848e;

    /* renamed from: f  reason: collision with root package name */
    private Thread.UncaughtExceptionHandler f50849f;

    n(Context context) {
        Context applicationContext = context.getApplicationContext();
        q.l(applicationContext);
        this.f50844a = applicationContext;
        this.f50847d = new j(this);
        this.f50845b = new CopyOnWriteArrayList();
        this.f50846c = new e();
    }

    public static n a(Context context) {
        q.l(context);
        if (f50843g == null) {
            synchronized (n.class) {
                try {
                    if (f50843g == null) {
                        f50843g = new n(context);
                    }
                } finally {
                }
            }
        }
        return f50843g;
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
        if (this.f50848e == null) {
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
                if (this.f50848e == null) {
                    zzav zzavVar = new zzav();
                    PackageManager packageManager = this.f50844a.getPackageManager();
                    packageName = this.f50844a.getPackageName();
                    zzavVar.zzi(packageName);
                    zzavVar.zzj(packageManager.getInstallerPackageName(packageName));
                    String str2 = null;
                    PackageInfo packageInfo = packageManager.getPackageInfo(this.f50844a.getPackageName(), 0);
                    if (packageInfo != null) {
                        CharSequence applicationLabel = packageManager.getApplicationLabel(packageInfo.applicationInfo);
                        if (!TextUtils.isEmpty(applicationLabel)) {
                            packageName = applicationLabel.toString();
                        }
                        str2 = packageInfo.versionName;
                    }
                    zzavVar.zzk(packageName);
                    zzavVar.zzl(str2);
                    this.f50848e = zzavVar;
                }
            }
        }
        return this.f50848e;
    }

    public final void e(Runnable runnable) {
        q.l(runnable);
        this.f50847d.submit(runnable);
    }

    public final void f(Thread.UncaughtExceptionHandler uncaughtExceptionHandler) {
        this.f50849f = uncaughtExceptionHandler;
    }
}
