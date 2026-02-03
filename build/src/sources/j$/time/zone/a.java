package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f31206a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f31207b;

    /* renamed from: c  reason: collision with root package name */
    public final ZoneOffset f31208c;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        LocalDateTime localDateTime = this.f31206a;
        Instant ofEpochSecond = Instant.ofEpochSecond(localDateTime.q(this.f31207b), localDateTime.e().f31067d);
        LocalDateTime localDateTime2 = aVar.f31206a;
        return ofEpochSecond.compareTo(Instant.ofEpochSecond(localDateTime2.q(aVar.f31207b), localDateTime2.e().f31067d));
    }

    public a(LocalDateTime localDateTime, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31206a = localDateTime;
        this.f31207b = zoneOffset;
        this.f31208c = zoneOffset2;
    }

    public a(long j10, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31206a = LocalDateTime.B(j10, 0, zoneOffset);
        this.f31207b = zoneOffset;
        this.f31208c = zoneOffset2;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f31206a.equals(aVar.f31206a) && this.f31207b.equals(aVar.f31207b) && this.f31208c.equals(aVar.f31208c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f31206a.hashCode() ^ this.f31207b.hashCode()) ^ Integer.rotateLeft(this.f31208c.hashCode(), 16);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("Transition[");
        sb2.append(this.f31208c.getTotalSeconds() > this.f31207b.getTotalSeconds() ? "Gap" : "Overlap");
        sb2.append(" at ");
        sb2.append(this.f31206a);
        sb2.append(this.f31207b);
        sb2.append(" to ");
        sb2.append(this.f31208c);
        sb2.append(']');
        return sb2.toString();
    }
}
