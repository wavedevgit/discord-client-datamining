package ws;

import at.p0;
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
public final class d implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final d f52765a = new d();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f52766b = l.a(o.f31119e, a.f52767d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f52767d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ws.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0725a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0725a f52768d = new C0725a();

            C0725a() {
                super(1);
            }

            public final void a(zs.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("days", p0.f6864a.getDescriptor(), CollectionsKt.l(), false);
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
            return zs.j.c("kotlinx.datetime.DayBased", new SerialDescriptor[0], C0725a.f52768d);
        }
    }

    private d() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public c.C0574c deserialize(Decoder decoder) {
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        boolean z10 = true;
        if (b10.p()) {
            i10 = b10.i(f52765a.getDescriptor(), 0);
        } else {
            i10 = 0;
            boolean z11 = false;
            while (true) {
                d dVar = f52765a;
                int o10 = b10.o(dVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        i10 = b10.i(dVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new ir.h();
                    }
                } else {
                    z10 = z11;
                    break;
                }
            }
        }
        Unit unit = Unit.f33298a;
        b10.c(descriptor);
        if (z10) {
            return new c.C0574c(i10);
        }
        throw new xs.c("days", getDescriptor().h());
    }

    @Override // xs.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.C0574c value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.w(f52765a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f52766b.getValue();
    }
}
