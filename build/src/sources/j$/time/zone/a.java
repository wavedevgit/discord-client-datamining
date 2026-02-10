package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final LocalDateTime f29830a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset f29831b;

    /* renamed from: c  reason: collision with root package name */
    public final ZoneOffset f29832c;

    @Override // java.lang.Comparable
    public final int compareTo(Object obj) {
        a aVar = (a) obj;
        LocalDateTime localDateTime = this.f29830a;
        Instant ofEpochSecond = Instant.ofEpochSecond(localDateTime.q(this.f29831b), localDateTime.e().f29694d);
        LocalDateTime localDateTime2 = aVar.f29830a;
        return ofEpochSecond.compareTo(Instant.ofEpochSecond(localDateTime2.q(aVar.f29831b), localDateTime2.e().f29694d));
    }

    public a(LocalDateTime localDateTime, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f29830a = localDateTime;
        this.f29831b = zoneOffset;
        this.f29832c = zoneOffset2;
    }

    public a(long j10, ZoneOffset zoneOffset, ZoneOffset zoneOffset2) {
        this.f29830a = LocalDateTime.B(j10, 0, zoneOffset);
        this.f29831b = zoneOffset;
        this.f29832c = zoneOffset2;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f29830a.equals(aVar.f29830a) && this.f29831b.equals(aVar.f29831b) && this.f29832c.equals(aVar.f29832c)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return (this.f29830a.hashCode() ^ this.f29831b.hashCode()) ^ Integer.rotateLeft(this.f29832c.hashCode(), 16);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder("Transition[");
        sb2.append(this.f29832c.getTotalSeconds() > this.f29831b.getTotalSeconds() ? "Gap" : "Overlap");
        sb2.append(" at ");
        sb2.append(this.f29830a);
        sb2.append(this.f29831b);
        sb2.append(" to ");
        sb2.append(this.f29832c);
        sb2.append(']');
        return sb2.toString();
    }
}
