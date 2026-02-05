package ul;

import android.os.Environment;
import android.os.StatFs;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private static final String f51467a = "d";

    public long a() {
        try {
            return new StatFs(Environment.getDataDirectory().getAbsolutePath()).getAvailableBytes();
        } catch (Exception unused) {
            Log.e(f51467a, "Could not get Available Disk Space");
            return -1L;
        }
    }
}
