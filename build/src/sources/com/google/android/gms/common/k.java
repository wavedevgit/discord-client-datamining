package com.google.android.gms.common;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.Signature;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k {

    /* renamed from: b  reason: collision with root package name */
    private static k f13818b;

    /* renamed from: a  reason: collision with root package name */
    private final Context f13819a;

    public k(Context context) {
        this.f13819a = context.getApplicationContext();
    }

    public static k a(Context context) {
        gf.q.l(context);
        synchronized (k.class) {
            try {
                if (f13818b == null) {
                    a0.a(context);
                    f13818b = new k(context);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f13818b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Code restructure failed: missing block: B:55:0x00c0, code lost:
        r5 = r9;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final boolean c(android.content.pm.PackageInfo r10, boolean r11) {
        /*
            Method dump skipped, instructions count: 235
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.common.k.c(android.content.pm.PackageInfo, boolean):boolean");
    }

    private static w d(PackageInfo packageInfo, w... wVarArr) {
        Signature[] signatureArr = packageInfo.signatures;
        if (signatureArr != null) {
            if (signatureArr.length != 1) {
                Log.w("GoogleSignatureVerifier", "Package has more than one signature.");
                return null;
            }
            x xVar = new x(packageInfo.signatures[0].toByteArray());
            for (int i10 = 0; i10 < wVarArr.length; i10++) {
                if (wVarArr[i10].equals(xVar)) {
                    return wVarArr[i10];
                }
            }
        }
        return null;
    }

    public boolean b(PackageInfo packageInfo) {
        if (packageInfo == null) {
            return false;
        }
        if (c(packageInfo, false)) {
            return true;
        }
        if (c(packageInfo, true)) {
            if (j.d(this.f13819a)) {
                return true;
            }
            Log.w("GoogleSignatureVerifier", "Test-keys aren't accepted on this build.");
        }
        return false;
    }
}
