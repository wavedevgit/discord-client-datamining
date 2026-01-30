package gs;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r0 {

    /* renamed from: a  reason: collision with root package name */
    private static final ls.e0 f27195a = new ls.e0("REMOVED_TASK");

    /* renamed from: b  reason: collision with root package name */
    private static final ls.e0 f27196b = new ls.e0("CLOSED_EMPTY");

    public static final long c(long j10) {
        if (j10 <= 0) {
            return 0L;
        }
        if (j10 >= 9223372036854L) {
            return LongCompanionObject.MAX_VALUE;
        }
        return j10 * 1000000;
    }
}
