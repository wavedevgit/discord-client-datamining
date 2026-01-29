package qp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f47585a;

    /* renamed from: b  reason: collision with root package name */
    private final c f47586b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f47585a = location;
        this.f47586b = precision;
    }

    public final Location a() {
        return this.f47585a;
    }

    public final c b() {
        return this.f47586b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f47585a, bVar.f47585a) && this.f47586b == bVar.f47586b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f47585a.hashCode() * 31) + this.f47586b.hashCode();
    }

    public String toString() {
        Location location = this.f47585a;
        c cVar = this.f47586b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
