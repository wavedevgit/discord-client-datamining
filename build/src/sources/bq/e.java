package bq;

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
import ym.t;
import ym.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final List f6734a;

    /* renamed from: b  reason: collision with root package name */
    private final t f6735b;

    /* renamed from: c  reason: collision with root package name */
    private final t f6736c;

    /* renamed from: d  reason: collision with root package name */
    private final t f6737d;

    /* renamed from: e  reason: collision with root package name */
    private final Flow f6738e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6739d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f6740e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: bq.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0109a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f6742d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ e f6743e;

            C0109a(FlowCollector flowCollector, e eVar) {
                this.f6742d = flowCollector;
                this.f6743e = eVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                Object emit = this.f6742d.emit(this.f6743e.f(), continuation);
                if (emit == rr.b.f()) {
                    return emit;
                }
                return Unit.f32464a;
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f6740e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f6739d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow B = ms.g.B(e.this.g().a(), e.this.d().a(), e.this.c().a());
                C0109a c0109a = new C0109a((FlowCollector) this.f6740e, e.this);
                this.f6739d = 1;
                if (B.collect(c0109a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((a) create(flowCollector, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public e(String str, String str2, List monthList) {
        List list;
        String str3;
        Intrinsics.checkNotNullParameter(monthList, "monthList");
        this.f6734a = monthList;
        if (str != null) {
            list = StringsKt.L0(str, new char[]{'-'}, false, 0, 6, null);
        } else {
            list = null;
        }
        list = (list == null || list.size() != 3) ? CollectionsKt.o("", "", "") : list;
        this.f6735b = w.a((String) list.get(0));
        try {
            str3 = (String) monthList.get(Integer.parseInt((String) list.get(1)) - 1);
        } catch (NumberFormatException unused) {
            str3 = str2 == null ? "" : str2;
        }
        this.f6736c = w.a(str3);
        this.f6737d = w.a((String) list.get(2));
        this.f6738e = ms.g.v(new a(null));
    }

    private final String a(String str, String str2, String str3) {
        String str4;
        int s02 = CollectionsKt.s0(this.f6734a, str2);
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
        return this.f6737d;
    }

    public final t d() {
        return this.f6736c;
    }

    public final Flow e() {
        return this.f6738e;
    }

    public final String f() {
        return a(this.f6735b.b(), this.f6736c.b(), this.f6737d.b());
    }

    public final t g() {
        return this.f6735b;
    }
}
