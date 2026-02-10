package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f30630a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f30631b;

    /* renamed from: c  reason: collision with root package name */
    public final ZoneOffset f30632c;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        LocalDateTime localDateTime = this.f30630a;
        Instant ofEpochSecond = Instant.ofEpochSecond(localDateTime.q(this.f30631b), localDateTime.e().f30494d);
        LocalDateTime localDateTime2 = aVar.f30630a;
        return ofEpochSecond.compareTo(Instant.ofEpochSecond(localDateTime2.q(aVar.f30631b), localDateTime2.e().f30494d));
    }

    public a(LocalDateTime localDateTime, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f30630a = localDateTime;
        this.f30631b = zoneOffset;
        this.f30632c = zoneOffset2;
    }

    public a(long j10, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f30630a = LocalDateTime.B(j10, 0, zoneOffset);
        this.f30631b = zoneOffset;
        this.f30632c = zoneOffset2;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f30630a.equals(aVar.f30630a) && this.f30631b.equals(aVar.f30631b) && this.f30632c.equals(aVar.f30632c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f30630a.hashCode() ^ this.f30631b.hashCode()) ^ Integer.rotateLeft(this.f30632c.hashCode(), 16);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("Transition[");
        sb2.append(this.f30632c.getTotalSeconds() > this.f30631b.getTotalSeconds() ? "Gap" : "Overlap");
        sb2.append(" at ");
        sb2.append(this.f30630a);
        sb2.append(this.f30631b);
        sb2.append(" to ");
        sb2.append(this.f30632c);
        sb2.append(']');
        return sb2.toString();
    }
}
