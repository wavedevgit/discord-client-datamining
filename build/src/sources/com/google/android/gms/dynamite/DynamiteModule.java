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
import android.util.Log;
import androidx.annotation.NonNull;
import com.google.android.gms.common.util.DynamiteApi;
import gf.q;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DynamiteModule {

    /* renamed from: h  reason: collision with root package name */
    private static Boolean f13829h = null;

    /* renamed from: i  reason: collision with root package name */
    private static String f13830i = null;

    /* renamed from: j  reason: collision with root package name */
    private static boolean f13831j = false;

    /* renamed from: k  reason: collision with root package name */
    private static int f13832k = -1;

    /* renamed from: l  reason: collision with root package name */
    private static Boolean f13833l;

    /* renamed from: r  reason: collision with root package name */
    private static n f13839r;

    /* renamed from: s  reason: collision with root package name */
    private static o f13840s;

    /* renamed from: a  reason: collision with root package name */
    private final Context f13841a;

    /* renamed from: m  reason: collision with root package name */
    private static final ThreadLocal f13834m = new ThreadLocal();

    /* renamed from: n  reason: collision with root package name */
    private static final ThreadLocal f13835n = new c();

    /* renamed from: o  reason: collision with root package name */
    private static final b.a f13836o = new d();

    /* renamed from: b  reason: collision with root package name */
    public static final b f13823b = new e();

    /* renamed from: c  reason: collision with root package name */
    public static final b f13824c = new f();

    /* renamed from: d  reason: collision with root package name */
    public static final b f13825d = new g();

    /* renamed from: e  reason: collision with root package name */
    public static final b f13826e = new h();

    /* renamed from: f  reason: collision with root package name */
    public static final b f13827f = new i();

    /* renamed from: g  reason: collision with root package name */
    public static final b f13828g = new j();

    /* renamed from: p  reason: collision with root package name */
    public static final b f13837p = new k();

    /* renamed from: q  reason: collision with root package name */
    public static final b f13838q = new com.google.android.gms.dynamite.a();

    @DynamiteApi
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class DynamiteLoaderClassLoader {
        @NonNull
        public static ClassLoader sClassLoader;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends Exception {
        /* synthetic */ a(String str, Throwable th2, byte[] bArr) {
            super(str, th2);
        }

        /* synthetic */ a(String str, byte[] bArr) {
            super(str);
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
        public static class C0169b {

            /* renamed from: a  reason: collision with root package name */
            public int f13842a = 0;

            /* renamed from: b  reason: collision with root package name */
            public int f13843b = 0;

            /* renamed from: c  reason: collision with root package name */
            public int f13844c = 0;
        }

        C0169b a(Context context, String str, a aVar);
    }

    private DynamiteModule(Context context) {
        q.l(context);
        this.f13841a = context;
    }

    public static int a(Context context, String str) {
        try {
            ClassLoader classLoader = context.getApplicationContext().getClassLoader();
            StringBuilder sb2 = new StringBuilder(String.valueOf(str).length() + 61);
            sb2.append("com.google.android.gms.dynamite.descriptors.");
            sb2.append(str);
            sb2.append(".ModuleDescriptor");
            Class<?> loadClass = classLoader.loadClass(sb2.toString());
            Field declaredField = loadClass.getDeclaredField("MODULE_ID");
            Field declaredField2 = loadClass.getDeclaredField("MODULE_VERSION");
            if (!gf.o.a(declaredField.get(null), str)) {
                String valueOf = String.valueOf(declaredField.get(null));
                StringBuilder sb3 = new StringBuilder(valueOf.length() + 50 + String.valueOf(str).length() + 1);
                sb3.append("Module descriptor id '");
                sb3.append(valueOf);
                sb3.append("' didn't match expected id '");
                sb3.append(str);
                sb3.append("'");
                Log.e("DynamiteModule", sb3.toString());
                return 0;
            }
            return declaredField2.getInt(null);
        } catch (ClassNotFoundException unused) {
            StringBuilder sb4 = new StringBuilder(String.valueOf(str).length() + 45);
            sb4.append("Local module descriptor class for ");
            sb4.append(str);
            sb4.append(" not found.");
            Log.w("DynamiteModule", sb4.toString());
            return 0;
        } catch (Exception e10) {
            Log.e("DynamiteModule", "Failed to load module descriptor class: ".concat(String.valueOf(e10.getMessage())));
            return 0;
        }
    }

    public static int c(Context context, String str) {
        return f(context, str, false);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:125:0x02d7 A[DONT_GENERATE] */
    /* JADX WARN: Removed duplicated region for block: B:126:0x02dd A[DONT_GENERATE] */
    /* JADX WARN: Removed duplicated region for block: B:129:0x02e6 A[DONT_GENERATE] */
    /* JADX WARN: Type inference failed for: r4v0, types: [java.lang.String] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static com.google.android.gms.dynamite.DynamiteModule e(android.content.Context r30, com.google.android.gms.dynamite.DynamiteModule.b r31, java.lang.String r32) {
        /*
            Method dump skipped, instructions count: 914
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.dynamite.DynamiteModule.e(android.content.Context, com.google.android.gms.dynamite.DynamiteModule$b, java.lang.String):com.google.android.gms.dynamite.DynamiteModule");
    }

    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:119:0x01e1 -> B:134:0x01e6). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:120:0x01e3 -> B:134:0x01e6). Please submit an issue!!! */
    public static int f(Context context, String str, boolean z10) {
        Field declaredField;
        Throwable th2;
        RemoteException remoteException;
        Cursor cursor;
        try {
            synchronized (DynamiteModule.class) {
                Boolean bool = f13829h;
                Cursor cursor2 = null;
                int i10 = 0;
                if (bool == null) {
                    try {
                        declaredField = context.getApplicationContext().getClassLoader().loadClass(DynamiteLoaderClassLoader.class.getName()).getDeclaredField("sClassLoader");
                    } catch (ClassNotFoundException | IllegalAccessException | NoSuchFieldException e10) {
                        String obj = e10.toString();
                        StringBuilder sb2 = new StringBuilder(obj.length() + 30);
                        sb2.append("Failed to load module via V2: ");
                        sb2.append(obj);
                        Log.w("DynamiteModule", sb2.toString());
                        bool = Boolean.FALSE;
                    }
                    synchronized (declaredField.getDeclaringClass()) {
                        ClassLoader classLoader = (ClassLoader) declaredField.get(null);
                        if (classLoader == ClassLoader.getSystemClassLoader()) {
                            bool = Boolean.FALSE;
                        } else if (classLoader != null) {
                            try {
                                k(classLoader);
                            } catch (a unused) {
                            }
                            bool = Boolean.TRUE;
                        } else if (!g(context)) {
                            return 0;
                        } else {
                            if (!f13831j) {
                                Boolean bool2 = Boolean.TRUE;
                                if (!bool2.equals(null)) {
                                    try {
                                        int h10 = h(context, str, z10, true);
                                        String str2 = f13830i;
                                        if (str2 != null && !str2.isEmpty()) {
                                            ClassLoader a10 = tf.d.a();
                                            if (a10 == null) {
                                                if (Build.VERSION.SDK_INT >= 29) {
                                                    tf.b.a();
                                                    String str3 = f13830i;
                                                    q.l(str3);
                                                    a10 = tf.a.a(str3, ClassLoader.getSystemClassLoader());
                                                } else {
                                                    String str4 = f13830i;
                                                    q.l(str4);
                                                    a10 = new com.google.android.gms.dynamite.b(str4, ClassLoader.getSystemClassLoader());
                                                }
                                            }
                                            k(a10);
                                            declaredField.set(null, a10);
                                            f13829h = bool2;
                                            return h10;
                                        }
                                        return h10;
                                    } catch (a unused2) {
                                        declaredField.set(null, ClassLoader.getSystemClassLoader());
                                        bool = Boolean.FALSE;
                                    }
                                }
                            }
                            declaredField.set(null, ClassLoader.getSystemClassLoader());
                            bool = Boolean.FALSE;
                        }
                        f13829h = bool;
                    }
                }
                if (bool.booleanValue()) {
                    try {
                        return h(context, str, z10, false);
                    } catch (a e11) {
                        String message = e11.getMessage();
                        StringBuilder sb3 = new StringBuilder(String.valueOf(message).length() + 42);
                        sb3.append("Failed to retrieve remote module version: ");
                        sb3.append(message);
                        Log.w("DynamiteModule", sb3.toString());
                        return 0;
                    }
                }
                n l10 = l(context);
                try {
                    if (l10 != null) {
                        try {
                            int Z0 = l10.Z0();
                            if (Z0 >= 3) {
                                l lVar = (l) f13834m.get();
                                if (lVar != null && (cursor = lVar.f13845a) != null) {
                                    i10 = cursor.getInt(0);
                                } else {
                                    Cursor cursor3 = (Cursor) sf.b.h(l10.a1(sf.b.W0(context), str, z10, ((Long) f13835n.get()).longValue()));
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
                                            StringBuilder sb4 = new StringBuilder(String.valueOf(message2).length() + 42);
                                            sb4.append("Failed to retrieve remote module version: ");
                                            sb4.append(message2);
                                            Log.w("DynamiteModule", sb4.toString());
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
                            } else if (Z0 == 2) {
                                Log.w("DynamiteModule", "IDynamite loader version = 2, no high precision latency measurement.");
                                i10 = l10.Y0(sf.b.W0(context), str, z10);
                            } else {
                                Log.w("DynamiteModule", "IDynamite loader version < 2, falling back to getModuleVersion2");
                                i10 = l10.W0(sf.b.W0(context), str, z10);
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

    private static boolean g(Context context) {
        int i10;
        ApplicationInfo applicationInfo;
        Boolean bool = Boolean.TRUE;
        if (bool.equals(null) || bool.equals(f13833l)) {
            return true;
        }
        boolean z10 = false;
        if (f13833l == null) {
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
            f13833l = Boolean.valueOf(z10);
            if (z10 && (applicationInfo = resolveContentProvider.applicationInfo) != null && (applicationInfo.flags & 129) == 0) {
                Log.i("DynamiteModule", "Non-system-image GmsCore APK, forcing V1");
                f13831j = true;
            }
        }
        if (!z10) {
            Log.e("DynamiteModule", "Invalid GmsCore APK, remote loading disabled.");
        }
        return z10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:94:0x014b, code lost:
        r8.close();
     */
    /* JADX WARN: Not initialized variable reg: 8, insn: 0x0147: MOVE  (r2 I:??[OBJECT, ARRAY]) = (r8 I:??[OBJECT, ARRAY]), block:B:92:0x0147 */
    /* JADX WARN: Removed duplicated region for block: B:101:0x0163 A[Catch: all -> 0x0141, TryCatch #0 {all -> 0x0141, blocks: (B:59:0x00ef, B:61:0x00f5, B:64:0x00fd, B:78:0x012a, B:82:0x0133, B:86:0x0139, B:87:0x0140, B:96:0x014f, B:97:0x015d, B:99:0x015f, B:101:0x0163, B:102:0x0185, B:103:0x0186), top: B:108:0x0003 }] */
    /* JADX WARN: Removed duplicated region for block: B:103:0x0186 A[Catch: all -> 0x0141, TRY_LEAVE, TryCatch #0 {all -> 0x0141, blocks: (B:59:0x00ef, B:61:0x00f5, B:64:0x00fd, B:78:0x012a, B:82:0x0133, B:86:0x0139, B:87:0x0140, B:96:0x014f, B:97:0x015d, B:99:0x015f, B:101:0x0163, B:102:0x0185, B:103:0x0186), top: B:108:0x0003 }] */
    /* JADX WARN: Removed duplicated region for block: B:105:0x0189  */
    /* JADX WARN: Removed duplicated region for block: B:111:0x00ef A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static int h(android.content.Context r14, java.lang.String r15, boolean r16, boolean r17) {
        /*
            Method dump skipped, instructions count: 397
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.dynamite.DynamiteModule.h(android.content.Context, java.lang.String, boolean, boolean):int");
    }

    private static boolean i(Cursor cursor) {
        l lVar = (l) f13834m.get();
        if (lVar != null && lVar.f13845a == null) {
            lVar.f13845a = cursor;
            return true;
        }
        return false;
    }

    private static DynamiteModule j(Context context, String str) {
        Log.i("DynamiteModule", "Selected local version of ".concat(String.valueOf(str)));
        return new DynamiteModule(context);
    }

    private static void k(ClassLoader classLoader) {
        o oVar;
        try {
            IBinder iBinder = (IBinder) classLoader.loadClass("com.google.android.gms.dynamiteloader.DynamiteLoaderV2").getConstructor(null).newInstance(null);
            if (iBinder == null) {
                oVar = null;
            } else {
                IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamite.IDynamiteLoaderV2");
                if (queryLocalInterface instanceof o) {
                    oVar = (o) queryLocalInterface;
                } else {
                    oVar = new o(iBinder);
                }
            }
            f13840s = oVar;
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

    private static n l(Context context) {
        n nVar;
        synchronized (DynamiteModule.class) {
            n nVar2 = f13839r;
            if (nVar2 != null) {
                return nVar2;
            }
            try {
                IBinder iBinder = (IBinder) context.createPackageContext("com.google.android.gms", 3).getClassLoader().loadClass("com.google.android.gms.chimera.container.DynamiteLoaderImpl").newInstance();
                if (iBinder == null) {
                    nVar = null;
                } else {
                    IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamite.IDynamiteLoader");
                    if (queryLocalInterface instanceof n) {
                        nVar = (n) queryLocalInterface;
                    } else {
                        nVar = new n(iBinder);
                    }
                }
                if (nVar != null) {
                    f13839r = nVar;
                    return nVar;
                }
            } catch (Exception e10) {
                String message = e10.getMessage();
                StringBuilder sb2 = new StringBuilder(String.valueOf(message).length() + 45);
                sb2.append("Failed to load IDynamiteLoader from GmsCore: ");
                sb2.append(message);
                Log.e("DynamiteModule", sb2.toString());
            }
            return null;
        }
    }

    public Context b() {
        return this.f13841a;
    }

    public IBinder d(String str) {
        try {
            return (IBinder) this.f13841a.getClassLoader().loadClass(str).newInstance();
        } catch (ClassNotFoundException | IllegalAccessException | InstantiationException e10) {
            throw new a("Failed to instantiate module class: ".concat(String.valueOf(str)), e10, null);
        }
    }
}
