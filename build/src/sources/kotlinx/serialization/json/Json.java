package kotlinx.serialization.json;

import bt.d;
import ct.a1;
import ct.d1;
import ct.e1;
import ct.l0;
import ct.m0;
import ct.w0;
import ct.x;
import ct.z0;
import dt.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import xs.a0;
import xs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Json implements a0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f36410d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f36411a;

    /* renamed from: b  reason: collision with root package name */
    private final dt.b f36412b;

    /* renamed from: c  reason: collision with root package name */
    private final x f36413c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Json {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
            super(new d(false, false, false, false, false, false, null, false, false, null, false, false, null, false, false, false, null, 131071, null), c.a(), null);
        }
    }

    public /* synthetic */ Json(d dVar, dt.b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(dVar, bVar);
    }

    @Override // xs.l
    public dt.b a() {
        return this.f36412b;
    }

    @Override // xs.a0
    public final Object b(DeserializationStrategy deserializer, String string) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(string, "string");
        z0 a10 = a1.a(this, string);
        Object G = new w0(this, e1.f21339i, a10, deserializer.getDescriptor(), null).G(deserializer);
        a10.v();
        return G;
    }

    @Override // xs.a0
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
        return this.f36411a;
    }

    public final x f() {
        return this.f36413c;
    }

    public final JsonElement g(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        return (JsonElement) b(bt.o.f7824a, string);
    }

    private Json(d dVar, dt.b bVar) {
        this.f36411a = dVar;
        this.f36412b = bVar;
        this.f36413c = new x();
    }
}
