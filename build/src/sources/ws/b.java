package ws;

import ir.l;
import ir.o;
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
import qs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends at.b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f52762a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f52763b = l.a(o.f31119e, a.f52764d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f52764d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit", Reflection.getOrCreateKotlinClass(qs.c.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0574c.class), Reflection.getOrCreateKotlinClass(c.d.class), Reflection.getOrCreateKotlinClass(c.e.class)}, new KSerializer[]{d.f52765a, h.f52775a, i.f52779a});
        }
    }

    private b() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f52763b.getValue();
    }

    @Override // at.b
    public DeserializationStrategy c(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().c(decoder, str);
    }

    @Override // at.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(qs.c.class);
    }

    @Override // at.b
    /* renamed from: f */
    public xs.o d(Encoder encoder, qs.c value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().d(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
