package k5;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    public static final w f31514a = new w();

    /* renamed from: b  reason: collision with root package name */
    private static Function0 f31515b = a.f31516d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31516d = new a();

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
        return ((Number) f31515b.invoke()).longValue();
    }
}
