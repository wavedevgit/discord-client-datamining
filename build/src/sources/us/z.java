package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class z implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f50678a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f50679b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f50680c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f50681d;

    /* renamed from: e  reason: collision with root package name */
    private final Integer f50682e;

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
        this.f50678a = field;
        this.f50679b = num;
        this.f50680c = num2;
        this.f50681d = num3;
        this.f50682e = num4;
        if (num != null && num.intValue() < 0) {
            throw new IllegalArgumentException(("The minimum number of digits (" + num + ") is negative").toString());
        } else if (num2 != null && num != null && num2.intValue() < num.intValue()) {
            throw new IllegalArgumentException(("The maximum number of digits (" + num2 + ") is less than the minimum number of digits (" + num + ')').toString());
        }
    }

    @Override // us.l
    public vs.e a() {
        int i10;
        a aVar = new a(this.f50678a.b());
        Integer num = this.f50679b;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        vs.g gVar = new vs.g(aVar, i10, this.f50682e);
        Integer num2 = this.f50681d;
        if (num2 != null) {
            return new vs.h(gVar, num2.intValue());
        }
        return gVar;
    }

    @Override // us.l
    public ws.q b() {
        return ws.p.a(this.f50679b, this.f50680c, this.f50681d, this.f50678a.b(), this.f50678a.getName(), this.f50682e);
    }

    @Override // us.l
    public final n c() {
        return this.f50678a;
    }
}
