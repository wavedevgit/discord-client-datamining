package ct;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f20250a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f20251b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f20252c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f20253d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f20254e;

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
        this.f20250a = field;
        this.f20251b = num;
        this.f20252c = num2;
        this.f20253d = num3;
        this.f20254e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // ct.l
    public dt.e a() {
        int i10;
        a aVar = new a(this.f20250a.b());
        Integer num = this.f20251b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        dt.g gVar = new dt.g(aVar, i10, this.f20254e);
        Integer num2 = this.f20253d;
        if (num2 != null) {
            return new dt.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // ct.l
    public et.q b() {
        return et.p.a(this.f20251b, this.f20252c, this.f20253d, this.f20250a.b(), this.f20250a.getName(), this.f20254e);
    }

    @Override // ct.l
    public final n c() {
        return this.f20250a;
    }
}
