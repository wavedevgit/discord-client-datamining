package xs;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import xs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f54257a = or.l.a(a.f54260d);

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f54258b = or.l.a(b.f54262d);

    /* renamed from: c  reason: collision with root package name */
    private static final v f54259c = new v(null, null, null, null, null, 31, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f54260d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: xs.z$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0746a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0746a f54261d = new C0746a();

            C0746a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0736a.c(build, null, 1, null);
                p.b(build, '-');
                o.a.C0736a.b(build, null, 1, null);
                p.b(build, '-');
                o.a.C0736a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f31988a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f54254b.a(C0746a.f54261d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f54262d = new b();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f54263d = new a();

            a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0736a.c(build, null, 1, null);
                o.a.C0736a.b(build, null, 1, null);
                o.a.C0736a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f31988a;
            }
        }

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f54254b.a(a.f54263d);
        }
    }

    public static final n b() {
        return (n) f54257a.getValue();
    }

    public static final n c() {
        return (n) f54258b.getValue();
    }

    public static final Object d(Object obj, String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (obj != null) {
            return obj;
        }
        throw new ws.b("Can not create a " + name + " from the given input: the field " + name + " is missing");
    }
}
