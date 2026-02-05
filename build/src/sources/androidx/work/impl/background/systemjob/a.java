package androidx.work.impl.background.systemjob;

import android.app.job.JobInfo;
import android.content.ComponentName;
import android.content.Context;
import android.net.NetworkRequest;
import android.os.Build;
import android.os.PersistableBundle;
import k4.d;
import k4.m;
import k4.n;
import p4.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: c  reason: collision with root package name */
    private static final String f5707c = m.i("SystemJobInfoConverter");

    /* renamed from: a  reason: collision with root package name */
    private final ComponentName f5708a;

    /* renamed from: b  reason: collision with root package name */
    private final k4.b f5709b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.work.impl.background.systemjob.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class C0080a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f5710a;

        static {
            int[] iArr = new int[n.values().length];
            f5710a = iArr;
            try {
                iArr[n.NOT_REQUIRED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f5710a[n.CONNECTED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f5710a[n.UNMETERED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f5710a[n.NOT_ROAMING.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f5710a[n.METERED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, k4.b bVar) {
        this.f5709b = bVar;
        this.f5708a = new ComponentName(context.getApplicationContext(), SystemJobService.class);
    }

    private static JobInfo.TriggerContentUri b(d.b bVar) {
        return new JobInfo.TriggerContentUri(bVar.a(), bVar.b() ? 1 : 0);
    }

    static int c(n nVar) {
        int i10 = C0080a.f5710a[nVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            if (i10 == 3) {
                return 2;
            }
            if (i10 == 4) {
                return 3;
            }
            if (i10 == 5 && Build.VERSION.SDK_INT >= 26) {
                return 4;
            }
            m e10 = m.e();
            String str = f5707c;
            e10.a(str, "API version too low. Cannot convert network type value " + nVar);
            return 1;
        }
        return 0;
    }

    static void d(JobInfo.Builder builder, n nVar) {
        if (Build.VERSION.SDK_INT >= 30 && nVar == n.TEMPORARILY_UNMETERED) {
            builder.setRequiredNetwork(new NetworkRequest.Builder().addCapability(25).build());
        } else {
            builder.setRequiredNetworkType(c(nVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public JobInfo a(u uVar, int i10) {
        boolean z10;
        int i11;
        d dVar = uVar.f44897j;
        PersistableBundle persistableBundle = new PersistableBundle();
        persistableBundle.putString("EXTRA_WORK_SPEC_ID", uVar.f44888a);
        persistableBundle.putInt("EXTRA_WORK_SPEC_GENERATION", uVar.f());
        persistableBundle.putBoolean("EXTRA_IS_PERIODIC", uVar.m());
        JobInfo.Builder extras = new JobInfo.Builder(i10, this.f5708a).setRequiresCharging(dVar.g()).setRequiresDeviceIdle(dVar.h()).setExtras(persistableBundle);
        d(extras, dVar.d());
        boolean z11 = false;
        if (!dVar.h()) {
            if (uVar.f44899l == k4.a.LINEAR) {
                i11 = 0;
            } else {
                i11 = 1;
            }
            extras.setBackoffCriteria(uVar.f44900m, i11);
        }
        long max = Math.max(uVar.c() - this.f5709b.a(), 0L);
        if (Build.VERSION.SDK_INT <= 28) {
            extras.setMinimumLatency(max);
        } else if (max > 0) {
            extras.setMinimumLatency(max);
        } else if (!uVar.f44904q) {
            extras.setImportantWhileForeground(true);
        }
        if (dVar.e()) {
            for (d.b bVar : dVar.c()) {
                extras.addTriggerContentUri(b(bVar));
            }
            extras.setTriggerContentUpdateDelay(dVar.b());
            extras.setTriggerContentMaxDelay(dVar.a());
        }
        extras.setPersisted(false);
        int i12 = Build.VERSION.SDK_INT;
        if (i12 >= 26) {
            extras.setRequiresBatteryNotLow(dVar.f());
            extras.setRequiresStorageNotLow(dVar.i());
        }
        if (uVar.f44898k > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (max > 0) {
            z11 = true;
        }
        if (i12 >= 31 && uVar.f44904q && !z10 && !z11) {
            extras.setExpedited(true);
        }
        return extras.build();
    }
}
