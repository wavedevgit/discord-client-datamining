package et;

import jt.z0;
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
import qr.l;
import qr.o;
import ys.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final i f22127a = new i();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f22128b = l.b(o.f48044e, a.f22129d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f22129d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: et.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0313a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0313a f22130d = new C0313a();

            C0313a() {
                super(1);
            }

            public final void a(ht.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("nanoseconds", z0.f31115a.getDescriptor(), CollectionsKt.l(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((ht.a) obj);
                return Unit.f32008a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SerialDescriptor invoke() {
            return ht.j.c("kotlinx.datetime.TimeBased", new SerialDescriptor[0], C0313a.f22130d);
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
            j10 = b10.f(f22127a.getDescriptor(), 0);
        } else {
            long j11 = 0;
            boolean z11 = false;
            while (true) {
                i iVar = f22127a;
                int o10 = b10.o(iVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        j11 = b10.f(iVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new qr.h();
                    }
                } else {
                    z10 = z11;
                    j10 = j11;
                    break;
                }
            }
        }
        Unit unit = Unit.f32008a;
        b10.c(descriptor);
        if (z10) {
            return new c.e(j10);
        }
        throw new ft.c("nanoseconds", getDescriptor().h());
    }

    @Override // ft.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.E(f22127a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f22128b.getValue();
    }
}
