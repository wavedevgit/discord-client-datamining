package ki;

import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;
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
import mi.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: e  reason: collision with root package name */
    private static final AtomicReference f31743e = new AtomicReference(null);

    /* renamed from: f  reason: collision with root package name */
    public static final /* synthetic */ int f31744f = 0;

    /* renamed from: a  reason: collision with root package name */
    private final f f31745a;

    /* renamed from: b  reason: collision with root package name */
    private final li.c f31746b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f31747c = new HashSet();

    /* renamed from: d  reason: collision with root package name */
    private final b f31748d;

    private a(Context context) {
        try {
            f fVar = new f(context);
            this.f31745a = fVar;
            this.f31748d = new b(fVar);
            this.f31746b = new li.c(context);
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
        a aVar = (a) f31743e.get();
        if (aVar == null) {
            if (context.getApplicationContext() != null) {
                a(context.getApplicationContext());
            }
            return a(context);
        }
        return aVar.f31748d.b(context, aVar.g());
    }

    public static boolean e(Context context) {
        return j(context, true);
    }

    public static boolean f() {
        if (f31743e.get() != null) {
            return true;
        }
        return false;
    }

    private final Set g() {
        HashSet hashSet;
        synchronized (this.f31747c) {
            hashSet = new HashSet(this.f31747c);
        }
        return hashSet;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void h(Set set) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            f.l(this.f31745a.g((String) it.next()));
        }
        this.f31746b.b();
    }

    private final synchronized void i(Context context, boolean z10) {
        List<String> asList;
        ZipFile zipFile;
        try {
            if (z10) {
                this.f31745a.k();
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
                Set<u> j10 = this.f31745a.j();
                Set a10 = this.f31746b.a();
                HashSet hashSet = new HashSet();
                Iterator it = j10.iterator();
                while (it.hasNext()) {
                    String b10 = ((u) it.next()).b();
                    if (asList.contains(b10) || a10.contains(li.k.a(b10))) {
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
                    if (!li.k.b(b11)) {
                        hashSet2.add(b11);
                    }
                }
                for (String str : asList) {
                    if (!li.k.b(str)) {
                        hashSet2.add(str);
                    }
                }
                HashSet<u> hashSet3 = new HashSet(j10.size());
                for (u uVar2 : j10) {
                    String b12 = uVar2.b();
                    int i10 = li.k.f35844b;
                    if (b12.startsWith("config.") || hashSet2.contains(li.k.a(uVar2.b()))) {
                        hashSet3.add(uVar2);
                    }
                }
                o oVar = new o(this.f31745a);
                mi.h a11 = mi.i.a();
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
                        if (entry != null && !a11.a(classLoader, this.f31745a.a(uVar3.b()), uVar3.a(), z10)) {
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
                this.f31748d.a(context, hashSet4);
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
                synchronized (this.f31747c) {
                    this.f31747c.addAll(hashSet5);
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
        AtomicReference atomicReference = f31743e;
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
        a aVar2 = (a) f31743e.get();
        if (z11) {
            context2 = context;
            li.h.INSTANCE.a(new mi.e(context2, e.a(), new mi.g(context, aVar2.f31745a, new mi.b()), aVar2.f31745a, new t()));
            li.j.a(new q(aVar2));
            e.a().execute(new Runnable() { // from class: ki.p
                @Override // java.lang.Runnable
                public final void run() {
                    Context context3 = context2;
                    int i10 = a.f31744f;
                    try {
                        li.n.f(context3).b(true);
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
