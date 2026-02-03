package tp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f50207a;

    /* renamed from: b  reason: collision with root package name */
    private final c f50208b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f50207a = location;
        this.f50208b = precision;
    }

    public final Location a() {
        return this.f50207a;
    }

    public final c b() {
        return this.f50208b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f50207a, bVar.f50207a) && this.f50208b == bVar.f50208b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50207a.hashCode() * 31) + this.f50208b.hashCode();
    }

    public String toString() {
        Location location = this.f50207a;
        c cVar = this.f50208b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
