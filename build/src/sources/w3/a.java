package w3;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.text.TextUtils;
import android.util.Log;
import androidx.core.content.pm.ShortcutInfoCompat;
import androidx.core.graphics.drawable.IconCompat;
import com.google.common.util.concurrent.ListenableFuture;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import w3.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends androidx.core.content.pm.a {

    /* renamed from: h  reason: collision with root package name */
    private static final Object f51972h = new Object();

    /* renamed from: i  reason: collision with root package name */
    private static volatile a f51973i;

    /* renamed from: a  reason: collision with root package name */
    final Context f51974a;

    /* renamed from: b  reason: collision with root package name */
    final Map f51975b = new u0.a();

    /* renamed from: c  reason: collision with root package name */
    final Map f51976c = new u0.a();

    /* renamed from: d  reason: collision with root package name */
    final ExecutorService f51977d;

    /* renamed from: e  reason: collision with root package name */
    private final ExecutorService f51978e;

    /* renamed from: f  reason: collision with root package name */
    final File f51979f;

    /* renamed from: g  reason: collision with root package name */
    final File f51980g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: w3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0694a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f51981d;

        RunnableC0694a(List list) {
            this.f51981d = list;
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.h(this.f51981d);
            w3.b.f(this.f51981d, a.this.f51979f);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f51983d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f51984e;

        b(ListenableFuture listenableFuture, androidx.concurrent.futures.d dVar) {
            this.f51983d = listenableFuture;
            this.f51984e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f51983d.get();
                this.f51984e.s(null);
            } catch (Exception e10) {
                this.f51984e.t(e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ File f51986d;

        c(File file) {
            this.f51986d = file;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                a.i(this.f51986d);
                a.i(a.this.f51980g);
                a aVar = a.this;
                aVar.f51975b.putAll(w3.b.b(aVar.f51979f, aVar.f51974a));
                a.this.h(new ArrayList(a.this.f51975b.values()));
            } catch (Exception e10) {
                Log.w("ShortcutInfoCompatSaver", "ShortcutInfoCompatSaver started with an exceptions ", e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f51988d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f51989e;

        d(List list, androidx.concurrent.futures.d dVar) {
            this.f51988d = list;
            this.f51989e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            for (String str : this.f51988d) {
                a.this.f51975b.remove(str);
                ListenableFuture listenableFuture = (ListenableFuture) a.this.f51976c.remove(str);
                if (listenableFuture != null) {
                    listenableFuture.cancel(false);
                }
            }
            a.this.p(this.f51989e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f51991d;

        e(androidx.concurrent.futures.d dVar) {
            this.f51991d = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.f51975b.clear();
            for (ListenableFuture listenableFuture : a.this.f51976c.values()) {
                listenableFuture.cancel(false);
            }
            a.this.f51976c.clear();
            a.this.p(this.f51991d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f implements Callable {
        f() {
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public ArrayList call() {
            ArrayList arrayList = new ArrayList();
            for (b.a aVar : a.this.f51975b.values()) {
                arrayList.add(new ShortcutInfoCompat.b(aVar.f52012c).a());
            }
            return arrayList;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f51994d;

        g(String str) {
            this.f51994d = str;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public b.a call() {
            return (b.a) a.this.f51975b.get(this.f51994d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class h implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ b.a f51996d;

        h(b.a aVar) {
            this.f51996d = aVar;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Bitmap call() {
            return BitmapFactory.decodeFile(this.f51996d.f52011b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f51998d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f51999e;

        /* renamed from: w3.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class RunnableC0695a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f52001d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ListenableFuture f52002e;

            RunnableC0695a(String str, ListenableFuture listenableFuture) {
                this.f52001d = str;
                this.f52002e = listenableFuture;
            }

            @Override // java.lang.Runnable
            public void run() {
                a.this.f51976c.remove(this.f52001d);
                if (this.f52002e.isCancelled()) {
                    return;
                }
                try {
                    this.f52002e.get();
                } catch (Exception e10) {
                    i.this.f51999e.t(e10);
                }
            }
        }

        i(List list, androidx.concurrent.futures.d dVar) {
            this.f51998d = list;
            this.f51999e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            Bitmap bitmap;
            for (ShortcutInfoCompat shortcutInfoCompat : this.f51998d) {
                Set d10 = shortcutInfoCompat.d();
                if (d10 != null && !d10.isEmpty()) {
                    b.a f10 = a.this.f(shortcutInfoCompat);
                    IconCompat f11 = shortcutInfoCompat.f();
                    if (f10.f52011b != null) {
                        bitmap = f11.m();
                    } else {
                        bitmap = null;
                    }
                    String g10 = shortcutInfoCompat.g();
                    a.this.f51975b.put(g10, f10);
                    if (bitmap != null) {
                        ListenableFuture o10 = a.this.o(bitmap, f10.f52011b);
                        ListenableFuture listenableFuture = (ListenableFuture) a.this.f51976c.put(g10, o10);
                        if (listenableFuture != null) {
                            listenableFuture.cancel(false);
                        }
                        o10.a(new RunnableC0695a(g10, o10), a.this.f51977d);
                    }
                }
            }
            a.this.p(this.f51999e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class j implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Bitmap f52004d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f52005e;

        j(Bitmap bitmap, String str) {
            this.f52004d = bitmap;
            this.f52005e = str;
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.n(this.f52004d, this.f52005e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class k implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f52007d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Runnable f52008e;

        k(androidx.concurrent.futures.d dVar, Runnable runnable) {
            this.f52007d = dVar;
            this.f52008e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f52007d.isCancelled()) {
                return;
            }
            try {
                this.f52008e.run();
                this.f52007d.s(null);
            } catch (Exception e10) {
                this.f52007d.t(e10);
            }
        }
    }

    a(Context context, ExecutorService executorService, ExecutorService executorService2) {
        this.f51974a = context.getApplicationContext();
        this.f51977d = executorService;
        this.f51978e = executorService2;
        File file = new File(context.getFilesDir(), "ShortcutInfoCompatSaver_share_targets");
        this.f51980g = new File(file, "ShortcutInfoCompatSaver_share_targets_bitmaps");
        this.f51979f = new File(file, "targets.xml");
        executorService.submit(new c(file));
    }

    static ExecutorService g() {
        return new ThreadPoolExecutor(0, 1, 20L, TimeUnit.SECONDS, new LinkedBlockingQueue());
    }

    static boolean i(File file) {
        if (file.exists() && !file.isDirectory() && !file.delete()) {
            return false;
        }
        if (!file.exists()) {
            return file.mkdirs();
        }
        return true;
    }

    public static a j(Context context) {
        if (f51973i == null) {
            synchronized (f51972h) {
                try {
                    if (f51973i == null) {
                        f51973i = new a(context, g(), g());
                    }
                } finally {
                }
            }
        }
        return f51973i;
    }

    private ListenableFuture q(Runnable runnable) {
        androidx.concurrent.futures.d w10 = androidx.concurrent.futures.d.w();
        this.f51978e.submit(new k(w10, runnable));
        return w10;
    }

    @Override // androidx.core.content.pm.a
    public List b() {
        return (List) this.f51977d.submit(new f()).get();
    }

    @Override // androidx.core.content.pm.a
    /* renamed from: e */
    public ListenableFuture a(List list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(new ShortcutInfoCompat.b((ShortcutInfoCompat) it.next()).a());
        }
        androidx.concurrent.futures.d w10 = androidx.concurrent.futures.d.w();
        this.f51977d.submit(new i(arrayList, w10));
        return w10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:9:0x0012, code lost:
        if (r2 != 5) goto L14;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    w3.b.a f(androidx.core.content.pm.ShortcutInfoCompat r5) {
        /*
            r4 = this;
            androidx.core.graphics.drawable.IconCompat r0 = r5.f()
            r1 = 0
            if (r0 == 0) goto L3b
            int r2 = r0.p()
            r3 = 1
            if (r2 == r3) goto L25
            r3 = 2
            if (r2 == r3) goto L15
            r0 = 5
            if (r2 == r0) goto L25
            goto L3b
        L15:
            android.content.Context r2 = r4.f51974a
            android.content.res.Resources r2 = r2.getResources()
            int r0 = r0.n()
            java.lang.String r0 = r2.getResourceName(r0)
            r2 = r1
            goto L3d
        L25:
            java.io.File r0 = new java.io.File
            java.io.File r2 = r4.f51980g
            java.util.UUID r3 = java.util.UUID.randomUUID()
            java.lang.String r3 = r3.toString()
            r0.<init>(r2, r3)
            java.lang.String r0 = r0.getAbsolutePath()
            r2 = r0
            r0 = r1
            goto L3d
        L3b:
            r0 = r1
            r2 = r0
        L3d:
            androidx.core.content.pm.ShortcutInfoCompat$b r3 = new androidx.core.content.pm.ShortcutInfoCompat$b
            r3.<init>(r5)
            androidx.core.content.pm.ShortcutInfoCompat$b r5 = r3.e(r1)
            androidx.core.content.pm.ShortcutInfoCompat r5 = r5.a()
            w3.b$a r1 = new w3.b$a
            r1.<init>(r5, r0, r2)
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: w3.a.f(androidx.core.content.pm.ShortcutInfoCompat):w3.b$a");
    }

    void h(List list) {
        File[] listFiles;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            b.a aVar = (b.a) it.next();
            if (!TextUtils.isEmpty(aVar.f52011b)) {
                arrayList.add(aVar.f52011b);
            }
        }
        for (File file : this.f51980g.listFiles()) {
            if (!arrayList.contains(file.getAbsolutePath())) {
                file.delete();
            }
        }
    }

    public IconCompat k(String str) {
        int i10;
        Bitmap bitmap;
        b.a aVar = (b.a) this.f51977d.submit(new g(str)).get();
        if (aVar == null) {
            return null;
        }
        if (!TextUtils.isEmpty(aVar.f52010a)) {
            try {
                i10 = this.f51974a.getResources().getIdentifier(aVar.f52010a, null, null);
            } catch (Exception unused) {
                i10 = 0;
            }
            if (i10 != 0) {
                return IconCompat.k(this.f51974a, i10);
            }
        }
        if (TextUtils.isEmpty(aVar.f52011b) || (bitmap = (Bitmap) this.f51978e.submit(new h(aVar)).get()) == null) {
            return null;
        }
        return IconCompat.h(bitmap);
    }

    @Override // androidx.core.content.pm.a
    /* renamed from: l */
    public ListenableFuture c() {
        androidx.concurrent.futures.d w10 = androidx.concurrent.futures.d.w();
        this.f51977d.submit(new e(w10));
        return w10;
    }

    @Override // androidx.core.content.pm.a
    /* renamed from: m */
    public ListenableFuture d(List list) {
        ArrayList arrayList = new ArrayList(list);
        androidx.concurrent.futures.d w10 = androidx.concurrent.futures.d.w();
        this.f51977d.submit(new d(arrayList, w10));
        return w10;
    }

    void n(Bitmap bitmap, String str) {
        if (bitmap != null) {
            if (!TextUtils.isEmpty(str)) {
                try {
                    FileOutputStream fileOutputStream = new FileOutputStream(new File(str));
                    try {
                        if (bitmap.compress(Bitmap.CompressFormat.PNG, 100, fileOutputStream)) {
                            fileOutputStream.close();
                            return;
                        }
                        Log.wtf("ShortcutInfoCompatSaver", "Unable to compress bitmap");
                        throw new RuntimeException("Unable to compress bitmap for saving " + str);
                    } catch (Throwable th2) {
                        try {
                            fileOutputStream.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                        throw th2;
                    }
                } catch (IOException | OutOfMemoryError | RuntimeException e10) {
                    Log.wtf("ShortcutInfoCompatSaver", "Unable to write bitmap to file", e10);
                    throw new RuntimeException("Unable to write bitmap to file " + str, e10);
                }
            }
            throw new IllegalArgumentException("path is empty");
        }
        throw new IllegalArgumentException("bitmap is null");
    }

    ListenableFuture o(Bitmap bitmap, String str) {
        return q(new j(bitmap, str));
    }

    void p(androidx.concurrent.futures.d dVar) {
        ListenableFuture q10 = q(new RunnableC0694a(new ArrayList(this.f51975b.values())));
        q10.a(new b(q10, dVar), this.f51977d);
    }
}
