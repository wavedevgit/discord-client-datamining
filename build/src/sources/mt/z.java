package mt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f37217a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f37218b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f37219c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f37220d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f37221e;

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
        this.f37217a = field;
        this.f37218b = num;
        this.f37219c = num2;
        this.f37220d = num3;
        this.f37221e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // mt.l
    public nt.e a() {
        int i10;
        a aVar = new a(this.f37217a.b());
        Integer num = this.f37218b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        nt.g gVar = new nt.g(aVar, i10, this.f37221e);
        Integer num2 = this.f37220d;
        if (num2 != null) {
            return new nt.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // mt.l
    public ot.q b() {
        return ot.p.a(this.f37218b, this.f37219c, this.f37220d, this.f37217a.b(), this.f37217a.getName(), this.f37221e);
    }

    @Override // mt.l
    public final n c() {
        return this.f37217a;
    }
}
