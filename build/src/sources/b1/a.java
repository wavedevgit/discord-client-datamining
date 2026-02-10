package b1;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FloatCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0127a f6302a = new C0127a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final long f6303b = b.a(0.0f, 0.0f);

    /* renamed from: c  reason: collision with root package name */
    private static final long f6304c = b.a(Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY);

    /* renamed from: d  reason: collision with root package name */
    private static final long f6305d = b.a(Float.NaN, Float.NaN);

    /* renamed from: b1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0127a {
        public /* synthetic */ C0127a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0127a() {
        }
    }

    public static final float b(long j10) {
        if (j10 != f6305d) {
            FloatCompanionObject floatCompanionObject = FloatCompanionObject.INSTANCE;
            return Float.intBitsToFloat((int) (j10 >> 32));
        }
        throw new IllegalStateException("Offset is unspecified");
    }

    public static final float c(long j10) {
        if (j10 != f6305d) {
            FloatCompanionObject floatCompanionObject = FloatCompanionObject.INSTANCE;
            return Float.intBitsToFloat((int) (j10 & 4294967295L));
        }
        throw new IllegalStateException("Offset is unspecified");
    }

    public static long a(long j10) {
        return j10;
    }
}
