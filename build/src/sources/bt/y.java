package bt;

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
    private final o f7090a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7091b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f7092c;

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
            for (m mVar : y.this.f7092c) {
                boolean areEqual = Intrinsics.areEqual(mVar.isNegative().a(obj), Boolean.TRUE);
                bt.b isNegative = mVar.isNegative();
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
            return Unit.f32008a;
        }
    }

    public y(o format, boolean z10) {
        List<l> b10;
        Intrinsics.checkNotNullParameter(format, "format");
        this.f7090a = format;
        this.f7091b = z10;
        b10 = p.b(format);
        ArrayList arrayList = new ArrayList();
        for (l lVar : b10) {
            m c10 = lVar.c().c();
            if (c10 != null) {
                arrayList.add(c10);
            }
        }
        Set l12 = CollectionsKt.l1(arrayList);
        this.f7092c = l12;
        if (!l12.isEmpty()) {
            return;
        }
        throw new IllegalArgumentException("Signed format must contain at least one field with a sign");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean e(y yVar, Object obj) {
        boolean z10 = false;
        for (m mVar : yVar.f7092c) {
            if (Intrinsics.areEqual(mVar.isNegative().a(obj), Boolean.TRUE)) {
                z10 = true;
            } else if (!mVar.a(obj)) {
                return false;
            }
        }
        return z10;
    }

    @Override // bt.o
    public ct.e a() {
        return new ct.f(this.f7090a.a(), new a(), this.f7091b);
    }

    @Override // bt.o
    public dt.q b() {
        b bVar = new b();
        boolean z10 = this.f7091b;
        return dt.n.b(CollectionsKt.o(new dt.q(CollectionsKt.e(new dt.s(bVar, z10, "sign for " + this.f7092c)), CollectionsKt.l()), this.f7090a.b()));
    }

    public boolean equals(Object obj) {
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (Intrinsics.areEqual(this.f7090a, yVar.f7090a) && this.f7091b == yVar.f7091b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final o f() {
        return this.f7090a;
    }

    public int hashCode() {
        return (this.f7090a.hashCode() * 31) + Boolean.hashCode(this.f7091b);
    }

    public String toString() {
        return "SignedFormatStructure(" + this.f7090a + ')';
    }
}
