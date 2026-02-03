package ws;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f52702a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52703b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f52704c;

    /* renamed from: d  reason: collision with root package name */
    private final int f52705d;

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

    public c0(b0 field, int i10, Integer num) {
        Intrinsics.checkNotNullParameter(field, "field");
        this.f52702a = field;
        this.f52703b = i10;
        this.f52704c = num;
        int e10 = field.e();
        this.f52705d = e10;
        if (i10 >= 0) {
            if (e10 >= i10) {
                if (num == null || num.intValue() > i10) {
                    return;
                }
                throw new IllegalArgumentException(("The space padding (" + num + ") should be more than the minimum number of digits (" + i10 + ')').toString());
            }
            throw new IllegalArgumentException(("The maximum number of digits (" + e10 + ") is less than the minimum number of digits (" + i10 + ')').toString());
        }
        throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") is negative").toString());
    }

    @Override // ws.l
    public xs.e a() {
        xs.j jVar = new xs.j(new a(this.f52702a.b()), this.f52703b);
        Integer num = this.f52704c;
        if (num != null) {
            return new xs.h(jVar, num.intValue());
        }
        return jVar;
    }

    @Override // ws.l
    public ys.q b() {
        return ys.p.e(Integer.valueOf(this.f52703b), Integer.valueOf(this.f52705d), this.f52704c, this.f52702a.b(), this.f52702a.getName(), false, 32, null);
    }

    @Override // ws.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f52702a;
    }
}
