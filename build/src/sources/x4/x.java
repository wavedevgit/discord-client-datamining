package x4;

import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f54653a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f54654b;

    static {
        ByteString.a aVar = ByteString.f42341o;
        f54653a = aVar.g("<svg");
        f54654b = aVar.g("<");
    }

    public static final boolean a(j jVar, BufferedSource bufferedSource) {
        if (bufferedSource.r0(0L, f54654b) && k5.j.a(bufferedSource, f54653a, 0L, 1024L) != -1) {
            return true;
        }
        return false;
    }
}
