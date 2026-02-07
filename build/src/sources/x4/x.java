package x4;

import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f54561a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f54562b;

    static {
        ByteString.a aVar = ByteString.f43214o;
        f54561a = aVar.g("<svg");
        f54562b = aVar.g("<");
    }

    public static final boolean a(j jVar, BufferedSource bufferedSource) {
        if (bufferedSource.s0(0L, f54562b) && k5.j.a(bufferedSource, f54561a, 0L, 1024L) != -1) {
            return true;
        }
        return false;
    }
}
