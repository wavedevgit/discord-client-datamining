package jv;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.ResolveInfo;
import android.util.Log;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import jv.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static f f31313a;

    /* renamed from: b  reason: collision with root package name */
    private static String f31314b;

    /* renamed from: c  reason: collision with root package name */
    private static final Object f31315c = new Object();

    private static File a(ApplicationInfo applicationInfo) {
        return new File(new File(new File(applicationInfo.deviceProtectedDataDir), "app_httpflags"), "flags.binarypb");
    }

    public static f b(Context context, String str, boolean z10, boolean z11) {
        c d10;
        synchronized (f31315c) {
            try {
                String str2 = f31314b;
                if (str2 != null && !str.equals(str2)) {
                    throw new IllegalStateException("getHttpFlags() called multiple times with different versions");
                }
                f fVar = f31313a;
                if (fVar != null) {
                    return fVar;
                }
                f31314b = str;
                hv.a a10 = hv.a.a("HttpFlagsLoader#getHttpFlags loading flags");
                if (!kv.e.d(context)) {
                    Log.d("HttpFlagsLoader", "Not loading HTTP flags because they are disabled in the manifest");
                    d10 = null;
                } else {
                    d10 = d(context);
                }
                if (d10 == null) {
                    d10 = (c) c.I().b();
                }
                f c10 = f.c(d10, context.getPackageName(), str, z11);
                f31313a = c10;
                f.a aVar = (f.a) c10.a().get("Cronet_log_me");
                f fVar2 = f31313a;
                if (a10 != null) {
                    a10.close();
                }
                return fVar2;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static ApplicationInfo c(Context context) {
        hv.a a10 = hv.a.a("HttpFlagsLoader#getProviderApplicationInfo");
        try {
            ResolveInfo resolveService = context.getPackageManager().resolveService(new Intent("android.net.http.FLAGS_FILE_PROVIDER"), 1048576);
            if (resolveService == null) {
                Log.i("HttpFlagsLoader", "Unable to resolve the HTTP flags file provider package. This is expected if the host system is not set up to provide HTTP flags.");
                if (a10 != null) {
                    a10.close();
                }
                return null;
            }
            ApplicationInfo applicationInfo = resolveService.serviceInfo.applicationInfo;
            if (a10 != null) {
                a10.close();
            }
            return applicationInfo;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public static c d(Context context) {
        try {
            ApplicationInfo c10 = c(context);
            if (c10 == null) {
                return null;
            }
            Log.d("HttpFlagsLoader", String.format("Found application exporting HTTP flags: %s", c10.packageName));
            File a10 = a(c10);
            Log.d("HttpFlagsLoader", String.format("HTTP flags file path: %s", a10.getAbsolutePath()));
            c e10 = e(a10);
            if (e10 == null) {
                return null;
            }
            Log.d("HttpFlagsLoader", String.format("Successfully loaded HTTP flags: %s", e10));
            return e10;
        } catch (RuntimeException e11) {
            Log.i("HttpFlagsLoader", "Unable to load HTTP flags file", e11);
            return null;
        }
    }

    private static c e(File file) {
        hv.a a10 = hv.a.a("HttpFlagsLoader#loadFlagsFile");
        try {
            try {
                FileInputStream fileInputStream = new FileInputStream(file);
                try {
                    c J = c.J(fileInputStream);
                    fileInputStream.close();
                    if (a10 != null) {
                        a10.close();
                    }
                    return J;
                } catch (Throwable th2) {
                    try {
                        fileInputStream.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                    throw th2;
                }
            } catch (Throwable th4) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th5) {
                        th4.addSuppressed(th5);
                    }
                }
                throw th4;
            }
        } catch (FileNotFoundException unused) {
            Log.i("HttpFlagsLoader", String.format("HTTP flags file `%s` is missing. This is expected if HTTP flags functionality is currently disabled in the host system.", file.getPath()));
            if (a10 != null) {
                a10.close();
                return null;
            }
            return null;
        } catch (IOException e10) {
            throw new RuntimeException("Unable to read HTTP flags file", e10);
        }
    }
}
