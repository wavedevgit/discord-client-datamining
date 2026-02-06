package x4;

import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f54513a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f54514b;

    static {
        ByteString.a aVar = ByteString.f43166o;
        f54513a = aVar.g("<svg");
        f54514b = aVar.g("<");
    }

    public static final boolean a(j jVar, BufferedSource bufferedSource) {
        if (bufferedSource.s0(0L, f54514b) && k5.j.a(bufferedSource, f54513a, 0L, 1024L) != -1) {
            return true;
        }
        return false;
    }
}
