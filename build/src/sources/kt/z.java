package kt;

import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kt.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f35897a = as.l.b(a.f35900d);

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f35898b = as.l.b(b.f35902d);

    /* renamed from: c  reason: collision with root package name */
    private static final v f35899c = new v(null, null, null, null, null, 31, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f35900d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: kt.z$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0484a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0484a f35901d = new C0484a();

            C0484a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0474a.c(build, null, 1, null);
                p.b(build, '-');
                o.a.C0474a.b(build, null, 1, null);
                p.b(build, '-');
                o.a.C0474a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f32556a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f35894b.a(C0484a.f35901d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f35902d = new b();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f35903d = new a();

            a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0474a.c(build, null, 1, null);
                o.a.C0474a.b(build, null, 1, null);
                o.a.C0474a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f32556a;
            }
        }

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f35894b.a(a.f35903d);
        }
    }

    public static final n b() {
        return (n) f35897a.getValue();
    }

    public static final n c() {
        return (n) f35898b.getValue();
    }

    public static final Object d(Object obj, String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (obj != null) {
            return obj;
        }
        throw new jt.b("Can not create a " + name + " from the given input: the field " + name + " is missing");
    }
}
