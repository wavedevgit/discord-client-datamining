package ut;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final y f51830a = new y();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f51831b = a.f51832b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements SerialDescriptor {

        /* renamed from: b  reason: collision with root package name */
        public static final a f51832b = new a();

        /* renamed from: c  reason: collision with root package name */
        private static final String f51833c = "kotlinx.serialization.json.JsonObject";

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ SerialDescriptor f51834a = rt.a.k(rt.a.I(StringCompanionObject.INSTANCE), o.f51819a).getDescriptor();

        private a() {
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean b() {
            return this.f51834a.b();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int c(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return this.f51834a.c(name);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int d() {
            return this.f51834a.d();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String e(int i10) {
            return this.f51834a.e(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List f(int i10) {
            return this.f51834a.f(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public SerialDescriptor g(int i10) {
            return this.f51834a.g(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List getAnnotations() {
            return this.f51834a.getAnnotations();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public st.k getKind() {
            return this.f51834a.getKind();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String h() {
            return f51833c;
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean i(int i10) {
            return this.f51834a.i(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean isInline() {
            return this.f51834a.isInline();
        }
    }

    private y() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public JsonObject deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        p.b(decoder);
        return new JsonObject((Map) rt.a.k(rt.a.I(StringCompanionObject.INSTANCE), o.f51819a).deserialize(decoder));
    }

    @Override // qt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonObject value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        rt.a.k(rt.a.I(StringCompanionObject.INSTANCE), o.f51819a).serialize(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f51831b;
    }
}
