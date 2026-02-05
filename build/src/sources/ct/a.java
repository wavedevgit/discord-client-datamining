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
public final class a extends gt.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f20010a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f20011b = l.b(o.f44232e, C0273a.f20012d);

    /* renamed from: ct.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0273a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0273a f20012d = new C0273a();

        C0273a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit.DateBased", Reflection.getOrCreateKotlinClass(c.b.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0706c.class), Reflection.getOrCreateKotlinClass(c.d.class)}, new KSerializer[]{d.f20016a, h.f20026a});
        }
    }

    private a() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f20011b.getValue();
    }

    @Override // gt.b
    public DeserializationStrategy d(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().d(decoder, str);
    }

    @Override // gt.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(c.b.class);
    }

    @Override // gt.b
    /* renamed from: f */
    public dt.o c(Encoder encoder, c.b value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().c(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
