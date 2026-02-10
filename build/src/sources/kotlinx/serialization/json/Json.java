package kotlinx.serialization.json;

import gt.a0;
import gt.o;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import lt.d;
import mt.a1;
import mt.d1;
import mt.e1;
import mt.l0;
import mt.m0;
import mt.w0;
import mt.x;
import mt.z0;
import nt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Json implements a0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f34877d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f34878a;

    /* renamed from: b  reason: collision with root package name */
    private final nt.b f34879b;

    /* renamed from: c  reason: collision with root package name */
    private final x f34880c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Json {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
            super(new d(false, false, false, false, false, false, null, false, false, null, false, false, null, false, false, false, null, 131071, null), c.a(), null);
        }
    }

    public /* synthetic */ Json(d dVar, nt.b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(dVar, bVar);
    }

    @Override // gt.l
    public nt.b a() {
        return this.f34879b;
    }

    @Override // gt.a0
    public final Object b(DeserializationStrategy deserializer, String string) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(string, "string");
        z0 a10 = a1.a(this, string);
        Object G = new w0(this, e1.f37528i, a10, deserializer.getDescriptor(), null).G(deserializer);
        a10.v();
        return G;
    }

    @Override // gt.a0
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
        return this.f34878a;
    }

    public final x f() {
        return this.f34880c;
    }

    public final JsonElement g(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        return (JsonElement) b(lt.o.f36645a, string);
    }

    private Json(d dVar, nt.b bVar) {
        this.f34878a = dVar;
        this.f34879b = bVar;
        this.f34880c = new x();
    }
}
