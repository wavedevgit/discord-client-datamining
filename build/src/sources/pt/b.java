package pt;

import as.l;
import as.o;
import jt.c;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends tt.b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f43749a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f43750b = l.a(o.f6082e, a.f43751d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f43751d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit", Reflection.getOrCreateKotlinClass(jt.c.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0437c.class), Reflection.getOrCreateKotlinClass(c.d.class), Reflection.getOrCreateKotlinClass(c.e.class)}, new KSerializer[]{d.f43752a, h.f43762a, i.f43766a});
        }
    }

    private b() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f43750b.getValue();
    }

    @Override // tt.b
    public DeserializationStrategy c(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().c(decoder, str);
    }

    @Override // tt.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(jt.c.class);
    }

    @Override // tt.b
    /* renamed from: f */
    public qt.o d(Encoder encoder, jt.c value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().d(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
