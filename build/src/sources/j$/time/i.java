package j$.time;

import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.o;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Collections;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class i implements Serializable {

    /* renamed from: b  reason: collision with root package name */
    public static final i f31376b = new i(0);

    /* renamed from: a  reason: collision with root package name */
    public final int f31377a;

    static {
        Pattern.compile("([-+]?)P(?:([-+]?[0-9]+)Y)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)W)?(?:([-+]?[0-9]+)D)?", 2);
        Collections.unmodifiableList(Arrays.asList(j$.time.temporal.b.YEARS, j$.time.temporal.b.MONTHS, j$.time.temporal.b.DAYS));
    }

    public i(int i10) {
        this.f31377a = i10;
    }

    public final j$.time.temporal.k a(ChronoLocalDate chronoLocalDate) {
        j$.time.chrono.j jVar = (j$.time.chrono.j) chronoLocalDate.a(o.f31400b);
        if (jVar == null || j$.time.chrono.k.f31296a.equals(jVar)) {
            int i10 = this.f31377a;
            return i10 != 0 ? chronoLocalDate.h(i10, j$.time.temporal.b.DAYS) : chronoLocalDate;
        }
        throw new DateTimeException("Chronology mismatch, expected: ISO, actual: ISO");
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof i) && this.f31377a == ((i) obj).f31377a;
    }

    public final int hashCode() {
        return Integer.rotateLeft(this.f31377a, 16) + Integer.rotateLeft(0, 8);
    }

    public final String toString() {
        if (this == f31376b) {
            return "P0D";
        }
        StringBuilder sb2 = new StringBuilder("P");
        int i10 = this.f31377a;
        if (i10 != 0) {
            sb2.append(i10);
            sb2.append('D');
        }
        return sb2.toString();
    }
}
