package zq;

import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import zq.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements nu.b, b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f56125a = new a();

    /* renamed from: zq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0789a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0789a f56126d = new C0789a();

        C0789a() {
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

    @Override // nu.b
    public Object f(Object obj, Object obj2) {
        return a(obj, obj2, C0789a.f56126d);
    }
}
