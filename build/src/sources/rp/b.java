package rp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f48627a;

    /* renamed from: b  reason: collision with root package name */
    private final c f48628b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f48627a = location;
        this.f48628b = precision;
    }

    public final Location a() {
        return this.f48627a;
    }

    public final c b() {
        return this.f48628b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f48627a, bVar.f48627a) && this.f48628b == bVar.f48628b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f48627a.hashCode() * 31) + this.f48628b.hashCode();
    }

    public String toString() {
        Location location = this.f48627a;
        c cVar = this.f48628b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
