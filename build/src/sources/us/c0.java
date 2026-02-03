package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f50640a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50641b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f50642c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50643d;

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
        this.f50640a = field;
        this.f50641b = i10;
        this.f50642c = num;
        int e10 = field.e();
        this.f50643d = e10;
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

    @Override // us.l
    public vs.e a() {
        vs.j jVar = new vs.j(new a(this.f50640a.b()), this.f50641b);
        Integer num = this.f50642c;
        if (num != null) {
            return new vs.h(jVar, num.intValue());
        }
        return jVar;
    }

    @Override // us.l
    public ws.q b() {
        return ws.p.e(Integer.valueOf(this.f50641b), Integer.valueOf(this.f50643d), this.f50642c, this.f50640a.b(), this.f50640a.getName(), false, 32, null);
    }

    @Override // us.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f50640a;
    }
}
