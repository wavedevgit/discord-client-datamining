package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f31410a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f31411b;

    /* renamed from: c  reason: collision with root package name */
    public final ZoneOffset f31412c;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        LocalDateTime localDateTime = this.f31410a;
        Instant ofEpochSecond = Instant.ofEpochSecond(localDateTime.q(this.f31411b), localDateTime.e().f31271d);
        LocalDateTime localDateTime2 = aVar.f31410a;
        return ofEpochSecond.compareTo(Instant.ofEpochSecond(localDateTime2.q(aVar.f31411b), localDateTime2.e().f31271d));
    }

    public a(LocalDateTime localDateTime, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31410a = localDateTime;
        this.f31411b = zoneOffset;
        this.f31412c = zoneOffset2;
    }

    public a(long j10, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31410a = LocalDateTime.B(j10, 0, zoneOffset);
        this.f31411b = zoneOffset;
        this.f31412c = zoneOffset2;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f31410a.equals(aVar.f31410a) && this.f31411b.equals(aVar.f31411b) && this.f31412c.equals(aVar.f31412c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f31410a.hashCode() ^ this.f31411b.hashCode()) ^ Integer.rotateLeft(this.f31412c.hashCode(), 16);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("Transition[");
        sb2.append(this.f31412c.getTotalSeconds() > this.f31411b.getTotalSeconds() ? "Gap" : "Overlap");
        sb2.append(" at ");
        sb2.append(this.f31410a);
        sb2.append(this.f31411b);
        sb2.append(" to ");
        sb2.append(this.f31412c);
        sb2.append(']');
        return sb2.toString();
    }
}
