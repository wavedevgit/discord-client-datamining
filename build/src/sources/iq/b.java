package iq;

import android.location.Location;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Location f30962a;

    /* renamed from: b  reason: collision with root package name */
    private final c f30963b;

    public b(Location location, c precision) {
        Intrinsics.checkNotNullParameter(location, "location");
        Intrinsics.checkNotNullParameter(precision, "precision");
        this.f30962a = location;
        this.f30963b = precision;
    }

    public final Location a() {
        return this.f30962a;
    }

    public final c b() {
        return this.f30963b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f30962a, bVar.f30962a) && this.f30963b == bVar.f30963b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f30962a.hashCode() * 31) + this.f30963b.hashCode();
    }

    public String toString() {
        Location location = this.f30962a;
        c cVar = this.f30963b;
        return "GpsData(location=" + location + ", precision=" + cVar + ")";
    }
}
