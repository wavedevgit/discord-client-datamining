package zs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f56266a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f56267b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f56268c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f56269d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f56270e;

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
        this.f56266a = field;
        this.f56267b = num;
        this.f56268c = num2;
        this.f56269d = num3;
        this.f56270e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // zs.l
    public at.e a() {
        int i10;
        a aVar = new a(this.f56266a.b());
        Integer num = this.f56267b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        at.g gVar = new at.g(aVar, i10, this.f56270e);
        Integer num2 = this.f56269d;
        if (num2 != null) {
            return new at.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // zs.l
    public bt.q b() {
        return bt.p.a(this.f56267b, this.f56268c, this.f56269d, this.f56266a.b(), this.f56266a.getName(), this.f56270e);
    }

    @Override // zs.l
    public final n c() {
        return this.f56266a;
    }
}
