package ft;

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
import rr.l;
import rr.o;
import zs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends kt.b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f23216a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f23217b = l.b(o.f49210e, a.f23218d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f23218d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit", Reflection.getOrCreateKotlinClass(zs.c.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0807c.class), Reflection.getOrCreateKotlinClass(c.d.class), Reflection.getOrCreateKotlinClass(c.e.class)}, new KSerializer[]{d.f23219a, h.f23229a, i.f23233a});
        }
    }

    private b() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f23217b.getValue();
    }

    @Override // kt.b
    public DeserializationStrategy d(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().d(decoder, str);
    }

    @Override // kt.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(zs.c.class);
    }

    @Override // kt.b
    /* renamed from: f */
    public gt.o c(Encoder encoder, zs.c value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().c(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
