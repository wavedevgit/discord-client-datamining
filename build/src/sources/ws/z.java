package ws;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f52740a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f52741b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f52742c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f52743d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f52744e;

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
        this.f52740a = field;
        this.f52741b = num;
        this.f52742c = num2;
        this.f52743d = num3;
        this.f52744e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // ws.l
    public xs.e a() {
        int i10;
        a aVar = new a(this.f52740a.b());
        Integer num = this.f52741b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        xs.g gVar = new xs.g(aVar, i10, this.f52744e);
        Integer num2 = this.f52743d;
        if (num2 != null) {
            return new xs.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // ws.l
    public ys.q b() {
        return ys.p.a(this.f52741b, this.f52742c, this.f52743d, this.f52740a.b(), this.f52740a.getName(), this.f52744e);
    }

    @Override // ws.l
    public final n c() {
        return this.f52740a;
    }
}
