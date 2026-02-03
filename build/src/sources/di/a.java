package di;

import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;
import fi.a0;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReference f21737e = new AtomicReference(null);

    /* renamed from: f  reason: collision with root package name */
    public static final /* synthetic */ int f21738f = 0;

    /* renamed from: a  reason: collision with root package name */
    private final f f21739a;

    /* renamed from: b  reason: collision with root package name */
    private final ei.c f21740b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f21741c = new HashSet();

    /* renamed from: d  reason: collision with root package name */
    private final b f21742d;

    private a(Context context) {
        try {
            f fVar = new f(context);
            this.f21739a = fVar;
            this.f21742d = new b(fVar);
            this.f21740b = new ei.c(context);
        } catch (PackageManager.NameNotFoundException e10) {
            throw new a0("Failed to initialize FileStorage", e10);
        }
    }

    public static boolean a(Context context) {
        return j(context, false);
    }

    public static boolean b(Context context) {
        if (k()) {
            return false;
        }
        a aVar = (a) f21737e.get();
        if (aVar == null) {
            if (context.getApplicationContext() != null) {
                a(context.getApplicationContext());
            }
            return a(context);
        }
        return aVar.f21742d.b(context, aVar.g());
    }

    public static boolean e(Context context) {
        return j(context, true);
    }

    public static boolean f() {
        if (f21737e.get() != null) {
            return true;
        }
        return false;
    }

    private final Set g() {
        HashSet hashSet;
        synchronized (this.f21741c) {
            hashSet = new HashSet(this.f21741c);
        }
        return hashSet;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void h(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            f.l(this.f21739a.g((String) it.next()));
        }
        this.f21740b.b();
    }

    private final synchronized void i(Context context, boolean z10) {
        List<String> asList;
        ZipFile zipFile;
        try {
            if (z10) {
                this.f21739a.k();
            } else {
                e.a().execute(new r(this));
            }
            String packageName = context.getPackageName();
            try {
                String[] strArr = context.getPackageManager().getPackageInfo(packageName, 0).splitNames;
                if (strArr == null) {
                    asList = new ArrayList();
                } else {
                    asList = Arrays.asList(strArr);
                }
                Set<u> j10 = this.f21739a.j();
                Set a10 = this.f21740b.a();
                HashSet hashSet = new HashSet();
                Iterator it = j10.iterator();
                while (it.hasNext()) {
                    String b10 = ((u) it.next()).b();
                    if (asList.contains(b10) || a10.contains(ei.k.a(b10))) {
                        hashSet.add(b10);
                        it.remove();
                    }
                }
                if (z10) {
                    h(hashSet);
                } else if (!hashSet.isEmpty()) {
                    e.a().execute(new s(this, hashSet));
                }
                HashSet hashSet2 = new HashSet();
                for (u uVar : j10) {
                    String b11 = uVar.b();
                    if (!ei.k.b(b11)) {
                        hashSet2.add(b11);
                    }
                }
                for (String str : asList) {
                    if (!ei.k.b(str)) {
                        hashSet2.add(str);
                    }
                }
                HashSet<u> hashSet3 = new HashSet(j10.size());
                for (u uVar2 : j10) {
                    String b12 = uVar2.b();
                    int i10 = ei.k.f22845b;
                    if (b12.startsWith("config.") || hashSet2.contains(ei.k.a(uVar2.b()))) {
                        hashSet3.add(uVar2);
                    }
                }
                o oVar = new o(this.f21739a);
                fi.h a11 = fi.i.a();
                ClassLoader classLoader = context.getClassLoader();
                if (z10) {
                    a11.b(classLoader, oVar.c());
                } else {
                    Iterator it2 = hashSet3.iterator();
                    while (it2.hasNext()) {
                        Set b13 = oVar.b((u) it2.next());
                        if (b13 == null) {
                            it2.remove();
                        } else {
                            a11.b(classLoader, b13);
                        }
                    }
                }
                HashSet hashSet4 = new HashSet();
                for (u uVar3 : hashSet3) {
                    try {
                        zipFile = new ZipFile(uVar3.a());
                    } catch (IOException e10) {
                        e = e10;
                        zipFile = null;
                    }
                    try {
                        ZipEntry entry = zipFile.getEntry("classes.dex");
                        zipFile.close();
                        if (entry != null && !a11.a(classLoader, this.f21739a.a(uVar3.b()), uVar3.a(), z10)) {
                            Log.w("SplitCompat", "split was not installed ".concat(uVar3.a().toString()));
                        }
                        hashSet4.add(uVar3.a());
                    } catch (IOException e11) {
                        e = e11;
                        if (zipFile != null) {
                            try {
                                zipFile.close();
                            } catch (IOException e12) {
                                try {
                                    Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(e, e12);
                                } catch (Exception unused) {
                                }
                            }
                        }
                        throw e;
                    }
                }
                this.f21742d.a(context, hashSet4);
                HashSet hashSet5 = new HashSet();
                for (u uVar4 : hashSet3) {
                    if (hashSet4.contains(uVar4.a())) {
                        String b14 = uVar4.b();
                        Log.d("SplitCompat", "Split '" + b14 + "' installation emulated");
                        hashSet5.add(uVar4.b());
                    } else {
                        String b15 = uVar4.b();
                        Log.d("SplitCompat", "Split '" + b15 + "' installation not emulated.");
                    }
                }
                synchronized (this.f21741c) {
                    this.f21741c.addAll(hashSet5);
                }
            } catch (PackageManager.NameNotFoundException e13) {
                throw new IOException(String.format("Cannot load data for application '%s'", packageName), e13);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private static boolean j(Context context, boolean z10) {
        boolean z11;
        final Context context2;
        if (k()) {
            return false;
        }
        AtomicReference atomicReference = f21737e;
        a aVar = new a(context);
        while (true) {
            if (p0.d.a(atomicReference, null, aVar)) {
                z11 = true;
                break;
            } else if (atomicReference.get() != null) {
                z11 = false;
                break;
            }
        }
        a aVar2 = (a) f21737e.get();
        if (z11) {
            context2 = context;
            ei.h.INSTANCE.a(new fi.e(context2, e.a(), new fi.g(context, aVar2.f21739a, new fi.b()), aVar2.f21739a, new t()));
            ei.j.a(new q(aVar2));
            e.a().execute(new Runnable() { // from class: di.p
                @Override // java.lang.Runnable
                public final void run() {
                    Context context3 = context2;
                    int i10 = a.f21738f;
                    try {
                        ei.n.f(context3).b(true);
                    } catch (SecurityException unused) {
                        Log.e("SplitCompat", "Failed to set broadcast receiver to always on.");
                    }
                }
            });
        } else {
            context2 = context;
        }
        try {
            aVar2.i(context2, z10);
            return true;
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error installing additional splits", e10);
            return false;
        }
    }

    private static boolean k() {
        return false;
    }
}
