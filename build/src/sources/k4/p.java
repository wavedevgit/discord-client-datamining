package k4;

import k4.z;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p extends z {

    /* renamed from: e  reason: collision with root package name */
    public static final b f33000e = new b(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final p a(Class workerClass) {
            Intrinsics.checkNotNullParameter(workerClass, "workerClass");
            return (p) new a(workerClass).a();
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public p(a builder) {
        super(builder.d(), builder.g(), builder.e());
        Intrinsics.checkNotNullParameter(builder, "builder");
    }

    public static final p e(Class cls) {
        return f33000e.a(cls);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends z.a {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Class workerClass) {
            super(workerClass);
            Intrinsics.checkNotNullParameter(workerClass, "workerClass");
        }

        @Override // k4.z.a
        /* renamed from: k */
        public p b() {
            if (c() && g().f44935j.h()) {
                throw new IllegalArgumentException("Cannot set backoff criteria on an idle mode job");
            }
            return new p(this);
        }

        @Override // k4.z.a
        /* renamed from: l */
        public a f() {
            return this;
        }
    }
}
