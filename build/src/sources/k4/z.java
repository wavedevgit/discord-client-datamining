package k4;

import java.util.Set;
import java.util.UUID;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z {

    /* renamed from: d  reason: collision with root package name */
    public static final b f31514d = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final UUID f31515a;

    /* renamed from: b  reason: collision with root package name */
    private final p4.u f31516b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f31517c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f31518a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f31519b;

        /* renamed from: c  reason: collision with root package name */
        private UUID f31520c;

        /* renamed from: d  reason: collision with root package name */
        private p4.u f31521d;

        /* renamed from: e  reason: collision with root package name */
        private final Set f31522e;

        public a(Class workerClass) {
            Intrinsics.checkNotNullParameter(workerClass, "workerClass");
            this.f31518a = workerClass;
            UUID randomUUID = UUID.randomUUID();
            Intrinsics.checkNotNullExpressionValue(randomUUID, "randomUUID()");
            this.f31520c = randomUUID;
            String uuid = this.f31520c.toString();
            Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
            String name = workerClass.getName();
            Intrinsics.checkNotNullExpressionValue(name, "workerClass.name");
            this.f31521d = new p4.u(uuid, name);
            String name2 = workerClass.getName();
            Intrinsics.checkNotNullExpressionValue(name2, "workerClass.name");
            this.f31522e = x0.g(name2);
        }

        public final z a() {
            boolean z10;
            z b10 = b();
            d dVar = this.f31521d.f43742j;
            if (!dVar.e() && !dVar.f() && !dVar.g() && !dVar.h()) {
                z10 = false;
            } else {
                z10 = true;
            }
            p4.u uVar = this.f31521d;
            if (uVar.f43749q) {
                if (!z10) {
                    if (uVar.f43739g > 0) {
                        throw new IllegalArgumentException("Expedited jobs cannot be delayed");
                    }
                } else {
                    throw new IllegalArgumentException("Expedited jobs only support network and storage constraints");
                }
            }
            UUID randomUUID = UUID.randomUUID();
            Intrinsics.checkNotNullExpressionValue(randomUUID, "randomUUID()");
            i(randomUUID);
            return b10;
        }

        public abstract z b();

        public final boolean c() {
            return this.f31519b;
        }

        public final UUID d() {
            return this.f31520c;
        }

        public final Set e() {
            return this.f31522e;
        }

        public abstract a f();

        public final p4.u g() {
            return this.f31521d;
        }

        public a h(r policy) {
            Intrinsics.checkNotNullParameter(policy, "policy");
            p4.u uVar = this.f31521d;
            uVar.f43749q = true;
            uVar.f43750r = policy;
            return f();
        }

        public final a i(UUID id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f31520c = id2;
            String uuid = id2.toString();
            Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
            this.f31521d = new p4.u(uuid, this.f31521d);
            return f();
        }

        public final a j(androidx.work.b inputData) {
            Intrinsics.checkNotNullParameter(inputData, "inputData");
            this.f31521d.f43737e = inputData;
            return f();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public z(UUID id2, p4.u workSpec, Set tags) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        Intrinsics.checkNotNullParameter(tags, "tags");
        this.f31515a = id2;
        this.f31516b = workSpec;
        this.f31517c = tags;
    }

    public UUID a() {
        return this.f31515a;
    }

    public final String b() {
        String uuid = a().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
        return uuid;
    }

    public final Set c() {
        return this.f31517c;
    }

    public final p4.u d() {
        return this.f31516b;
    }
}
