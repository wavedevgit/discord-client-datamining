package k5;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    public static final w f32207a = new w();

    /* renamed from: b  reason: collision with root package name */
    private static Function0 f32208b = a.f32209d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f32209d = new a();

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
        return ((Number) f32208b.invoke()).longValue();
    }
}
