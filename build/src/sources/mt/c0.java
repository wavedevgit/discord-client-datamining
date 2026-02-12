package mt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f36611a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36612b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f36613c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36614d;

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
        this.f36611a = field;
        this.f36612b = i10;
        this.f36613c = num;
        int e10 = field.e();
        this.f36614d = e10;
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

    @Override // mt.l
    public nt.e a() {
        nt.j jVar = new nt.j(new a(this.f36611a.b()), this.f36612b);
        Integer num = this.f36613c;
        if (num != null) {
            return new nt.h(jVar, num.intValue());
        }
        return jVar;
    }

    @Override // mt.l
    public ot.q b() {
        return ot.p.e(Integer.valueOf(this.f36612b), Integer.valueOf(this.f36614d), this.f36613c, this.f36611a.b(), this.f36611a.getName(), false, 32, null);
    }

    @Override // mt.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f36611a;
    }
}
