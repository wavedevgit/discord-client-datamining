package me;

import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {
    static Uri c(d dVar) {
        String b10 = dVar.b("exo_redir", null);
        if (b10 == null) {
            return null;
        }
        return Uri.parse(b10);
    }

    static long d(d dVar) {
        return dVar.a("exo_len", -1L);
    }

    long a(String str, long j10);

    String b(String str, String str2);
}
