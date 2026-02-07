package hi;

import android.os.Build;
import android.util.Log;
import java.io.File;
import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: b  reason: collision with root package name */
    private static final Pattern f26065b = Pattern.compile("lib/([^/]+)/(.*\\.so)$");

    /* renamed from: a  reason: collision with root package name */
    private final f f26066a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(f fVar) {
        this.f26066a = fVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Set a(o oVar, Set set, u uVar, ZipFile zipFile) {
        HashSet hashSet = new HashSet();
        oVar.f(uVar, set, new k(oVar, hashSet, uVar, zipFile));
        return hashSet;
    }

    private static void e(u uVar, l lVar) {
        ZipFile zipFile;
        String[] strArr;
        try {
            zipFile = new ZipFile(uVar.a());
        } catch (IOException e10) {
            e = e10;
            zipFile = null;
        }
        try {
            String b10 = uVar.b();
            HashMap hashMap = new HashMap();
            Enumeration<? extends ZipEntry> entries = zipFile.entries();
            while (entries.hasMoreElements()) {
                ZipEntry nextElement = entries.nextElement();
                Matcher matcher = f26065b.matcher(nextElement.getName());
                if (matcher.matches()) {
                    String group = matcher.group(1);
                    String group2 = matcher.group(2);
                    Log.d("SplitCompat", String.format("NativeLibraryExtractor: split '%s' has native library '%s' for ABI '%s'", b10, group2, group));
                    Set set = (Set) hashMap.get(group);
                    if (set == null) {
                        set = new HashSet();
                        hashMap.put(group, set);
                    }
                    set.add(new n(nextElement, group2));
                }
            }
            HashMap hashMap2 = new HashMap();
            for (String str : Build.SUPPORTED_ABIS) {
                if (hashMap.containsKey(str)) {
                    Log.d("SplitCompat", String.format("NativeLibraryExtractor: there are native libraries for supported ABI %s; will use this ABI", str));
                    for (n nVar : (Set) hashMap.get(str)) {
                        if (hashMap2.containsKey(nVar.f26063a)) {
                            Log.d("SplitCompat", String.format("NativeLibraryExtractor: skipping library %s for ABI %s; already present for a better ABI", nVar.f26063a, str));
                        } else {
                            hashMap2.put(nVar.f26063a, nVar);
                            Log.d("SplitCompat", String.format("NativeLibraryExtractor: using library %s for ABI %s", nVar.f26063a, str));
                        }
                    }
                } else {
                    Log.d("SplitCompat", String.format("NativeLibraryExtractor: there are no native libraries for supported ABI %s", str));
                }
            }
            lVar.a(zipFile, new HashSet(hashMap2.values()));
            zipFile.close();
        } catch (IOException e11) {
            e = e11;
            if (zipFile != null) {
                try {
                    zipFile.close();
                } catch (IOException e12) {
                    Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(e, e12);
                }
            }
            throw e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void f(u uVar, Set set, m mVar) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            n nVar = (n) it.next();
            File c10 = this.f26066a.c(uVar.b(), nVar.f26063a);
            boolean z10 = false;
            if (c10.exists() && c10.length() == nVar.f26064b.getSize() && f.p(c10)) {
                z10 = true;
            }
            mVar.a(nVar, c10, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Set b(u uVar) {
        AtomicBoolean atomicBoolean = new AtomicBoolean(true);
        HashSet hashSet = new HashSet();
        e(uVar, new i(this, uVar, hashSet, atomicBoolean));
        if (atomicBoolean.get()) {
            return hashSet;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Set c() {
        Log.d("SplitCompat", "NativeLibraryExtractor: synchronizing native libraries");
        Set<u> j10 = this.f26066a.j();
        for (String str : this.f26066a.h()) {
            Iterator it = j10.iterator();
            while (true) {
                if (it.hasNext()) {
                    if (((u) it.next()).b().equals(str)) {
                        break;
                    }
                } else {
                    Log.i("SplitCompat", String.format("NativeLibraryExtractor: extracted split '%s' has no corresponding split; deleting", str));
                    this.f26066a.n(str);
                    break;
                }
            }
        }
        HashSet hashSet = new HashSet();
        for (u uVar : j10) {
            HashSet hashSet2 = new HashSet();
            e(uVar, new j(this, hashSet2, uVar));
            for (File file : this.f26066a.i(uVar.b())) {
                if (!hashSet2.contains(file)) {
                    Log.i("SplitCompat", String.format("NativeLibraryExtractor: file '%s' found in split '%s' that is not in the split file '%s'; removing", file.getAbsolutePath(), uVar.b(), uVar.a().getAbsolutePath()));
                    this.f26066a.o(file);
                }
            }
            hashSet.addAll(hashSet2);
        }
        return hashSet;
    }
}
