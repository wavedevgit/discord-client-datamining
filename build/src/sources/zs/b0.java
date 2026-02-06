package zs;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import zs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b0 {

    /* renamed from: a */
    private static final Lazy f56460a = qr.l.a(a.f56462d);

    /* renamed from: b */
    private static final w f56461b = new w(null, null, null, null, null, null, 63, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d */
        public static final a f56462d = new a();

        /* renamed from: zs.b0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0788a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final C0788a f56463d = new C0788a();

            /* renamed from: zs.b0$a$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0789a extends Lambda implements Function1 {

                /* renamed from: d */
                public static final C0789a f56464d = new C0789a();

                C0789a() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f32008a;
                }
            }

            /* renamed from: zs.b0$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends Lambda implements Function1 {

                /* renamed from: d */
                public static final b f56465d = new b();

                /* renamed from: zs.b0$a$a$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0790a extends Lambda implements Function1 {

                    /* renamed from: d */
                    public static final C0790a f56466d = new C0790a();

                    C0790a() {
                        super(1);
                    }

                    public final void a(o.c optional) {
                        Intrinsics.checkNotNullParameter(optional, "$this$optional");
                        p.b(optional, '.');
                        optional.t(1, 9);
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                        a((o.c) obj);
                        return Unit.f32008a;
                    }
                }

                b() {
                    super(1);
                }

                public final void a(o.c alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    p.b(alternativeParsing, ':');
                    o.c.a.c(alternativeParsing, null, 1, null);
                    p.d(alternativeParsing, null, C0790a.f56466d, 1, null);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.c) obj);
                    return Unit.f32008a;
                }
            }

            C0788a() {
                super(1);
            }

            public final void a(o.c build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.c.a.a(build, null, 1, null);
                p.b(build, ':');
                o.c.a.b(build, null, 1, null);
                p.a(build, new Function1[]{C0789a.f56464d}, b.f56465d);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.c) obj);
                return Unit.f32008a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final a0 invoke() {
            return a0.f56457b.a(C0788a.f56463d);
        }
    }

    public static final /* synthetic */ w a() {
        return f56461b;
    }

    public static final a0 b() {
        return (a0) f56460a.getValue();
    }
}
