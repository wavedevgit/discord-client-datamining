package ht;

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
    public static final y f26991a = new y();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f26992b = a.f26993b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements SerialDescriptor {

        /* renamed from: b  reason: collision with root package name */
        public static final a f26993b = new a();

        /* renamed from: c  reason: collision with root package name */
        private static final String f26994c = "kotlinx.serialization.json.JsonObject";

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ SerialDescriptor f26995a = et.a.k(et.a.E(StringCompanionObject.INSTANCE), o.f26980a).getDescriptor();

        private a() {
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean b() {
            return this.f26995a.b();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int c(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return this.f26995a.c(name);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int d() {
            return this.f26995a.d();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String e(int i10) {
            return this.f26995a.e(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List f(int i10) {
            return this.f26995a.f(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public SerialDescriptor g(int i10) {
            return this.f26995a.g(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List getAnnotations() {
            return this.f26995a.getAnnotations();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public ft.k getKind() {
            return this.f26995a.getKind();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String h() {
            return f26994c;
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean i(int i10) {
            return this.f26995a.i(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean isInline() {
            return this.f26995a.isInline();
        }
    }

    private y() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public JsonObject deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        p.b(decoder);
        return new JsonObject((Map) et.a.k(et.a.E(StringCompanionObject.INSTANCE), o.f26980a).deserialize(decoder));
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonObject value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        et.a.k(et.a.E(StringCompanionObject.INSTANCE), o.f26980a).serialize(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f26992b;
    }
}
