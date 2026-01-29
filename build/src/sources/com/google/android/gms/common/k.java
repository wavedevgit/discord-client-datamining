package com.google.android.gms.common;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.Signature;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    private static k f14826b;

    /* renamed from: a  reason: collision with root package name */
    private final Context f14827a;

    public k(Context context) {
        this.f14827a = context.getApplicationContext();
    }

    public static k a(Context context) {
        gf.q.l(context);
        synchronized (k.class) {
            try {
                if (f14826b == null) {
                    y.a(context);
                    f14826b = new k(context);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f14826b;
    }

    static final u c(PackageInfo packageInfo, u... uVarArr) {
        Signature[] signatureArr = packageInfo.signatures;
        if (signatureArr != null) {
            if (signatureArr.length != 1) {
                Log.w("GoogleSignatureVerifier", "Package has more than one signature.");
                return null;
            }
            v vVar = new v(packageInfo.signatures[0].toByteArray());
            for (int i10 = 0; i10 < uVarArr.length; i10++) {
                if (uVarArr[i10].equals(vVar)) {
                    return uVarArr[i10];
                }
            }
        }
        return null;
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x0032  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0039  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0047 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final boolean d(android.content.pm.PackageInfo r4, boolean r5) {
        /*
            r0 = 1
            r1 = 0
            if (r5 == 0) goto L27
            if (r4 == 0) goto L29
            java.lang.String r2 = "com.android.vending"
            java.lang.String r3 = r4.packageName
            boolean r2 = r2.equals(r3)
            if (r2 != 0) goto L1a
            java.lang.String r2 = r4.packageName
            java.lang.String r3 = "com.google.android.gms"
            boolean r2 = r3.equals(r2)
            if (r2 == 0) goto L27
        L1a:
            android.content.pm.ApplicationInfo r5 = r4.applicationInfo
            if (r5 != 0) goto L20
        L1e:
            r5 = r1
            goto L27
        L20:
            int r5 = r5.flags
            r5 = r5 & 129(0x81, float:1.81E-43)
            if (r5 == 0) goto L1e
            r5 = r0
        L27:
            r2 = r4
            goto L2a
        L29:
            r2 = 0
        L2a:
            if (r4 == 0) goto L48
            android.content.pm.Signature[] r4 = r2.signatures
            if (r4 == 0) goto L48
            if (r5 == 0) goto L39
            com.google.android.gms.common.u[] r4 = com.google.android.gms.common.x.f14863a
            com.google.android.gms.common.u r4 = c(r2, r4)
            goto L45
        L39:
            com.google.android.gms.common.u[] r4 = com.google.android.gms.common.x.f14863a
            r4 = r4[r1]
            com.google.android.gms.common.u[] r4 = new com.google.android.gms.common.u[]{r4}
            com.google.android.gms.common.u r4 = c(r2, r4)
        L45:
            if (r4 == 0) goto L48
            return r0
        L48:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.common.k.d(android.content.pm.PackageInfo, boolean):boolean");
    }

    public boolean b(PackageInfo packageInfo) {
        if (packageInfo == null) {
            return false;
        }
        if (d(packageInfo, false)) {
            return true;
        }
        if (d(packageInfo, true)) {
            if (j.d(this.f14827a)) {
                return true;
            }
            Log.w("GoogleSignatureVerifier", "Test-keys aren't accepted on this build.");
        }
        return false;
    }
}
