package tp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f50204a;

    /* renamed from: b  reason: collision with root package name */
    private final c f50205b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f50204a = location;
        this.f50205b = precision;
    }

    public final Location a() {
        return this.f50204a;
    }

    public final c b() {
        return this.f50205b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f50204a, bVar.f50204a) && this.f50205b == bVar.f50205b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50204a.hashCode() * 31) + this.f50205b.hashCode();
    }

    public String toString() {
        Location location = this.f50204a;
        c cVar = this.f50205b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
