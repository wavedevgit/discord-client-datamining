package bt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f7057a;

    /* renamed from: b  reason: collision with root package name */
    private final int f7058b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f7059c;

    /* renamed from: d  reason: collision with root package name */
    private final int f7060d;

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
        this.f7057a = field;
        this.f7058b = i10;
        this.f7059c = num;
        int e10 = field.e();
        this.f7060d = e10;
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

    @Override // bt.l
    public ct.e a() {
        ct.j jVar = new ct.j(new a(this.f7057a.b()), this.f7058b);
        Integer num = this.f7059c;
        if (num != null) {
            return new ct.h(jVar, num.intValue());
        }
        return jVar;
    }

    @Override // bt.l
    public dt.q b() {
        return dt.p.e(Integer.valueOf(this.f7058b), Integer.valueOf(this.f7060d), this.f7059c, this.f7057a.b(), this.f7057a.getName(), false, 32, null);
    }

    @Override // bt.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f7057a;
    }
}
