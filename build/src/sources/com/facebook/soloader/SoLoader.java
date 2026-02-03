package com.facebook.soloader;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.os.Bundle;
import android.os.StrictMode;
import android.text.TextUtils;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.ReentrantReadWriteLock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SoLoader {

    /* renamed from: b  reason: collision with root package name */
    static x f12047b;

    /* renamed from: m  reason: collision with root package name */
    private static int f12058m;

    /* renamed from: c  reason: collision with root package name */
    private static final ReentrantReadWriteLock f12048c = new ReentrantReadWriteLock();

    /* renamed from: d  reason: collision with root package name */
    static Context f12049d = null;

    /* renamed from: e  reason: collision with root package name */
    private static volatile e0[] f12050e = null;

    /* renamed from: f  reason: collision with root package name */
    private static final AtomicInteger f12051f = new AtomicInteger(0);

    /* renamed from: g  reason: collision with root package name */
    private static pb.i f12052g = null;

    /* renamed from: h  reason: collision with root package name */
    private static final Set f12053h = Collections.newSetFromMap(new ConcurrentHashMap());

    /* renamed from: i  reason: collision with root package name */
    private static final Map f12054i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private static final Set f12055j = Collections.newSetFromMap(new ConcurrentHashMap());

    /* renamed from: k  reason: collision with root package name */
    private static final Map f12056k = new HashMap();

    /* renamed from: l  reason: collision with root package name */
    private static boolean f12057l = true;

    /* renamed from: n  reason: collision with root package name */
    private static int f12059n = 0;

    /* renamed from: o  reason: collision with root package name */
    private static l f12060o = null;

    /* renamed from: a  reason: collision with root package name */
    static final boolean f12046a = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends UnsatisfiedLinkError {
        a(Throwable th2, String str) {
            super("APK was built for a different platform. Supported ABIs: " + Arrays.toString(SysUtil.j()) + " error: " + str);
            initCause(th2);
        }
    }

    private static int A() {
        int i10;
        ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
        reentrantReadWriteLock.writeLock().lock();
        try {
            int i11 = f12058m;
            if ((i11 & 2) != 0) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                i10 |= 4;
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                i10 |= 8;
            }
            reentrantReadWriteLock.writeLock().unlock();
            return i10;
        } catch (Throwable th2) {
            f12048c.writeLock().unlock();
            throw th2;
        }
    }

    private static int B(int i10) {
        return (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? 1 : 0;
    }

    private static pb.h C(String str, UnsatisfiedLinkError unsatisfiedLinkError, pb.h hVar) {
        p.g("SoLoader", "Running a recovery step for " + str + " due to " + unsatisfiedLinkError.toString());
        ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
        reentrantReadWriteLock.writeLock().lock();
        try {
            if (hVar == null) {
                try {
                    hVar = j();
                    if (hVar == null) {
                        p.g("SoLoader", "No recovery strategy");
                        throw unsatisfiedLinkError;
                    }
                } catch (v e10) {
                    p.c("SoLoader", "Base APK not found during recovery", e10);
                    throw e10;
                } catch (Exception e11) {
                    p.c("SoLoader", "Got an exception during recovery, will throw the initial error instead", e11);
                    throw unsatisfiedLinkError;
                }
            }
            if (D(unsatisfiedLinkError, hVar)) {
                f12051f.getAndIncrement();
                reentrantReadWriteLock.writeLock().unlock();
                return hVar;
            }
            reentrantReadWriteLock.writeLock().unlock();
            p.g("SoLoader", "Failed to recover");
            throw unsatisfiedLinkError;
        } catch (Throwable th2) {
            f12048c.writeLock().unlock();
            throw th2;
        }
    }

    private static boolean D(UnsatisfiedLinkError unsatisfiedLinkError, pb.h hVar) {
        ob.b.h(hVar);
        try {
            boolean a10 = hVar.a(unsatisfiedLinkError, f12050e);
            ob.b.g(null);
            return a10;
        } finally {
        }
    }

    private static void a(ArrayList arrayList, int i10) {
        com.facebook.soloader.a aVar = new com.facebook.soloader.a(f12049d, i10);
        p.a("SoLoader", "Adding application source: " + aVar.toString());
        arrayList.add(0, aVar);
    }

    private static void b(Context context, ArrayList arrayList, boolean z10) {
        if ((f12058m & 8) != 0) {
            return;
        }
        arrayList.add(0, new c(context, "lib-main", !z10));
    }

    private static void c(Context context, ArrayList arrayList) {
        d dVar = new d(context);
        p.a("SoLoader", "validating/adding directApk source: " + dVar.toString());
        if (dVar.o()) {
            arrayList.add(0, dVar);
        }
    }

    private static void d(ArrayList arrayList) {
        String str;
        if (SysUtil.k()) {
            str = "/system/lib64:/vendor/lib64";
        } else {
            str = "/system/lib:/vendor/lib";
        }
        String str2 = System.getenv("LD_LIBRARY_PATH");
        if (str2 != null && !str2.equals("")) {
            str = str2 + ":" + str;
        }
        for (String str3 : new HashSet(Arrays.asList(str.split(":")))) {
            p.a("SoLoader", "adding system library source: " + str3);
            arrayList.add(new f(new File(str3), 2));
        }
    }

    private static void e(Context context, ArrayList arrayList) {
        f0 f0Var = new f0();
        p.a("SoLoader", "adding systemLoadWrapper source: " + f0Var);
        arrayList.add(0, f0Var);
    }

    private static void f() {
        if (r()) {
            return;
        }
        throw new IllegalStateException("SoLoader.init() not yet called");
    }

    private static void g(String str, String str2, int i10, StrictMode.ThreadPolicy threadPolicy) {
        boolean z10;
        ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
        reentrantReadWriteLock.readLock().lock();
        try {
            if (f12050e != null) {
                reentrantReadWriteLock.readLock().unlock();
                if (threadPolicy == null) {
                    threadPolicy = StrictMode.allowThreadDiskReads();
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (f12046a) {
                    if (str2 != null) {
                        Api18TraceUtils.a("SoLoader.loadLibrary[", str2, "]");
                    }
                    Api18TraceUtils.a("SoLoader.loadLibrary[", str, "]");
                }
                try {
                    reentrantReadWriteLock.readLock().lock();
                    try {
                        for (e0 e0Var : f12050e) {
                            if (x(e0Var, str, i10, threadPolicy)) {
                                if (z10) {
                                    return;
                                }
                                return;
                            }
                        }
                        throw b0.b(str, f12049d, f12050e);
                    } catch (IOException e10) {
                        c0 c0Var = new c0(str, e10.toString());
                        c0Var.initCause(e10);
                        throw c0Var;
                    }
                } finally {
                    if (f12046a) {
                        if (str2 != null) {
                            Api18TraceUtils.b();
                        }
                        Api18TraceUtils.b();
                    }
                    if (z10) {
                        StrictMode.setThreadPolicy(threadPolicy);
                    }
                }
            }
            p.b("SoLoader", "Could not load: " + str + " because SoLoader is not initialized");
            throw new UnsatisfiedLinkError("SoLoader not initialized, couldn't find DSO to load: " + str);
        } finally {
            f12048c.readLock().unlock();
        }
    }

    private static int h(Context context) {
        int i10 = f12059n;
        if (i10 != 0) {
            return i10;
        }
        int i11 = 1;
        if (context == null) {
            p.a("SoLoader", "context is null, fallback to THIRD_PARTY_APP appType");
            return 1;
        }
        ApplicationInfo applicationInfo = context.getApplicationInfo();
        int i12 = applicationInfo.flags;
        if ((i12 & 1) != 0) {
            if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                i11 = 3;
            } else {
                i11 = 2;
            }
        }
        p.a("SoLoader", "ApplicationInfo.flags is: " + applicationInfo.flags + " appType is: " + i11);
        return i11;
    }

    private static int i() {
        int i10 = f12059n;
        if (i10 != 1) {
            if (i10 == 2 || i10 == 3) {
                return 1;
            }
            throw new RuntimeException("Unsupported app type, we should not reach here");
        }
        return 0;
    }

    public static void init(Context context, int i10) {
        k(context, i10, null);
    }

    private static synchronized pb.h j() {
        pb.h hVar;
        synchronized (SoLoader.class) {
            pb.i iVar = f12052g;
            if (iVar == null) {
                hVar = null;
            } else {
                hVar = iVar.get();
            }
        }
        return hVar;
    }

    public static void k(Context context, int i10, x xVar) {
        if (r()) {
            p.g("SoLoader", "SoLoader already initialized");
            return;
        }
        p.g("SoLoader", "Initializing SoLoader: " + i10);
        StrictMode.ThreadPolicy allowThreadDiskWrites = StrictMode.allowThreadDiskWrites();
        try {
            boolean o10 = o(context);
            f12057l = o10;
            if (o10) {
                int h10 = h(context);
                f12059n = h10;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0 && SysUtil.l(context, h10)) {
                    i10 |= 8;
                }
                p(context, xVar, i10);
                q(context, i10);
                p.f("SoLoader", "Init SoLoader delegate");
                nb.a.b(new u());
            } else {
                n();
                p.f("SoLoader", "Init System Loader delegate");
                nb.a.b(new nb.c());
            }
            p.g("SoLoader", "SoLoader initialized: " + i10);
            StrictMode.setThreadPolicy(allowThreadDiskWrites);
        } catch (Throwable th2) {
            StrictMode.setThreadPolicy(allowThreadDiskWrites);
            throw th2;
        }
    }

    public static void l(Context context, l lVar) {
        synchronized (SoLoader.class) {
            f12060o = lVar;
        }
        init(context, 0);
    }

    public static void m(Context context, boolean z10) {
        try {
            k(context, z10 ? 1 : 0, null);
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }

    private static void n() {
        if (f12050e != null) {
            return;
        }
        ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
        reentrantReadWriteLock.writeLock().lock();
        try {
            if (f12050e == null) {
                f12050e = new e0[0];
            }
            reentrantReadWriteLock.writeLock().unlock();
        } catch (Throwable th2) {
            f12048c.writeLock().unlock();
            throw th2;
        }
    }

    private static boolean o(Context context) {
        String str;
        if (f12060o != null) {
            return true;
        }
        Bundle bundle = null;
        try {
            str = context.getPackageName();
        } catch (Exception e10) {
            e = e10;
            str = null;
        }
        try {
            bundle = context.getPackageManager().getApplicationInfo(str, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT).metaData;
        } catch (Exception e11) {
            e = e11;
            p.h("SoLoader", "Unexpected issue with package manager (" + str + ")", e);
            return bundle == null ? true : true;
        }
        if (bundle == null && !bundle.getBoolean("com.facebook.soloader.enabled", true)) {
            return false;
        }
    }

    private static synchronized void p(Context context, x xVar, int i10) {
        synchronized (SoLoader.class) {
            if (context != null) {
                try {
                    Context applicationContext = context.getApplicationContext();
                    if (applicationContext == null) {
                        p.g("SoLoader", "context.getApplicationContext returned null, holding reference to original context.ApplicationSoSource fallbacks to: " + context.getApplicationInfo().nativeLibraryDir);
                    } else {
                        context = applicationContext;
                    }
                    f12049d = context;
                    f12052g = new pb.f(context, B(i10));
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            if (xVar == null && f12047b != null) {
                return;
            }
            if (xVar != null) {
                f12047b = xVar;
            } else {
                f12047b = new o(new y());
            }
        }
    }

    private static void q(Context context, int i10) {
        boolean z10;
        boolean z11;
        ReentrantReadWriteLock.WriteLock writeLock;
        if (f12050e != null) {
            return;
        }
        ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
        reentrantReadWriteLock.writeLock().lock();
        try {
            if (f12050e != null) {
                writeLock = reentrantReadWriteLock.writeLock();
            } else {
                f12058m = i10;
                ArrayList arrayList = new ArrayList();
                boolean z12 = true;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (z10) {
                    e(context, arrayList);
                } else if (z11) {
                    d(arrayList);
                    arrayList.add(0, new e("base"));
                } else {
                    d(arrayList);
                    if (context != null) {
                        if ((i10 & 1) != 0) {
                            a(arrayList, i());
                            p.a("SoLoader", "Adding exo package source: lib-main");
                            arrayList.add(0, new k(context, "lib-main"));
                        } else {
                            if (SysUtil.l(context, f12059n)) {
                                c(context, arrayList);
                            }
                            a(arrayList, i());
                            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
                                z12 = false;
                            }
                            b(context, arrayList, z12);
                        }
                    }
                }
                e0[] e0VarArr = (e0[]) arrayList.toArray(new e0[arrayList.size()]);
                int A = A();
                int length = e0VarArr.length;
                while (true) {
                    int i11 = length - 1;
                    if (length <= 0) {
                        break;
                    }
                    p.d("SoLoader", "Preparing SO source: " + e0VarArr[i11]);
                    boolean z13 = f12046a;
                    if (z13) {
                        Api18TraceUtils.a("SoLoader", "_", e0VarArr[i11].getClass().getSimpleName());
                    }
                    e0VarArr[i11].e(A);
                    if (z13) {
                        Api18TraceUtils.b();
                    }
                    length = i11;
                }
                f12050e = e0VarArr;
                f12051f.getAndIncrement();
                p.d("SoLoader", "init finish: " + f12050e.length + " SO sources prepared");
                writeLock = f12048c.writeLock();
            }
            writeLock.unlock();
        } catch (Throwable th2) {
            f12048c.writeLock().unlock();
            throw th2;
        }
    }

    public static boolean r() {
        boolean z10 = true;
        if (f12050e != null) {
            return true;
        }
        ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
        reentrantReadWriteLock.readLock().lock();
        try {
            if (f12050e == null) {
                z10 = false;
            }
            reentrantReadWriteLock.readLock().unlock();
            return z10;
        } catch (Throwable th2) {
            f12048c.readLock().unlock();
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void s(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        ob.b.d(str, i10);
        try {
            ob.b.c(null, w(str, null, null, i10 | 1, threadPolicy));
        } finally {
        }
    }

    public static boolean t(String str) {
        if (f12057l) {
            return u(str, 0);
        }
        return nb.a.d(str);
    }

    public static boolean u(String str, int i10) {
        Boolean z10 = z(str);
        if (z10 != null) {
            return z10.booleanValue();
        }
        if (!f12057l) {
            return nb.a.d(str);
        }
        if (f12059n != 2) {
        }
        return y(str, i10);
    }

    private static boolean v(String str, String str2, String str3, int i10, StrictMode.ThreadPolicy threadPolicy) {
        pb.h hVar = null;
        while (true) {
            try {
                return w(str, str2, str3, i10, threadPolicy);
            } catch (UnsatisfiedLinkError e10) {
                hVar = C(str, e10, hVar);
            }
        }
    }

    private static boolean w(String str, String str2, String str3, int i10, StrictMode.ThreadPolicy threadPolicy) {
        boolean z10;
        Object obj;
        Object obj2;
        if (!TextUtils.isEmpty(str2) && f12055j.contains(str2)) {
            return false;
        }
        Set set = f12053h;
        if (set.contains(str) && str3 == null) {
            return false;
        }
        synchronized (SoLoader.class) {
            try {
                if (set.contains(str)) {
                    if (str3 == null) {
                        return false;
                    }
                    z10 = true;
                } else {
                    z10 = false;
                }
                Map map = f12054i;
                if (map.containsKey(str)) {
                    obj = map.get(str);
                } else {
                    Object obj3 = new Object();
                    map.put(str, obj3);
                    obj = obj3;
                }
                Map map2 = f12056k;
                if (map2.containsKey(str2)) {
                    obj2 = map2.get(str2);
                } else {
                    Object obj4 = new Object();
                    map2.put(str2, obj4);
                    obj2 = obj4;
                }
                ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
                reentrantReadWriteLock.readLock().lock();
                try {
                    synchronized (obj) {
                        if (!z10) {
                            if (set.contains(str)) {
                                if (str3 == null) {
                                    reentrantReadWriteLock.readLock().unlock();
                                    return false;
                                }
                                z10 = true;
                            }
                            if (!z10) {
                                try {
                                    p.a("SoLoader", "About to load: " + str);
                                    g(str, str2, i10, threadPolicy);
                                    p.a("SoLoader", "Loaded: " + str);
                                    set.add(str);
                                } catch (UnsatisfiedLinkError e10) {
                                    String message = e10.getMessage();
                                    if (message != null && message.contains("unexpected e_machine:")) {
                                        throw new a(e10, message.substring(message.lastIndexOf("unexpected e_machine:")));
                                    }
                                    throw e10;
                                }
                            }
                        }
                        synchronized (obj2) {
                            if ((i10 & 16) == 0 && str3 != null && (TextUtils.isEmpty(str2) || !f12055j.contains(str2))) {
                                boolean z11 = f12046a;
                                if (z11 && f12060o == null) {
                                    Api18TraceUtils.a("MergedSoMapping.invokeJniOnload[", str2, "]");
                                }
                                try {
                                    try {
                                        p.a("SoLoader", "About to invoke JNI_OnLoad for merged library " + str2 + ", which was merged into " + str);
                                        l lVar = f12060o;
                                        if (lVar != null) {
                                            lVar.invokeJniOnload(str2);
                                        } else {
                                            r.a(str2);
                                        }
                                        f12055j.add(str2);
                                        if (z11 && f12060o == null) {
                                            Api18TraceUtils.b();
                                        }
                                    } catch (UnsatisfiedLinkError e11) {
                                        throw new RuntimeException("Failed to call JNI_OnLoad from '" + str2 + "', which has been merged into '" + str + "'.  See comment for details.", e11);
                                    }
                                } catch (Throwable th2) {
                                    if (f12046a && f12060o == null) {
                                        Api18TraceUtils.b();
                                    }
                                    throw th2;
                                }
                            }
                        }
                        reentrantReadWriteLock.readLock().unlock();
                        return !z10;
                    }
                } catch (Throwable th3) {
                    f12048c.readLock().unlock();
                    throw th3;
                }
            } finally {
            }
        }
    }

    private static boolean x(e0 e0Var, String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        boolean z10;
        ob.b.l(e0Var);
        try {
            if (e0Var.d(str, i10, threadPolicy) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ob.b.k(null);
            return z10;
        } finally {
        }
    }

    private static boolean y(String str, int i10) {
        String b10;
        String str2;
        l lVar = f12060o;
        if (lVar != null) {
            b10 = lVar.mapLibName(str);
        } else {
            b10 = r.b(str);
        }
        if (b10 != null) {
            str2 = b10;
        } else {
            str2 = str;
        }
        ob.b.f(str, b10, i10);
        try {
            boolean v10 = v(System.mapLibraryName(str2), str, b10, i10, null);
            ob.b.e(null, v10);
            return v10;
        } finally {
        }
    }

    private static Boolean z(String str) {
        Boolean valueOf;
        if (f12050e == null) {
            ReentrantReadWriteLock reentrantReadWriteLock = f12048c;
            reentrantReadWriteLock.readLock().lock();
            try {
                if (f12050e == null) {
                    if ("http://www.android.com/".equals(System.getProperty("java.vendor.url"))) {
                        f();
                    } else {
                        synchronized (SoLoader.class) {
                            boolean contains = f12053h.contains(str);
                            boolean z10 = !contains;
                            if (!contains) {
                                System.loadLibrary(str);
                            }
                            valueOf = Boolean.valueOf(z10);
                        }
                        reentrantReadWriteLock.readLock().unlock();
                        return valueOf;
                    }
                }
                reentrantReadWriteLock.readLock().unlock();
                return null;
            } catch (Throwable th2) {
                f12048c.readLock().unlock();
                throw th2;
            }
        }
        return null;
    }
}
