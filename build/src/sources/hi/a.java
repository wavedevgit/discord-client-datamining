package hi;

import android.app.PendingIntent;
import android.os.Bundle;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static a j(Bundle bundle) {
        return new b(bundle.getInt(SharedPreferencesKey.SESSION_ID), bundle.getInt("status"), bundle.getInt("error_code"), bundle.getLong("bytes_downloaded"), bundle.getLong("total_bytes_to_download"), bundle.getStringArrayList("module_names"), bundle.getStringArrayList("languages"), (PendingIntent) bundle.getParcelable("user_confirmation_intent"), bundle.getParcelableArrayList("split_file_intents"));
    }

    public abstract long a();

    public abstract int b();

    public abstract PendingIntent c();

    public abstract int d();

    public abstract int e();

    public abstract long f();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract List g();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract List h();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract List i();
}
