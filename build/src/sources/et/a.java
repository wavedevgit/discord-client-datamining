package et;

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
import qr.l;
import qr.o;
import ys.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends jt.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f22107a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f22108b = l.b(o.f48092e, C0310a.f22109d);

    /* renamed from: et.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0310a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0310a f22109d = new C0310a();

        C0310a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit.DateBased", Reflection.getOrCreateKotlinClass(c.b.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0757c.class), Reflection.getOrCreateKotlinClass(c.d.class)}, new KSerializer[]{d.f22113a, h.f22123a});
        }
    }

    private a() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f22108b.getValue();
    }

    @Override // jt.b
    public DeserializationStrategy d(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().d(decoder, str);
    }

    @Override // jt.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(c.b.class);
    }

    @Override // jt.b
    /* renamed from: f */
    public ft.o c(Encoder encoder, c.b value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().c(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
