package k4;

import java.util.Set;
import java.util.UUID;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z {

    /* renamed from: d  reason: collision with root package name */
    public static final b f32159d = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final UUID f32160a;

    /* renamed from: b  reason: collision with root package name */
    private final p4.u f32161b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f32162c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: a  reason: collision with root package name */
        private final Class f32163a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f32164b;

        /* renamed from: c  reason: collision with root package name */
        private UUID f32165c;

        /* renamed from: d  reason: collision with root package name */
        private p4.u f32166d;

        /* renamed from: e  reason: collision with root package name */
        private final Set f32167e;

        public a(Class workerClass) {
            Intrinsics.checkNotNullParameter(workerClass, "workerClass");
            this.f32163a = workerClass;
            UUID randomUUID = UUID.randomUUID();
            Intrinsics.checkNotNullExpressionValue(randomUUID, "randomUUID()");
            this.f32165c = randomUUID;
            String uuid = this.f32165c.toString();
            Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
            String name = workerClass.getName();
            Intrinsics.checkNotNullExpressionValue(name, "workerClass.name");
            this.f32166d = new p4.u(uuid, name);
            String name2 = workerClass.getName();
            Intrinsics.checkNotNullExpressionValue(name2, "workerClass.name");
            this.f32167e = x0.g(name2);
        }

        public final z a() {
            boolean z10;
            z b10 = b();
            d dVar = this.f32166d.f44967j;
            if (!dVar.e() && !dVar.f() && !dVar.g() && !dVar.h()) {
                z10 = false;
            } else {
                z10 = true;
            }
            p4.u uVar = this.f32166d;
            if (uVar.f44974q) {
                if (!z10) {
                    if (uVar.f44964g > 0) {
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
            return this.f32164b;
        }

        public final UUID d() {
            return this.f32165c;
        }

        public final Set e() {
            return this.f32167e;
        }

        public abstract a f();

        public final p4.u g() {
            return this.f32166d;
        }

        public a h(r policy) {
            Intrinsics.checkNotNullParameter(policy, "policy");
            p4.u uVar = this.f32166d;
            uVar.f44974q = true;
            uVar.f44975r = policy;
            return f();
        }

        public final a i(UUID id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f32165c = id2;
            String uuid = id2.toString();
            Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
            this.f32166d = new p4.u(uuid, this.f32166d);
            return f();
        }

        public final a j(androidx.work.b inputData) {
            Intrinsics.checkNotNullParameter(inputData, "inputData");
            this.f32166d.f44962e = inputData;
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
        this.f32160a = id2;
        this.f32161b = workSpec;
        this.f32162c = tags;
    }

    public UUID a() {
        return this.f32160a;
    }

    public final String b() {
        String uuid = a().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "id.toString()");
        return uuid;
    }

    public final Set c() {
        return this.f32162c;
    }

    public final p4.u d() {
        return this.f32161b;
    }
}
