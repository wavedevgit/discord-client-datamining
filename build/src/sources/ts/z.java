package ts;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f49920a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f49921b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f49922c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f49923d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f49924e;

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
        this.f49920a = field;
        this.f49921b = num;
        this.f49922c = num2;
        this.f49923d = num3;
        this.f49924e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // ts.l
    public us.e a() {
        int i10;
        a aVar = new a(this.f49920a.b());
        Integer num = this.f49921b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        us.g gVar = new us.g(aVar, i10, this.f49924e);
        Integer num2 = this.f49923d;
        if (num2 != null) {
            return new us.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // ts.l
    public vs.q b() {
        return vs.p.a(this.f49921b, this.f49922c, this.f49923d, this.f49920a.b(), this.f49920a.getName(), this.f49924e);
    }

    @Override // ts.l
    public final n c() {
        return this.f49920a;
    }
}
