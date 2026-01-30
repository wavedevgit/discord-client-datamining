package yp;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import vm.t;
import vm.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final List f54940a;

    /* renamed from: b  reason: collision with root package name */
    private final t f54941b;

    /* renamed from: c  reason: collision with root package name */
    private final t f54942c;

    /* renamed from: d  reason: collision with root package name */
    private final t f54943d;

    /* renamed from: e  reason: collision with root package name */
    private final Flow f54944e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54945d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f54946e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: yp.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0766a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f54948d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f54949e;

            C0766a(FlowCollector flowCollector, e eVar) {
                this.f54948d = flowCollector;
                this.f54949e = eVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                Object emit = this.f54948d.emit(this.f54949e.f(), continuation);
                if (emit == or.b.f()) {
                    return emit;
                }
                return Unit.f33298a;
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f54946e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f54945d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow B = js.g.B(e.this.g().a(), e.this.d().a(), e.this.c().a());
                C0766a c0766a = new C0766a((FlowCollector) this.f54946e, e.this);
                this.f54945d = 1;
                if (B.collect(c0766a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((a) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public e(String str, String str2, List monthList) {
        List list;
        String str3;
        Intrinsics.checkNotNullParameter(monthList, "monthList");
        this.f54940a = monthList;
        if (str != null) {
            list = StringsKt.L0(str, new char[]{'-'}, false, 0, 6, null);
        } else {
            list = null;
        }
        list = (list == null || list.size() != 3) ? CollectionsKt.o("", "", "") : list;
        this.f54941b = w.a((String) list.get(0));
        try {
            str3 = (String) monthList.get(Integer.parseInt((String) list.get(1)) - 1);
        } catch (NumberFormatException unused) {
            str3 = str2 == null ? "" : str2;
        }
        this.f54942c = w.a(str3);
        this.f54943d = w.a((String) list.get(2));
        this.f54944e = js.g.v(new a(null));
    }

    private final String a(String str, String str2, String str3) {
        String str4;
        int s02 = CollectionsKt.s0(this.f54940a, str2);
        if (s02 > -1) {
            str4 = StringsKt.t0(String.valueOf(s02 + 1), 2, '0');
        } else {
            str4 = null;
        }
        if (str != null && str.length() != 0 && str4 != null && str4.length() != 0 && str3 != null && str3.length() != 0) {
            return str + "-" + str4 + "-" + str3;
        }
        return "";
    }

    public final Date b() {
        try {
            List L0 = StringsKt.L0(f(), new char[]{'-'}, false, 0, 6, null);
            Calendar calendar = Calendar.getInstance();
            calendar.set(1, Integer.parseInt((String) L0.get(0)));
            calendar.set(2, Integer.parseInt((String) L0.get(1)) - 1);
            calendar.set(5, Integer.parseInt((String) L0.get(2)));
            return calendar.getTime();
        } catch (Exception unused) {
            return null;
        }
    }

    public final t c() {
        return this.f54943d;
    }

    public final t d() {
        return this.f54942c;
    }

    public final Flow e() {
        return this.f54944e;
    }

    public final String f() {
        return a(this.f54941b.b(), this.f54942c.b(), this.f54943d.b());
    }

    public final t g() {
        return this.f54941b;
    }
}
