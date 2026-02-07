package kotlinx.serialization.json;

import ft.a0;
import ft.o;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kt.d;
import lt.a1;
import lt.d1;
import lt.e1;
import lt.l0;
import lt.m0;
import lt.w0;
import lt.x;
import lt.z0;
import mt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Json implements a0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35168d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final d f35169a;

    /* renamed from: b  reason: collision with root package name */
    private final mt.b f35170b;

    /* renamed from: c  reason: collision with root package name */
    private final x f35171c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Json {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
            super(new d(false, false, false, false, false, false, null, false, false, null, false, false, null, false, false, false, null, 131071, null), c.a(), null);
        }
    }

    public /* synthetic */ Json(d dVar, mt.b bVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(dVar, bVar);
    }

    @Override // ft.l
    public mt.b a() {
        return this.f35170b;
    }

    @Override // ft.a0
    public final Object b(DeserializationStrategy deserializer, String string) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(string, "string");
        z0 a10 = a1.a(this, string);
        Object G = new w0(this, e1.f36698i, a10, deserializer.getDescriptor(), null).G(deserializer);
        a10.v();
        return G;
    }

    @Override // ft.a0
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
        return this.f35169a;
    }

    public final x f() {
        return this.f35171c;
    }

    public final JsonElement g(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        return (JsonElement) b(kt.o.f35566a, string);
    }

    private Json(d dVar, mt.b bVar) {
        this.f35169a = dVar;
        this.f35170b = bVar;
        this.f35171c = new x();
    }
}
