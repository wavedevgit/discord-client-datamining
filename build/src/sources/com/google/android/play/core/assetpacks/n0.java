package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n0 {

    /* renamed from: c  reason: collision with root package name */
    private static final th.k0 f16556c = new th.k0("AssetPackStorage");

    /* renamed from: d  reason: collision with root package name */
    private static final long f16557d;

    /* renamed from: e  reason: collision with root package name */
    private static final long f16558e;

    /* renamed from: a  reason: collision with root package name */
    private final Context f16559a;

    /* renamed from: b  reason: collision with root package name */
    private final q3 f16560b;

    static {
        TimeUnit timeUnit = TimeUnit.DAYS;
        f16557d = timeUnit.toMillis(14L);
        f16558e = timeUnit.toMillis(28L);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(Context context, q3 q3Var) {
        this.f16559a = context;
        this.f16560b = q3Var;
    }

    private static long g(File file, boolean z10) {
        File[] listFiles;
        if (file.exists()) {
            ArrayList arrayList = new ArrayList();
            if (z10 && file.listFiles().length > 1) {
                f16556c.e("Multiple pack versions found, using highest version code.", new Object[0]);
            }
            try {
                for (File file2 : file.listFiles()) {
                    if (!file2.getName().equals("stale.tmp")) {
                        arrayList.add(Long.valueOf(file2.getName()));
                    }
                }
            } catch (NumberFormatException e10) {
                f16556c.c(e10, "Corrupt asset pack directories.", new Object[0]);
            }
            if (!arrayList.isEmpty()) {
                Collections.sort(arrayList);
                return ((Long) arrayList.get(arrayList.size() - 1)).longValue();
            }
            return -1L;
        }
        return -1L;
    }

    private final File h(String str) {
        return new File(k(), str);
    }

    private final File i(String str, int i10, long j10) {
        return new File(w(str, i10, j10), "merge.tmp");
    }

    private final File j(String str, int i10, long j10) {
        return new File(new File(new File(l(), str), String.valueOf(i10)), String.valueOf(j10));
    }

    private final File k() {
        return new File(this.f16559a.getFilesDir(), "assetpacks");
    }

    private final File l() {
        return new File(k(), "_tmp");
    }

    private final List m() {
        File[] listFiles;
        ArrayList arrayList = new ArrayList();
        try {
            if (k().exists() && k().listFiles() != null) {
                for (File file : k().listFiles()) {
                    if (!file.getCanonicalPath().equals(l().getCanonicalPath())) {
                        arrayList.add(file);
                    }
                }
            }
            return arrayList;
        } catch (IOException e10) {
            f16556c.b("Could not process directory while scanning installed packs. %s", e10);
            return arrayList;
        }
    }

    private static void n(File file) {
        File[] listFiles;
        if (file.listFiles() != null && file.listFiles().length > 1) {
            long g10 = g(file, false);
            for (File file2 : file.listFiles()) {
                if (!file2.getName().equals(String.valueOf(g10)) && !file2.getName().equals("stale.tmp")) {
                    o(file2);
                }
            }
        }
    }

    private static boolean o(File file) {
        File[] listFiles = file.listFiles();
        boolean z10 = true;
        if (listFiles != null) {
            for (File file2 : listFiles) {
                z10 &= o(file2);
            }
        }
        if (!file.delete()) {
            return false;
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File A(String str, int i10, long j10, String str2) {
        return new File(B(str, i10, j10, str2), "checkpoint.dat");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File B(String str, int i10, long j10, String str2) {
        return new File(y(str, i10, j10), str2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File C(String str, int i10, long j10, String str2) {
        return new File(new File(new File(j(str, i10, j10), "_slices"), "_unverified"), str2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File D(String str, int i10, long j10, String str2) {
        return new File(new File(new File(j(str, i10, j10), "_slices"), "_verified"), str2);
    }

    final String E(String str) {
        int length;
        File file = new File(k(), str);
        if (!file.exists()) {
            f16556c.a("Pack not found with pack name: %s", str);
            return null;
        }
        File file2 = new File(file, String.valueOf(this.f16560b.a()));
        if (!file2.exists()) {
            f16556c.a("Pack not found with pack name: %s app version: %s", str, Integer.valueOf(this.f16560b.a()));
            return null;
        }
        File[] listFiles = file2.listFiles();
        if (listFiles != null && (length = listFiles.length) != 0) {
            if (length > 1) {
                f16556c.b("Multiple pack versions found for pack name: %s app version: %s", str, Integer.valueOf(this.f16560b.a()));
                return null;
            }
            return listFiles[0].getCanonicalPath();
        }
        f16556c.a("No pack version found for pack name: %s app version: %s", str, Integer.valueOf(this.f16560b.a()));
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map F() {
        HashMap hashMap = new HashMap();
        for (File file : m()) {
            String name = file.getName();
            int g10 = (int) g(h(name), true);
            long g11 = g(t(name, g10), true);
            if (u(name, g10, g11).exists()) {
                hashMap.put(name, Long.valueOf(g11));
            }
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map G() {
        HashMap hashMap = new HashMap();
        for (String str : H().keySet()) {
            hashMap.put(str, Long.valueOf(r(str)));
        }
        return hashMap;
    }

    final Map H() {
        HashMap hashMap = new HashMap();
        try {
            for (File file : m()) {
                b s10 = s(file.getName());
                if (s10 != null) {
                    hashMap.put(file.getName(), s10);
                }
            }
            return hashMap;
        } catch (IOException e10) {
            f16556c.b("Could not process directory while scanning installed packs: %s", e10);
            return hashMap;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void I() {
        for (File file : m()) {
            if (file.listFiles() != null) {
                n(file);
                long g10 = g(file, false);
                if (this.f16560b.a() != g10) {
                    try {
                        new File(new File(file, String.valueOf(g10)), "stale.tmp").createNewFile();
                    } catch (IOException unused) {
                        f16556c.b("Could not write staleness marker.", new Object[0]);
                    }
                }
                for (File file2 : file.listFiles()) {
                    n(file2);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void J() {
        File[] listFiles;
        if (l().exists()) {
            for (File file : l().listFiles()) {
                if (System.currentTimeMillis() - file.lastModified() > f16557d) {
                    o(file);
                } else {
                    n(file);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K() {
        File[] listFiles;
        for (File file : m()) {
            if (file.listFiles() != null) {
                for (File file2 : file.listFiles()) {
                    File file3 = new File(file2, "stale.tmp");
                    if (file3.exists() && System.currentTimeMillis() - file3.lastModified() > f16558e) {
                        o(file2);
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void L() {
        o(k());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(String str, int i10, long j10, int i11) {
        File i12 = i(str, i10, j10);
        Properties properties = new Properties();
        properties.put("numberOfMerges", String.valueOf(i11));
        i12.getParentFile().mkdirs();
        i12.createNewFile();
        FileOutputStream fileOutputStream = new FileOutputStream(i12);
        properties.store(fileOutputStream, (String) null);
        fileOutputStream.close();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(String str, int i10, long j10) {
        File[] listFiles;
        File[] listFiles2;
        File h10 = h(str);
        if (h10.exists()) {
            for (File file : h10.listFiles()) {
                if (!file.getName().equals(String.valueOf(i10)) && !file.getName().equals("stale.tmp")) {
                    o(file);
                } else if (file.getName().equals(String.valueOf(i10))) {
                    for (File file2 : file.listFiles()) {
                        if (!file2.getName().equals(String.valueOf(j10))) {
                            o(file2);
                        }
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(List list) {
        int a10 = this.f16560b.a();
        for (File file : m()) {
            if (!list.contains(file.getName()) && g(file, true) != a10) {
                o(file);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean d(String str, int i10, long j10) {
        if (!j(str, i10, j10).exists()) {
            return true;
        }
        return o(j(str, i10, j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean e(String str, int i10, long j10) {
        if (!u(str, i10, j10).exists()) {
            return true;
        }
        return o(u(str, i10, j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean f(String str) {
        if (E(str) == null) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int p(String str) {
        return (int) g(h(str), true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int q(String str, int i10, long j10) {
        File i11 = i(str, i10, j10);
        if (!i11.exists()) {
            return 0;
        }
        Properties properties = new Properties();
        FileInputStream fileInputStream = new FileInputStream(i11);
        try {
            properties.load(fileInputStream);
            fileInputStream.close();
            if (properties.getProperty("numberOfMerges") != null) {
                try {
                    return Integer.parseInt(properties.getProperty("numberOfMerges"));
                } catch (NumberFormatException e10) {
                    throw new w1("Merge checkpoint file corrupt.", e10);
                }
            }
            throw new w1("Merge checkpoint file corrupt.");
        } catch (Throwable th2) {
            try {
                fileInputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long r(String str) {
        return g(t(str, (int) g(h(str), true)), true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final b s(String str) {
        String E = E(str);
        if (E == null) {
            return null;
        }
        File file = new File(E, "assets");
        if (!file.isDirectory()) {
            f16556c.b("Failed to find assets directory: %s", file);
            return null;
        }
        String canonicalPath = file.getCanonicalPath();
        int i10 = b.f16325b;
        return new r0(0, E, canonicalPath);
    }

    final File t(String str, int i10) {
        return new File(h(str), String.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File u(String str, int i10, long j10) {
        return new File(t(str, i10), String.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File v(String str, int i10, long j10) {
        return new File(u(str, i10, j10), "_metadata");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File w(String str, int i10, long j10) {
        return new File(j(str, i10, j10), "_packs");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File x(String str, int i10, long j10) {
        return new File(v(str, i10, j10), "properties.dat");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File y(String str, int i10, long j10) {
        return new File(new File(j(str, i10, j10), "_slices"), "_metadata");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File z(String str, int i10, long j10, String str2) {
        return new File(B(str, i10, j10, str2), "checkpoint_ext.dat");
    }
}
