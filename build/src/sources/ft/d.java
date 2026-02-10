package ft;

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
import kt.p0;
import rr.l;
import rr.o;
import zs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final d f23219a = new d();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f23220b = l.b(o.f49210e, a.f23221d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f23221d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ft.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0357a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0357a f23222d = new C0357a();

            C0357a() {
                super(1);
            }

            public final void a(jt.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("days", p0.f35197a.getDescriptor(), CollectionsKt.l(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((jt.a) obj);
                return Unit.f31765a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SerialDescriptor invoke() {
            return jt.j.c("kotlinx.datetime.DayBased", new SerialDescriptor[0], C0357a.f23222d);
        }
    }

    private d() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public c.C0807c deserialize(Decoder decoder) {
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        boolean z10 = true;
        if (b10.p()) {
            i10 = b10.i(f23219a.getDescriptor(), 0);
        } else {
            i10 = 0;
            boolean z11 = false;
            while (true) {
                d dVar = f23219a;
                int o10 = b10.o(dVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        i10 = b10.i(dVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new rr.h();
                    }
                } else {
                    z10 = z11;
                    break;
                }
            }
        }
        Unit unit = Unit.f31765a;
        b10.c(descriptor);
        if (z10) {
            return new c.C0807c(i10);
        }
        throw new gt.c("days", getDescriptor().h());
    }

    @Override // gt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.C0807c value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.w(f23219a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f23220b.getValue();
    }
}
