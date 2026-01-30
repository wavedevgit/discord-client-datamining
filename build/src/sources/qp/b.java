package qp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f47601a;

    /* renamed from: b  reason: collision with root package name */
    private final c f47602b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f47601a = location;
        this.f47602b = precision;
    }

    public final Location a() {
        return this.f47601a;
    }

    public final c b() {
        return this.f47602b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f47601a, bVar.f47601a) && this.f47602b == bVar.f47602b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f47601a.hashCode() * 31) + this.f47602b.hashCode();
    }

    public String toString() {
        Location location = this.f47601a;
        c cVar = this.f47602b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
