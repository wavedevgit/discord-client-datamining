package androidx.work.impl.utils;

import android.app.ActivityManager;
import android.app.AlarmManager;
import android.app.ApplicationExitInfo;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.database.sqlite.SQLiteAccessPermException;
import android.database.sqlite.SQLiteCantOpenDatabaseException;
import android.database.sqlite.SQLiteConstraintException;
import android.database.sqlite.SQLiteDatabaseCorruptException;
import android.database.sqlite.SQLiteDatabaseLockedException;
import android.database.sqlite.SQLiteDiskIOException;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteTableLockedException;
import android.os.Build;
import android.text.TextUtils;
import androidx.core.util.Consumer;
import androidx.work.a;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.background.systemjob.b;
import androidx.work.impl.f0;
import androidx.work.impl.p0;
import androidx.work.impl.z;
import java.util.List;
import java.util.concurrent.TimeUnit;
import k4.m;
import k4.x;
import p4.r;
import p4.u;
import p4.v;
import q4.e;
import q4.n;
import q4.o;
import w1.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ForceStopRunnable implements Runnable {

    /* renamed from: p  reason: collision with root package name */
    private static final String f6175p = m.i("ForceStopRunnable");

    /* renamed from: q  reason: collision with root package name */
    private static final long f6176q = TimeUnit.DAYS.toMillis(3650);

    /* renamed from: d  reason: collision with root package name */
    private final Context f6177d;

    /* renamed from: e  reason: collision with root package name */
    private final p0 f6178e;

    /* renamed from: i  reason: collision with root package name */
    private final n f6179i;

    /* renamed from: o  reason: collision with root package name */
    private int f6180o = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class BroadcastReceiver extends android.content.BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        private static final String f6181a = m.i("ForceStopRunnable$Rcvr");

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if (intent != null && "ACTION_FORCE_STOP_RESCHEDULE".equals(intent.getAction())) {
                m.e().j(f6181a, "Rescheduling alarm that keeps track of force-stops.");
                ForceStopRunnable.g(context);
            }
        }
    }

    public ForceStopRunnable(Context context, p0 p0Var) {
        this.f6177d = context.getApplicationContext();
        this.f6178e = p0Var;
        this.f6179i = p0Var.l();
    }

    static Intent c(Context context) {
        Intent intent = new Intent();
        intent.setComponent(new ComponentName(context, BroadcastReceiver.class));
        intent.setAction("ACTION_FORCE_STOP_RESCHEDULE");
        return intent;
    }

    private static PendingIntent d(Context context, int i10) {
        return PendingIntent.getBroadcast(context, -1, c(context), i10);
    }

    static void g(Context context) {
        int i10;
        AlarmManager alarmManager = (AlarmManager) context.getSystemService("alarm");
        if (Build.VERSION.SDK_INT >= 31) {
            i10 = 167772160;
        } else {
            i10 = 134217728;
        }
        PendingIntent d10 = d(context, i10);
        long currentTimeMillis = System.currentTimeMillis() + f6176q;
        if (alarmManager != null) {
            alarmManager.setExact(0, currentTimeMillis, d10);
        }
    }

    public boolean a() {
        boolean z10;
        boolean i10 = b.i(this.f6177d, this.f6178e.p());
        WorkDatabase p10 = this.f6178e.p();
        v H = p10.H();
        r G = p10.G();
        p10.e();
        try {
            List<u> t10 = H.t();
            if (t10 != null && !t10.isEmpty()) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                for (u uVar : t10) {
                    H.d(x.ENQUEUED, uVar.f43685a);
                    H.e(uVar.f43685a, -512);
                    H.o(uVar.f43685a, -1L);
                }
            }
            G.b();
            p10.A();
            p10.i();
            if (!z10 && !i10) {
                return false;
            }
            return true;
        } catch (Throwable th2) {
            p10.i();
            throw th2;
        }
    }

    public void b() {
        boolean a10 = a();
        if (h()) {
            m.e().a(f6175p, "Rescheduling Workers.");
            this.f6178e.s();
            this.f6178e.l().e(false);
        } else if (e()) {
            m.e().a(f6175p, "Application was force-stopped, rescheduling.");
            this.f6178e.s();
            this.f6179i.d(this.f6178e.i().a().a());
        } else if (a10) {
            m.e().a(f6175p, "Found unfinished work, scheduling it.");
            z.f(this.f6178e.i(), this.f6178e.p(), this.f6178e.n());
        }
    }

    public boolean e() {
        int i10;
        try {
            int i11 = Build.VERSION.SDK_INT;
            if (i11 >= 31) {
                i10 = 570425344;
            } else {
                i10 = 536870912;
            }
            PendingIntent d10 = d(this.f6177d, i10);
            if (i11 >= 30) {
                if (d10 != null) {
                    d10.cancel();
                }
                List<ApplicationExitInfo> historicalProcessExitReasons = ((ActivityManager) this.f6177d.getSystemService("activity")).getHistoricalProcessExitReasons(null, 0, 0);
                if (historicalProcessExitReasons != null && !historicalProcessExitReasons.isEmpty()) {
                    long a10 = this.f6179i.a();
                    for (int i12 = 0; i12 < historicalProcessExitReasons.size(); i12++) {
                        ApplicationExitInfo a11 = e.a(historicalProcessExitReasons.get(i12));
                        if (a11.getReason() == 10 && a11.getTimestamp() >= a10) {
                            return true;
                        }
                    }
                }
            } else if (d10 == null) {
                g(this.f6177d);
                return true;
            }
            return false;
        } catch (IllegalArgumentException e10) {
            e = e10;
            m.e().l(f6175p, "Ignoring exception", e);
            return true;
        } catch (SecurityException e11) {
            e = e11;
            m.e().l(f6175p, "Ignoring exception", e);
            return true;
        }
    }

    public boolean f() {
        a i10 = this.f6178e.i();
        if (TextUtils.isEmpty(i10.c())) {
            m.e().a(f6175p, "The default process name was not specified.");
            return true;
        }
        boolean b10 = o.b(this.f6177d, i10);
        m e10 = m.e();
        String str = f6175p;
        e10.a(str, "Is default app process = " + b10);
        return b10;
    }

    public boolean h() {
        return this.f6178e.l().b();
    }

    public void i(long j10) {
        try {
            Thread.sleep(j10);
        } catch (InterruptedException unused) {
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        int i10;
        String str;
        try {
            if (f()) {
                while (true) {
                    try {
                        f0.d(this.f6177d);
                        m.e().a(f6175p, "Performing cleanup operations.");
                        try {
                            b();
                            break;
                        } catch (SQLiteAccessPermException | SQLiteCantOpenDatabaseException | SQLiteConstraintException | SQLiteDatabaseCorruptException | SQLiteDatabaseLockedException | SQLiteDiskIOException | SQLiteTableLockedException e10) {
                            i10 = this.f6180o + 1;
                            this.f6180o = i10;
                            if (i10 >= 3) {
                                if (j.a(this.f6177d)) {
                                    str = "The file system on the device is in a bad state. WorkManager cannot access the app's internal data store.";
                                } else {
                                    str = "WorkManager can't be accessed from direct boot, because credential encrypted storage isn't accessible.\nDon't access or initialise WorkManager from directAware components. See https://developer.android.com/training/articles/direct-boot";
                                }
                                m e11 = m.e();
                                String str2 = f6175p;
                                e11.d(str2, str, e10);
                                IllegalStateException illegalStateException = new IllegalStateException(str, e10);
                                Consumer e12 = this.f6178e.i().e();
                                if (e12 != null) {
                                    m.e().b(str2, "Routing exception to the specified exception handler", illegalStateException);
                                    e12.accept(illegalStateException);
                                } else {
                                    throw illegalStateException;
                                }
                            } else {
                                m e13 = m.e();
                                String str3 = f6175p;
                                e13.b(str3, "Retrying after " + (i10 * 300), e10);
                                i(((long) this.f6180o) * 300);
                            }
                        }
                        m e132 = m.e();
                        String str32 = f6175p;
                        e132.b(str32, "Retrying after " + (i10 * 300), e10);
                        i(((long) this.f6180o) * 300);
                    } catch (SQLiteException e14) {
                        m.e().c(f6175p, "Unexpected SQLite exception during migrations");
                        IllegalStateException illegalStateException2 = new IllegalStateException("Unexpected SQLite exception during migrations", e14);
                        Consumer e15 = this.f6178e.i().e();
                        if (e15 != null) {
                            e15.accept(illegalStateException2);
                        } else {
                            throw illegalStateException2;
                        }
                    }
                }
            }
        } finally {
            this.f6178e.r();
        }
    }
}
