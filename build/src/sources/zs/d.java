package zs;

import dt.p0;
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
public final class d implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final d f56130a = new d();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f56131b = l.b(o.f37120e, a.f56132d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f56132d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: zs.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0791a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0791a f56133d = new C0791a();

            C0791a() {
                super(1);
            }

            public final void a(ct.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("days", p0.f20994a.getDescriptor(), CollectionsKt.l(), false);
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
            return ct.j.c("kotlinx.datetime.DayBased", new SerialDescriptor[0], C0791a.f56133d);
        }
    }

    private d() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public c.C0629c deserialize(Decoder decoder) {
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        boolean z10 = true;
        if (b10.p()) {
            i10 = b10.i(f56130a.getDescriptor(), 0);
        } else {
            i10 = 0;
            boolean z11 = false;
            while (true) {
                d dVar = f56130a;
                int o10 = b10.o(dVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        i10 = b10.i(dVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new lr.h();
                    }
                } else {
                    z10 = z11;
                    break;
                }
            }
        }
        Unit unit = Unit.f32464a;
        b10.c(descriptor);
        if (z10) {
            return new c.C0629c(i10);
        }
        throw new at.c("days", getDescriptor().h());
    }

    @Override // at.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.C0629c value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.w(f56130a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f56131b.getValue();
    }
}
