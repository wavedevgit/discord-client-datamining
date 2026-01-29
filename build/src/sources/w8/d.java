package w8;

import java.io.InputStream;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d {
    public static long a(InputStream inputStream, long j10) {
        boolean z10;
        j.g(inputStream);
        if (j10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        long j11 = j10;
        while (j11 > 0) {
            long skip = inputStream.skip(j11);
            if (skip <= 0) {
                if (inputStream.read() != -1) {
                    skip = 1;
                } else {
                    return j10 - j11;
                }
            }
            j11 -= skip;
        }
        return j10;
    }
}
