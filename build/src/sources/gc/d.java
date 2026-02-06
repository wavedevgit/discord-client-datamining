package gc;

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
    private final Context f24864a;

    /* renamed from: b  reason: collision with root package name */
    private final hc.d f24865b;

    /* renamed from: c  reason: collision with root package name */
    private final f f24866c;

    public d(Context context, hc.d dVar, f fVar) {
        this.f24864a = context;
        this.f24865b = dVar;
        this.f24866c = fVar;
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

    @Override // gc.x
    public void a(zb.o oVar, int i10, boolean z10) {
        ComponentName componentName = new ComponentName(this.f24864a, JobInfoSchedulerService.class);
        JobScheduler jobScheduler = (JobScheduler) this.f24864a.getSystemService("jobscheduler");
        int c10 = c(oVar);
        if (!z10 && d(jobScheduler, c10, i10)) {
            dc.a.b("JobInfoScheduler", "Upload for context %s is already scheduled. Returning...", oVar);
            return;
        }
        long t02 = this.f24865b.t0(oVar);
        JobInfo.Builder c11 = this.f24866c.c(new JobInfo.Builder(c10, componentName), oVar.d(), t02, i10);
        PersistableBundle persistableBundle = new PersistableBundle();
        persistableBundle.putInt("attemptNumber", i10);
        persistableBundle.putString("backendName", oVar.b());
        persistableBundle.putInt("priority", kc.a.a(oVar.d()));
        if (oVar.c() != null) {
            persistableBundle.putString("extras", Base64.encodeToString(oVar.c(), 0));
        }
        c11.setExtras(persistableBundle);
        dc.a.c("JobInfoScheduler", "Scheduling upload for context %s with jobId=%d in %dms(Backend next call timestamp %d). Attempt %d", oVar, Integer.valueOf(c10), Long.valueOf(this.f24866c.g(oVar.d(), t02, i10)), Long.valueOf(t02), Integer.valueOf(i10));
        jobScheduler.schedule(c11.build());
    }

    @Override // gc.x
    public void b(zb.o oVar, int i10) {
        a(oVar, i10, false);
    }

    int c(zb.o oVar) {
        Adler32 adler32 = new Adler32();
        adler32.update(this.f24864a.getPackageName().getBytes(Charset.forName("UTF-8")));
        adler32.update(oVar.b().getBytes(Charset.forName("UTF-8")));
        adler32.update(ByteBuffer.allocate(4).putInt(kc.a.a(oVar.d())).array());
        if (oVar.c() != null) {
            adler32.update(oVar.c());
        }
        return (int) adler32.getValue();
    }
}
