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
public final class a extends kt.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f23213a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f23214b = l.b(o.f49210e, C0356a.f23215d);

    /* renamed from: ft.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0356a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0356a f23215d = new C0356a();

        C0356a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit.DateBased", Reflection.getOrCreateKotlinClass(c.b.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0807c.class), Reflection.getOrCreateKotlinClass(c.d.class)}, new KSerializer[]{d.f23219a, h.f23229a});
        }
    }

    private a() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f23214b.getValue();
    }

    @Override // kt.b
    public DeserializationStrategy d(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().d(decoder, str);
    }

    @Override // kt.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(c.b.class);
    }

    @Override // kt.b
    /* renamed from: f */
    public gt.o c(Encoder encoder, c.b value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().c(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
