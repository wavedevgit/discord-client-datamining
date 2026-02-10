package kotlin.reflect;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0007\b\u0087\b\u0018\u0000 \u00192\u00020\u0001:\u0001\u000bB\u001b\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\t\u0010\nJ\u0012\u0010\u000b\u001a\u0004\u0018\u00010\u0002HÆ\u0003¢\u0006\u0004\b\u000b\u0010\fJ\u0012\u0010\r\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0004\b\r\u0010\u000eJ\u0010\u0010\u0010\u001a\u00020\u000fHÖ\u0001¢\u0006\u0004\b\u0010\u0010\u0011J\u001a\u0010\u0014\u001a\u00020\u00132\b\u0010\u0012\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0014\u0010\u0015R\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u000b\u0010\u0016\u001a\u0004\b\u0017\u0010\fR\u0019\u0010\u0005\u001a\u0004\u0018\u00010\u00048\u0006¢\u0006\f\n\u0004\b\r\u0010\u0018\u001a\u0004\b\u0019\u0010\u000e¨\u0006\u001a"}, d2 = {"Lkotlin/reflect/KTypeProjection;", "", "Lkotlin/reflect/m;", "variance", "Lkotlin/reflect/KType;", "type", "<init>", "(Lkotlin/reflect/m;Lkotlin/reflect/KType;)V", "", "toString", "()Ljava/lang/String;", "a", "()Lkotlin/reflect/m;", "b", "()Lkotlin/reflect/KType;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "Lkotlin/reflect/m;", "d", "Lkotlin/reflect/KType;", "c", "kotlin-stdlib"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class KTypeProjection {
    @NotNull

    /* renamed from: c  reason: collision with root package name */
    public static final a f31869c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final KTypeProjection f31870d = new KTypeProjection(null, null);

    /* renamed from: a  reason: collision with root package name */
    private final m f31871a;

    /* renamed from: b  reason: collision with root package name */
    private final KType f31872b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final KTypeProjection a(KType type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new KTypeProjection(m.f34605e, type);
        }

        public final KTypeProjection b(KType type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new KTypeProjection(m.f34606i, type);
        }

        public final KTypeProjection c() {
            return KTypeProjection.f31870d;
        }

        public final KTypeProjection d(KType type) {
            Intrinsics.checkNotNullParameter(type, "type");
            return new KTypeProjection(m.f34604d, type);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31873a;

        static {
            int[] iArr = new int[m.values().length];
            try {
                iArr[m.f34604d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[m.f34605e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[m.f34606i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f31873a = iArr;
        }
    }

    public KTypeProjection(m mVar, KType kType) {
        boolean z10;
        String str;
        this.f31871a = mVar;
        this.f31872b = kType;
        if (mVar == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 == (kType == null)) {
            return;
        }
        if (mVar == null) {
            str = "Star projection must have no type specified.";
        } else {
            str = "The projection variance " + mVar + " requires type to be specified.";
        }
        throw new IllegalArgumentException(str.toString());
    }

    public final m a() {
        return this.f31871a;
    }

    public final KType b() {
        return this.f31872b;
    }

    public final KType c() {
        return this.f31872b;
    }

    public final m d() {
        return this.f31871a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof KTypeProjection) {
            KTypeProjection kTypeProjection = (KTypeProjection) obj;
            return this.f31871a == kTypeProjection.f31871a && Intrinsics.areEqual(this.f31872b, kTypeProjection.f31872b);
        }
        return false;
    }

    public int hashCode() {
        m mVar = this.f31871a;
        int hashCode = (mVar == null ? 0 : mVar.hashCode()) * 31;
        KType kType = this.f31872b;
        return hashCode + (kType != null ? kType.hashCode() : 0);
    }

    public String toString() {
        int i10;
        m mVar = this.f31871a;
        if (mVar == null) {
            i10 = -1;
        } else {
            i10 = b.f31873a[mVar.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "out " + this.f31872b;
                    }
                    throw new rr.p();
                }
                return "in " + this.f31872b;
            }
            return String.valueOf(this.f31872b);
        }
        return "*";
    }
}
