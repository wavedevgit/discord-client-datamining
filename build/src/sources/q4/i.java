package q4;

import android.content.Context;
import android.content.SharedPreferences;
import androidx.work.impl.WorkDatabase;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i {
    public static final void c(Context context, x3.g sqLiteDatabase) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
        SharedPreferences sharedPreferences = context.getSharedPreferences("androidx.work.util.id", 0);
        if (!sharedPreferences.contains("next_job_scheduler_id") && !sharedPreferences.contains("next_job_scheduler_id")) {
            return;
        }
        int i10 = sharedPreferences.getInt("next_job_scheduler_id", 0);
        int i11 = sharedPreferences.getInt("next_alarm_manager_id", 0);
        sqLiteDatabase.H();
        try {
            sqLiteDatabase.k0("INSERT OR REPLACE INTO `Preference` (`key`, `long_value`) VALUES (@key, @long_value)", new Object[]{"next_job_scheduler_id", Integer.valueOf(i10)});
            sqLiteDatabase.k0("INSERT OR REPLACE INTO `Preference` (`key`, `long_value`) VALUES (@key, @long_value)", new Object[]{"next_alarm_manager_id", Integer.valueOf(i11)});
            sharedPreferences.edit().clear().apply();
            sqLiteDatabase.j0();
        } finally {
            sqLiteDatabase.v0();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int d(WorkDatabase workDatabase, String str) {
        int i10;
        Long b10 = workDatabase.D().b(str);
        int i11 = 0;
        if (b10 != null) {
            i10 = (int) b10.longValue();
        } else {
            i10 = 0;
        }
        if (i10 != Integer.MAX_VALUE) {
            i11 = i10 + 1;
        }
        e(workDatabase, str, i11);
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(WorkDatabase workDatabase, String str, int i10) {
        workDatabase.D().a(new p4.d(str, Long.valueOf(i10)));
    }
}
