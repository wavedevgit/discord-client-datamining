package ct;

import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.SealedClassSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Encoder;
import or.l;
import or.o;
import ws.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends gt.b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f20013a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f20014b = l.b(o.f44232e, a.f20015d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f20015d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit", Reflection.getOrCreateKotlinClass(ws.c.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0706c.class), Reflection.getOrCreateKotlinClass(c.d.class), Reflection.getOrCreateKotlinClass(c.e.class)}, new KSerializer[]{d.f20016a, h.f20026a, i.f20030a});
        }
    }

    private b() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f20014b.getValue();
    }

    @Override // gt.b
    public DeserializationStrategy d(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().d(decoder, str);
    }

    @Override // gt.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(ws.c.class);
    }

    @Override // gt.b
    /* renamed from: f */
    public dt.o c(Encoder encoder, ws.c value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().c(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
