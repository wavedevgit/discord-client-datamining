package kotlinx.serialization.json;

import at.a0;
import at.o;
import et.d;
import ft.a1;
import ft.d1;
import ft.e1;
import ft.l0;
import ft.m0;
import ft.w0;
import ft.x;
import ft.z0;
import gt.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Json implements a0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35576d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f35577a;

    /* renamed from: b  reason: collision with root package name */
    private final gt.b f35578b;

    /* renamed from: c  reason: collision with root package name */
    private final x f35579c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Json {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
            super(new d(false, false, false, false, false, false, null, false, false, null, false, false, null, false, false, false, null, 131071, null), c.a(), null);
        }
    }

    public /* synthetic */ Json(d dVar, gt.b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(dVar, bVar);
    }

    @Override // at.l
    public gt.b a() {
        return this.f35578b;
    }

    @Override // at.a0
    public final Object b(DeserializationStrategy deserializer, String string) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(string, "string");
        z0 a10 = a1.a(this, string);
        Object G = new w0(this, e1.f24716i, a10, deserializer.getDescriptor(), null).G(deserializer);
        a10.v();
        return G;
    }

    @Override // at.a0
    public final String c(o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        m0 m0Var = new m0();
        try {
            l0.b(this, m0Var, serializer, obj);
            return m0Var.toString();
        } finally {
            m0Var.g();
        }
    }

    public final Object d(DeserializationStrategy deserializer, JsonElement element) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(element, "element");
        return d1.a(this, element, deserializer);
    }

    public final d e() {
        return this.f35577a;
    }

    public final x f() {
        return this.f35579c;
    }

    public final JsonElement g(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        return (JsonElement) b(et.o.f22668a, string);
    }

    private Json(d dVar, gt.b bVar) {
        this.f35577a = dVar;
        this.f35578b = bVar;
        this.f35579c = new x();
    }
}
