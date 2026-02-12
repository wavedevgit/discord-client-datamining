package mt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f36649a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f36650b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f36651c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f36652d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f36653e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Integer invoke(Object obj) {
            return (Integer) ((b) this.receiver).b(obj);
        }
    }

    public z(n field, Integer num, Integer num2, Integer num3, Integer num4) {
        Intrinsics.checkNotNullParameter(field, "field");
        this.f36649a = field;
        this.f36650b = num;
        this.f36651c = num2;
        this.f36652d = num3;
        this.f36653e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // mt.l
    public nt.e a() {
        int i10;
        a aVar = new a(this.f36649a.b());
        Integer num = this.f36650b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        nt.g gVar = new nt.g(aVar, i10, this.f36653e);
        Integer num2 = this.f36652d;
        if (num2 != null) {
            return new nt.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // mt.l
    public ot.q b() {
        return ot.p.a(this.f36650b, this.f36651c, this.f36652d, this.f36649a.b(), this.f36649a.getName(), this.f36653e);
    }

    @Override // mt.l
    public final n c() {
        return this.f36649a;
    }
}
