package lt;

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
    public static final y f36656a = new y();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f36657b = a.f36658b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements SerialDescriptor {

        /* renamed from: b  reason: collision with root package name */
        public static final a f36658b = new a();

        /* renamed from: c  reason: collision with root package name */
        private static final String f36659c = "kotlinx.serialization.json.JsonObject";

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ SerialDescriptor f36660a = ht.a.k(ht.a.E(StringCompanionObject.INSTANCE), o.f36645a).getDescriptor();

        private a() {
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean b() {
            return this.f36660a.b();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int c(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return this.f36660a.c(name);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int d() {
            return this.f36660a.d();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String e(int i10) {
            return this.f36660a.e(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List f(int i10) {
            return this.f36660a.f(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public SerialDescriptor g(int i10) {
            return this.f36660a.g(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List getAnnotations() {
            return this.f36660a.getAnnotations();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public jt.k getKind() {
            return this.f36660a.getKind();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String h() {
            return f36659c;
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean i(int i10) {
            return this.f36660a.i(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean isInline() {
            return this.f36660a.isInline();
        }
    }

    private y() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public JsonObject deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        p.b(decoder);
        return new JsonObject((Map) ht.a.k(ht.a.E(StringCompanionObject.INSTANCE), o.f36645a).deserialize(decoder));
    }

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonObject value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        ht.a.k(ht.a.E(StringCompanionObject.INSTANCE), o.f36645a).serialize(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f36657b;
    }
}
