package ws;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f52715a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52716b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52717c;

    /* renamed from: d  reason: collision with root package name */
    private final List f52718d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final vs.a invoke(Object obj) {
            return (vs.a) ((b) this.receiver).b(obj);
        }
    }

    public k(n field, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f52715a = field;
        this.f52716b = i10;
        this.f52717c = i11;
        this.f52718d = zerosToAdd;
    }

    @Override // ws.l
    public xs.e a() {
        return new xs.d(new a(this.f52715a.b()), this.f52716b, this.f52717c, this.f52718d);
    }

    @Override // ws.l
    public ys.q b() {
        return new ys.q(CollectionsKt.e(new ys.h(CollectionsKt.e(new ys.d(this.f52716b, this.f52717c, this.f52715a.b(), this.f52715a.getName())))), CollectionsKt.l());
    }

    @Override // ws.l
    public final n c() {
        return this.f52715a;
    }
}
