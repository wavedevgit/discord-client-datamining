package ws;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f52732a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f52733b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f52734c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a() {
            super(1, Intrinsics.Kotlin.class, "checkIfAllNegative", "formatter$checkIfAllNegative(Lkotlinx/datetime/internal/format/SignedFormatStructure;Ljava/lang/Object;)Z", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(Object obj) {
            return Boolean.valueOf(y.e(y.this, obj));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function2 {
        b() {
            super(2);
        }

        public final void a(Object obj, boolean z10) {
            boolean z11;
            for (m mVar : y.this.f52734c) {
                boolean areEqual = Intrinsics.areEqual(mVar.isNegative().a(obj), Boolean.TRUE);
                ws.b isNegative = mVar.isNegative();
                if (z10 != areEqual) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                isNegative.c(obj, Boolean.valueOf(z11));
            }
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a(obj, ((Boolean) obj2).booleanValue());
            return Unit.f32464a;
        }
    }

    public y(o format, boolean z10) {
        List<l> b10;
        Intrinsics.checkNotNullParameter(format, "format");
        this.f52732a = format;
        this.f52733b = z10;
        b10 = p.b(format);
        ArrayList arrayList = new ArrayList();
        for (l lVar : b10) {
            m c10 = lVar.c().c();
            if (c10 != null) {
                arrayList.add(c10);
            }
        }
        Set l12 = CollectionsKt.l1(arrayList);
        this.f52734c = l12;
        if (!l12.isEmpty()) {
            return;
        }
        throw new IllegalArgumentException("Signed format must contain at least one field with a sign");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean e(y yVar, Object obj) {
        boolean z10 = false;
        for (m mVar : yVar.f52734c) {
            if (Intrinsics.areEqual(mVar.isNegative().a(obj), Boolean.TRUE)) {
                z10 = true;
            } else if (!mVar.a(obj)) {
                return false;
            }
        }
        return z10;
    }

    @Override // ws.o
    public xs.e a() {
        return new xs.f(this.f52732a.a(), new a(), this.f52733b);
    }

    @Override // ws.o
    public ys.q b() {
        b bVar = new b();
        boolean z10 = this.f52733b;
        return ys.n.b(CollectionsKt.o(new ys.q(CollectionsKt.e(new ys.s(bVar, z10, "sign for " + this.f52734c)), CollectionsKt.l()), this.f52732a.b()));
    }

    public boolean equals(Object obj) {
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (Intrinsics.areEqual(this.f52732a, yVar.f52732a) && this.f52733b == yVar.f52733b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final o f() {
        return this.f52732a;
    }

    public int hashCode() {
        return (this.f52732a.hashCode() * 31) + Boolean.hashCode(this.f52733b);
    }

    public String toString() {
        return "SignedFormatStructure(" + this.f52732a + ')';
    }
}
