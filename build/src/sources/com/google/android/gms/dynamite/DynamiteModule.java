package com.google.android.gms.dynamite;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.pm.ProviderInfo;
import android.database.Cursor;
import android.os.Build;
import android.os.IBinder;
import android.os.IInterface;
import android.os.RemoteException;
import android.os.SystemClock;
import android.util.Log;
import androidx.annotation.NonNull;
import com.google.android.gms.common.util.DynamiteApi;
import gf.o;
import gf.q;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DynamiteModule {

    /* renamed from: h  reason: collision with root package name */
    private static Boolean f14876h = null;

    /* renamed from: i  reason: collision with root package name */
    private static String f14877i = null;

    /* renamed from: j  reason: collision with root package name */
    private static boolean f14878j = false;

    /* renamed from: k  reason: collision with root package name */
    private static int f14879k = -1;

    /* renamed from: l  reason: collision with root package name */
    private static Boolean f14880l;

    /* renamed from: q  reason: collision with root package name */
    private static m f14885q;

    /* renamed from: r  reason: collision with root package name */
    private static n f14886r;

    /* renamed from: a  reason: collision with root package name */
    private final Context f14887a;

    /* renamed from: m  reason: collision with root package name */
    private static final ThreadLocal f14881m = new ThreadLocal();

    /* renamed from: n  reason: collision with root package name */
    private static final ThreadLocal f14882n = new com.google.android.gms.dynamite.b();

    /* renamed from: o  reason: collision with root package name */
    private static final b.a f14883o = new c();

    /* renamed from: b  reason: collision with root package name */
    public static final b f14870b = new d();

    /* renamed from: c  reason: collision with root package name */
    public static final b f14871c = new e();

    /* renamed from: d  reason: collision with root package name */
    public static final b f14872d = new f();

    /* renamed from: e  reason: collision with root package name */
    public static final b f14873e = new g();

    /* renamed from: f  reason: collision with root package name */
    public static final b f14874f = new h();

    /* renamed from: g  reason: collision with root package name */
    public static final b f14875g = new i();

    /* renamed from: p  reason: collision with root package name */
    public static final b f14884p = new j();

    @DynamiteApi
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class DynamiteLoaderClassLoader {
        @NonNull
        public static ClassLoader sClassLoader;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends Exception {
        /* synthetic */ a(String str, tf.e eVar) {
            super(str);
        }

        /* synthetic */ a(String str, Throwable th2, tf.e eVar) {
            super(str, th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public interface a {
            int a(Context context, String str, boolean z10);

            int b(Context context, String str);
        }

        /* renamed from: com.google.android.gms.dynamite.DynamiteModule$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0175b {

            /* renamed from: a  reason: collision with root package name */
            public int f14888a = 0;

            /* renamed from: b  reason: collision with root package name */
            public int f14889b = 0;

            /* renamed from: c  reason: collision with root package name */
            public int f14890c = 0;
        }

        C0175b a(Context context, String str, a aVar);
    }

    private DynamiteModule(Context context) {
        q.l(context);
        this.f14887a = context;
    }

    public static int a(Context context, String str) {
        try {
            ClassLoader classLoader = context.getApplicationContext().getClassLoader();
            Class<?> loadClass = classLoader.loadClass("com.google.android.gms.dynamite.descriptors." + str + ".ModuleDescriptor");
            Field declaredField = loadClass.getDeclaredField("MODULE_ID");
            Field declaredField2 = loadClass.getDeclaredField("MODULE_VERSION");
            if (!o.a(declaredField.get(null), str)) {
                String valueOf = String.valueOf(declaredField.get(null));
                Log.e("DynamiteModule", "Module descriptor id '" + valueOf + "' didn't match expected id '" + str + "'");
                return 0;
            }
            return declaredField2.getInt(null);
        } catch (ClassNotFoundException unused) {
            Log.w("DynamiteModule", "Local module descriptor class for " + str + " not found.");
            return 0;
        } catch (Exception e10) {
            Log.e("DynamiteModule", "Failed to load module descriptor class: ".concat(String.valueOf(e10.getMessage())));
            return 0;
        }
    }

    public static int b(Context context, String str) {
        return e(context, str, false);
    }

    public static DynamiteModule d(Context context, b bVar, String str) {
        long j10;
        DynamiteModule g10;
        Boolean bool;
        sf.a U0;
        DynamiteModule dynamiteModule;
        n nVar;
        boolean z10;
        sf.a h10;
        Context applicationContext = context.getApplicationContext();
        if (applicationContext != null) {
            ThreadLocal threadLocal = f14881m;
            k kVar = (k) threadLocal.get();
            k kVar2 = new k(null);
            threadLocal.set(kVar2);
            ThreadLocal threadLocal2 = f14882n;
            Long l10 = (Long) threadLocal2.get();
            long longValue = l10.longValue();
            try {
                threadLocal2.set(Long.valueOf(SystemClock.uptimeMillis()));
                b.C0175b a10 = bVar.a(context, str, f14883o);
                int i10 = a10.f14888a;
                j10 = 0;
                try {
                    Log.i("DynamiteModule", "Considering local module " + str + ":" + i10 + " and remote module " + str + ":" + a10.f14889b);
                    int i11 = a10.f14890c;
                    if (i11 != 0) {
                        if (i11 == -1) {
                            if (a10.f14888a != 0) {
                                i11 = -1;
                            }
                        }
                        if (i11 != 1 || a10.f14889b != 0) {
                            if (i11 == -1) {
                                g10 = g(applicationContext, str);
                            } else if (i11 == 1) {
                                try {
                                    int i12 = a10.f14889b;
                                    try {
                                        synchronized (DynamiteModule.class) {
                                            if (j(context)) {
                                                bool = f14876h;
                                            } else {
                                                throw new a("Remote loading disabled", null);
                                            }
                                        }
                                        if (bool != null) {
                                            if (bool.booleanValue()) {
                                                Log.i("DynamiteModule", "Selected remote version of " + str + ", version >= " + i12);
                                                synchronized (DynamiteModule.class) {
                                                    nVar = f14886r;
                                                }
                                                if (nVar != null) {
                                                    k kVar3 = (k) threadLocal.get();
                                                    if (kVar3 != null && kVar3.f14891a != null) {
                                                        Context applicationContext2 = context.getApplicationContext();
                                                        Cursor cursor = kVar3.f14891a;
                                                        sf.b.S0(null);
                                                        synchronized (DynamiteModule.class) {
                                                            if (f14879k >= 2) {
                                                                z10 = true;
                                                            } else {
                                                                z10 = false;
                                                            }
                                                        }
                                                        if (z10) {
                                                            Log.v("DynamiteModule", "Dynamite loader version >= 2, using loadModule2NoCrashUtils");
                                                            h10 = nVar.S0(sf.b.S0(applicationContext2), str, i12, sf.b.S0(cursor));
                                                        } else {
                                                            Log.w("DynamiteModule", "Dynamite loader version < 2, falling back to loadModule2");
                                                            h10 = nVar.h(sf.b.S0(applicationContext2), str, i12, sf.b.S0(cursor));
                                                        }
                                                        Context context2 = (Context) sf.b.h(h10);
                                                        if (context2 != null) {
                                                            dynamiteModule = new DynamiteModule(context2);
                                                        } else {
                                                            throw new a("Failed to get module context", null);
                                                        }
                                                    } else {
                                                        throw new a("No result cursor", null);
                                                    }
                                                } else {
                                                    throw new a("DynamiteLoaderV2 was not cached.", null);
                                                }
                                            } else {
                                                Log.i("DynamiteModule", "Selected remote version of " + str + ", version >= " + i12);
                                                m k10 = k(context);
                                                if (k10 != null) {
                                                    int h11 = k10.h();
                                                    if (h11 >= 3) {
                                                        k kVar4 = (k) threadLocal.get();
                                                        if (kVar4 != null) {
                                                            U0 = k10.V0(sf.b.S0(context), str, i12, sf.b.S0(kVar4.f14891a));
                                                        } else {
                                                            throw new a("No cached result cursor holder", null);
                                                        }
                                                    } else if (h11 == 2) {
                                                        Log.w("DynamiteModule", "IDynamite loader version = 2");
                                                        U0 = k10.W0(sf.b.S0(context), str, i12);
                                                    } else {
                                                        Log.w("DynamiteModule", "Dynamite loader version < 2, falling back to createModuleContext");
                                                        U0 = k10.U0(sf.b.S0(context), str, i12);
                                                    }
                                                    Object h12 = sf.b.h(U0);
                                                    if (h12 != null) {
                                                        dynamiteModule = new DynamiteModule((Context) h12);
                                                    } else {
                                                        throw new a("Failed to load remote module.", null);
                                                    }
                                                } else {
                                                    throw new a("Failed to create IDynamiteLoader.", null);
                                                }
                                            }
                                            g10 = dynamiteModule;
                                        } else {
                                            throw new a("Failed to determine which loading route to use.", null);
                                        }
                                    } catch (RemoteException e10) {
                                        throw new a("Failed to load remote module.", e10, null);
                                    } catch (a e11) {
                                        throw e11;
                                    } catch (Throwable th2) {
                                        com.google.android.gms.common.util.e.a(context, th2);
                                        throw new a("Failed to load remote module.", th2, null);
                                    }
                                } catch (a e12) {
                                    Log.w("DynamiteModule", "Failed to load remote module: " + e12.getMessage());
                                    int i13 = a10.f14888a;
                                    if (i13 != 0 && bVar.a(context, str, new l(i13, 0)).f14890c == -1) {
                                        g10 = g(applicationContext, str);
                                    } else {
                                        throw new a("Remote load failed. No local fallback found.", e12, null);
                                    }
                                }
                            } else {
                                throw new a("VersionPolicy returned invalid code:" + i11, null);
                            }
                            if (longValue == 0) {
                                f14882n.remove();
                            } else {
                                f14882n.set(l10);
                            }
                            Cursor cursor2 = kVar2.f14891a;
                            if (cursor2 != null) {
                                cursor2.close();
                            }
                            f14881m.set(kVar);
                            return g10;
                        }
                    }
                    throw new a("No acceptable module " + str + " found. Local version is " + a10.f14888a + " and remote version is " + a10.f14889b + ".", null);
                } catch (Throwable th3) {
                    th = th3;
                    if (longValue == j10) {
                        f14882n.remove();
                    } else {
                        f14882n.set(l10);
                    }
                    Cursor cursor3 = kVar2.f14891a;
                    if (cursor3 != null) {
                        cursor3.close();
                    }
                    f14881m.set(kVar);
                    throw th;
                }
            } catch (Throwable th4) {
                th = th4;
                j10 = 0;
            }
        } else {
            throw new a("null application Context", null);
        }
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:118:0x01c7 -> B:132:0x01cc). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:119:0x01c9 -> B:132:0x01cc). Please submit an issue!!! */
    public static int e(Context context, String str, boolean z10) {
        Field declaredField;
        Throwable th2;
        RemoteException remoteException;
        Cursor cursor;
        try {
            synchronized (DynamiteModule.class) {
                Boolean bool = f14876h;
                Cursor cursor2 = null;
                int i10 = 0;
                if (bool == null) {
                    try {
                        declaredField = context.getApplicationContext().getClassLoader().loadClass(DynamiteLoaderClassLoader.class.getName()).getDeclaredField("sClassLoader");
                    } catch (ClassNotFoundException | IllegalAccessException | NoSuchFieldException e10) {
                        String obj = e10.toString();
                        Log.w("DynamiteModule", "Failed to load module via V2: " + obj);
                        bool = Boolean.FALSE;
                    }
                    synchronized (declaredField.getDeclaringClass()) {
                        ClassLoader classLoader = (ClassLoader) declaredField.get(null);
                        if (classLoader == ClassLoader.getSystemClassLoader()) {
                            bool = Boolean.FALSE;
                        } else if (classLoader != null) {
                            try {
                                h(classLoader);
                            } catch (a unused) {
                            }
                            bool = Boolean.TRUE;
                        } else if (!j(context)) {
                            return 0;
                        } else {
                            if (!f14878j) {
                                Boolean bool2 = Boolean.TRUE;
                                if (!bool2.equals(null)) {
                                    try {
                                        int f10 = f(context, str, z10, true);
                                        String str2 = f14877i;
                                        if (str2 != null && !str2.isEmpty()) {
                                            ClassLoader a10 = tf.d.a();
                                            if (a10 == null) {
                                                if (Build.VERSION.SDK_INT >= 29) {
                                                    tf.b.a();
                                                    String str3 = f14877i;
                                                    q.l(str3);
                                                    a10 = tf.a.a(str3, ClassLoader.getSystemClassLoader());
                                                } else {
                                                    String str4 = f14877i;
                                                    q.l(str4);
                                                    a10 = new com.google.android.gms.dynamite.a(str4, ClassLoader.getSystemClassLoader());
                                                }
                                            }
                                            h(a10);
                                            declaredField.set(null, a10);
                                            f14876h = bool2;
                                            return f10;
                                        }
                                        return f10;
                                    } catch (a unused2) {
                                        declaredField.set(null, ClassLoader.getSystemClassLoader());
                                        bool = Boolean.FALSE;
                                    }
                                }
                            }
                            declaredField.set(null, ClassLoader.getSystemClassLoader());
                            bool = Boolean.FALSE;
                        }
                        f14876h = bool;
                    }
                }
                if (bool.booleanValue()) {
                    try {
                        return f(context, str, z10, false);
                    } catch (a e11) {
                        String message = e11.getMessage();
                        Log.w("DynamiteModule", "Failed to retrieve remote module version: " + message);
                        return 0;
                    }
                }
                m k10 = k(context);
                try {
                    if (k10 != null) {
                        try {
                            int h10 = k10.h();
                            if (h10 >= 3) {
                                k kVar = (k) f14881m.get();
                                if (kVar != null && (cursor = kVar.f14891a) != null) {
                                    i10 = cursor.getInt(0);
                                } else {
                                    Cursor cursor3 = (Cursor) sf.b.h(k10.X0(sf.b.S0(context), str, z10, ((Long) f14882n.get()).longValue()));
                                    if (cursor3 != null) {
                                        try {
                                            if (cursor3.moveToFirst()) {
                                                int i11 = cursor3.getInt(0);
                                                if (i11 <= 0 || !i(cursor3)) {
                                                    cursor2 = cursor3;
                                                }
                                                if (cursor2 != null) {
                                                    cursor2.close();
                                                }
                                                i10 = i11;
                                            }
                                        } catch (RemoteException e12) {
                                            remoteException = e12;
                                            cursor2 = cursor3;
                                            String message2 = remoteException.getMessage();
                                            Log.w("DynamiteModule", "Failed to retrieve remote module version: " + message2);
                                            if (cursor2 != null) {
                                                cursor2.close();
                                            }
                                            return i10;
                                        } catch (Throwable th3) {
                                            th2 = th3;
                                            cursor2 = cursor3;
                                            if (cursor2 != null) {
                                                cursor2.close();
                                            }
                                            throw th2;
                                        }
                                    }
                                    Log.w("DynamiteModule", "Failed to retrieve remote module version.");
                                    if (cursor3 != null) {
                                        cursor3.close();
                                    }
                                }
                            } else if (h10 == 2) {
                                Log.w("DynamiteModule", "IDynamite loader version = 2, no high precision latency measurement.");
                                i10 = k10.T0(sf.b.S0(context), str, z10);
                            } else {
                                Log.w("DynamiteModule", "IDynamite loader version < 2, falling back to getModuleVersion2");
                                i10 = k10.S0(sf.b.S0(context), str, z10);
                            }
                        } catch (RemoteException e13) {
                            remoteException = e13;
                        }
                    }
                    return i10;
                } catch (Throwable th4) {
                    th2 = th4;
                }
            }
        } catch (Throwable th5) {
            com.google.android.gms.common.util.e.a(context, th5);
            throw th5;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:95:0x0148, code lost:
        r3.close();
     */
    /* JADX WARN: Not initialized variable reg: 3, insn: 0x0144: MOVE  (r1 I:??[OBJECT, ARRAY]) = (r3 I:??[OBJECT, ARRAY]), block:B:93:0x0144 */
    /* JADX WARN: Removed duplicated region for block: B:106:0x017e  */
    /* JADX WARN: Removed duplicated region for block: B:115:0x00ec A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static int f(android.content.Context r12, java.lang.String r13, boolean r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 386
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.dynamite.DynamiteModule.f(android.content.Context, java.lang.String, boolean, boolean):int");
    }

    private static DynamiteModule g(Context context, String str) {
        Log.i("DynamiteModule", "Selected local version of ".concat(String.valueOf(str)));
        return new DynamiteModule(context);
    }

    private static void h(ClassLoader classLoader) {
        n nVar;
        try {
            IBinder iBinder = (IBinder) classLoader.loadClass("com.google.android.gms.dynamiteloader.DynamiteLoaderV2").getConstructor(null).newInstance(null);
            if (iBinder == null) {
                nVar = null;
            } else {
                IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamite.IDynamiteLoaderV2");
                if (queryLocalInterface instanceof n) {
                    nVar = (n) queryLocalInterface;
                } else {
                    nVar = new n(iBinder);
                }
            }
            f14886r = nVar;
        } catch (ClassNotFoundException e10) {
            e = e10;
            throw new a("Failed to instantiate dynamite loader", e, null);
        } catch (IllegalAccessException e11) {
            e = e11;
            throw new a("Failed to instantiate dynamite loader", e, null);
        } catch (InstantiationException e12) {
            e = e12;
            throw new a("Failed to instantiate dynamite loader", e, null);
        } catch (NoSuchMethodException e13) {
            e = e13;
            throw new a("Failed to instantiate dynamite loader", e, null);
        } catch (InvocationTargetException e14) {
            e = e14;
            throw new a("Failed to instantiate dynamite loader", e, null);
        }
    }

    private static boolean i(Cursor cursor) {
        k kVar = (k) f14881m.get();
        if (kVar != null && kVar.f14891a == null) {
            kVar.f14891a = cursor;
            return true;
        }
        return false;
    }

    private static boolean j(Context context) {
        int i10;
        ApplicationInfo applicationInfo;
        Boolean bool = Boolean.TRUE;
        if (bool.equals(null) || bool.equals(f14880l)) {
            return true;
        }
        boolean z10 = false;
        if (f14880l == null) {
            PackageManager packageManager = context.getPackageManager();
            if (true != com.google.android.gms.common.util.k.g()) {
                i10 = 0;
            } else {
                i10 = 268435456;
            }
            ProviderInfo resolveContentProvider = packageManager.resolveContentProvider("com.google.android.gms.chimera", i10);
            if (com.google.android.gms.common.g.f().h(context, 10000000) == 0 && resolveContentProvider != null && "com.google.android.gms".equals(resolveContentProvider.packageName)) {
                z10 = true;
            }
            f14880l = Boolean.valueOf(z10);
            if (z10 && (applicationInfo = resolveContentProvider.applicationInfo) != null && (applicationInfo.flags & 129) == 0) {
                Log.i("DynamiteModule", "Non-system-image GmsCore APK, forcing V1");
                f14878j = true;
            }
        }
        if (!z10) {
            Log.e("DynamiteModule", "Invalid GmsCore APK, remote loading disabled.");
        }
        return z10;
    }

    private static m k(Context context) {
        m mVar;
        synchronized (DynamiteModule.class) {
            m mVar2 = f14885q;
            if (mVar2 != null) {
                return mVar2;
            }
            try {
                IBinder iBinder = (IBinder) context.createPackageContext("com.google.android.gms", 3).getClassLoader().loadClass("com.google.android.gms.chimera.container.DynamiteLoaderImpl").newInstance();
                if (iBinder == null) {
                    mVar = null;
                } else {
                    IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamite.IDynamiteLoader");
                    if (queryLocalInterface instanceof m) {
                        mVar = (m) queryLocalInterface;
                    } else {
                        mVar = new m(iBinder);
                    }
                }
                if (mVar != null) {
                    f14885q = mVar;
                    return mVar;
                }
            } catch (Exception e10) {
                Log.e("DynamiteModule", "Failed to load IDynamiteLoader from GmsCore: " + e10.getMessage());
            }
            return null;
        }
    }

    public IBinder c(String str) {
        try {
            return (IBinder) this.f14887a.getClassLoader().loadClass(str).newInstance();
        } catch (ClassNotFoundException | IllegalAccessException | InstantiationException e10) {
            throw new a("Failed to instantiate module class: ".concat(String.valueOf(str)), e10, null);
        }
    }
}
