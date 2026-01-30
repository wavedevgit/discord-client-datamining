package k5;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    public static final w f33063a = new w();

    /* renamed from: b  reason: collision with root package name */
    private static Function0 f33064b = a.f33065d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f33065d = new a();

        a() {
            super(0, System.class, "currentTimeMillis", "currentTimeMillis()J", 0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Long invoke() {
            return Long.valueOf(System.currentTimeMillis());
        }
    }

    private w() {
    }

    public final long a() {
        return ((Number) f33064b.invoke()).longValue();
    }
}
