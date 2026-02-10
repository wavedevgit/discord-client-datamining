package ct;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f20225a;

    /* renamed from: b  reason: collision with root package name */
    private final int f20226b;

    /* renamed from: c  reason: collision with root package name */
    private final int f20227c;

    /* renamed from: d  reason: collision with root package name */
    private final List f20228d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final bt.a invoke(Object obj) {
            return (bt.a) ((b) this.receiver).b(obj);
        }
    }

    public k(n field, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f20225a = field;
        this.f20226b = i10;
        this.f20227c = i11;
        this.f20228d = zerosToAdd;
    }

    @Override // ct.l
    public dt.e a() {
        return new dt.d(new a(this.f20225a.b()), this.f20226b, this.f20227c, this.f20228d);
    }

    @Override // ct.l
    public et.q b() {
        return new et.q(CollectionsKt.e(new et.h(CollectionsKt.e(new et.d(this.f20226b, this.f20227c, this.f20225a.b(), this.f20225a.getName())))), CollectionsKt.l());
    }

    @Override // ct.l
    public final n c() {
        return this.f20225a;
    }
}
