package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f44894a;

    /* renamed from: b  reason: collision with root package name */
    private final Long f44895b;

    public d(String key, Long l10) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f44894a = key;
        this.f44895b = l10;
    }

    public final String a() {
        return this.f44894a;
    }

    public final Long b() {
        return this.f44895b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f44894a, dVar.f44894a) && Intrinsics.areEqual(this.f44895b, dVar.f44895b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f44894a.hashCode() * 31;
        Long l10 = this.f44895b;
        if (l10 == null) {
            hashCode = 0;
        } else {
            hashCode = l10.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        return "Preference(key=" + this.f44894a + ", value=" + this.f44895b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public d(String key, boolean z10) {
        this(key, Long.valueOf(z10 ? 1L : 0L));
        Intrinsics.checkNotNullParameter(key, "key");
    }
}
