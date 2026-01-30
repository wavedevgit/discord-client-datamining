package k4;

import java.util.Set;
import java.util.UUID;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z {

    /* renamed from: d  reason: collision with root package name */
    public static final b f33015d = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final UUID f33016a;

    /* renamed from: b  reason: collision with root package name */
    private final p4.u f33017b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f33018c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f33019a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f33020b;

        /* renamed from: c  reason: collision with root package name */
        private UUID f33021c;

        /* renamed from: d  reason: collision with root package name */
        private p4.u f33022d;

        /* renamed from: e  reason: collision with root package name */
        private final Set f33023e;

        public a(Class workerClass) {
            Intrinsics.checkNotNullParameter(workerClass, "workerClass");
            this.f33019a = workerClass;
            UUID randomUUID = UUID.randomUUID();
            Intrinsics.checkNotNullExpressionValue(randomUUID, "randomUUID()");
            this.f33021c = randomUUID;
            String uuid = this.f33021c.toString();
            Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
            String name = workerClass.getName();
            Intrinsics.checkNotNullExpressionValue(name, "workerClass.name");
            this.f33022d = new p4.u(uuid, name);
            String name2 = workerClass.getName();
            Intrinsics.checkNotNullExpressionValue(name2, "workerClass.name");
            this.f33023e = x0.g(name2);
        }

        public final z a() {
            boolean z10;
            z b10 = b();
            d dVar = this.f33022d.f44935j;
            if (!dVar.e() && !dVar.f() && !dVar.g() && !dVar.h()) {
                z10 = false;
            } else {
                z10 = true;
            }
            p4.u uVar = this.f33022d;
            if (uVar.f44942q) {
                if (!z10) {
                    if (uVar.f44932g > 0) {
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
            return this.f33020b;
        }

        public final UUID d() {
            return this.f33021c;
        }

        public final Set e() {
            return this.f33023e;
        }

        public abstract a f();

        public final p4.u g() {
            return this.f33022d;
        }

        public a h(r policy) {
            Intrinsics.checkNotNullParameter(policy, "policy");
            p4.u uVar = this.f33022d;
            uVar.f44942q = true;
            uVar.f44943r = policy;
            return f();
        }

        public final a i(UUID id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f33021c = id2;
            String uuid = id2.toString();
            Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
            this.f33022d = new p4.u(uuid, this.f33022d);
            return f();
        }

        public final a j(androidx.work.b inputData) {
            Intrinsics.checkNotNullParameter(inputData, "inputData");
            this.f33022d.f44930e = inputData;
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
        this.f33016a = id2;
        this.f33017b = workSpec;
        this.f33018c = tags;
    }

    public UUID a() {
        return this.f33016a;
    }

    public final String b() {
        String uuid = a().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
        return uuid;
    }

    public final Set c() {
        return this.f33018c;
    }

    public final p4.u d() {
        return this.f33017b;
    }
}
