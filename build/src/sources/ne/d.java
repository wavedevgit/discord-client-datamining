package ne;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {
    static Uri b(d dVar) {
        String c10 = dVar.c("exo_redir", null);
        if (c10 == null) {
            return null;
        }
        return Uri.parse(c10);
    }

    static long d(d dVar) {
        return dVar.a("exo_len", -1L);
    }

    long a(String str, long j10);

    String c(String str, String str2);
}
