package x4;

import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f54385a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f54386b;

    static {
        ByteString.a aVar = ByteString.f40591o;
        f54385a = aVar.g("<svg");
        f54386b = aVar.g("<");
    }

    public static final boolean a(j jVar, BufferedSource bufferedSource) {
        if (bufferedSource.r0(0L, f54386b) && k5.j.a(bufferedSource, f54385a, 0L, 1024L) != -1) {
            return true;
        }
        return false;
    }
}
