package mt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f36624a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36625b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36626c;

    /* renamed from: d  reason: collision with root package name */
    private final List f36627d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final lt.a invoke(Object obj) {
            return (lt.a) ((b) this.receiver).b(obj);
        }
    }

    public k(n field, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f36624a = field;
        this.f36625b = i10;
        this.f36626c = i11;
        this.f36627d = zerosToAdd;
    }

    @Override // mt.l
    public nt.e a() {
        return new nt.d(new a(this.f36624a.b()), this.f36625b, this.f36626c, this.f36627d);
    }

    @Override // mt.l
    public ot.q b() {
        return new ot.q(CollectionsKt.e(new ot.h(CollectionsKt.e(new ot.d(this.f36625b, this.f36626c, this.f36624a.b(), this.f36624a.getName())))), CollectionsKt.l());
    }

    @Override // mt.l
    public final n c() {
        return this.f36624a;
    }
}
