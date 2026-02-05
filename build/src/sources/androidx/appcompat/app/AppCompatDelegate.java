package androidx.appcompat.app;

import android.app.Activity;
import android.app.Dialog;
import android.app.LocaleManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Build;
import android.os.Bundle;
import android.os.LocaleList;
import android.util.Log;
import android.view.MenuInflater;
import android.view.View;
import android.view.ViewGroup;
import android.window.OnBackInvokedDispatcher;
import androidx.appcompat.app.AppCompatDelegate;
import androidx.appcompat.view.ActionMode;
import androidx.appcompat.widget.Toolbar;
import androidx.appcompat.widget.f1;
import androidx.core.os.LocaleListCompat;
import java.lang.ref.WeakReference;
import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.Queue;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class AppCompatDelegate {

    /* renamed from: d  reason: collision with root package name */
    static c f1089d = new c(new d());

    /* renamed from: e  reason: collision with root package name */
    private static int f1090e = -100;

    /* renamed from: i  reason: collision with root package name */
    private static LocaleListCompat f1091i = null;

    /* renamed from: o  reason: collision with root package name */
    private static LocaleListCompat f1092o = null;

    /* renamed from: p  reason: collision with root package name */
    private static Boolean f1093p = null;

    /* renamed from: q  reason: collision with root package name */
    private static boolean f1094q = false;

    /* renamed from: r  reason: collision with root package name */
    private static final u0.b f1095r = new u0.b();

    /* renamed from: s  reason: collision with root package name */
    private static final Object f1096s = new Object();

    /* renamed from: t  reason: collision with root package name */
    private static final Object f1097t = new Object();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static LocaleList a(String str) {
            return LocaleList.forLanguageTags(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static LocaleList a(Object obj) {
            return ((LocaleManager) obj).getApplicationLocales();
        }

        static void b(Object obj, LocaleList localeList) {
            ((LocaleManager) obj).setApplicationLocales(localeList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Executor {

        /* renamed from: d  reason: collision with root package name */
        private final Object f1098d = new Object();

        /* renamed from: e  reason: collision with root package name */
        final Queue f1099e = new ArrayDeque();

        /* renamed from: i  reason: collision with root package name */
        final Executor f1100i;

        /* renamed from: o  reason: collision with root package name */
        Runnable f1101o;

        c(Executor executor) {
            this.f1100i = executor;
        }

        public static /* synthetic */ void a(c cVar, Runnable runnable) {
            cVar.getClass();
            try {
                runnable.run();
            } finally {
                cVar.b();
            }
        }

        protected void b() {
            synchronized (this.f1098d) {
                try {
                    Runnable runnable = (Runnable) this.f1099e.poll();
                    this.f1101o = runnable;
                    if (runnable != null) {
                        this.f1100i.execute(runnable);
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // java.util.concurrent.Executor
        public void execute(final Runnable runnable) {
            synchronized (this.f1098d) {
                try {
                    this.f1099e.add(new Runnable() { // from class: androidx.appcompat.app.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            AppCompatDelegate.c.a(AppCompatDelegate.c.this, runnable);
                        }
                    });
                    if (this.f1101o == null) {
                        b();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d implements Executor {
        d() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            new Thread(runnable).start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void G(AppCompatDelegate appCompatDelegate) {
        synchronized (f1096s) {
            H(appCompatDelegate);
        }
    }

    private static void H(AppCompatDelegate appCompatDelegate) {
        synchronized (f1096s) {
            try {
                Iterator it = f1095r.iterator();
                while (it.hasNext()) {
                    AppCompatDelegate appCompatDelegate2 = (AppCompatDelegate) ((WeakReference) it.next()).get();
                    if (appCompatDelegate2 == appCompatDelegate || appCompatDelegate2 == null) {
                        it.remove();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static void J(boolean z10) {
        f1.c(z10);
    }

    public static void N(int i10) {
        if (i10 != -1 && i10 != 0 && i10 != 1 && i10 != 2 && i10 != 3) {
            Log.d("AppCompatDelegate", "setDefaultNightMode() called with an unknown mode");
        } else if (f1090e != i10) {
            f1090e = i10;
            g();
        }
    }

    static void T(Context context) {
        if (Build.VERSION.SDK_INT >= 33) {
            ComponentName componentName = new ComponentName(context, "androidx.appcompat.app.AppLocalesMetadataHolderService");
            if (context.getPackageManager().getComponentEnabledSetting(componentName) != 1) {
                if (m().e()) {
                    String b10 = androidx.core.app.f.b(context);
                    Object systemService = context.getSystemService("locale");
                    if (systemService != null) {
                        b.b(systemService, a.a(b10));
                    }
                }
                context.getPackageManager().setComponentEnabledSetting(componentName, 1, 1);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void U(final Context context) {
        if (x(context)) {
            if (Build.VERSION.SDK_INT >= 33) {
                if (!f1094q) {
                    f1089d.execute(new Runnable() { // from class: androidx.appcompat.app.c
                        @Override // java.lang.Runnable
                        public final void run() {
                            AppCompatDelegate.c(context);
                        }
                    });
                    return;
                }
                return;
            }
            synchronized (f1097t) {
                try {
                    LocaleListCompat localeListCompat = f1091i;
                    if (localeListCompat == null) {
                        if (f1092o == null) {
                            f1092o = LocaleListCompat.b(androidx.core.app.f.b(context));
                        }
                        if (f1092o.e()) {
                            return;
                        }
                        f1091i = f1092o;
                    } else if (!localeListCompat.equals(f1092o)) {
                        LocaleListCompat localeListCompat2 = f1091i;
                        f1092o = localeListCompat2;
                        androidx.core.app.f.a(context, localeListCompat2.g());
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public static /* synthetic */ void c(Context context) {
        T(context);
        f1094q = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void d(AppCompatDelegate appCompatDelegate) {
        synchronized (f1096s) {
            H(appCompatDelegate);
            f1095r.add(new WeakReference(appCompatDelegate));
        }
    }

    private static void g() {
        synchronized (f1096s) {
            try {
                Iterator it = f1095r.iterator();
                while (it.hasNext()) {
                    AppCompatDelegate appCompatDelegate = (AppCompatDelegate) ((WeakReference) it.next()).get();
                    if (appCompatDelegate != null) {
                        appCompatDelegate.f();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static AppCompatDelegate j(Activity activity, androidx.appcompat.app.b bVar) {
        return new e(activity, bVar);
    }

    public static AppCompatDelegate k(Dialog dialog, androidx.appcompat.app.b bVar) {
        return new e(dialog, bVar);
    }

    public static LocaleListCompat m() {
        if (Build.VERSION.SDK_INT >= 33) {
            Object r10 = r();
            if (r10 != null) {
                return LocaleListCompat.h(b.a(r10));
            }
        } else {
            LocaleListCompat localeListCompat = f1091i;
            if (localeListCompat != null) {
                return localeListCompat;
            }
        }
        return LocaleListCompat.d();
    }

    public static int o() {
        return f1090e;
    }

    static Object r() {
        Context n10;
        Iterator it = f1095r.iterator();
        while (it.hasNext()) {
            AppCompatDelegate appCompatDelegate = (AppCompatDelegate) ((WeakReference) it.next()).get();
            if (appCompatDelegate != null && (n10 = appCompatDelegate.n()) != null) {
                return n10.getSystemService("locale");
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static LocaleListCompat t() {
        return f1091i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean x(Context context) {
        if (f1093p == null) {
            try {
                Bundle bundle = o.a(context).metaData;
                if (bundle != null) {
                    f1093p = Boolean.valueOf(bundle.getBoolean("autoStoreLocales"));
                }
            } catch (PackageManager.NameNotFoundException unused) {
                Log.d("AppCompatDelegate", "Checking for metadata for AppLocalesMetadataHolderService : Service not found");
                f1093p = Boolean.FALSE;
            }
        }
        return f1093p.booleanValue();
    }

    public abstract void A();

    public abstract void B(Bundle bundle);

    public abstract void C();

    public abstract void D(Bundle bundle);

    public abstract void E();

    public abstract void F();

    public abstract boolean I(int i10);

    public abstract void K(int i10);

    public abstract void L(View view);

    public abstract void M(View view, ViewGroup.LayoutParams layoutParams);

    public void O(OnBackInvokedDispatcher onBackInvokedDispatcher) {
    }

    public abstract void P(Toolbar toolbar);

    public void Q(int i10) {
    }

    public abstract void R(CharSequence charSequence);

    public abstract ActionMode S(ActionMode.Callback callback);

    public abstract void e(View view, ViewGroup.LayoutParams layoutParams);

    public abstract boolean f();

    public void h(Context context) {
    }

    public Context i(Context context) {
        h(context);
        return context;
    }

    public abstract View l(int i10);

    public Context n() {
        return null;
    }

    public abstract ActionBarDrawerToggle$Delegate p();

    public int q() {
        return -100;
    }

    public abstract MenuInflater s();

    public abstract ActionBar u();

    public abstract void v();

    public abstract void w();

    public abstract void y(Configuration configuration);

    public abstract void z(Bundle bundle);
}
