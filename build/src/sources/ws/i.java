package ws;

import at.z0;
import ir.l;
import ir.o;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import qs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final i f52779a = new i();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f52780b = l.a(o.f31119e, a.f52781d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f52781d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ws.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0727a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0727a f52782d = new C0727a();

            C0727a() {
                super(1);
            }

            public final void a(zs.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("nanoseconds", z0.f6922a.getDescriptor(), CollectionsKt.l(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((zs.a) obj);
                return Unit.f33298a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SerialDescriptor invoke() {
            return zs.j.c("kotlinx.datetime.TimeBased", new SerialDescriptor[0], C0727a.f52782d);
        }
    }

    private i() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public c.e deserialize(Decoder decoder) {
        long j10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        boolean z10 = true;
        if (b10.p()) {
            j10 = b10.f(f52779a.getDescriptor(), 0);
        } else {
            long j11 = 0;
            boolean z11 = false;
            while (true) {
                i iVar = f52779a;
                int o10 = b10.o(iVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        j11 = b10.f(iVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new ir.h();
                    }
                } else {
                    z10 = z11;
                    j10 = j11;
                    break;
                }
            }
        }
        Unit unit = Unit.f33298a;
        b10.c(descriptor);
        if (z10) {
            return new c.e(j10);
        }
        throw new xs.c("nanoseconds", getDescriptor().h());
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.E(f52779a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f52780b.getValue();
    }
}
