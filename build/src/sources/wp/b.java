package wp;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f53225a;

    /* renamed from: b  reason: collision with root package name */
    private final c f53226b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f53225a = location;
        this.f53226b = precision;
    }

    public final Location a() {
        return this.f53225a;
    }

    public final c b() {
        return this.f53226b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f53225a, bVar.f53225a) && this.f53226b == bVar.f53226b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53225a.hashCode() * 31) + this.f53226b.hashCode();
    }

    public String toString() {
        Location location = this.f53225a;
        c cVar = this.f53226b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
