package com.google.android.gms.common;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.Signature;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l {

    /* renamed from: b  reason: collision with root package name */
    private static l f13785b;

    /* renamed from: a  reason: collision with root package name */
    private final Context f13786a;

    public l(Context context) {
        this.f13786a = context.getApplicationContext();
    }

    public static l a(Context context) {
        gf.q.l(context);
        synchronized (l.class) {
            try {
                if (f13785b == null) {
                    c0.a(context);
                    f13785b = new l(context);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f13785b;
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
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.common.l.c(android.content.pm.PackageInfo, boolean):boolean");
    }

    private static y d(PackageInfo packageInfo, y... yVarArr) {
        Signature[] signatureArr = packageInfo.signatures;
        if (signatureArr != null) {
            if (signatureArr.length != 1) {
                Log.w("GoogleSignatureVerifier", "Package has more than one signature.");
                return null;
            }
            z zVar = new z(packageInfo.signatures[0].toByteArray());
            for (int i10 = 0; i10 < yVarArr.length; i10++) {
                if (yVarArr[i10].equals(zVar)) {
                    return yVarArr[i10];
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
            if (k.e(this.f13786a)) {
                return true;
            }
            Log.w("GoogleSignatureVerifier", "Test-keys aren't accepted on this build.");
        }
        return false;
    }
}
