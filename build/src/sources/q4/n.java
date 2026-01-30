package q4;

import android.content.Context;
import android.content.SharedPreferences;
import androidx.work.impl.WorkDatabase;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final WorkDatabase f46941a;

    public n(WorkDatabase workDatabase) {
        this.f46941a = workDatabase;
    }

    public static void c(Context context, x3.g gVar) {
        SharedPreferences sharedPreferences = context.getSharedPreferences("androidx.work.util.preferences", 0);
        if (!sharedPreferences.contains("reschedule_needed") && !sharedPreferences.contains("last_cancel_all_time_ms")) {
            return;
        }
        long j10 = 0;
        long j11 = sharedPreferences.getLong("last_cancel_all_time_ms", 0L);
        if (sharedPreferences.getBoolean("reschedule_needed", false)) {
            j10 = 1;
        }
        gVar.D();
        try {
            gVar.h0("INSERT OR REPLACE INTO `Preference` (`key`, `long_value`) VALUES (@key, @long_value)", new Object[]{"last_cancel_all_time_ms", Long.valueOf(j11)});
            gVar.h0("INSERT OR REPLACE INTO `Preference` (`key`, `long_value`) VALUES (@key, @long_value)", new Object[]{"reschedule_needed", Long.valueOf(j10)});
            sharedPreferences.edit().clear().apply();
            gVar.g0();
        } finally {
            gVar.s0();
        }
    }

    public long a() {
        Long b10 = this.f46941a.D().b("last_force_stop_ms");
        if (b10 != null) {
            return b10.longValue();
        }
        return 0L;
    }

    public boolean b() {
        Long b10 = this.f46941a.D().b("reschedule_needed");
        if (b10 != null && b10.longValue() == 1) {
            return true;
        }
        return false;
    }

    public void d(long j10) {
        this.f46941a.D().a(new p4.d("last_force_stop_ms", Long.valueOf(j10)));
    }

    public void e(boolean z10) {
        this.f46941a.D().a(new p4.d("reschedule_needed", z10));
    }
}
