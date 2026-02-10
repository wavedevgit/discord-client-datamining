package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f20380d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final String f20381a;

    /* renamed from: b  reason: collision with root package name */
    private final long f20382b;

    /* renamed from: c  reason: collision with root package name */
    private final int f20383c;

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
        return b.f(this.f20382b);
    }

    public final int b() {
        return this.f20383c;
    }

    public abstract float c(int i10);

    public abstract float d(int i10);

    public final long e() {
        return this.f20382b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f20383c != cVar.f20383c || !Intrinsics.areEqual(this.f20381a, cVar.f20381a)) {
            return false;
        }
        return b.e(this.f20382b, cVar.f20382b);
    }

    public final String f() {
        return this.f20381a;
    }

    public boolean g() {
        return false;
    }

    public abstract long h(float f10, float f11, float f12);

    public int hashCode() {
        return (((this.f20381a.hashCode() * 31) + b.g(this.f20382b)) * 31) + this.f20383c;
    }

    public abstract float i(float f10, float f11, float f12);

    public abstract long j(float f10, float f11, float f12, float f13, c cVar);

    public String toString() {
        return this.f20381a + " (id=" + this.f20383c + ", model=" + ((Object) b.h(this.f20382b)) + ')';
    }

    private c(String name, long j10, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20381a = name;
        this.f20382b = j10;
        this.f20383c = i10;
        if (name.length() == 0) {
            throw new IllegalArgumentException("The name of a color space cannot be null and must contain at least 1 character");
        }
        if (i10 < -1 || i10 > 63) {
            throw new IllegalArgumentException("The id must be between -1 and 63");
        }
    }
}
