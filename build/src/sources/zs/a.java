package zs;

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
import lr.l;
import lr.o;
import ts.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends dt.b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f56127a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f56128b = l.b(o.f37120e, C0790a.f56129d);

    /* renamed from: zs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class C0790a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0790a f56129d = new C0790a();

        C0790a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SealedClassSerializer invoke() {
            return new SealedClassSerializer("kotlinx.datetime.DateTimeUnit.DateBased", Reflection.getOrCreateKotlinClass(c.b.class), new KClass[]{Reflection.getOrCreateKotlinClass(c.C0629c.class), Reflection.getOrCreateKotlinClass(c.d.class)}, new KSerializer[]{d.f56133a, h.f56143a});
        }
    }

    private a() {
    }

    private final SealedClassSerializer g() {
        return (SealedClassSerializer) f56128b.getValue();
    }

    @Override // dt.b
    public DeserializationStrategy d(kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return g().d(decoder, str);
    }

    @Override // dt.b
    public KClass e() {
        return Reflection.getOrCreateKotlinClass(c.b.class);
    }

    @Override // dt.b
    /* renamed from: f */
    public at.o c(Encoder encoder, c.b value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        return g().c(encoder, value);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return g().getDescriptor();
    }
}
