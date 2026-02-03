package b1;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FloatCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0106a f6191a = new C0106a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final long f6192b = b.a(0.0f, 0.0f);

    /* renamed from: c  reason: collision with root package name */
    private static final long f6193c = b.a(Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY);

    /* renamed from: d  reason: collision with root package name */
    private static final long f6194d = b.a(Float.NaN, Float.NaN);

    /* renamed from: b1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0106a {
        public /* synthetic */ C0106a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0106a() {
        }
    }

    public static final float b(long j10) {
        if (j10 != f6194d) {
            FloatCompanionObject floatCompanionObject = FloatCompanionObject.INSTANCE;
            return Float.intBitsToFloat((int) (j10 >> 32));
        }
        throw new IllegalStateException("Offset is unspecified");
    }

    public static final float c(long j10) {
        if (j10 != f6194d) {
            FloatCompanionObject floatCompanionObject = FloatCompanionObject.INSTANCE;
            return Float.intBitsToFloat((int) (j10 & 4294967295L));
        }
        throw new IllegalStateException("Offset is unspecified");
    }

    public static long a(long j10) {
        return j10;
    }
}
