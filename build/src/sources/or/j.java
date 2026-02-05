package or;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements Comparable {
    @NotNull

    /* renamed from: p  reason: collision with root package name */
    public static final a f44223p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    public static final j f44224q = k.a();

    /* renamed from: d  reason: collision with root package name */
    private final int f44225d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44226e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44227i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44228o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(int i10, int i11, int i12) {
        this.f44225d = i10;
        this.f44226e = i11;
        this.f44227i = i12;
        this.f44228o = d(i10, i11, i12);
    }

    private final int d(int i10, int i11, int i12) {
        if (i10 >= 0 && i10 < 256 && i11 >= 0 && i11 < 256 && i12 >= 0 && i12 < 256) {
            return (i10 << 16) + (i11 << 8) + i12;
        }
        throw new IllegalArgumentException(("Version components are out of range: " + i10 + '.' + i11 + '.' + i12).toString());
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(j other) {
        Intrinsics.checkNotNullParameter(other, "other");
        return this.f44228o - other.f44228o;
    }

    public boolean equals(Object obj) {
        j jVar;
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            jVar = (j) obj;
        } else {
            jVar = null;
        }
        if (jVar != null && this.f44228o == jVar.f44228o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f44228o;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f44225d);
        sb2.append('.');
        sb2.append(this.f44226e);
        sb2.append('.');
        sb2.append(this.f44227i);
        return sb2.toString();
    }

    public j(int i10, int i11) {
        this(i10, i11, 0);
    }
}
