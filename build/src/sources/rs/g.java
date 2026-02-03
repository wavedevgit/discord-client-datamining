package rs;

import j$.time.DateTimeException;
import j$.time.LocalDate;
import jr.p;
import kotlin.jvm.internal.Intrinsics;
import rs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static final long f48684a = LocalDate.MIN.toEpochDay();

    /* renamed from: b  reason: collision with root package name */
    private static final long f48685b = LocalDate.MAX.toEpochDay();

    private static final LocalDate a(long j10) {
        long j11 = f48684a;
        if (j10 <= f48685b && j11 <= j10) {
            LocalDate ofEpochDay = LocalDate.ofEpochDay(j10);
            Intrinsics.checkNotNullExpressionValue(ofEpochDay, "ofEpochDay(...)");
            return ofEpochDay;
        }
        throw new DateTimeException("The resulting day " + j10 + " is out of supported LocalDate range.");
    }

    public static final f b(f fVar, int i10, c.b unit) {
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        Intrinsics.checkNotNullParameter(unit, "unit");
        return c(fVar, i10, unit);
    }

    public static final f c(f fVar, long j10, c.b unit) {
        LocalDate plusMonths;
        Intrinsics.checkNotNullParameter(fVar, "<this>");
        Intrinsics.checkNotNullParameter(unit, "unit");
        try {
            if (unit instanceof c.C0604c) {
                plusMonths = a(ts.b.a(fVar.h().toEpochDay(), ts.b.c(j10, ((c.C0604c) unit).d())));
            } else if (unit instanceof c.d) {
                plusMonths = fVar.h().plusMonths(ts.b.c(j10, ((c.d) unit).d()));
            } else {
                throw new p();
            }
            return new f(plusMonths);
        } catch (Exception e10) {
            if (!(e10 instanceof DateTimeException) && !(e10 instanceof ArithmeticException)) {
                throw e10;
            }
            throw new a("The result of adding " + j10 + " of " + unit + " to " + fVar + " is out of LocalDate range.", e10);
        }
    }
}
