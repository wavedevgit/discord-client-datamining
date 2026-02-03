package us;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements l {

    /* renamed from: a  reason: collision with root package name */
    private final n f50653a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50654b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50655c;

    /* renamed from: d  reason: collision with root package name */
    private final List f50656d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, b.class, "getterNotNull", "getterNotNull(Ljava/lang/Object;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ts.a invoke(Object obj) {
            return (ts.a) ((b) this.receiver).b(obj);
        }
    }

    public k(n field, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f50653a = field;
        this.f50654b = i10;
        this.f50655c = i11;
        this.f50656d = zerosToAdd;
    }

    @Override // us.l
    public vs.e a() {
        return new vs.d(new a(this.f50653a.b()), this.f50654b, this.f50655c, this.f50656d);
    }

    @Override // us.l
    public ws.q b() {
        return new ws.q(CollectionsKt.e(new ws.h(CollectionsKt.e(new ws.d(this.f50654b, this.f50655c, this.f50653a.b(), this.f50653a.getName())))), CollectionsKt.l());
    }

    @Override // us.l
    public final n c() {
        return this.f50653a;
    }
}
