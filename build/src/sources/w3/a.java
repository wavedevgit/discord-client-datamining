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
    private static final Object f52186h = new Object();

    /* renamed from: i  reason: collision with root package name */
    private static volatile a f52187i;

    /* renamed from: a  reason: collision with root package name */
    final Context f52188a;

    /* renamed from: b  reason: collision with root package name */
    final Map f52189b = new u0.a();

    /* renamed from: c  reason: collision with root package name */
    final Map f52190c = new u0.a();

    /* renamed from: d  reason: collision with root package name */
    final ExecutorService f52191d;

    /* renamed from: e  reason: collision with root package name */
    private final ExecutorService f52192e;

    /* renamed from: f  reason: collision with root package name */
    final File f52193f;

    /* renamed from: g  reason: collision with root package name */
    final File f52194g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: w3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0715a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f52195d;

        RunnableC0715a(List list) {
            this.f52195d = list;
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.h(this.f52195d);
            w3.b.f(this.f52195d, a.this.f52193f);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f52197d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f52198e;

        b(ListenableFuture listenableFuture, androidx.concurrent.futures.d dVar) {
            this.f52197d = listenableFuture;
            this.f52198e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f52197d.get();
                this.f52198e.s(null);
            } catch (Exception e10) {
                this.f52198e.t(e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ File f52200d;

        c(File file) {
            this.f52200d = file;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                a.i(this.f52200d);
                a.i(a.this.f52194g);
                a aVar = a.this;
                aVar.f52189b.putAll(w3.b.b(aVar.f52193f, aVar.f52188a));
                a.this.h(new ArrayList(a.this.f52189b.values()));
            } catch (Exception e10) {
                Log.w("ShortcutInfoCompatSaver", "ShortcutInfoCompatSaver started with an exceptions ", e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f52202d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f52203e;

        d(List list, androidx.concurrent.futures.d dVar) {
            this.f52202d = list;
            this.f52203e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            for (String str : this.f52202d) {
                a.this.f52189b.remove(str);
                ListenableFuture listenableFuture = (ListenableFuture) a.this.f52190c.remove(str);
                if (listenableFuture != null) {
                    listenableFuture.cancel(false);
                }
            }
            a.this.p(this.f52203e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f52205d;

        e(androidx.concurrent.futures.d dVar) {
            this.f52205d = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.f52189b.clear();
            for (ListenableFuture listenableFuture : a.this.f52190c.values()) {
                listenableFuture.cancel(false);
            }
            a.this.f52190c.clear();
            a.this.p(this.f52205d);
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
            for (b.a aVar : a.this.f52189b.values()) {
                arrayList.add(new ShortcutInfoCompat.b(aVar.f52226c).a());
            }
            return arrayList;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f52208d;

        g(String str) {
            this.f52208d = str;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public b.a call() {
            return (b.a) a.this.f52189b.get(this.f52208d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class h implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ b.a f52210d;

        h(b.a aVar) {
            this.f52210d = aVar;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Bitmap call() {
            return BitmapFactory.decodeFile(this.f52210d.f52225b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f52212d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f52213e;

        /* renamed from: w3.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class RunnableC0716a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f52215d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ListenableFuture f52216e;

            RunnableC0716a(String str, ListenableFuture listenableFuture) {
                this.f52215d = str;
                this.f52216e = listenableFuture;
            }

            @Override // java.lang.Runnable
            public void run() {
                a.this.f52190c.remove(this.f52215d);
                if (this.f52216e.isCancelled()) {
                    return;
                }
                try {
                    this.f52216e.get();
                } catch (Exception e10) {
                    i.this.f52213e.t(e10);
                }
            }
        }

        i(List list, androidx.concurrent.futures.d dVar) {
            this.f52212d = list;
            this.f52213e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            Bitmap bitmap;
            for (ShortcutInfoCompat shortcutInfoCompat : this.f52212d) {
                Set d10 = shortcutInfoCompat.d();
                if (d10 != null && !d10.isEmpty()) {
                    b.a f10 = a.this.f(shortcutInfoCompat);
                    IconCompat f11 = shortcutInfoCompat.f();
                    if (f10.f52225b != null) {
                        bitmap = f11.m();
                    } else {
                        bitmap = null;
                    }
                    String g10 = shortcutInfoCompat.g();
                    a.this.f52189b.put(g10, f10);
                    if (bitmap != null) {
                        ListenableFuture o10 = a.this.o(bitmap, f10.f52225b);
                        ListenableFuture listenableFuture = (ListenableFuture) a.this.f52190c.put(g10, o10);
                        if (listenableFuture != null) {
                            listenableFuture.cancel(false);
                        }
                        o10.a(new RunnableC0716a(g10, o10), a.this.f52191d);
                    }
                }
            }
            a.this.p(this.f52213e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class j implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Bitmap f52218d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f52219e;

        j(Bitmap bitmap, String str) {
            this.f52218d = bitmap;
            this.f52219e = str;
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.n(this.f52218d, this.f52219e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class k implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ androidx.concurrent.futures.d f52221d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Runnable f52222e;

        k(androidx.concurrent.futures.d dVar, Runnable runnable) {
            this.f52221d = dVar;
            this.f52222e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.f52221d.isCancelled()) {
                return;
            }
            try {
                this.f52222e.run();
                this.f52221d.s(null);
            } catch (Exception e10) {
                this.f52221d.t(e10);
            }
        }
    }

    a(Context context, ExecutorService executorService, ExecutorService executorService2) {
        this.f52188a = context.getApplicationContext();
        this.f52191d = executorService;
        this.f52192e = executorService2;
        File file = new File(context.getFilesDir(), "ShortcutInfoCompatSaver_share_targets");
        this.f52194g = new File(file, "ShortcutInfoCompatSaver_share_targets_bitmaps");
        this.f52193f = new File(file, "targets.xml");
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
        if (f52187i == null) {
            synchronized (f52186h) {
                try {
                    if (f52187i == null) {
                        f52187i = new a(context, g(), g());
                    }
                } finally {
                }
            }
        }
        return f52187i;
    }

    private ListenableFuture q(Runnable runnable) {
        androidx.concurrent.futures.d w10 = androidx.concurrent.futures.d.w();
        this.f52192e.submit(new k(w10, runnable));
        return w10;
    }

    @Override // androidx.core.content.pm.a
    public List b() {
        return (List) this.f52191d.submit(new f()).get();
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
        this.f52191d.submit(new i(arrayList, w10));
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
            android.content.Context r2 = r4.f52188a
            android.content.res.Resources r2 = r2.getResources()
            int r0 = r0.n()
            java.lang.String r0 = r2.getResourceName(r0)
            r2 = r1
            goto L3d
        L25:
            java.io.File r0 = new java.io.File
            java.io.File r2 = r4.f52194g
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
            if (!TextUtils.isEmpty(aVar.f52225b)) {
                arrayList.add(aVar.f52225b);
            }
        }
        for (File file : this.f52194g.listFiles()) {
            if (!arrayList.contains(file.getAbsolutePath())) {
                file.delete();
            }
        }
    }

    public IconCompat k(String str) {
        int i10;
        Bitmap bitmap;
        b.a aVar = (b.a) this.f52191d.submit(new g(str)).get();
        if (aVar == null) {
            return null;
        }
        if (!TextUtils.isEmpty(aVar.f52224a)) {
            try {
                i10 = this.f52188a.getResources().getIdentifier(aVar.f52224a, null, null);
            } catch (Exception unused) {
                i10 = 0;
            }
            if (i10 != 0) {
                return IconCompat.k(this.f52188a, i10);
            }
        }
        if (TextUtils.isEmpty(aVar.f52225b) || (bitmap = (Bitmap) this.f52192e.submit(new h(aVar)).get()) == null) {
            return null;
        }
        return IconCompat.h(bitmap);
    }

    @Override // androidx.core.content.pm.a
    /* renamed from: l */
    public ListenableFuture c() {
        androidx.concurrent.futures.d w10 = androidx.concurrent.futures.d.w();
        this.f52191d.submit(new e(w10));
        return w10;
    }

    @Override // androidx.core.content.pm.a
    /* renamed from: m */
    public ListenableFuture d(List list) {
        ArrayList arrayList = new ArrayList(list);
        androidx.concurrent.futures.d w10 = androidx.concurrent.futures.d.w();
        this.f52191d.submit(new d(arrayList, w10));
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
        ListenableFuture q10 = q(new RunnableC0715a(new ArrayList(this.f52189b.values())));
        q10.a(new b(q10, dVar), this.f52191d);
    }
}
