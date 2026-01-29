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
    private static final Lazy f48470a = ir.l.b(a.f48472d);

    /* renamed from: b */
    private static final w f48471b = new w(null, null, null, null, null, null, 63, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d */
        public static final a f48472d = new a();

        /* renamed from: rs.b0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0603a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final C0603a f48473d = new C0603a();

            /* renamed from: rs.b0$a$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0604a extends Lambda implements Function1 {

                /* renamed from: d */
                public static final C0604a f48474d = new C0604a();

                C0604a() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f33282a;
                }
            }

            /* renamed from: rs.b0$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends Lambda implements Function1 {

                /* renamed from: d */
                public static final b f48475d = new b();

                /* renamed from: rs.b0$a$a$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0605a extends Lambda implements Function1 {

                    /* renamed from: d */
                    public static final C0605a f48476d = new C0605a();

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
                        return Unit.f33282a;
                    }
                }

                b() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    p.b(alternativeParsing, ':');
                    o.c.a.c(alternativeParsing, null, 1, null);
                    p.d(alternativeParsing, null, C0605a.f48476d, 1, null);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f33282a;
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
                p.a(build, new Function1[]{C0604a.f48474d}, b.f48475d);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.c) obj);
                return Unit.f33282a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final a0 invoke() {
            return a0.f48467b.a(C0603a.f48473d);
        }
    }

    public static final /* synthetic */ w a() {
        return f48471b;
    }

    public static final a0 b() {
        return (a0) f48470a.getValue();
    }
}
