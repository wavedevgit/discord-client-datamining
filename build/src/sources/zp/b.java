package zp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f56613a;

    /* renamed from: b  reason: collision with root package name */
    private final c f56614b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f56613a = location;
        this.f56614b = precision;
    }

    public final Location a() {
        return this.f56613a;
    }

    public final c b() {
        return this.f56614b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f56613a, bVar.f56613a) && this.f56614b == bVar.f56614b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f56613a.hashCode() * 31) + this.f56614b.hashCode();
    }

    public String toString() {
        Location location = this.f56613a;
        c cVar = this.f56614b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
