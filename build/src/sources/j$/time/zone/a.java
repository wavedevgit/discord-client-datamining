package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f29528a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f29529b;

    /* renamed from: c  reason: collision with root package name */
    public final ZoneOffset f29530c;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        LocalDateTime localDateTime = this.f29528a;
        Instant ofEpochSecond = Instant.ofEpochSecond(localDateTime.q(this.f29529b), localDateTime.e().f29392d);
        LocalDateTime localDateTime2 = aVar.f29528a;
        return ofEpochSecond.compareTo(Instant.ofEpochSecond(localDateTime2.q(aVar.f29529b), localDateTime2.e().f29392d));
    }

    public a(LocalDateTime localDateTime, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f29528a = localDateTime;
        this.f29529b = zoneOffset;
        this.f29530c = zoneOffset2;
    }

    public a(long j10, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f29528a = LocalDateTime.B(j10, 0, zoneOffset);
        this.f29529b = zoneOffset;
        this.f29530c = zoneOffset2;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f29528a.equals(aVar.f29528a) && this.f29529b.equals(aVar.f29529b) && this.f29530c.equals(aVar.f29530c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f29528a.hashCode() ^ this.f29529b.hashCode()) ^ Integer.rotateLeft(this.f29530c.hashCode(), 16);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("Transition[");
        sb2.append(this.f29530c.getTotalSeconds() > this.f29529b.getTotalSeconds() ? "Gap" : "Overlap");
        sb2.append(" at ");
        sb2.append(this.f29528a);
        sb2.append(this.f29529b);
        sb2.append(" to ");
        sb2.append(this.f29530c);
        sb2.append(']');
        return sb2.toString();
    }
}
