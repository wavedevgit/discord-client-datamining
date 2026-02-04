package us;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import us.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f51018a = lr.l.a(a.f51021d);

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f51019b = lr.l.a(b.f51023d);

    /* renamed from: c  reason: collision with root package name */
    private static final v f51020c = new v(null, null, null, null, null, 31, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f51021d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: us.z$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0669a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0669a f51022d = new C0669a();

            C0669a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0659a.c(build, null, 1, null);
                p.b(build, '-');
                o.a.C0659a.b(build, null, 1, null);
                p.b(build, '-');
                o.a.C0659a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f32464a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f51015b.a(C0669a.f51022d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f51023d = new b();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f51024d = new a();

            a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0659a.c(build, null, 1, null);
                o.a.C0659a.b(build, null, 1, null);
                o.a.C0659a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f32464a;
            }
        }

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f51015b.a(a.f51024d);
        }
    }

    public static final n b() {
        return (n) f51018a.getValue();
    }

    public static final n c() {
        return (n) f51019b.getValue();
    }

    public static final Object d(Object obj, String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (obj != null) {
            return obj;
        }
        throw new ts.b("Can not create a " + name + " from the given input: the field " + name + " is missing");
    }
}
