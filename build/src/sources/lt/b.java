package lt;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final b f36623a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f36624b = a.f36625b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements SerialDescriptor {

        /* renamed from: b  reason: collision with root package name */
        public static final a f36625b = new a();

        /* renamed from: c  reason: collision with root package name */
        private static final String f36626c = "kotlinx.serialization.json.JsonArray";

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ SerialDescriptor f36627a = ht.a.h(o.f36645a).getDescriptor();

        private a() {
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean b() {
            return this.f36627a.b();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int c(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return this.f36627a.c(name);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int d() {
            return this.f36627a.d();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String e(int i10) {
            return this.f36627a.e(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List f(int i10) {
            return this.f36627a.f(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public SerialDescriptor g(int i10) {
            return this.f36627a.g(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List getAnnotations() {
            return this.f36627a.getAnnotations();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public jt.k getKind() {
            return this.f36627a.getKind();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String h() {
            return f36626c;
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean i(int i10) {
            return this.f36627a.i(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean isInline() {
            return this.f36627a.isInline();
        }
    }

    private b() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public JsonArray deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        p.g(decoder);
        return new JsonArray((List) ht.a.h(o.f36645a).deserialize(decoder));
    }

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, JsonArray value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.h(encoder);
        ht.a.h(o.f36645a).serialize(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f36624b;
    }
}
