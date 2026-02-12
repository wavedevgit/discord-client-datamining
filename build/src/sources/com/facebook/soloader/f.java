package com.facebook.soloader;

import android.os.StrictMode;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends e0 {

    /* renamed from: a  reason: collision with root package name */
    protected final File f12043a;

    /* renamed from: b  reason: collision with root package name */
    protected int f12044b;

    /* renamed from: c  reason: collision with root package name */
    protected final List f12045c;

    public f(File file, int i10) {
        this(file, i10, new String[0]);
    }

    @Override // com.facebook.soloader.e0
    public String c() {
        return "DirectorySoSource";
    }

    @Override // com.facebook.soloader.e0
    public int d(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        return g(str, i10, this.f12043a, threadPolicy);
    }

    public File f(String str) {
        File file = new File(this.f12043a, str);
        if (file.exists()) {
            return file;
        }
        return null;
    }

    protected int g(String str, int i10, File file, StrictMode.ThreadPolicy threadPolicy) {
        if (SoLoader.f12017b != null) {
            if (this.f12045c.contains(str)) {
                p.a("SoLoader", str + " is on the denyList, skip loading from " + file.getCanonicalPath());
                return 0;
            }
            File f10 = f(str);
            if (f10 == null) {
                p.f("SoLoader", str + " file not found on " + file.getCanonicalPath());
                return 0;
            }
            String canonicalPath = f10.getCanonicalPath();
            p.a("SoLoader", str + " file found at " + canonicalPath);
            if ((i10 & 1) != 0 && (this.f12044b & 2) != 0) {
                p.a("SoLoader", str + " loaded implicitly");
                return 2;
            }
            if ((this.f12044b & 1) != 0) {
                i iVar = new i(f10);
                try {
                    t.h(str, iVar, i10, threadPolicy);
                    iVar.close();
                } catch (Throwable th2) {
                    try {
                        iVar.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                    throw th2;
                }
            } else {
                p.a("SoLoader", "Not resolving dependencies for " + str);
            }
            try {
                SoLoader.f12017b.a(canonicalPath, i10);
                return 1;
            } catch (UnsatisfiedLinkError e10) {
                throw d0.b(str, e10);
            }
        }
        throw new IllegalStateException("SoLoader.init() not yet called");
    }

    public void h() {
        this.f12044b |= 1;
    }

    @Override // com.facebook.soloader.e0
    public String toString() {
        String name;
        try {
            name = String.valueOf(this.f12043a.getCanonicalPath());
        } catch (IOException unused) {
            name = this.f12043a.getName();
        }
        return c() + "[root = " + name + " flags = " + this.f12044b + ']';
    }

    public f(File file, int i10, String[] strArr) {
        this.f12043a = file;
        this.f12044b = i10;
        this.f12045c = Arrays.asList(strArr);
    }
}
