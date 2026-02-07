package yp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f55588a;

    /* renamed from: b  reason: collision with root package name */
    private final c f55589b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f55588a = location;
        this.f55589b = precision;
    }

    public final Location a() {
        return this.f55588a;
    }

    public final c b() {
        return this.f55589b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f55588a, bVar.f55588a) && this.f55589b == bVar.f55589b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55588a.hashCode() * 31) + this.f55589b.hashCode();
    }

    public String toString() {
        Location location = this.f55588a;
        c cVar = this.f55589b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
