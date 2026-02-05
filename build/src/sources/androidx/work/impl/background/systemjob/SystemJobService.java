package androidx.work.impl.background.systemjob;

import android.app.Application;
import android.app.job.JobParameters;
import android.app.job.JobService;
import android.net.Network;
import android.net.Uri;
import android.os.Build;
import android.os.PersistableBundle;
import androidx.work.WorkerParameters;
import androidx.work.impl.a0;
import androidx.work.impl.b0;
import androidx.work.impl.f;
import androidx.work.impl.n0;
import androidx.work.impl.o0;
import androidx.work.impl.p0;
import androidx.work.impl.u;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import k4.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SystemJobService extends JobService implements f {

    /* renamed from: p  reason: collision with root package name */
    private static final String f5702p = m.i("SystemJobService");

    /* renamed from: d  reason: collision with root package name */
    private p0 f5703d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f5704e = new HashMap();

    /* renamed from: i  reason: collision with root package name */
    private final b0 f5705i = new b0();

    /* renamed from: o  reason: collision with root package name */
    private n0 f5706o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static String[] a(JobParameters jobParameters) {
            return jobParameters.getTriggeredContentAuthorities();
        }

        static Uri[] b(JobParameters jobParameters) {
            return jobParameters.getTriggeredContentUris();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        static Network a(JobParameters jobParameters) {
            return jobParameters.getNetwork();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c {
        static int a(JobParameters jobParameters) {
            return SystemJobService.a(jobParameters.getStopReason());
        }
    }

    static int a(int i10) {
        switch (i10) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                return i10;
            default:
                return -512;
        }
    }

    private static p4.m c(JobParameters jobParameters) {
        try {
            PersistableBundle extras = jobParameters.getExtras();
            if (extras != null && extras.containsKey("EXTRA_WORK_SPEC_ID")) {
                return new p4.m(extras.getString("EXTRA_WORK_SPEC_ID"), extras.getInt("EXTRA_WORK_SPEC_GENERATION"));
            }
            return null;
        } catch (NullPointerException unused) {
            return null;
        }
    }

    @Override // androidx.work.impl.f
    public void b(p4.m mVar, boolean z10) {
        JobParameters jobParameters;
        m e10 = m.e();
        String str = f5702p;
        e10.a(str, mVar.b() + " executed on JobScheduler");
        synchronized (this.f5704e) {
            jobParameters = (JobParameters) this.f5704e.remove(mVar);
        }
        this.f5705i.b(mVar);
        if (jobParameters != null) {
            jobFinished(jobParameters, z10);
        }
    }

    @Override // android.app.Service
    public void onCreate() {
        super.onCreate();
        try {
            p0 k10 = p0.k(getApplicationContext());
            this.f5703d = k10;
            u m10 = k10.m();
            this.f5706o = new o0(m10, this.f5703d.q());
            m10.e(this);
        } catch (IllegalStateException e10) {
            if (Application.class.equals(getApplication().getClass())) {
                m.e().k(f5702p, "Could not find WorkManager instance; this may be because an auto-backup is in progress. Ignoring JobScheduler commands for now. Please make sure that you are initializing WorkManager if you have manually disabled WorkManagerInitializer.");
                return;
            }
            throw new IllegalStateException("WorkManager needs to be initialized via a ContentProvider#onCreate() or an Application#onCreate().", e10);
        }
    }

    @Override // android.app.Service
    public void onDestroy() {
        super.onDestroy();
        p0 p0Var = this.f5703d;
        if (p0Var != null) {
            p0Var.m().m(this);
        }
    }

    @Override // android.app.job.JobService
    public boolean onStartJob(JobParameters jobParameters) {
        if (this.f5703d == null) {
            m.e().a(f5702p, "WorkManager is not initialized; requesting retry.");
            jobFinished(jobParameters, true);
            return false;
        }
        p4.m c10 = c(jobParameters);
        if (c10 == null) {
            m.e().c(f5702p, "WorkSpec id not found!");
            return false;
        }
        synchronized (this.f5704e) {
            try {
                if (this.f5704e.containsKey(c10)) {
                    m e10 = m.e();
                    String str = f5702p;
                    e10.a(str, "Job is already being executed by SystemJobService: " + c10);
                    return false;
                }
                m e11 = m.e();
                String str2 = f5702p;
                e11.a(str2, "onStartJob for " + c10);
                this.f5704e.put(c10, jobParameters);
                int i10 = Build.VERSION.SDK_INT;
                WorkerParameters.a aVar = new WorkerParameters.a();
                if (a.b(jobParameters) != null) {
                    aVar.f5590b = Arrays.asList(a.b(jobParameters));
                }
                if (a.a(jobParameters) != null) {
                    aVar.f5589a = Arrays.asList(a.a(jobParameters));
                }
                if (i10 >= 28) {
                    aVar.f5591c = b.a(jobParameters);
                }
                this.f5706o.a(this.f5705i.d(c10), aVar);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.app.job.JobService
    public boolean onStopJob(JobParameters jobParameters) {
        int i10;
        if (this.f5703d == null) {
            m.e().a(f5702p, "WorkManager is not initialized; requesting retry.");
            return true;
        }
        p4.m c10 = c(jobParameters);
        if (c10 == null) {
            m.e().c(f5702p, "WorkSpec id not found!");
            return false;
        }
        m e10 = m.e();
        String str = f5702p;
        e10.a(str, "onStopJob for " + c10);
        synchronized (this.f5704e) {
            this.f5704e.remove(c10);
        }
        a0 b10 = this.f5705i.b(c10);
        if (b10 != null) {
            if (Build.VERSION.SDK_INT >= 31) {
                i10 = c.a(jobParameters);
            } else {
                i10 = -512;
            }
            this.f5706o.b(b10, i10);
        }
        return !this.f5703d.m().j(c10.b());
    }
}
