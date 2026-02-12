package hc;

import android.app.job.JobInfo;
import android.app.job.JobScheduler;
import android.content.ComponentName;
import android.content.Context;
import android.os.PersistableBundle;
import android.util.Base64;
import com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.Iterator;
import java.util.zip.Adler32;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements x {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27042a;

    /* renamed from: b  reason: collision with root package name */
    private final ic.d f27043b;

    /* renamed from: c  reason: collision with root package name */
    private final f f27044c;

    public d(Context context, ic.d dVar, f fVar) {
        this.f27042a = context;
        this.f27043b = dVar;
        this.f27044c = fVar;
    }

    private boolean d(JobScheduler jobScheduler, int i10, int i11) {
        Iterator<JobInfo> it = jobScheduler.getAllPendingJobs().iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            JobInfo next = it.next();
            int i12 = next.getExtras().getInt("attemptNumber");
            if (next.getId() == i10) {
                if (i12 >= i11) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // hc.x
    public void a(ac.o oVar, int i10, boolean z10) {
        ComponentName componentName = new ComponentName(this.f27042a, JobInfoSchedulerService.class);
        JobScheduler jobScheduler = (JobScheduler) this.f27042a.getSystemService("jobscheduler");
        int c10 = c(oVar);
        if (!z10 && d(jobScheduler, c10, i10)) {
            ec.a.b("JobInfoScheduler", "Upload for context %s is already scheduled. Returning...", oVar);
            return;
        }
        long a02 = this.f27043b.a0(oVar);
        JobInfo.Builder c11 = this.f27044c.c(new JobInfo.Builder(c10, componentName), oVar.d(), a02, i10);
        PersistableBundle persistableBundle = new PersistableBundle();
        persistableBundle.putInt("attemptNumber", i10);
        persistableBundle.putString("backendName", oVar.b());
        persistableBundle.putInt("priority", lc.a.a(oVar.d()));
        if (oVar.c() != null) {
            persistableBundle.putString("extras", Base64.encodeToString(oVar.c(), 0));
        }
        c11.setExtras(persistableBundle);
        ec.a.c("JobInfoScheduler", "Scheduling upload for context %s with jobId=%d in %dms(Backend next call timestamp %d). Attempt %d", oVar, Integer.valueOf(c10), Long.valueOf(this.f27044c.g(oVar.d(), a02, i10)), Long.valueOf(a02), Integer.valueOf(i10));
        jobScheduler.schedule(c11.build());
    }

    @Override // hc.x
    public void b(ac.o oVar, int i10) {
        a(oVar, i10, false);
    }

    int c(ac.o oVar) {
        Adler32 adler32 = new Adler32();
        adler32.update(this.f27042a.getPackageName().getBytes(Charset.forName("UTF-8")));
        adler32.update(oVar.b().getBytes(Charset.forName("UTF-8")));
        adler32.update(ByteBuffer.allocate(4).putInt(lc.a.a(oVar.d())).array());
        if (oVar.c() != null) {
            adler32.update(oVar.c());
        }
        return (int) adler32.getValue();
    }
}
