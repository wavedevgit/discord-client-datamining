package ys;

import j$.time.DayOfWeek;
import j$.time.LocalDate;
import j$.time.Month;
import j$.time.chrono.ChronoLocalDate;
import j$.time.format.DateTimeParseException;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
import zs.z;
@ft.m(with = et.f.class)
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u000f\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0007\u0018\u0000 (2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0002\u0015)B\u0011\b\u0000\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005B!\b\u0016\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\u0006¢\u0006\u0004\b\u0004\u0010\nJ\u001a\u0010\u000e\u001a\u00020\r2\b\u0010\f\u001a\u0004\u0018\u00010\u000bH\u0096\u0002¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0010\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0013\u001a\u00020\u0012H\u0016¢\u0006\u0004\b\u0013\u0010\u0014J\u0018\u0010\u0015\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\u0000H\u0096\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\r\u0010\u0017\u001a\u00020\u0006¢\u0006\u0004\b\u0017\u0010\u0011R\u001a\u0010\u0003\u001a\u00020\u00028\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\u0018\u0010\u0019\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u0007\u001a\u00020\u00068F¢\u0006\u0006\u001a\u0004\b\u001c\u0010\u0011R\u0011\u0010\b\u001a\u00020\u00068F¢\u0006\u0006\u001a\u0004\b\u001d\u0010\u0011R\u0015\u0010\"\u001a\u00060\u001ej\u0002`\u001f8F¢\u0006\u0006\u001a\u0004\b \u0010!R\u0011\u0010\t\u001a\u00020\u00068F¢\u0006\u0006\u001a\u0004\b\u0018\u0010\u0011R\u0015\u0010'\u001a\u00060#j\u0002`$8F¢\u0006\u0006\u001a\u0004\b%\u0010&¨\u0006*"}, d2 = {"Lys/f;", "", "j$/time/LocalDate", "value", "<init>", "(Lj$/time/LocalDate;)V", "", "year", "monthNumber", "dayOfMonth", "(III)V", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "hashCode", "()I", "", "toString", "()Ljava/lang/String;", "a", "(Lys/f;)I", "j", "d", "Lj$/time/LocalDate;", "h", "()Lj$/time/LocalDate;", "i", "g", "j$/time/Month", "Lkotlinx/datetime/Month;", "f", "()Lj$/time/Month;", "month", "j$/time/DayOfWeek", "Lkotlinx/datetime/DayOfWeek;", "e", "()Lj$/time/DayOfWeek;", "dayOfWeek", "Companion", "b", "kotlinx-datetime"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements Comparable<f> {
    @NotNull
    public static final a Companion = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final f f55592e;

    /* renamed from: i  reason: collision with root package name */
    private static final f f55593i;

    /* renamed from: d  reason: collision with root package name */
    private final LocalDate f55594d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ f b(a aVar, CharSequence charSequence, zs.n nVar, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                nVar = h.a();
            }
            return aVar.a(charSequence, nVar);
        }

        public final f a(CharSequence input, zs.n format) {
            Intrinsics.checkNotNullParameter(input, "input");
            Intrinsics.checkNotNullParameter(format, "format");
            if (format == b.f55595a.a()) {
                try {
                    return new f(LocalDate.parse(at.d.d(input.toString())));
                } catch (DateTimeParseException e10) {
                    throw new ys.b(e10);
                }
            }
            return (f) format.a(input);
        }

        @NotNull
        public final KSerializer serializer() {
            return et.f.f22119a;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public static final b f55595a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final zs.n f55596b = z.c();

        private b() {
        }

        public final zs.n a() {
            return z.b();
        }
    }

    static {
        LocalDate MIN = LocalDate.MIN;
        Intrinsics.checkNotNullExpressionValue(MIN, "MIN");
        f55592e = new f(MIN);
        LocalDate MAX = LocalDate.MAX;
        Intrinsics.checkNotNullExpressionValue(MAX, "MAX");
        f55593i = new f(MAX);
    }

    public f(LocalDate value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f55594d = value;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(f other) {
        Intrinsics.checkNotNullParameter(other, "other");
        return this.f55594d.compareTo((ChronoLocalDate) other.f55594d);
    }

    public final int d() {
        return this.f55594d.getDayOfMonth();
    }

    public final DayOfWeek e() {
        DayOfWeek dayOfWeek = this.f55594d.getDayOfWeek();
        Intrinsics.checkNotNullExpressionValue(dayOfWeek, "getDayOfWeek(...)");
        return dayOfWeek;
    }

    public boolean equals(Object obj) {
        if (this != obj) {
            if (!(obj instanceof f) || !Intrinsics.areEqual(this.f55594d, ((f) obj).f55594d)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public final Month f() {
        Month month = this.f55594d.getMonth();
        Intrinsics.checkNotNullExpressionValue(month, "getMonth(...)");
        return month;
    }

    public final int g() {
        return this.f55594d.getMonthValue();
    }

    public final LocalDate h() {
        return this.f55594d;
    }

    public int hashCode() {
        return this.f55594d.hashCode();
    }

    public final int i() {
        return this.f55594d.getYear();
    }

    public final int j() {
        return at.c.a(this.f55594d.toEpochDay());
    }

    public String toString() {
        String localDate = this.f55594d.toString();
        Intrinsics.checkNotNullExpressionValue(localDate, "toString(...)");
        return localDate;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public f(int r1, int r2, int r3) {
        /*
            r0 = this;
            j$.time.LocalDate r1 = j$.time.LocalDate.of(r1, r2, r3)     // Catch: j$.time.DateTimeException -> Lb
            kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
            r0.<init>(r1)
            return
        Lb:
            r1 = move-exception
            java.lang.IllegalArgumentException r2 = new java.lang.IllegalArgumentException
            r2.<init>(r1)
            throw r2
        */
        throw new UnsupportedOperationException("Method not decompiled: ys.f.<init>(int, int, int):void");
    }
}
