package androidx.core.app;

import android.app.Activity;
import android.app.Application;
import android.content.res.Configuration;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.util.Log;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    protected static final Class f3084a;

    /* renamed from: b  reason: collision with root package name */
    protected static final Field f3085b;

    /* renamed from: c  reason: collision with root package name */
    protected static final Field f3086c;

    /* renamed from: d  reason: collision with root package name */
    protected static final Method f3087d;

    /* renamed from: e  reason: collision with root package name */
    protected static final Method f3088e;

    /* renamed from: f  reason: collision with root package name */
    protected static final Method f3089f;

    /* renamed from: g  reason: collision with root package name */
    private static final Handler f3090g = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ d f3091d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f3092e;

        a(d dVar, Object obj) {
            this.f3091d = dVar;
            this.f3092e = obj;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f3091d.f3097d = this.f3092e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Application f3093d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f3094e;

        b(Application application, d dVar) {
            this.f3093d = application;
            this.f3094e = dVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f3093d.unregisterActivityLifecycleCallbacks(this.f3094e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f3095d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f3096e;

        c(Object obj, Object obj2) {
            this.f3095d = obj;
            this.f3096e = obj2;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                Method method = e.f3087d;
                if (method != null) {
                    method.invoke(this.f3095d, this.f3096e, Boolean.FALSE, "AppCompat recreation");
                } else {
                    e.f3088e.invoke(this.f3095d, this.f3096e, Boolean.FALSE);
                }
            } catch (RuntimeException e10) {
                if (e10.getClass() == RuntimeException.class && e10.getMessage() != null && e10.getMessage().startsWith("Unable to stop")) {
                    throw e10;
                }
            } catch (Throwable th2) {
                Log.e("ActivityRecreator", "Exception while invoking performStopActivity", th2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class d implements Application.ActivityLifecycleCallbacks {

        /* renamed from: d  reason: collision with root package name */
        Object f3097d;

        /* renamed from: e  reason: collision with root package name */
        private Activity f3098e;

        /* renamed from: i  reason: collision with root package name */
        private final int f3099i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f3100o = false;

        /* renamed from: p  reason: collision with root package name */
        private boolean f3101p = false;

        /* renamed from: q  reason: collision with root package name */
        private boolean f3102q = false;

        d(Activity activity) {
            this.f3098e = activity;
            this.f3099i = activity.hashCode();
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityCreated(Activity activity, Bundle bundle) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityDestroyed(Activity activity) {
            if (this.f3098e == activity) {
                this.f3098e = null;
                this.f3101p = true;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityPaused(Activity activity) {
            if (this.f3101p && !this.f3102q && !this.f3100o && e.h(this.f3097d, this.f3099i, activity)) {
                this.f3102q = true;
                this.f3097d = null;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityResumed(Activity activity) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStarted(Activity activity) {
            if (this.f3098e == activity) {
                this.f3100o = true;
            }
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStopped(Activity activity) {
        }
    }

    static {
        Class a10 = a();
        f3084a = a10;
        f3085b = b();
        f3086c = f();
        f3087d = d(a10);
        f3088e = c(a10);
        f3089f = e(a10);
    }

    private static Class a() {
        try {
            return Class.forName("android.app.ActivityThread");
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Field b() {
        try {
            Field declaredField = Activity.class.getDeclaredField("mMainThread");
            declaredField.setAccessible(true);
            return declaredField;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method c(Class cls) {
        if (cls == null) {
            return null;
        }
        try {
            Method declaredMethod = cls.getDeclaredMethod("performStopActivity", IBinder.class, Boolean.TYPE);
            declaredMethod.setAccessible(true);
            return declaredMethod;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method d(Class cls) {
        if (cls == null) {
            return null;
        }
        try {
            Method declaredMethod = cls.getDeclaredMethod("performStopActivity", IBinder.class, Boolean.TYPE, String.class);
            declaredMethod.setAccessible(true);
            return declaredMethod;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method e(Class cls) {
        if (g() && cls != null) {
            try {
                Class cls2 = Integer.TYPE;
                Class cls3 = Boolean.TYPE;
                Method declaredMethod = cls.getDeclaredMethod("requestRelaunchActivity", IBinder.class, List.class, List.class, cls2, cls3, Configuration.class, Configuration.class, cls3, cls3);
                declaredMethod.setAccessible(true);
                return declaredMethod;
            } catch (Throwable unused) {
            }
        }
        return null;
    }

    private static Field f() {
        try {
            Field declaredField = Activity.class.getDeclaredField("mToken");
            declaredField.setAccessible(true);
            return declaredField;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static boolean g() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 != 26 && i10 != 27) {
            return false;
        }
        return true;
    }

    protected static boolean h(Object obj, int i10, Activity activity) {
        try {
            Object obj2 = f3086c.get(activity);
            if (obj2 == obj && activity.hashCode() == i10) {
                f3090g.postAtFrontOfQueue(new c(f3085b.get(activity), obj2));
                return true;
            }
            return false;
        } catch (Throwable th2) {
            Log.e("ActivityRecreator", "Exception while fetching field values", th2);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean i(Activity activity) {
        Object obj;
        if (Build.VERSION.SDK_INT >= 28) {
            activity.recreate();
            return true;
        } else if (g() && f3089f == null) {
            return false;
        } else {
            if (f3088e == null && f3087d == null) {
                return false;
            }
            try {
                Object obj2 = f3086c.get(activity);
                if (obj2 == null || (obj = f3085b.get(activity)) == null) {
                    return false;
                }
                Application application = activity.getApplication();
                d dVar = new d(activity);
                application.registerActivityLifecycleCallbacks(dVar);
                Handler handler = f3090g;
                handler.post(new a(dVar, obj2));
                if (g()) {
                    Method method = f3089f;
                    Boolean bool = Boolean.FALSE;
                    method.invoke(obj, obj2, null, null, 0, bool, null, null, bool, bool);
                } else {
                    activity.recreate();
                }
                handler.post(new b(application, dVar));
                return true;
            } catch (Throwable unused) {
                return false;
            }
        }
    }
}
