package at;

import at.o;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f6196a = rr.l.a(a.f6199d);

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f6197b = rr.l.a(b.f6201d);

    /* renamed from: c  reason: collision with root package name */
    private static final v f6198c = new v(null, null, null, null, null, 31, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f6199d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: at.z$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0120a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0120a f6200d = new C0120a();

            C0120a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0110a.c(build, null, 1, null);
                p.b(build, '-');
                o.a.C0110a.b(build, null, 1, null);
                p.b(build, '-');
                o.a.C0110a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f31765a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f6193b.a(C0120a.f6200d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f6201d = new b();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f6202d = new a();

            a() {
                super(1);
            }

            public final void a(o.a build) {
                Intrinsics.checkNotNullParameter(build, "$this$build");
                o.a.C0110a.c(build, null, 1, null);
                o.a.C0110a.b(build, null, 1, null);
                o.a.C0110a.a(build, null, 1, null);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((o.a) obj);
                return Unit.f31765a;
            }
        }

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final n invoke() {
            return y.f6193b.a(a.f6202d);
        }
    }

    public static final n b() {
        return (n) f6196a.getValue();
    }

    public static final n c() {
        return (n) f6197b.getValue();
    }

    public static final Object d(Object obj, String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (obj != null) {
            return obj;
        }
        throw new zs.b("Can not create a " + name + " from the given input: the field " + name + " is missing");
    }
}
