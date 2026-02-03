package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f19976d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f19977a;

    /* renamed from: b  reason: collision with root package name */
    private final long f19978b;

    /* renamed from: c  reason: collision with root package name */
    private final int f19979c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public /* synthetic */ c(String str, long j10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, i10);
    }

    public final int a() {
        return b.f(this.f19978b);
    }

    public final int b() {
        return this.f19979c;
    }

    public abstract float c(int i10);

    public abstract float d(int i10);

    public final long e() {
        return this.f19978b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f19979c != cVar.f19979c || !Intrinsics.areEqual(this.f19977a, cVar.f19977a)) {
            return false;
        }
        return b.e(this.f19978b, cVar.f19978b);
    }

    public final String f() {
        return this.f19977a;
    }

    public boolean g() {
        return false;
    }

    public abstract long h(float f10, float f11, float f12);

    public int hashCode() {
        return (((this.f19977a.hashCode() * 31) + b.g(this.f19978b)) * 31) + this.f19979c;
    }

    public abstract float i(float f10, float f11, float f12);

    public abstract long j(float f10, float f11, float f12, float f13, c cVar);

    public String toString() {
        return this.f19977a + " (id=" + this.f19979c + ", model=" + ((Object) b.h(this.f19978b)) + ')';
    }

    private c(String name, long j10, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f19977a = name;
        this.f19978b = j10;
        this.f19979c = i10;
        if (name.length() == 0) {
            throw new IllegalArgumentException("The name of a color space cannot be null and must contain at least 1 character");
        }
        if (i10 < -1 || i10 > 63) {
            throw new IllegalArgumentException("The id must be between -1 and 63");
        }
    }
}
