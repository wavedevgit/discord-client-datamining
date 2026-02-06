package yp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f55540a;

    /* renamed from: b  reason: collision with root package name */
    private final c f55541b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f55540a = location;
        this.f55541b = precision;
    }

    public final Location a() {
        return this.f55540a;
    }

    public final c b() {
        return this.f55541b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f55540a, bVar.f55540a) && this.f55541b == bVar.f55541b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55540a.hashCode() * 31) + this.f55541b.hashCode();
    }

    public String toString() {
        Location location = this.f55540a;
        c cVar = this.f55541b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
