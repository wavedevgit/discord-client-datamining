package zs;

import dt.z0;
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
import lr.l;
import lr.o;
import ts.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final i f56147a = new i();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f56148b = l.b(o.f37120e, a.f56149d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f56149d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: zs.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0793a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0793a f56150d = new C0793a();

            C0793a() {
                super(1);
            }

            public final void a(ct.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("nanoseconds", z0.f21052a.getDescriptor(), CollectionsKt.l(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((ct.a) obj);
                return Unit.f32464a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SerialDescriptor invoke() {
            return ct.j.c("kotlinx.datetime.TimeBased", new SerialDescriptor[0], C0793a.f56150d);
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
            j10 = b10.f(f56147a.getDescriptor(), 0);
        } else {
            long j11 = 0;
            boolean z11 = false;
            while (true) {
                i iVar = f56147a;
                int o10 = b10.o(iVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        j11 = b10.f(iVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new lr.h();
                    }
                } else {
                    z10 = z11;
                    j10 = j11;
                    break;
                }
            }
        }
        Unit unit = Unit.f32464a;
        b10.c(descriptor);
        if (z10) {
            return new c.e(j10);
        }
        throw new at.c("nanoseconds", getDescriptor().h());
    }

    @Override // at.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.e value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.E(f56147a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f56148b.getValue();
    }
}
