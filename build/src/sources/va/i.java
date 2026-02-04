package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public static final i f51252a = new i();

    /* renamed from: b  reason: collision with root package name */
    private static final SparseIntArray f51253b = new SparseIntArray(0);

    private i() {
    }

    public static final z a() {
        return new z(0, f51252a.b(), f51253b);
    }

    private final int b() {
        int min = (int) Math.min(Runtime.getRuntime().maxMemory(), 2147483647L);
        if (min > 16777216) {
            return (min / 4) * 3;
        }
        return min / 2;
    }
}
