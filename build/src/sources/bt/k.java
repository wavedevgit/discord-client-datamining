package bt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f7070a;

    /* renamed from: b  reason: collision with root package name */
    private final int f7071b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7072c;

    /* renamed from: d  reason: collision with root package name */
    private final List f7073d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final at.a invoke(Object obj) {
            return (at.a) ((b) this.receiver).b(obj);
        }
    }

    public k(n field, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f7070a = field;
        this.f7071b = i10;
        this.f7072c = i11;
        this.f7073d = zerosToAdd;
    }

    @Override // bt.l
    public ct.e a() {
        return new ct.d(new a(this.f7070a.b()), this.f7071b, this.f7072c, this.f7073d);
    }

    @Override // bt.l
    public dt.q b() {
        return new dt.q(CollectionsKt.e(new dt.h(CollectionsKt.e(new dt.d(this.f7071b, this.f7072c, this.f7070a.b(), this.f7070a.getName())))), CollectionsKt.l());
    }

    @Override // bt.l
    public final n c() {
        return this.f7070a;
    }
}
