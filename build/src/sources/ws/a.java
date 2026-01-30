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
public final class a extends at.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f52759a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f52760b = l.a(o.f31119e, C0724a.f52761d);

    /* renamed from: ws.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0724a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0724a f52761d = new C0724a();

        C0724a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit.DateBased", Reflection.getOrCreateKotlinClass(c.b.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0574c.class), Reflection.getOrCreateKotlinClass(c.d.class)}, new KSerializer[]{d.f52765a, h.f52775a});
        }
    }

    private a() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f52760b.getValue();
    }

    @Override // at.b
    public DeserializationStrategy c(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().c(decoder, str);
    }

    @Override // at.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(c.b.class);
    }

    @Override // at.b
    /* renamed from: f */
    public xs.o d(Encoder encoder, c.b value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().d(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
