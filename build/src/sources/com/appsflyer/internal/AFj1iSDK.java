package com.appsflyer.internal;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.net.Uri;
import android.os.Build;
import android.os.Process;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import com.google.android.play.core.integrity.IntegrityManagerFactory;
import j$.util.DesugarTimeZone;
import java.io.ByteArrayInputStream;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import kotlin.Pair;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFj1iSDK {
    @SuppressLint({"NewApi"})
    public static boolean AFAdRevenueData(Context context) {
        String str;
        if (context != null && Build.VERSION.SDK_INT >= 33) {
            try {
                if (v.a(context.getApplicationContext().getSystemService(u.a())) == null) {
                    return false;
                }
                return true;
            } catch (Throwable th2) {
                if (th2.getMessage() != null) {
                    str = th2.getMessage();
                } else {
                    str = "";
                }
                AFLogger.INSTANCE.e(AFg1cSDK.PRIVACY_SANDBOX, str, th2, false, false);
            }
        }
        return false;
    }

    public static boolean L_(Context context, Intent intent) {
        if (context.getPackageManager().queryIntentServices(intent, 0).size() <= 0) {
            return false;
        }
        return true;
    }

    public static Map<String, String> M_(PackageInfo packageInfo, Map<String, String> map, Uri uri) {
        Iterator<String> it = uri.getQueryParameterNames().iterator();
        while (true) {
            String str = "media_source";
            if (it.hasNext()) {
                String next = it.next();
                String queryParameter = uri.getQueryParameter(next);
                if (!map.containsKey(next)) {
                    next.getClass();
                    char c10 = 65535;
                    switch (next.hashCode()) {
                        case -1420799080:
                            if (next.equals("af_prt")) {
                                c10 = 0;
                                break;
                            }
                            break;
                        case 99:
                            if (next.equals("c")) {
                                c10 = 1;
                                break;
                            }
                            break;
                        case 110987:
                            if (next.equals("pid")) {
                                c10 = 2;
                                break;
                            }
                            break;
                    }
                    switch (c10) {
                        case 0:
                            str = "agency";
                            continue;
                            map.put(str, queryParameter);
                        case 1:
                            str = "campaign";
                            continue;
                            map.put(str, queryParameter);
                        case 2:
                            map.put(str, queryParameter);
                    }
                }
                str = next;
                map.put(str, queryParameter);
            } else {
                try {
                    if (!map.containsKey("install_time")) {
                        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.US);
                        long j10 = packageInfo.firstInstallTime;
                        simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
                        map.put("install_time", simpleDateFormat.format(new Date(j10)));
                    }
                } catch (Exception e10) {
                    AFLogger.afErrorLog("Could not fetch install time. ", e10);
                }
                if (map.containsKey("af_deeplink") && !map.containsKey("af_status")) {
                    map.put("af_status", "Non-organic");
                }
                if (map.containsKey("agency")) {
                    map.remove("media_source");
                }
                String path = uri.getPath();
                if (path != null) {
                    map.put("path", path);
                }
                String scheme = uri.getScheme();
                if (scheme != null) {
                    map.put("scheme", scheme);
                }
                String host = uri.getHost();
                if (host != null) {
                    map.put("host", host);
                }
                return map;
            }
        }
    }

    @SuppressLint({"PackageManagerGetSignatures"})
    public static String N_(PackageManager packageManager, String str) {
        Signature[] signatureArr = packageManager.getPackageInfo(str, 64).signatures;
        if (signatureArr == null) {
            return null;
        }
        MessageDigest messageDigest = MessageDigest.getInstance("SHA256");
        messageDigest.update(((X509Certificate) CertificateFactory.getInstance("X.509").generateCertificate(new ByteArrayInputStream(signatureArr[0].toByteArray()))).getEncoded());
        return String.format("%032X", new BigInteger(1, messageDigest.digest()));
    }

    public static Application O_(@NonNull Context context) {
        if (context instanceof Application) {
            return (Application) context;
        }
        if (context instanceof Activity) {
            return ((Activity) context).getApplication();
        }
        try {
            return (Application) context.getApplicationContext();
        } catch (ClassCastException unused) {
            AFLogger.afErrorLog("Application or Activity Context should be used", new IllegalStateException(), true, true);
            return null;
        }
    }

    public static long getCurrencyIso4217Code(Context context, String str) {
        try {
            PackageInfo packageInfo = context.getPackageManager().getPackageInfo(str, 0);
            if (Build.VERSION.SDK_INT >= 28) {
                return packageInfo.getLongVersionCode();
            }
            return packageInfo.versionCode;
        } catch (PackageManager.NameNotFoundException e10) {
            AFLogger.afErrorLog(e10.getMessage(), e10);
            return 0L;
        }
    }

    public static boolean getMediationNetwork(Context context) {
        if (context != null) {
            try {
                IntegrityManagerFactory.create(context);
                return true;
            } catch (Throwable unused) {
                return false;
            }
        }
        return false;
    }

    public static boolean getMonetizationNetwork(Context context) {
        if (context != null) {
            try {
                te.a.a(context);
                return true;
            } catch (Throwable unused) {
                return false;
            }
        }
        return false;
    }

    public static boolean getRevenue(Context context) {
        if (context != null) {
            try {
                if (com.google.android.gms.common.f.n().g(context) == 0) {
                    return true;
                }
            } catch (Throwable unused) {
            }
        }
        return false;
    }

    public static boolean getMediationNetwork(Context context, String str) {
        int checkPermission = context.checkPermission(str, Process.myPid(), Process.myUid());
        StringBuilder sb2 = new StringBuilder("is Permission Available: ");
        sb2.append(str);
        sb2.append("; res: ");
        sb2.append(checkPermission);
        AFLogger.afRDLog(sb2.toString());
        return checkPermission == 0;
    }

    public static boolean getMonetizationNetwork() {
        return Build.BRAND.equals("OPPO");
    }

    public static Pair<Long, String> getMonetizationNetwork(Context context, String str) {
        long j10;
        try {
            PackageInfo packageInfo = context.getPackageManager().getPackageInfo(str, 0);
            if (Build.VERSION.SDK_INT >= 28) {
                j10 = packageInfo.getLongVersionCode();
            } else {
                j10 = packageInfo.versionCode;
            }
            return new Pair<>(Long.valueOf(j10), packageInfo.versionName);
        } catch (PackageManager.NameNotFoundException unused) {
            return new Pair<>(0L, "");
        }
    }

    public static String getRevenue(Context context, String str) {
        try {
            return context.getPackageManager().getPackageInfo(str, 0).versionName;
        } catch (PackageManager.NameNotFoundException e10) {
            AFLogger.afErrorLog(e10.getMessage(), e10);
            return "";
        }
    }
}
