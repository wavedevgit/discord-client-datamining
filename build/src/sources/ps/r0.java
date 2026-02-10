package ps;

import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r0 {

    /* renamed from: a  reason: collision with root package name */
    private static final us.e0 f44531a = new us.e0("REMOVED_TASK");

    /* renamed from: b  reason: collision with root package name */
    private static final us.e0 f44532b = new us.e0("CLOSED_EMPTY");

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
