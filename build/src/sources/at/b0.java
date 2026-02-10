package at;

import at.o;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b0 {

    /* renamed from: a */
    private static final Lazy f6038a = rr.l.a(a.f6040d);

    /* renamed from: b */
    private static final w f6039b = new w(null, null, null, null, null, null, 63, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d */
        public static final a f6040d = new a();

        /* renamed from: at.b0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0102a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final C0102a f6041d = new C0102a();

            /* renamed from: at.b0$a$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0103a extends Lambda implements Function1 {

                /* renamed from: d */
                public static final C0103a f6042d = new C0103a();

                C0103a() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f31765a;
                }
            }

            /* renamed from: at.b0$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends Lambda implements Function1 {

                /* renamed from: d */
                public static final b f6043d = new b();

                /* renamed from: at.b0$a$a$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0104a extends Lambda implements Function1 {

                    /* renamed from: d */
                    public static final C0104a f6044d = new C0104a();

                    C0104a() {
                        super(1);
                    }

                    public final void a(o.c optional) {
                        Intrinsics.checkNotNullParameter(optional, "$this$optional");
                        p.b(optional, '.');
                        optional.o(1, 9);
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                        a((o.c) obj);
                        return Unit.f31765a;
                    }
                }

                b() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    p.b(alternativeParsing, ':');
                    o.c.a.c(alternativeParsing, null, 1, null);
                    p.d(alternativeParsing, null, C0104a.f6044d, 1, null);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f31765a;
                }
            }

            C0102a() {
                super(1);
            }

            public final void a(o.c build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.c.a.a(build, null, 1, null);
                p.b(build, ':');
                o.c.a.b(build, null, 1, null);
                p.a(build, new Function1[]{C0103a.f6042d}, b.f6043d);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.c) obj);
                return Unit.f31765a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final a0 invoke() {
            return a0.f6035b.a(C0102a.f6041d);
        }
    }

    public static final /* synthetic */ w a() {
        return f6039b;
    }

    public static final a0 b() {
        return (a0) f6038a.getValue();
    }
}
