package zs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f56228a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56229b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f56230c;

    /* renamed from: d  reason: collision with root package name */
    private final int f56231d;

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
        this.f56228a = field;
        this.f56229b = i10;
        this.f56230c = num;
        int e10 = field.e();
        this.f56231d = e10;
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

    @Override // zs.l
    public at.e a() {
        at.j jVar = new at.j(new a(this.f56228a.b()), this.f56229b);
        Integer num = this.f56230c;
        if (num != null) {
            return new at.h(jVar, num.intValue());
        }
        return jVar;
    }

    @Override // zs.l
    public bt.q b() {
        return bt.p.e(Integer.valueOf(this.f56229b), Integer.valueOf(this.f56231d), this.f56230c, this.f56228a.b(), this.f56228a.getName(), false, 32, null);
    }

    @Override // zs.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f56228a;
    }
}
