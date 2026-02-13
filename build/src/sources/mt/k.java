package mt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f37192a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37193b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37194c;

    /* renamed from: d  reason: collision with root package name */
    private final List f37195d;

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
        this.f37192a = field;
        this.f37193b = i10;
        this.f37194c = i11;
        this.f37195d = zerosToAdd;
    }

    @Override // mt.l
    public nt.e a() {
        return new nt.d(new a(this.f37192a.b()), this.f37193b, this.f37194c, this.f37195d);
    }

    @Override // mt.l
    public ot.q b() {
        return new ot.q(CollectionsKt.e(new ot.h(CollectionsKt.e(new ot.d(this.f37193b, this.f37194c, this.f37192a.b(), this.f37192a.getName())))), CollectionsKt.l());
    }

    @Override // mt.l
    public final n c() {
        return this.f37192a;
    }
}
