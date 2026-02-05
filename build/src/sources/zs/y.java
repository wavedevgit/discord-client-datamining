package zs;

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
    private final o f56261a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f56262b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f56263c;

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
            for (m mVar : y.this.f56263c) {
                boolean areEqual = Intrinsics.areEqual(mVar.isNegative().a(obj), Boolean.TRUE);
                zs.b isNegative = mVar.isNegative();
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
            return Unit.f31988a;
        }
    }

    public y(o format, boolean z10) {
        List<l> b10;
        Intrinsics.checkNotNullParameter(format, "format");
        this.f56261a = format;
        this.f56262b = z10;
        b10 = p.b(format);
        ArrayList arrayList = new ArrayList();
        for (l lVar : b10) {
            m c10 = lVar.c().c();
            if (c10 != null) {
                arrayList.add(c10);
            }
        }
        Set l12 = CollectionsKt.l1(arrayList);
        this.f56263c = l12;
        if (!l12.isEmpty()) {
            return;
        }
        throw new IllegalArgumentException("Signed format must contain at least one field with a sign");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean e(y yVar, Object obj) {
        boolean z10 = false;
        for (m mVar : yVar.f56263c) {
            if (Intrinsics.areEqual(mVar.isNegative().a(obj), Boolean.TRUE)) {
                z10 = true;
            } else if (!mVar.a(obj)) {
                return false;
            }
        }
        return z10;
    }

    @Override // zs.o
    public at.e a() {
        return new at.f(this.f56261a.a(), new a(), this.f56262b);
    }

    @Override // zs.o
    public bt.q b() {
        b bVar = new b();
        boolean z10 = this.f56262b;
        return bt.n.b(CollectionsKt.o(new bt.q(CollectionsKt.e(new bt.s(bVar, z10, "sign for " + this.f56263c)), CollectionsKt.l()), this.f56261a.b()));
    }

    public boolean equals(Object obj) {
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (Intrinsics.areEqual(this.f56261a, yVar.f56261a) && this.f56262b == yVar.f56262b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final o f() {
        return this.f56261a;
    }

    public int hashCode() {
        return (this.f56261a.hashCode() * 31) + Boolean.hashCode(this.f56262b);
    }

    public String toString() {
        return "SignedFormatStructure(" + this.f56261a + ')';
    }
}
