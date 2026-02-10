package rr;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements Comparable {
    @NotNull

    /* renamed from: p  reason: collision with root package name */
    public static final a f49201p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    public static final j f49202q = k.a();

    /* renamed from: d  reason: collision with root package name */
    private final int f49203d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49204e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49205i;

    /* renamed from: o  reason: collision with root package name */
    private final int f49206o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(int i10, int i11, int i12) {
        this.f49203d = i10;
        this.f49204e = i11;
        this.f49205i = i12;
        this.f49206o = d(i10, i11, i12);
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
        return this.f49206o - other.f49206o;
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
        if (jVar != null && this.f49206o == jVar.f49206o) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f49206o;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f49203d);
        sb2.append('.');
        sb2.append(this.f49204e);
        sb2.append('.');
        sb2.append(this.f49205i);
        return sb2.toString();
    }

    public j(int i10, int i11) {
        this(i10, i11, 0);
    }
}
