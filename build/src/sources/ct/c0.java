package ct;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f20212a;

    /* renamed from: b  reason: collision with root package name */
    private final int f20213b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f20214c;

    /* renamed from: d  reason: collision with root package name */
    private final int f20215d;

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
        this.f20212a = field;
        this.f20213b = i10;
        this.f20214c = num;
        int e10 = field.e();
        this.f20215d = e10;
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

    @Override // ct.l
    public dt.e a() {
        dt.j jVar = new dt.j(new a(this.f20212a.b()), this.f20213b);
        Integer num = this.f20214c;
        if (num != null) {
            return new dt.h(jVar, num.intValue());
        }
        return jVar;
    }

    @Override // ct.l
    public et.q b() {
        return et.p.e(Integer.valueOf(this.f20213b), Integer.valueOf(this.f20215d), this.f20214c, this.f20212a.b(), this.f20212a.getName(), false, 32, null);
    }

    @Override // ct.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f20212a;
    }
}
