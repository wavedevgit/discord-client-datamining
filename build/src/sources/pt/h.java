package pt;

import as.l;
import as.o;
import jt.c;
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
import tt.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final h f43762a = new h();

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f43763b = l.a(o.f6082e, a.f43764d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f43764d = new a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: pt.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0597a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0597a f43765d = new C0597a();

            C0597a() {
                super(1);
            }

            public final void a(st.a buildClassSerialDescriptor) {
                Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
                buildClassSerialDescriptor.a("months", p0.f50617a.getDescriptor(), CollectionsKt.l(), false);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((st.a) obj);
                return Unit.f32556a;
            }
        }

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final SerialDescriptor invoke() {
            return st.j.c("kotlinx.datetime.MonthBased", new SerialDescriptor[0], C0597a.f43765d);
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
            i10 = b10.i(f43762a.getDescriptor(), 0);
        } else {
            i10 = 0;
            boolean z11 = false;
            while (true) {
                h hVar = f43762a;
                int o10 = b10.o(hVar.getDescriptor());
                if (o10 != -1) {
                    if (o10 == 0) {
                        i10 = b10.i(hVar.getDescriptor(), 0);
                        z11 = true;
                    } else {
                        c.a(o10);
                        throw new as.h();
                    }
                } else {
                    z10 = z11;
                    break;
                }
            }
        }
        Unit unit = Unit.f32556a;
        b10.c(descriptor);
        if (z10) {
            return new c.d(i10);
        }
        throw new qt.c("months", getDescriptor().h());
    }

    @Override // qt.o
    /* renamed from: b */
    public void serialize(Encoder encoder, c.d value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder b10 = encoder.b(descriptor);
        b10.w(f43762a.getDescriptor(), 0, value.d());
        b10.c(descriptor);
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) f43763b.getValue();
    }
}
