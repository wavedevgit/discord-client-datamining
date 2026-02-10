package at;

import at.o;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p0 {

    /* renamed from: a */
    private static final Lazy f6141a = rr.l.a(b.f6147d);

    /* renamed from: b */
    private static final Lazy f6142b = rr.l.a(c.f6153d);

    /* renamed from: c */
    private static final Lazy f6143c = rr.l.a(a.f6145d);

    /* renamed from: d */
    private static final x f6144d = new x(null, null, null, null, 15, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d */
        public static final a f6145d = new a();

        /* renamed from: at.p0$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0111a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final C0111a f6146d = new C0111a();

            C0111a() {
                super(1);
            }

            public final void a(o.d build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.d.a.a(build, null, 1, null);
                o.d.a.b(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.d) obj);
                return Unit.f31765a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final o0 invoke() {
            return o0.f6138b.a(C0111a.f6146d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d */
        public static final b f6147d = new b();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final a f6148d = new a();

            /* renamed from: at.p0$b$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0112a extends Lambda implements Function1 {

                /* renamed from: d */
                public static final C0112a f6149d = new C0112a();

                C0112a() {
                    super(1);
                }

                public final void a(o.d alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    alternativeParsing.m("z");
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.d) obj);
                    return Unit.f31765a;
                }
            }

            /* renamed from: at.p0$b$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0113b extends Lambda implements Function1 {

                /* renamed from: d */
                public static final C0113b f6150d = new C0113b();

                /* renamed from: at.p0$b$a$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0114a extends Lambda implements Function1 {

                    /* renamed from: d */
                    public static final C0114a f6151d = new C0114a();

                    /* renamed from: at.p0$b$a$b$a$a */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                    public static final class C0115a extends Lambda implements Function1 {

                        /* renamed from: d */
                        public static final C0115a f6152d = new C0115a();

                        C0115a() {
                            super(1);
                        }

                        public final void a(o.d optional) {
                            Intrinsics.checkNotNullParameter(optional, "$this$optional");
                            p.b(optional, ':');
                            o.d.a.c(optional, null, 1, null);
                        }

                        @Override // kotlin.jvm.functions.Function1
                        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                            a((o.d) obj);
                            return Unit.f31765a;
                        }
                    }

                    C0114a() {
                        super(1);
                    }

                    public final void a(o.d optional) {
                        Intrinsics.checkNotNullParameter(optional, "$this$optional");
                        o.d.a.a(optional, null, 1, null);
                        p.b(optional, ':');
                        o.d.a.b(optional, null, 1, null);
                        p.d(optional, null, C0115a.f6152d, 1, null);
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                        a((o.d) obj);
                        return Unit.f31765a;
                    }
                }

                C0113b() {
                    super(1);
                }

                public final void a(o.d alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    p.c(alternativeParsing, "Z", C0114a.f6151d);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.d) obj);
                    return Unit.f31765a;
                }
            }

            a() {
                super(1);
            }

            public final void a(o.d build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                p.a(build, new Function1[]{C0112a.f6149d}, C0113b.f6150d);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.d) obj);
                return Unit.f31765a;
            }
        }

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final o0 invoke() {
            return o0.f6138b.a(a.f6148d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d */
        public static final c f6153d = new c();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final a f6154d = new a();

            /* renamed from: at.p0$c$a$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0116a extends Lambda implements Function1 {

                /* renamed from: d */
                public static final C0116a f6155d = new C0116a();

                C0116a() {
                    super(1);
                }

                public final void a(o.d alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    alternativeParsing.m("z");
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.d) obj);
                    return Unit.f31765a;
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends Lambda implements Function1 {

                /* renamed from: d */
                public static final b f6156d = new b();

                /* renamed from: at.p0$c$a$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0117a extends Lambda implements Function1 {

                    /* renamed from: d */
                    public static final C0117a f6157d = new C0117a();

                    /* renamed from: at.p0$c$a$b$a$a */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                    public static final class C0118a extends Lambda implements Function1 {

                        /* renamed from: d */
                        public static final C0118a f6158d = new C0118a();

                        /* renamed from: at.p0$c$a$b$a$a$a */
                        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                        public static final class C0119a extends Lambda implements Function1 {

                            /* renamed from: d */
                            public static final C0119a f6159d = new C0119a();

                            C0119a() {
                                super(1);
                            }

                            public final void a(o.d optional) {
                                Intrinsics.checkNotNullParameter(optional, "$this$optional");
                                o.d.a.c(optional, null, 1, null);
                            }

                            @Override // kotlin.jvm.functions.Function1
                            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                                a((o.d) obj);
                                return Unit.f31765a;
                            }
                        }

                        C0118a() {
                            super(1);
                        }

                        public final void a(o.d optional) {
                            Intrinsics.checkNotNullParameter(optional, "$this$optional");
                            o.d.a.b(optional, null, 1, null);
                            p.d(optional, null, C0119a.f6159d, 1, null);
                        }

                        @Override // kotlin.jvm.functions.Function1
                        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                            a((o.d) obj);
                            return Unit.f31765a;
                        }
                    }

                    C0117a() {
                        super(1);
                    }

                    public final void a(o.d optional) {
                        Intrinsics.checkNotNullParameter(optional, "$this$optional");
                        o.d.a.a(optional, null, 1, null);
                        p.d(optional, null, C0118a.f6158d, 1, null);
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                        a((o.d) obj);
                        return Unit.f31765a;
                    }
                }

                b() {
                    super(1);
                }

                public final void a(o.d alternativeParsing) {
                    Intrinsics.checkNotNullParameter(alternativeParsing, "$this$alternativeParsing");
                    p.c(alternativeParsing, "Z", C0117a.f6157d);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((o.d) obj);
                    return Unit.f31765a;
                }
            }

            a() {
                super(1);
            }

            public final void a(o.d build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                p.a(build, new Function1[]{C0116a.f6155d}, b.f6156d);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.d) obj);
                return Unit.f31765a;
            }
        }

        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final o0 invoke() {
            return o0.f6138b.a(a.f6154d);
        }
    }

    public static final /* synthetic */ x a() {
        return f6144d;
    }

    public static final o0 b() {
        return (o0) f6143c.getValue();
    }

    public static final o0 c() {
        return (o0) f6141a.getValue();
    }

    public static final o0 d() {
        return (o0) f6142b.getValue();
    }
}
