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
public final class h implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final h f56140a = new h();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f56141b = l.b(o.f37120e, a.f56142d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f56142d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: zs.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0792a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0792a f56143d = new C0792a();

            C0792a() {
                super(1);
            }

            public final void a(ct.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("months", p0.f20994a.getDescriptor(), CollectionsKt.l(), false);
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
            return ct.j.c("kotlinx.datetime.MonthBased", new SerialDescriptor[0], C0792a.f56143d);
        }
    }

    private h() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public c.d deserialize(Decoder decoder) {
        int i10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        boolean z10 = true;
        if (b10.p()) {
            i10 = b10.i(f56140a.getDescriptor(), 0);
        } else {
            i10 = 0;
            boolean z11 = false;
            while (true) {
                h hVar = f56140a;
                int o10 = b10.o(hVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        i10 = b10.i(hVar.getDescriptor(), 0);
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
            return new c.d(i10);
        }
        throw new at.c("months", getDescriptor().h());
    }

    @Override // at.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.d value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.w(f56140a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f56141b.getValue();
    }
}
