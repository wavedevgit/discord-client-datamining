package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f31656a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f31657b;

    /* renamed from: c  reason: collision with root package name */
    public final ZoneOffset f31658c;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        LocalDateTime localDateTime = this.f31656a;
        Instant ofEpochSecond = Instant.ofEpochSecond(localDateTime.q(this.f31657b), localDateTime.e().f31517d);
        LocalDateTime localDateTime2 = aVar.f31656a;
        return ofEpochSecond.compareTo(Instant.ofEpochSecond(localDateTime2.q(aVar.f31657b), localDateTime2.e().f31517d));
    }

    public a(LocalDateTime localDateTime, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31656a = localDateTime;
        this.f31657b = zoneOffset;
        this.f31658c = zoneOffset2;
    }

    public a(long j10, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31656a = LocalDateTime.B(j10, 0, zoneOffset);
        this.f31657b = zoneOffset;
        this.f31658c = zoneOffset2;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f31656a.equals(aVar.f31656a) && this.f31657b.equals(aVar.f31657b) && this.f31658c.equals(aVar.f31658c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f31656a.hashCode() ^ this.f31657b.hashCode()) ^ Integer.rotateLeft(this.f31658c.hashCode(), 16);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("Transition[");
        sb2.append(this.f31658c.getTotalSeconds() > this.f31657b.getTotalSeconds() ? "Gap" : "Overlap");
        sb2.append(" at ");
        sb2.append(this.f31656a);
        sb2.append(this.f31657b);
        sb2.append(" to ");
        sb2.append(this.f31658c);
        sb2.append(']');
        return sb2.toString();
    }
}
