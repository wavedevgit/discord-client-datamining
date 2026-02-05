package com.facebook.soloader;

import android.content.res.AssetManager;
import android.os.StrictMode;
import java.io.InputStream;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends e0 {

    /* renamed from: a  reason: collision with root package name */
    protected final String f11423a;

    /* renamed from: b  reason: collision with root package name */
    protected q f11424b = null;

    /* renamed from: c  reason: collision with root package name */
    protected Set f11425c = null;

    public e(String str) {
        this.f11423a = str;
    }

    static String g(String str) {
        if ("base".equals(str)) {
            return SoLoader.f11402d.getApplicationInfo().sourceDir;
        }
        String[] strArr = SoLoader.f11402d.getApplicationInfo().splitSourceDirs;
        if (strArr != null) {
            String str2 = "split_" + str + ".apk";
            for (String str3 : strArr) {
                if (str3.endsWith(str2)) {
                    return str3;
                }
            }
            throw new IllegalStateException("Could not find " + str + " split");
        }
        throw new IllegalStateException("No splits avaiable");
    }

    @Override // com.facebook.soloader.e0
    public String c() {
        return "DirectSplitSoSource";
    }

    @Override // com.facebook.soloader.e0
    public int d(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        Set set = this.f11425c;
        if (set != null) {
            if (set.contains(str)) {
                return h(str, i10);
            }
            return 0;
        }
        throw new IllegalStateException("prepare not called");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.soloader.e0
    public void e(int i10) {
        AssetManager assets = SoLoader.f11402d.getAssets();
        InputStream open = assets.open(this.f11423a + ".soloader-manifest");
        try {
            this.f11424b = q.b(open);
            if (open != null) {
                open.close();
            }
            this.f11425c = new HashSet(this.f11424b.f11464b);
        } catch (Throwable th2) {
            if (open != null) {
                try {
                    open.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public String f(String str) {
        Set set = this.f11425c;
        if (set != null && this.f11424b != null) {
            if (set.contains(str)) {
                return g(this.f11423a) + "!/lib/" + this.f11424b.f11463a + "/" + str;
            }
            return null;
        }
        throw new IllegalStateException("prepare not called");
    }

    protected int h(String str, int i10) {
        String f10 = f(str);
        f10.getClass();
        System.load(f10);
        return 1;
    }
}
