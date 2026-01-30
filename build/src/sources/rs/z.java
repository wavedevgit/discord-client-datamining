package rs;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import rs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f48644a = ir.l.b(a.f48647d);

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f48645b = ir.l.b(b.f48649d);

    /* renamed from: c  reason: collision with root package name */
    private static final v f48646c = new v(null, null, null, null, null, 31, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f48647d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rs.z$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0621a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0621a f48648d = new C0621a();

            C0621a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0611a.c(build, null, 1, null);
                p.b(build, '-');
                o.a.C0611a.b(build, null, 1, null);
                p.b(build, '-');
                o.a.C0611a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f33298a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f48641b.a(C0621a.f48648d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f48649d = new b();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f48650d = new a();

            a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0611a.c(build, null, 1, null);
                o.a.C0611a.b(build, null, 1, null);
                o.a.C0611a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f33298a;
            }
        }

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f48641b.a(a.f48650d);
        }
    }

    public static final n b() {
        return (n) f48644a.getValue();
    }

    public static final n c() {
        return (n) f48645b.getValue();
    }

    public static final Object d(Object obj, String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (obj != null) {
            return obj;
        }
        throw new qs.b("Can not create a " + name + " from the given input: the field " + name + " is missing");
    }
}
