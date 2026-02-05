package ct;

import gt.z0;
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
import or.l;
import or.o;
import ws.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final i f20030a = new i();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f20031b = l.b(o.f44232e, a.f20032d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f20032d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ct.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0276a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0276a f20033d = new C0276a();

            C0276a() {
                super(1);
            }

            public final void a(ft.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("nanoseconds", z0.f25376a.getDescriptor(), CollectionsKt.l(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((ft.a) obj);
                return Unit.f31988a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SerialDescriptor invoke() {
            return ft.j.c("kotlinx.datetime.TimeBased", new SerialDescriptor[0], C0276a.f20033d);
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
            j10 = b10.f(f20030a.getDescriptor(), 0);
        } else {
            long j11 = 0;
            boolean z11 = false;
            while (true) {
                i iVar = f20030a;
                int o10 = b10.o(iVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        j11 = b10.f(iVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new or.h();
                    }
                } else {
                    z10 = z11;
                    j10 = j11;
                    break;
                }
            }
        }
        Unit unit = Unit.f31988a;
        b10.c(descriptor);
        if (z10) {
            return new c.e(j10);
        }
        throw new dt.c("nanoseconds", getDescriptor().h());
    }

    @Override // dt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.E(f20030a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f20031b.getValue();
    }
}
