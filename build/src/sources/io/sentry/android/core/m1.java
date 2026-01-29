package io.sentry.android.core;

import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.LocaleList;
import android.os.StatFs;
import android.os.SystemClock;
import android.util.DisplayMetrics;
import io.sentry.SentryLevel;
import io.sentry.android.core.e1;
import io.sentry.k0;
import io.sentry.k7;
import io.sentry.protocol.e;
import io.sentry.util.runtime.a;
import java.io.File;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m1 {

    /* renamed from: i  reason: collision with root package name */
    private static volatile m1 f29125i;

    /* renamed from: j  reason: collision with root package name */
    private static final io.sentry.util.a f29126j = new io.sentry.util.a();

    /* renamed from: a  reason: collision with root package name */
    private final Context f29127a;

    /* renamed from: b  reason: collision with root package name */
    private final SentryAndroidOptions f29128b;

    /* renamed from: c  reason: collision with root package name */
    private final x0 f29129c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f29130d;

    /* renamed from: e  reason: collision with root package name */
    private final e1.a f29131e;

    /* renamed from: f  reason: collision with root package name */
    private final e1.b f29132f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.protocol.n f29133g;

    /* renamed from: h  reason: collision with root package name */
    private final Long f29134h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f29135a;

        static {
            int[] iArr = new int[k0.a.values().length];
            f29135a = iArr;
            try {
                iArr[k0.a.DISCONNECTED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f29135a[k0.a.CONNECTED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public m1(Context context, SentryAndroidOptions sentryAndroidOptions) {
        this.f29127a = context;
        this.f29128b = sentryAndroidOptions;
        x0 x0Var = new x0(sentryAndroidOptions.getLogger());
        this.f29129c = x0Var;
        io.sentry.android.core.internal.util.m.a().c();
        this.f29133g = w();
        this.f29130d = x0Var.f();
        this.f29131e = e1.v(context, sentryAndroidOptions.getLogger(), x0Var);
        this.f29132f = e1.w(context, x0Var);
        ActivityManager.MemoryInfo n10 = e1.n(context, sentryAndroidOptions.getLogger());
        if (n10 != null) {
            this.f29134h = Long.valueOf(n10.totalMem);
        } else {
            this.f29134h = null;
        }
    }

    public static /* synthetic */ void b(m1 m1Var, io.sentry.protocol.e eVar) {
        File externalFilesDir = m1Var.f29127a.getExternalFilesDir(null);
        if (externalFilesDir != null) {
            StatFs statFs = new StatFs(externalFilesDir.getPath());
            eVar.o0(m1Var.r(statFs));
            eVar.X(m1Var.u(statFs));
        }
        StatFs j10 = m1Var.j(externalFilesDir);
        if (j10 != null) {
            eVar.U(m1Var.q(j10));
            eVar.T(m1Var.t(j10));
        }
    }

    private Intent d() {
        return e1.u(this.f29127a, this.f29129c, null, new IntentFilter("android.intent.action.BATTERY_CHANGED"), null);
    }

    public static Float e(Intent intent, k7 k7Var) {
        try {
            int intExtra = intent.getIntExtra("level", -1);
            int intExtra2 = intent.getIntExtra("scale", -1);
            if (intExtra != -1 && intExtra2 != -1) {
                return Float.valueOf((intExtra / intExtra2) * 100.0f);
            }
            return null;
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.ERROR, "Error getting device battery level.", th2);
            return null;
        }
    }

    private Float f(Intent intent) {
        try {
            int intExtra = intent.getIntExtra("temperature", -1);
            if (intExtra != -1) {
                return Float.valueOf(intExtra / 10.0f);
            }
            return null;
        } catch (Throwable th2) {
            this.f29128b.getLogger().b(SentryLevel.ERROR, "Error getting battery temperature.", th2);
            return null;
        }
    }

    private Date g() {
        try {
            return io.sentry.k.e(System.currentTimeMillis() - SystemClock.elapsedRealtime());
        } catch (IllegalArgumentException e10) {
            this.f29128b.getLogger().a(SentryLevel.ERROR, e10, "Error getting the device's boot time.", new Object[0]);
            return null;
        }
    }

    private String h() {
        try {
            return (String) this.f29128b.getRuntimeManager().a(new a.InterfaceC0405a() { // from class: io.sentry.android.core.l1
                @Override // io.sentry.util.runtime.a.InterfaceC0405a
                public final Object run() {
                    String a10;
                    a10 = r1.a(m1.this.f29127a);
                    return a10;
                }
            });
        } catch (Throwable th2) {
            this.f29128b.getLogger().b(SentryLevel.ERROR, "Error getting installationId.", th2);
            return null;
        }
    }

    private File i(File file) {
        String str;
        File[] externalFilesDirs = this.f29127a.getExternalFilesDirs(null);
        if (externalFilesDirs != null) {
            if (file != null) {
                str = file.getAbsolutePath();
            } else {
                str = null;
            }
            for (File file2 : externalFilesDirs) {
                if (file2 != null && (str == null || str.isEmpty() || !file2.getAbsolutePath().contains(str))) {
                    return file2;
                }
            }
        } else {
            this.f29128b.getLogger().c(SentryLevel.INFO, "Not possible to read getExternalFilesDirs", new Object[0]);
        }
        return null;
    }

    private StatFs j(File file) {
        try {
            File i10 = i(file);
            if (i10 != null) {
                return new StatFs(i10.getPath());
            }
            return null;
        } catch (Throwable unused) {
            this.f29128b.getLogger().c(SentryLevel.INFO, "Not possible to read external files directory", new Object[0]);
            return null;
        }
    }

    public static m1 k(Context context, SentryAndroidOptions sentryAndroidOptions) {
        if (f29125i == null) {
            io.sentry.a1 a10 = f29126j.a();
            try {
                if (f29125i == null) {
                    f29125i = new m1(e1.g(context), sentryAndroidOptions);
                }
                if (a10 != null) {
                    a10.close();
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
        return f29125i;
    }

    private e.b m() {
        e.b bVar;
        Throwable th2;
        try {
            bVar = io.sentry.android.core.internal.util.o.a(this.f29127a.getResources().getConfiguration().orientation);
            if (bVar == null) {
                try {
                    this.f29128b.getLogger().c(SentryLevel.INFO, "No device orientation available (ORIENTATION_SQUARE|ORIENTATION_UNDEFINED)", new Object[0]);
                    return null;
                } catch (Throwable th3) {
                    th2 = th3;
                    this.f29128b.getLogger().b(SentryLevel.ERROR, "Error getting device orientation.", th2);
                    return bVar;
                }
            }
            return bVar;
        } catch (Throwable th4) {
            bVar = null;
            th2 = th4;
        }
    }

    private TimeZone p() {
        if (this.f29129c.d() >= 24) {
            LocaleList locales = this.f29127a.getResources().getConfiguration().getLocales();
            if (!locales.isEmpty()) {
                return Calendar.getInstance(locales.get(0)).getTimeZone();
            }
        }
        return Calendar.getInstance().getTimeZone();
    }

    private Long q(StatFs statFs) {
        try {
            return Long.valueOf(statFs.getBlockCountLong() * statFs.getBlockSizeLong());
        } catch (Throwable th2) {
            this.f29128b.getLogger().b(SentryLevel.ERROR, "Error getting total external storage amount.", th2);
            return null;
        }
    }

    private Long r(StatFs statFs) {
        try {
            return Long.valueOf(statFs.getBlockCountLong() * statFs.getBlockSizeLong());
        } catch (Throwable th2) {
            this.f29128b.getLogger().b(SentryLevel.ERROR, "Error getting total internal storage amount.", th2);
            return null;
        }
    }

    private Long t(StatFs statFs) {
        try {
            return Long.valueOf(statFs.getAvailableBlocksLong() * statFs.getBlockSizeLong());
        } catch (Throwable th2) {
            this.f29128b.getLogger().b(SentryLevel.ERROR, "Error getting unused external storage amount.", th2);
            return null;
        }
    }

    private Long u(StatFs statFs) {
        try {
            return Long.valueOf(statFs.getAvailableBlocksLong() * statFs.getBlockSizeLong());
        } catch (Throwable th2) {
            this.f29128b.getLogger().b(SentryLevel.ERROR, "Error getting unused internal storage amount.", th2);
            return null;
        }
    }

    public static Boolean v(Intent intent, k7 k7Var) {
        try {
            int intExtra = intent.getIntExtra("plugged", -1);
            boolean z10 = true;
            if (intExtra != 1 && intExtra != 2) {
                z10 = false;
            }
            return Boolean.valueOf(z10);
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.ERROR, "Error getting device charging state.", th2);
            return null;
        }
    }

    private io.sentry.protocol.n w() {
        io.sentry.protocol.n nVar = new io.sentry.protocol.n();
        nVar.j("Android");
        nVar.m(Build.VERSION.RELEASE);
        nVar.h(Build.DISPLAY);
        String m10 = e1.m(this.f29128b.getLogger());
        if (m10 != null) {
            nVar.i(m10);
        }
        if (this.f29128b.isEnableRootCheck()) {
            nVar.k(Boolean.valueOf(new io.sentry.android.core.internal.util.t(this.f29127a, this.f29129c, this.f29128b.getLogger()).e()));
        }
        return nVar;
    }

    private void x(final io.sentry.protocol.e eVar, boolean z10) {
        Boolean bool;
        Intent d10 = d();
        if (d10 != null) {
            eVar.M(e(d10, this.f29128b));
            eVar.Q(v(d10, this.f29128b));
            eVar.N(f(d10));
        }
        int i10 = a.f29135a[this.f29128b.getConnectionStatusProvider().x0().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                bool = null;
            } else {
                bool = Boolean.TRUE;
            }
        } else {
            bool = Boolean.FALSE;
        }
        eVar.f0(bool);
        ActivityManager.MemoryInfo n10 = e1.n(this.f29127a, this.f29128b.getLogger());
        if (n10 != null && z10) {
            eVar.W(Long.valueOf(n10.availMem));
            eVar.a0(Boolean.valueOf(n10.lowMemory));
        }
        this.f29128b.getRuntimeManager().b(new Runnable() { // from class: io.sentry.android.core.k1
            @Override // java.lang.Runnable
            public final void run() {
                m1.b(m1.this, eVar);
            }
        });
        if (eVar.I() == null) {
            eVar.S(this.f29128b.getConnectionStatusProvider().S());
        }
    }

    public io.sentry.protocol.e c(boolean z10, boolean z11) {
        String str;
        String str2;
        io.sentry.protocol.e eVar = new io.sentry.protocol.e();
        eVar.b0(Build.MANUFACTURER);
        eVar.P(Build.BRAND);
        eVar.V(e1.l(this.f29128b.getLogger()));
        eVar.d0(Build.MODEL);
        eVar.e0(Build.ID);
        eVar.L(e1.j());
        if (this.f29129c.d() >= 31) {
            StringBuilder sb2 = new StringBuilder();
            str = Build.SOC_MANUFACTURER;
            sb2.append(str);
            sb2.append(" ");
            str2 = Build.SOC_MODEL;
            sb2.append(str2);
            eVar.R(sb2.toString());
        }
        eVar.g0(m());
        Boolean bool = this.f29130d;
        if (bool != null) {
            eVar.n0(bool);
        }
        DisplayMetrics k10 = e1.k(this.f29127a, this.f29128b.getLogger());
        if (k10 != null) {
            eVar.m0(Integer.valueOf(k10.widthPixels));
            eVar.l0(Integer.valueOf(k10.heightPixels));
            eVar.j0(Float.valueOf(k10.density));
            eVar.k0(Integer.valueOf(k10.densityDpi));
        }
        eVar.O(g());
        eVar.p0(p());
        if (eVar.J() == null) {
            eVar.Y(h());
        }
        Locale locale = Locale.getDefault();
        if (eVar.K() == null) {
            eVar.Z(locale.toString());
        }
        List c10 = io.sentry.android.core.internal.util.m.a().c();
        if (!c10.isEmpty()) {
            eVar.i0(Double.valueOf(((Integer) Collections.max(c10)).doubleValue()));
            eVar.h0(Integer.valueOf(c10.size()));
        }
        eVar.c0(this.f29134h);
        if (z10 && this.f29128b.isCollectAdditionalContext()) {
            x(eVar, z11);
        }
        return eVar;
    }

    public io.sentry.protocol.n l() {
        return this.f29133g;
    }

    public e1.a n() {
        return this.f29131e;
    }

    public e1.b o() {
        return this.f29132f;
    }

    public Long s() {
        return this.f29134h;
    }
}
