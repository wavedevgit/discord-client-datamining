package ts;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f49895a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49896b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49897c;

    /* renamed from: d  reason: collision with root package name */
    private final List f49898d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ss.a invoke(Object obj) {
            return (ss.a) ((b) this.receiver).b(obj);
        }
    }

    public k(n field, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f49895a = field;
        this.f49896b = i10;
        this.f49897c = i11;
        this.f49898d = zerosToAdd;
    }

    @Override // ts.l
    public us.e a() {
        return new us.d(new a(this.f49895a.b()), this.f49896b, this.f49897c, this.f49898d);
    }

    @Override // ts.l
    public vs.q b() {
        return new vs.q(CollectionsKt.e(new vs.h(CollectionsKt.e(new vs.d(this.f49896b, this.f49897c, this.f49895a.b(), this.f49895a.getName())))), CollectionsKt.l());
    }

    @Override // ts.l
    public final n c() {
        return this.f49895a;
    }
}
