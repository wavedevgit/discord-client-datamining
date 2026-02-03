package io.sentry.android.core;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.HandlerThread;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.SentryLevel;
import io.sentry.android.core.w0;
import io.sentry.k7;
import java.io.Closeable;
import java.util.HashMap;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SystemEventsBreadcrumbsIntegration implements io.sentry.k1, Closeable, w0.a {

    /* renamed from: d  reason: collision with root package name */
    private final Context f28409d;

    /* renamed from: e  reason: collision with root package name */
    volatile b f28410e;

    /* renamed from: i  reason: collision with root package name */
    private SentryAndroidOptions f28411i;

    /* renamed from: o  reason: collision with root package name */
    private io.sentry.w0 f28412o;

    /* renamed from: p  reason: collision with root package name */
    private final String[] f28413p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f28414q;

    /* renamed from: r  reason: collision with root package name */
    private volatile boolean f28415r;

    /* renamed from: s  reason: collision with root package name */
    private volatile IntentFilter f28416s;

    /* renamed from: t  reason: collision with root package name */
    private volatile HandlerThread f28417t;

    /* renamed from: u  reason: collision with root package name */
    private final AtomicBoolean f28418u;

    /* renamed from: v  reason: collision with root package name */
    private final io.sentry.util.a f28419v;

    /* renamed from: w  reason: collision with root package name */
    private a f28420w;

    /* renamed from: x  reason: collision with root package name */
    Handler f28421x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Integer f28422a;

        /* renamed from: b  reason: collision with root package name */
        private final Boolean f28423b;

        a(Integer num, Boolean bool) {
            this.f28422a = num;
            this.f28423b = bool;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!io.sentry.util.y.a(this.f28422a, aVar.f28422a) || !io.sentry.util.y.a(this.f28423b, aVar.f28423b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return io.sentry.util.y.b(this.f28422a, this.f28423b);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        private final io.sentry.w0 f28424a;

        /* renamed from: b  reason: collision with root package name */
        private final SentryAndroidOptions f28425b;

        /* renamed from: c  reason: collision with root package name */
        private final io.sentry.android.core.internal.util.n f28426c = new io.sentry.android.core.internal.util.n(io.sentry.android.core.internal.util.f.b(), LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE, 0);

        /* renamed from: d  reason: collision with root package name */
        private final char[] f28427d = new char[64];

        b(io.sentry.w0 w0Var, SentryAndroidOptions sentryAndroidOptions) {
            this.f28424a = w0Var;
            this.f28425b = sentryAndroidOptions;
        }

        private Breadcrumb a(long j10, Intent intent, String str, a aVar) {
            Bundle extras;
            Breadcrumb breadcrumb = new Breadcrumb(j10);
            breadcrumb.E("system");
            breadcrumb.z("device.event");
            String b10 = b(str);
            if (b10 != null) {
                breadcrumb.A("action", b10);
            }
            if (aVar != null) {
                if (aVar.f28422a != null) {
                    breadcrumb.A("level", aVar.f28422a);
                }
                if (aVar.f28423b != null) {
                    breadcrumb.A("charging", aVar.f28423b);
                }
            } else if (this.f28425b.isEnableSystemEventBreadcrumbsExtras() && (extras = intent.getExtras()) != null && !extras.isEmpty()) {
                HashMap hashMap = new HashMap(extras.size());
                for (String str2 : extras.keySet()) {
                    try {
                        Object obj = extras.get(str2);
                        if (obj != null) {
                            hashMap.put(str2, obj.toString());
                        }
                    } catch (Throwable th2) {
                        this.f28425b.getLogger().a(SentryLevel.ERROR, th2, "%s key of the %s action threw an error.", str2, str);
                    }
                }
                breadcrumb.A("extras", hashMap);
            }
            breadcrumb.B(SentryLevel.INFO);
            return breadcrumb;
        }

        String b(String str) {
            if (str == null) {
                return null;
            }
            int length = str.length();
            int length2 = this.f28427d.length;
            for (int i10 = length - 1; i10 >= 0; i10--) {
                char charAt = str.charAt(i10);
                if (charAt == '.') {
                    char[] cArr = this.f28427d;
                    return new String(cArr, length2, cArr.length - length2);
                } else if (length2 == 0) {
                    return io.sentry.util.f0.d(str);
                } else {
                    length2--;
                    this.f28427d[length2] = charAt;
                }
            }
            return str;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            a aVar;
            String action = intent.getAction();
            Integer num = null;
            if ("android.intent.action.BATTERY_CHANGED".equals(action)) {
                if (!this.f28426c.a()) {
                    Float e10 = m1.e(intent, this.f28425b);
                    if (e10 != null) {
                        num = Integer.valueOf(e10.intValue());
                    }
                    a aVar2 = new a(num, m1.v(intent, this.f28425b));
                    if (!aVar2.equals(SystemEventsBreadcrumbsIntegration.this.f28420w)) {
                        SystemEventsBreadcrumbsIntegration.this.f28420w = aVar2;
                        aVar = aVar2;
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            } else {
                aVar = null;
            }
            Breadcrumb a10 = a(System.currentTimeMillis(), intent, action, aVar);
            Hint hint = new Hint();
            hint.k("android:intent", intent);
            this.f28424a.g(a10, hint);
        }
    }

    public SystemEventsBreadcrumbsIntegration(Context context) {
        this(context, F(), null);
    }

    private static String[] F() {
        return new String[]{"android.intent.action.ACTION_SHUTDOWN", "android.intent.action.AIRPLANE_MODE", "android.intent.action.BATTERY_CHANGED", "android.intent.action.CAMERA_BUTTON", "android.intent.action.CONFIGURATION_CHANGED", "android.intent.action.DATE_CHANGED", "android.intent.action.DEVICE_STORAGE_LOW", "android.intent.action.DEVICE_STORAGE_OK", "android.intent.action.DOCK_EVENT", "android.intent.action.DREAMING_STARTED", "android.intent.action.DREAMING_STOPPED", "android.intent.action.INPUT_METHOD_CHANGED", "android.intent.action.LOCALE_CHANGED", "android.intent.action.SCREEN_OFF", "android.intent.action.SCREEN_ON", "android.intent.action.TIMEZONE_CHANGED", "android.intent.action.TIME_SET", "android.os.action.DEVICE_IDLE_MODE_CHANGED", "android.os.action.POWER_SAVE_MODE_CHANGED"};
    }

    private void L(final io.sentry.w0 w0Var, final SentryAndroidOptions sentryAndroidOptions) {
        if (sentryAndroidOptions.isEnableSystemEventBreadcrumbs() && !this.f28414q && !this.f28415r && this.f28410e == null) {
            try {
                sentryAndroidOptions.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.r2
                    @Override // java.lang.Runnable
                    public final void run() {
                        SystemEventsBreadcrumbsIntegration.n(SystemEventsBreadcrumbsIntegration.this, w0Var, sentryAndroidOptions);
                    }
                });
            } catch (Throwable unused) {
                sentryAndroidOptions.getLogger().c(SentryLevel.WARNING, "Failed to start SystemEventsBreadcrumbsIntegration on executor thread.", new Object[0]);
            }
        }
    }

    private void N() {
        SentryAndroidOptions sentryAndroidOptions = this.f28411i;
        if (sentryAndroidOptions == null) {
            return;
        }
        try {
            sentryAndroidOptions.getExecutorService().submit(new Runnable() { // from class: io.sentry.android.core.q2
                @Override // java.lang.Runnable
                public final void run() {
                    SystemEventsBreadcrumbsIntegration.this.V();
                }
            });
        } catch (RejectedExecutionException unused) {
            V();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V() {
        io.sentry.a1 a10 = this.f28419v.a();
        try {
            this.f28415r = true;
            b bVar = this.f28410e;
            this.f28410e = null;
            if (a10 != null) {
                a10.close();
            }
            if (bVar != null) {
                this.f28409d.unregisterReceiver(bVar);
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:35:0x009d, code lost:
        r0.close();
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x00a0, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static /* synthetic */ void n(io.sentry.android.core.SystemEventsBreadcrumbsIntegration r6, io.sentry.w0 r7, io.sentry.android.core.SentryAndroidOptions r8) {
        /*
            io.sentry.util.a r0 = r6.f28419v
            io.sentry.a1 r0 = r0.a()
            boolean r1 = r6.f28414q     // Catch: java.lang.Throwable -> L37
            if (r1 != 0) goto L9b
            boolean r1 = r6.f28415r     // Catch: java.lang.Throwable -> L37
            if (r1 != 0) goto L9b
            io.sentry.android.core.SystemEventsBreadcrumbsIntegration$b r1 = r6.f28410e     // Catch: java.lang.Throwable -> L37
            if (r1 == 0) goto L14
            goto L9b
        L14:
            io.sentry.android.core.SystemEventsBreadcrumbsIntegration$b r1 = new io.sentry.android.core.SystemEventsBreadcrumbsIntegration$b     // Catch: java.lang.Throwable -> L37
            r1.<init>(r7, r8)     // Catch: java.lang.Throwable -> L37
            r6.f28410e = r1     // Catch: java.lang.Throwable -> L37
            android.content.IntentFilter r7 = r6.f28416s     // Catch: java.lang.Throwable -> L37
            r1 = 0
            if (r7 != 0) goto L39
            android.content.IntentFilter r7 = new android.content.IntentFilter     // Catch: java.lang.Throwable -> L37
            r7.<init>()     // Catch: java.lang.Throwable -> L37
            r6.f28416s = r7     // Catch: java.lang.Throwable -> L37
            java.lang.String[] r7 = r6.f28413p     // Catch: java.lang.Throwable -> L37
            int r2 = r7.length     // Catch: java.lang.Throwable -> L37
            r3 = r1
        L2b:
            if (r3 >= r2) goto L39
            r4 = r7[r3]     // Catch: java.lang.Throwable -> L37
            android.content.IntentFilter r5 = r6.f28416s     // Catch: java.lang.Throwable -> L37
            r5.addAction(r4)     // Catch: java.lang.Throwable -> L37
            int r3 = r3 + 1
            goto L2b
        L37:
            r6 = move-exception
            goto La1
        L39:
            android.os.Handler r7 = r6.f28421x     // Catch: java.lang.Throwable -> L37
            if (r7 != 0) goto L51
            android.os.HandlerThread r7 = r6.f28417t     // Catch: java.lang.Throwable -> L37
            if (r7 != 0) goto L51
            android.os.HandlerThread r7 = new android.os.HandlerThread     // Catch: java.lang.Throwable -> L37
            java.lang.String r2 = "SystemEventsReceiver"
            r3 = 10
            r7.<init>(r2, r3)     // Catch: java.lang.Throwable -> L37
            r6.f28417t = r7     // Catch: java.lang.Throwable -> L37
            android.os.HandlerThread r7 = r6.f28417t     // Catch: java.lang.Throwable -> L37
            r7.start()     // Catch: java.lang.Throwable -> L37
        L51:
            android.os.Handler r7 = r6.f28421x     // Catch: java.lang.Throwable -> L86
            if (r7 == 0) goto L56
            goto L61
        L56:
            android.os.Handler r7 = new android.os.Handler     // Catch: java.lang.Throwable -> L86
            android.os.HandlerThread r2 = r6.f28417t     // Catch: java.lang.Throwable -> L86
            android.os.Looper r2 = r2.getLooper()     // Catch: java.lang.Throwable -> L86
            r7.<init>(r2)     // Catch: java.lang.Throwable -> L86
        L61:
            android.content.Context r2 = r6.f28409d     // Catch: java.lang.Throwable -> L86
            io.sentry.android.core.SystemEventsBreadcrumbsIntegration$b r3 = r6.f28410e     // Catch: java.lang.Throwable -> L86
            android.content.IntentFilter r4 = r6.f28416s     // Catch: java.lang.Throwable -> L86
            io.sentry.android.core.e1.t(r2, r8, r3, r4, r7)     // Catch: java.lang.Throwable -> L86
            java.util.concurrent.atomic.AtomicBoolean r6 = r6.f28418u     // Catch: java.lang.Throwable -> L86
            r7 = 1
            boolean r6 = r6.getAndSet(r7)     // Catch: java.lang.Throwable -> L86
            if (r6 != 0) goto L95
            io.sentry.ILogger r6 = r8.getLogger()     // Catch: java.lang.Throwable -> L86
            io.sentry.SentryLevel r7 = io.sentry.SentryLevel.DEBUG     // Catch: java.lang.Throwable -> L86
            java.lang.String r2 = "SystemEventsBreadcrumbsIntegration installed."
            java.lang.Object[] r3 = new java.lang.Object[r1]     // Catch: java.lang.Throwable -> L86
            r6.c(r7, r2, r3)     // Catch: java.lang.Throwable -> L86
            java.lang.String r6 = "SystemEventsBreadcrumbs"
            io.sentry.util.p.a(r6)     // Catch: java.lang.Throwable -> L86
            goto L95
        L86:
            r6 = move-exception
            r8.setEnableSystemEventBreadcrumbs(r1)     // Catch: java.lang.Throwable -> L37
            io.sentry.ILogger r7 = r8.getLogger()     // Catch: java.lang.Throwable -> L37
            io.sentry.SentryLevel r8 = io.sentry.SentryLevel.ERROR     // Catch: java.lang.Throwable -> L37
            java.lang.String r1 = "Failed to initialize SystemEventsBreadcrumbsIntegration."
            r7.b(r8, r1, r6)     // Catch: java.lang.Throwable -> L37
        L95:
            if (r0 == 0) goto La0
            r0.close()
            goto La0
        L9b:
            if (r0 == 0) goto La0
            r0.close()
        La0:
            return
        La1:
            if (r0 == 0) goto Lab
            r0.close()     // Catch: java.lang.Throwable -> La7
            goto Lab
        La7:
            r7 = move-exception
            r6.addSuppressed(r7)
        Lab:
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.core.SystemEventsBreadcrumbsIntegration.n(io.sentry.android.core.SystemEventsBreadcrumbsIntegration, io.sentry.w0, io.sentry.android.core.SentryAndroidOptions):void");
    }

    @Override // io.sentry.android.core.w0.a
    public void a() {
        if (this.f28412o != null && this.f28411i != null) {
            this.f28415r = false;
            L(this.f28412o, this.f28411i);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        io.sentry.a1 a10 = this.f28419v.a();
        try {
            this.f28414q = true;
            this.f28416s = null;
            if (this.f28417t != null) {
                this.f28417t.quit();
            }
            this.f28417t = null;
            if (a10 != null) {
                a10.close();
            }
            w0.E().N(this);
            N();
            SentryAndroidOptions sentryAndroidOptions = this.f28411i;
            if (sentryAndroidOptions != null) {
                sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "SystemEventsBreadcrumbsIntegration removed.", new Object[0]);
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.k1
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f28411i = sentryAndroidOptions2;
        this.f28412o = w0Var;
        sentryAndroidOptions2.getLogger().c(SentryLevel.DEBUG, "SystemEventsBreadcrumbsIntegration enabled: %s", Boolean.valueOf(this.f28411i.isEnableSystemEventBreadcrumbs()));
        if (this.f28411i.isEnableSystemEventBreadcrumbs()) {
            w0.E().n(this);
            if (e1.s()) {
                L(this.f28412o, this.f28411i);
            }
        }
    }

    @Override // io.sentry.android.core.w0.a
    public void l() {
        N();
    }

    SystemEventsBreadcrumbsIntegration(Context context, String[] strArr, Handler handler) {
        this.f28414q = false;
        this.f28415r = false;
        this.f28416s = null;
        this.f28417t = null;
        this.f28418u = new AtomicBoolean(false);
        this.f28419v = new io.sentry.util.a();
        this.f28421x = null;
        this.f28409d = e1.g(context);
        this.f28413p = strArr;
        this.f28421x = handler;
    }
}
