package er;

import er.b;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements su.b, b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f22105a = new a();

    /* renamed from: er.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0309a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0309a f22106d = new C0309a();

        C0309a() {
            super(2);
        }

        public final String a(String formatSequence, double d10) {
            Intrinsics.checkNotNullParameter(formatSequence, "formatSequence");
            String format = String.format(formatSequence, Double.valueOf(d10));
            Intrinsics.checkNotNullExpressionValue(format, "format(formatSequence, arg)");
            return format;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return a((String) obj, ((Number) obj2).doubleValue());
        }
    }

    private a() {
    }

    public String a(Object obj, Object obj2, Function2 function2) {
        return b.a.b(this, obj, obj2, function2);
    }

    @Override // su.b
    public Object f(Object obj, Object obj2) {
        return a(obj, obj2, C0309a.f22106d);
    }
}
