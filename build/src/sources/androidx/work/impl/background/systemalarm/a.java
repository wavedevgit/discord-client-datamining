package androidx.work.impl.background.systemalarm;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import androidx.work.impl.WorkDatabase;
import k4.m;
import p4.i;
import p4.j;
import p4.l;
import q4.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final String f5984a = m.i("Alarms");

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.work.impl.background.systemalarm.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0077a {
        static void a(AlarmManager alarmManager, int i10, long j10, PendingIntent pendingIntent) {
            alarmManager.setExact(i10, j10, pendingIntent);
        }
    }

    public static void a(Context context, WorkDatabase workDatabase, p4.m mVar) {
        j E = workDatabase.E();
        i a10 = E.a(mVar);
        if (a10 != null) {
            b(context, mVar, a10.f43708c);
            m e10 = m.e();
            String str = f5984a;
            e10.a(str, "Removing SystemIdInfo for workSpecId (" + mVar + ")");
            E.d(mVar);
        }
    }

    private static void b(Context context, p4.m mVar, int i10) {
        AlarmManager alarmManager = (AlarmManager) context.getSystemService("alarm");
        PendingIntent service = PendingIntent.getService(context, i10, b.c(context, mVar), 603979776);
        if (service != null && alarmManager != null) {
            m e10 = m.e();
            String str = f5984a;
            e10.a(str, "Cancelling existing alarm with (workSpecId, systemId) (" + mVar + ", " + i10 + ")");
            alarmManager.cancel(service);
        }
    }

    public static void c(Context context, WorkDatabase workDatabase, p4.m mVar, long j10) {
        j E = workDatabase.E();
        i a10 = E.a(mVar);
        if (a10 != null) {
            b(context, mVar, a10.f43708c);
            d(context, mVar, a10.f43708c, j10);
            return;
        }
        int c10 = new h(workDatabase).c();
        E.e(l.a(mVar, c10));
        d(context, mVar, c10, j10);
    }

    private static void d(Context context, p4.m mVar, int i10, long j10) {
        AlarmManager alarmManager = (AlarmManager) context.getSystemService("alarm");
        PendingIntent service = PendingIntent.getService(context, i10, b.c(context, mVar), 201326592);
        if (alarmManager != null) {
            C0077a.a(alarmManager, 0, j10, service);
        }
    }
}
