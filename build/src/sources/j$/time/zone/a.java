package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f31672a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f31673b;

    /* renamed from: c  reason: collision with root package name */
    public final ZoneOffset f31674c;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        LocalDateTime localDateTime = this.f31672a;
        Instant ofEpochSecond = Instant.ofEpochSecond(localDateTime.q(this.f31673b), localDateTime.e().f31533d);
        LocalDateTime localDateTime2 = aVar.f31672a;
        return ofEpochSecond.compareTo(Instant.ofEpochSecond(localDateTime2.q(aVar.f31673b), localDateTime2.e().f31533d));
    }

    public a(LocalDateTime localDateTime, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31672a = localDateTime;
        this.f31673b = zoneOffset;
        this.f31674c = zoneOffset2;
    }

    public a(long j10, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f31672a = LocalDateTime.B(j10, 0, zoneOffset);
        this.f31673b = zoneOffset;
        this.f31674c = zoneOffset2;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f31672a.equals(aVar.f31672a) && this.f31673b.equals(aVar.f31673b) && this.f31674c.equals(aVar.f31674c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f31672a.hashCode() ^ this.f31673b.hashCode()) ^ Integer.rotateLeft(this.f31674c.hashCode(), 16);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("Transition[");
        sb2.append(this.f31674c.getTotalSeconds() > this.f31673b.getTotalSeconds() ? "Gap" : "Overlap");
        sb2.append(" at ");
        sb2.append(this.f31672a);
        sb2.append(this.f31673b);
        sb2.append(" to ");
        sb2.append(this.f31674c);
        sb2.append(']');
        return sb2.toString();
    }
}
