package iq;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f30393a;

    /* renamed from: b  reason: collision with root package name */
    private final c f30394b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f30393a = location;
        this.f30394b = precision;
    }

    public final Location a() {
        return this.f30393a;
    }

    public final c b() {
        return this.f30394b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f30393a, bVar.f30393a) && this.f30394b == bVar.f30394b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f30393a.hashCode() * 31) + this.f30394b.hashCode();
    }

    public String toString() {
        Location location = this.f30393a;
        c cVar = this.f30394b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
