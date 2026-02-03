package x4;

import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f53432a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f53433b;

    static {
        ByteString.a aVar = ByteString.f44507o;
        f53432a = aVar.g("<svg");
        f53433b = aVar.g("<");
    }

    public static final boolean a(j jVar, BufferedSource bufferedSource) {
        if (bufferedSource.q0(0L, f53433b) && k5.j.a(bufferedSource, f53432a, 0L, 1024L) != -1) {
            return true;
        }
        return false;
    }
}
