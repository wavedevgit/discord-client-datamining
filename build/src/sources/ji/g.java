package ji;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.content.res.AssetManager;
import android.os.Build;
import android.util.Log;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final hi.f f29946a;

    /* renamed from: b  reason: collision with root package name */
    private final b f29947b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f29948c;

    /* renamed from: d  reason: collision with root package name */
    private final f f29949d;

    /* renamed from: e  reason: collision with root package name */
    private PackageInfo f29950e;

    public g(Context context, hi.f fVar, b bVar) {
        f fVar2 = new f(new hi.b(fVar));
        this.f29946a = fVar;
        this.f29947b = bVar;
        this.f29948c = context;
        this.f29949d = fVar2;
    }

    private final PackageInfo d() {
        if (this.f29950e == null) {
            try {
                this.f29950e = this.f29948c.getPackageManager().getPackageInfo(this.f29948c.getPackageName(), 64);
            } catch (PackageManager.NameNotFoundException unused) {
                return null;
            }
        }
        return this.f29950e;
    }

    private static X509Certificate e(Signature signature) {
        try {
            return (X509Certificate) CertificateFactory.getInstance("X509").generateCertificate(new ByteArrayInputStream(signature.toByteArray()));
        } catch (CertificateException e10) {
            Log.e("SplitCompat", "Cannot decode certificate.", e10);
            return null;
        }
    }

    public final boolean a(File[] fileArr) {
        long j10;
        PackageInfo d10 = d();
        if (Build.VERSION.SDK_INT >= 28) {
            j10 = d10.getLongVersionCode();
        } else {
            j10 = d10.versionCode;
        }
        AssetManager assetManager = (AssetManager) d0.c(AssetManager.class);
        int length = fileArr.length;
        do {
            length--;
            if (length >= 0) {
                this.f29949d.b(assetManager, fileArr[length]);
            } else {
                return true;
            }
        } while (j10 == this.f29949d.a());
        return false;
    }

    public final boolean b(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            if (!this.f29946a.g(((Intent) it.next()).getStringExtra("split_id")).exists()) {
                return false;
            }
        }
        return true;
    }

    public final boolean c(File[] fileArr) {
        PackageInfo d10 = d();
        ArrayList<X509Certificate> arrayList = null;
        if (d10 != null && d10.signatures != null) {
            arrayList = new ArrayList();
            for (Signature signature : d10.signatures) {
                X509Certificate e10 = e(signature);
                if (e10 != null) {
                    arrayList.add(e10);
                }
            }
        }
        if (arrayList != null && !arrayList.isEmpty()) {
            int length = fileArr.length;
            loop1: while (true) {
                length--;
                if (length >= 0) {
                    try {
                        String absolutePath = fileArr[length].getAbsolutePath();
                        try {
                            X509Certificate[][] a10 = m0.a(absolutePath);
                            if (a10 == null || a10.length == 0 || a10[0].length == 0) {
                                break;
                            } else if (arrayList.isEmpty()) {
                                Log.e("SplitCompat", "No certificates found for app.");
                                break;
                            } else {
                                for (X509Certificate x509Certificate : arrayList) {
                                    for (X509Certificate[] x509CertificateArr : a10) {
                                        if (!x509CertificateArr[0].equals(x509Certificate)) {
                                        }
                                    }
                                    Log.i("SplitCompat", "There's an app certificate that doesn't sign the split.");
                                }
                            }
                        } catch (Exception e11) {
                            Log.e("SplitCompat", "Downloaded split " + absolutePath + " is not signed.", e11);
                        }
                    } catch (Exception e12) {
                        Log.e("SplitCompat", "Split verification error.", e12);
                        return false;
                    }
                } else {
                    return true;
                }
            }
        } else {
            Log.e("SplitCompat", "No app certificates found.");
            return false;
        }
        Log.e("SplitCompat", "Split verification failure.");
        return false;
    }
}
