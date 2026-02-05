package zs;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f56241a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56242b;

    /* renamed from: c  reason: collision with root package name */
    private final int f56243c;

    /* renamed from: d  reason: collision with root package name */
    private final List f56244d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ys.a invoke(Object obj) {
            return (ys.a) ((b) this.receiver).b(obj);
        }
    }

    public k(n field, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f56241a = field;
        this.f56242b = i10;
        this.f56243c = i11;
        this.f56244d = zerosToAdd;
    }

    @Override // zs.l
    public at.e a() {
        return new at.d(new a(this.f56241a.b()), this.f56242b, this.f56243c, this.f56244d);
    }

    @Override // zs.l
    public bt.q b() {
        return new bt.q(CollectionsKt.e(new bt.h(CollectionsKt.e(new bt.d(this.f56242b, this.f56243c, this.f56241a.b(), this.f56241a.getName())))), CollectionsKt.l());
    }

    @Override // zs.l
    public final n c() {
        return this.f56241a;
    }
}
