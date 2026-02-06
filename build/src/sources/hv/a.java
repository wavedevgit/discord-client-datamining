package hv;

import android.os.Trace;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements AutoCloseable {
    private a(String str) {
        if (str.length() > 127) {
            str = str.substring(0, 124) + "...";
        }
        Trace.beginSection(str);
    }

    public static a a(String str) {
        return new a(str);
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        Trace.endSection();
    }
}
