package rc;

import android.util.Pair;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m0 {
    private static long a(Map map, String str) {
        if (map != null) {
            try {
                String str2 = (String) map.get(str);
                if (str2 != null) {
                    return Long.parseLong(str2);
                }
                return -9223372036854775807L;
            } catch (NumberFormatException unused) {
                return -9223372036854775807L;
            }
        }
        return -9223372036854775807L;
    }

    public static Pair b(n nVar) {
        Map g10 = nVar.g();
        if (g10 == null) {
            return null;
        }
        return new Pair(Long.valueOf(a(g10, "LicenseDurationRemaining")), Long.valueOf(a(g10, "PlaybackDurationRemaining")));
    }
}
