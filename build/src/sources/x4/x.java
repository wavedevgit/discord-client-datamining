package x4;

import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f53208a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f53209b;

    static {
        ByteString.a aVar = ByteString.f44363o;
        f53208a = aVar.g("<svg");
        f53209b = aVar.g("<");
    }

    public static final boolean a(j jVar, BufferedSource bufferedSource) {
        if (bufferedSource.p0(0L, f53209b) && k5.j.a(bufferedSource, f53208a, 0L, 1024L) != -1) {
            return true;
        }
        return false;
    }
}
