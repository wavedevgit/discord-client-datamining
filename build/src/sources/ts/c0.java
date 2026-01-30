package ts;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f49882a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49883b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f49884c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49885d;

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
        this.f49882a = field;
        this.f49883b = i10;
        this.f49884c = num;
        int e10 = field.e();
        this.f49885d = e10;
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

    @Override // ts.l
    public us.e a() {
        us.j jVar = new us.j(new a(this.f49882a.b()), this.f49883b);
        Integer num = this.f49884c;
        if (num != null) {
            return new us.h(jVar, num.intValue());
        }
        return jVar;
    }

    @Override // ts.l
    public vs.q b() {
        return vs.p.e(Integer.valueOf(this.f49883b), Integer.valueOf(this.f49885d), this.f49884c, this.f49882a.b(), this.f49882a.getName(), false, 32, null);
    }

    @Override // ts.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f49882a;
    }
}
