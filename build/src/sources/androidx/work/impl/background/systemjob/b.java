package androidx.work.impl.background.systemjob;

import android.app.job.JobInfo;
import android.app.job.JobScheduler;
import android.content.ComponentName;
import android.content.Context;
import android.os.PersistableBundle;
import androidx.core.util.Consumer;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.w;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import k4.m;
import k4.r;
import k4.x;
import p4.i;
import p4.l;
import p4.u;
import p4.v;
import q4.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements w {

    /* renamed from: q  reason: collision with root package name */
    private static final String f5711q = m.i("SystemJobScheduler");

    /* renamed from: d  reason: collision with root package name */
    private final Context f5712d;

    /* renamed from: e  reason: collision with root package name */
    private final JobScheduler f5713e;

    /* renamed from: i  reason: collision with root package name */
    private final a f5714i;

    /* renamed from: o  reason: collision with root package name */
    private final WorkDatabase f5715o;

    /* renamed from: p  reason: collision with root package name */
    private final androidx.work.a f5716p;

    public b(Context context, WorkDatabase workDatabase, androidx.work.a aVar) {
        this(context, workDatabase, aVar, (JobScheduler) context.getSystemService("jobscheduler"), new a(context, aVar.a()));
    }

    public static void a(Context context) {
        List<JobInfo> g10;
        JobScheduler jobScheduler = (JobScheduler) context.getSystemService("jobscheduler");
        if (jobScheduler != null && (g10 = g(context, jobScheduler)) != null && !g10.isEmpty()) {
            for (JobInfo jobInfo : g10) {
                b(jobScheduler, jobInfo.getId());
            }
        }
    }

    private static void b(JobScheduler jobScheduler, int i10) {
        try {
            jobScheduler.cancel(i10);
        } catch (Throwable th2) {
            m.e().d(f5711q, String.format(Locale.getDefault(), "Exception while trying to cancel job (%d)", Integer.valueOf(i10)), th2);
        }
    }

    private static List f(Context context, JobScheduler jobScheduler, String str) {
        List<JobInfo> g10 = g(context, jobScheduler);
        if (g10 == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList(2);
        for (JobInfo jobInfo : g10) {
            p4.m h10 = h(jobInfo);
            if (h10 != null && str.equals(h10.b())) {
                arrayList.add(Integer.valueOf(jobInfo.getId()));
            }
        }
        return arrayList;
    }

    private static List g(Context context, JobScheduler jobScheduler) {
        List<JobInfo> list;
        try {
            list = jobScheduler.getAllPendingJobs();
        } catch (Throwable th2) {
            m.e().d(f5711q, "getAllPendingJobs() is not reliable on this device.", th2);
            list = null;
        }
        if (list == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList(list.size());
        ComponentName componentName = new ComponentName(context, SystemJobService.class);
        for (JobInfo jobInfo : list) {
            if (componentName.equals(jobInfo.getService())) {
                arrayList.add(jobInfo);
            }
        }
        return arrayList;
    }

    private static p4.m h(JobInfo jobInfo) {
        PersistableBundle extras = jobInfo.getExtras();
        if (extras != null) {
            try {
                if (extras.containsKey("EXTRA_WORK_SPEC_ID")) {
                    return new p4.m(extras.getString("EXTRA_WORK_SPEC_ID"), extras.getInt("EXTRA_WORK_SPEC_GENERATION", 0));
                }
                return null;
            } catch (NullPointerException unused) {
                return null;
            }
        }
        return null;
    }

    public static boolean i(Context context, WorkDatabase workDatabase) {
        int i10;
        JobScheduler jobScheduler = (JobScheduler) context.getSystemService("jobscheduler");
        List<JobInfo> g10 = g(context, jobScheduler);
        List<String> c10 = workDatabase.E().c();
        boolean z10 = false;
        if (g10 != null) {
            i10 = g10.size();
        } else {
            i10 = 0;
        }
        HashSet hashSet = new HashSet(i10);
        if (g10 != null && !g10.isEmpty()) {
            for (JobInfo jobInfo : g10) {
                p4.m h10 = h(jobInfo);
                if (h10 != null) {
                    hashSet.add(h10.b());
                } else {
                    b(jobScheduler, jobInfo.getId());
                }
            }
        }
        Iterator it = c10.iterator();
        while (true) {
            if (it.hasNext()) {
                if (!hashSet.contains((String) it.next())) {
                    m.e().a(f5711q, "Reconciling jobs");
                    z10 = true;
                    break;
                }
            } else {
                break;
            }
        }
        if (z10) {
            workDatabase.e();
            try {
                v H = workDatabase.H();
                for (String str : c10) {
                    H.o(str, -1L);
                }
                workDatabase.A();
                workDatabase.i();
                return z10;
            } catch (Throwable th2) {
                workDatabase.i();
                throw th2;
            }
        }
        return z10;
    }

    @Override // androidx.work.impl.w
    public void c(String str) {
        List<Integer> f10 = f(this.f5712d, this.f5713e, str);
        if (f10 != null && !f10.isEmpty()) {
            for (Integer num : f10) {
                b(this.f5713e, num.intValue());
            }
            this.f5715o.E().h(str);
        }
    }

    @Override // androidx.work.impl.w
    public boolean d() {
        return true;
    }

    @Override // androidx.work.impl.w
    public void e(u... uVarArr) {
        int e10;
        h hVar = new h(this.f5715o);
        for (u uVar : uVarArr) {
            this.f5715o.e();
            try {
                u i10 = this.f5715o.H().i(uVar.f44888a);
                if (i10 == null) {
                    m.e().k(f5711q, "Skipping scheduling " + uVar.f44888a + " because it's no longer in the DB");
                    this.f5715o.A();
                } else if (i10.f44889b != x.ENQUEUED) {
                    m.e().k(f5711q, "Skipping scheduling " + uVar.f44888a + " because it is no longer enqueued");
                    this.f5715o.A();
                } else {
                    p4.m a10 = p4.x.a(uVar);
                    i a11 = this.f5715o.E().a(a10);
                    if (a11 != null) {
                        e10 = a11.f44863c;
                    } else {
                        e10 = hVar.e(this.f5716p.i(), this.f5716p.g());
                    }
                    if (a11 == null) {
                        this.f5715o.E().e(l.a(a10, e10));
                    }
                    j(uVar, e10);
                    this.f5715o.A();
                }
            } finally {
                this.f5715o.i();
            }
        }
    }

    public void j(u uVar, int i10) {
        JobInfo a10 = this.f5714i.a(uVar, i10);
        m e10 = m.e();
        String str = f5711q;
        e10.a(str, "Scheduling work ID " + uVar.f44888a + "Job ID " + i10);
        int i11 = 0;
        try {
            if (this.f5713e.schedule(a10) == 0) {
                m e11 = m.e();
                e11.k(str, "Unable to schedule work ID " + uVar.f44888a);
                if (uVar.f44904q && uVar.f44905r == r.RUN_AS_NON_EXPEDITED_WORK_REQUEST) {
                    uVar.f44904q = false;
                    m.e().a(str, String.format("Scheduling a non-expedited job (work ID %s)", uVar.f44888a));
                    j(uVar, i10);
                }
            }
        } catch (IllegalStateException e12) {
            List g10 = g(this.f5712d, this.f5713e);
            if (g10 != null) {
                i11 = g10.size();
            }
            String format = String.format(Locale.getDefault(), "JobScheduler 100 job limit exceeded.  We count %d WorkManager jobs in JobScheduler; we have %d tracked jobs in our DB; our Configuration limit is %d.", Integer.valueOf(i11), Integer.valueOf(this.f5715o.H().f().size()), Integer.valueOf(this.f5716p.h()));
            m.e().c(f5711q, format);
            IllegalStateException illegalStateException = new IllegalStateException(format, e12);
            Consumer l10 = this.f5716p.l();
            if (l10 != null) {
                l10.accept(illegalStateException);
                return;
            }
            throw illegalStateException;
        } catch (Throwable th2) {
            m e13 = m.e();
            String str2 = f5711q;
            e13.d(str2, "Unable to schedule " + uVar, th2);
        }
    }

    public b(Context context, WorkDatabase workDatabase, androidx.work.a aVar, JobScheduler jobScheduler, a aVar2) {
        this.f5712d = context;
        this.f5713e = jobScheduler;
        this.f5714i = aVar2;
        this.f5715o = workDatabase;
        this.f5716p = aVar;
    }
}
