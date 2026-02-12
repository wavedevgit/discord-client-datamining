package iq;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f30394a;

    /* renamed from: b  reason: collision with root package name */
    private final c f30395b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f30394a = location;
        this.f30395b = precision;
    }

    public final Location a() {
        return this.f30394a;
    }

    public final c b() {
        return this.f30395b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f30394a, bVar.f30394a) && this.f30395b == bVar.f30395b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f30394a.hashCode() * 31) + this.f30395b.hashCode();
    }

    public String toString() {
        Location location = this.f30394a;
        c cVar = this.f30395b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
