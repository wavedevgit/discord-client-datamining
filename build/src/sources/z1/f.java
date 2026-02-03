package z1;

import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.Typeface;
import android.os.Build;
import androidx.collection.LruCache;
import androidx.collection.SimpleArrayMap;
import androidx.core.util.Consumer;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import r1.k;
import x.d0;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    static final LruCache f55384a = new LruCache(16);

    /* renamed from: b  reason: collision with root package name */
    private static final ExecutorService f55385b = h.a("fonts-androidx", 10, 10000);

    /* renamed from: c  reason: collision with root package name */
    static final Object f55386c = new Object();

    /* renamed from: d  reason: collision with root package name */
    static final SimpleArrayMap f55387d = new SimpleArrayMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f55388d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Context f55389e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ z1.e f55390i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f55391o;

        a(String str, Context context, z1.e eVar, int i10) {
            this.f55388d = str;
            this.f55389e = context;
            this.f55390i = eVar;
            this.f55391o = i10;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public e call() {
            List a10;
            String str = this.f55388d;
            Context context = this.f55389e;
            a10 = d0.a(new Object[]{this.f55390i});
            return f.c(str, context, a10, this.f55391o);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Consumer {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ z1.a f55392a;

        b(z1.a aVar) {
            this.f55392a = aVar;
        }

        @Override // androidx.core.util.Consumer
        /* renamed from: a */
        public void accept(e eVar) {
            if (eVar == null) {
                eVar = new e(-3);
            }
            this.f55392a.b(eVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f55393d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Context f55394e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ List f55395i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f55396o;

        c(String str, Context context, List list, int i10) {
            this.f55393d = str;
            this.f55394e = context;
            this.f55395i = list;
            this.f55396o = i10;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public e call() {
            try {
                return f.c(this.f55393d, this.f55394e, this.f55395i, this.f55396o);
            } catch (Throwable unused) {
                return new e(-3);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements Consumer {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ String f55397a;

        d(String str) {
            this.f55397a = str;
        }

        @Override // androidx.core.util.Consumer
        /* renamed from: a */
        public void accept(e eVar) {
            synchronized (f.f55386c) {
                try {
                    SimpleArrayMap simpleArrayMap = f.f55387d;
                    ArrayList arrayList = (ArrayList) simpleArrayMap.get(this.f55397a);
                    if (arrayList == null) {
                        return;
                    }
                    simpleArrayMap.remove(this.f55397a);
                    for (int i10 = 0; i10 < arrayList.size(); i10++) {
                        ((Consumer) arrayList.get(i10)).accept(eVar);
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    private static String a(List list, int i10) {
        StringBuilder sb2 = new StringBuilder();
        for (int i11 = 0; i11 < list.size(); i11++) {
            sb2.append(((z1.e) list.get(i11)).d());
            sb2.append("-");
            sb2.append(i10);
            if (i11 < list.size() - 1) {
                sb2.append(";");
            }
        }
        return sb2.toString();
    }

    private static int b(g.a aVar) {
        int i10 = 1;
        if (aVar.e() != 0) {
            if (aVar.e() != 1) {
                return -3;
            }
            return -2;
        }
        g.b[] c10 = aVar.c();
        if (c10 != null && c10.length != 0) {
            i10 = 0;
            for (g.b bVar : c10) {
                int b10 = bVar.b();
                if (b10 != 0) {
                    if (b10 < 0) {
                        return -3;
                    }
                    return b10;
                }
            }
        }
        return i10;
    }

    static e c(String str, Context context, List list, int i10) {
        Typeface b10;
        c4.a.c("getFontSync");
        try {
            LruCache lruCache = f55384a;
            Typeface typeface = (Typeface) lruCache.d(str);
            if (typeface != null) {
                return new e(typeface);
            }
            g.a e10 = z1.d.e(context, list, null);
            int b11 = b(e10);
            if (b11 != 0) {
                return new e(b11);
            }
            if (e10.f() && Build.VERSION.SDK_INT >= 29) {
                b10 = k.c(context, null, e10.d(), i10);
            } else {
                b10 = k.b(context, null, e10.c(), i10);
            }
            if (b10 != null) {
                lruCache.f(str, b10);
                return new e(b10);
            }
            return new e(-3);
        } catch (PackageManager.NameNotFoundException unused) {
            return new e(-1);
        } finally {
            c4.a.f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Typeface d(Context context, List list, int i10, Executor executor, z1.a aVar) {
        String a10 = a(list, i10);
        Typeface typeface = (Typeface) f55384a.d(a10);
        if (typeface != null) {
            aVar.b(new e(typeface));
            return typeface;
        }
        b bVar = new b(aVar);
        synchronized (f55386c) {
            try {
                SimpleArrayMap simpleArrayMap = f55387d;
                ArrayList arrayList = (ArrayList) simpleArrayMap.get(a10);
                if (arrayList != null) {
                    arrayList.add(bVar);
                    return null;
                }
                ArrayList arrayList2 = new ArrayList();
                arrayList2.add(bVar);
                simpleArrayMap.put(a10, arrayList2);
                c cVar = new c(a10, context, list, i10);
                if (executor == null) {
                    executor = f55385b;
                }
                h.c(executor, cVar, new d(a10));
                return null;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Typeface e(Context context, z1.e eVar, z1.a aVar, int i10, int i11) {
        List a10;
        List a11;
        a10 = d0.a(new Object[]{eVar});
        String a12 = a(a10, i10);
        Typeface typeface = (Typeface) f55384a.d(a12);
        if (typeface != null) {
            aVar.b(new e(typeface));
            return typeface;
        } else if (i11 == -1) {
            a11 = d0.a(new Object[]{eVar});
            e c10 = c(a12, context, a11, i10);
            aVar.b(c10);
            return c10.f55398a;
        } else {
            try {
                e eVar2 = (e) h.d(f55385b, new a(a12, context, eVar, i10), i11);
                aVar.b(eVar2);
                return eVar2.f55398a;
            } catch (InterruptedException unused) {
                aVar.b(new e(-3));
                return null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        final Typeface f55398a;

        /* renamed from: b  reason: collision with root package name */
        final int f55399b;

        e(int i10) {
            this.f55398a = null;
            this.f55399b = i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean a() {
            if (this.f55399b == 0) {
                return true;
            }
            return false;
        }

        e(Typeface typeface) {
            this.f55398a = typeface;
            this.f55399b = 0;
        }
    }
}
