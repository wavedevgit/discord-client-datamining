package rs;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import rs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b0 {

    /* renamed from: a */
    private static final Lazy f48486a = ir.l.b(a.f48488d);

    /* renamed from: b */
    private static final w f48487b = new w(null, null, null, null, null, null, 63, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d */
        public static final a f48488d = new a();

        /* renamed from: rs.b0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0603a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final C0603a f48489d = new C0603a();

            /* renamed from: rs.b0$a$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0604a extends Lambda implements Function1 {

                /* renamed from: d */
                public static final C0604a f48490d = new C0604a();

                C0604a() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f33298a;
                }
            }

            /* renamed from: rs.b0$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends Lambda implements Function1 {

                /* renamed from: d */
                public static final b f48491d = new b();

                /* renamed from: rs.b0$a$a$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0605a extends Lambda implements Function1 {

                    /* renamed from: d */
                    public static final C0605a f48492d = new C0605a();

                    C0605a() {
                        super(1);
                    }

                    public final void a(o.c optional) {
                        Intrinsics.checkNotNullParameter(optional, "$this$optional");
                        p.b(optional, '.');
                        optional.q(1, 9);
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                        a((o.c) obj);
                        return Unit.f33298a;
                    }
                }

                b() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    p.b(alternativeParsing, ':');
                    o.c.a.c(alternativeParsing, null, 1, null);
                    p.d(alternativeParsing, null, C0605a.f48492d, 1, null);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f33298a;
                }
            }

            C0603a() {
                super(1);
            }

            public final void a(o.c build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.c.a.a(build, null, 1, null);
                p.b(build, ':');
                o.c.a.b(build, null, 1, null);
                p.a(build, new Function1[]{C0604a.f48490d}, b.f48491d);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.c) obj);
                return Unit.f33298a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final a0 invoke() {
            return a0.f48483b.a(C0603a.f48489d);
        }
    }

    public static final /* synthetic */ w a() {
        return f48487b;
    }

    public static final a0 b() {
        return (a0) f48486a.getValue();
    }
}
