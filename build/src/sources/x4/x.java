package x4;

import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f53224a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f53225b;

    static {
        ByteString.a aVar = ByteString.f44379o;
        f53224a = aVar.g("<svg");
        f53225b = aVar.g("<");
    }

    public static final boolean a(j jVar, BufferedSource bufferedSource) {
        if (bufferedSource.p0(0L, f53225b) && k5.j.a(bufferedSource, f53224a, 0L, 1024L) != -1) {
            return true;
        }
        return false;
    }
}
