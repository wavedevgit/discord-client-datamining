package bt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f7095a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f7096b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f7097c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f7098d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f7099e;

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
        this.f7095a = field;
        this.f7096b = num;
        this.f7097c = num2;
        this.f7098d = num3;
        this.f7099e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // bt.l
    public ct.e a() {
        int i10;
        a aVar = new a(this.f7095a.b());
        Integer num = this.f7096b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        ct.g gVar = new ct.g(aVar, i10, this.f7099e);
        Integer num2 = this.f7098d;
        if (num2 != null) {
            return new ct.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // bt.l
    public dt.q b() {
        return dt.p.a(this.f7096b, this.f7097c, this.f7098d, this.f7095a.b(), this.f7095a.getName(), this.f7099e);
    }

    @Override // bt.l
    public final n c() {
        return this.f7095a;
    }
}
