package kotlinx.serialization.json;

import dt.a0;
import dt.o;
import ht.d;
import jt.a1;
import jt.d1;
import jt.e1;
import jt.l0;
import jt.m0;
import jt.w0;
import jt.x;
import jt.z0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Json implements a0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35100d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f35101a;

    /* renamed from: b  reason: collision with root package name */
    private final kt.b f35102b;

    /* renamed from: c  reason: collision with root package name */
    private final x f35103c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Json {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
            super(new d(false, false, false, false, false, false, null, false, false, null, false, false, null, false, false, false, null, 131071, null), c.a(), null);
        }
    }

    public /* synthetic */ Json(d dVar, kt.b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(dVar, bVar);
    }

    @Override // dt.l
    public kt.b a() {
        return this.f35102b;
    }

    @Override // dt.a0
    public final Object b(DeserializationStrategy deserializer, String string) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(string, "string");
        z0 a10 = a1.a(this, string);
        Object G = new w0(this, e1.f31314i, a10, deserializer.getDescriptor(), null).G(deserializer);
        a10.v();
        return G;
    }

    @Override // dt.a0
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
        return this.f35101a;
    }

    public final x f() {
        return this.f35103c;
    }

    public final JsonElement g(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        return (JsonElement) b(ht.o.f26980a, string);
    }

    private Json(d dVar, kt.b bVar) {
        this.f35101a = dVar;
        this.f35102b = bVar;
        this.f35103c = new x();
    }
}
