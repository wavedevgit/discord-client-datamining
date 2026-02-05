package j$.time.format;

import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class t {

    /* renamed from: a  reason: collision with root package name */
    public static final t f30507a = new Object();

    public final int hashCode() {
        return 182;
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [j$.time.format.t, java.lang.Object] */
    static {
        new ConcurrentHashMap(16, 0.75f, 2);
    }

    public final boolean equals(Object obj) {
        return this == obj || (obj instanceof t);
    }

    public final String toString() {
        return "DecimalStyle[0+-.]";
    }
}
