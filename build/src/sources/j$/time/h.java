package j$.time;

import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.o;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Collections;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class h implements Serializable {

    /* renamed from: b  reason: collision with root package name */
    public static final h f29494b = new h(0);

    /* renamed from: a  reason: collision with root package name */
    public final int f29495a;

    static {
        Pattern.compile("([-+]?)P(?:([-+]?[0-9]+)Y)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)W)?(?:([-+]?[0-9]+)D)?", 2);
        Collections.unmodifiableList(Arrays.asList(j$.time.temporal.b.YEARS, j$.time.temporal.b.MONTHS, j$.time.temporal.b.DAYS));
    }

    public h(int i10) {
        this.f29495a = i10;
    }

    public final j$.time.temporal.k a(ChronoLocalDate chronoLocalDate) {
        j$.time.chrono.j jVar = (j$.time.chrono.j) chronoLocalDate.a(o.f29518b);
        if (jVar == null || j$.time.chrono.k.f29416a.equals(jVar)) {
            int i10 = this.f29495a;
            return i10 != 0 ? chronoLocalDate.h(i10, j$.time.temporal.b.DAYS) : chronoLocalDate;
        }
        throw new DateTimeException("Chronology mismatch, expected: ISO, actual: ISO");
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof h) && this.f29495a == ((h) obj).f29495a;
    }

    public final int hashCode() {
        return Integer.rotateLeft(this.f29495a, 16) + Integer.rotateLeft(0, 8);
    }

    public final String toString() {
        if (this == f29494b) {
            return "P0D";
        }
        StringBuilder sb2 = new StringBuilder("P");
        int i10 = this.f29495a;
        if (i10 != 0) {
            sb2.append(i10);
            sb2.append('D');
        }
        return sb2.toString();
    }
}
