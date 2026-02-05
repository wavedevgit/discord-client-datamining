package ws;

import j$.time.LocalTime;
import j$.time.format.DateTimeParseException;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
import xs.b0;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u000f\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\n\b\u0007\u0018\u0000 \u001c2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0002\u0017\u001dB\u0011\b\u0000\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005B-\b\u0016\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0006\u0012\b\b\u0002\u0010\t\u001a\u00020\u0006\u0012\b\b\u0002\u0010\n\u001a\u00020\u0006¢\u0006\u0004\b\u0004\u0010\u000bJ\r\u0010\f\u001a\u00020\u0006¢\u0006\u0004\b\f\u0010\rJ\u001a\u0010\u0011\u001a\u00020\u00102\b\u0010\u000f\u001a\u0004\u0018\u00010\u000eH\u0096\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0013\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0013\u0010\rJ\u000f\u0010\u0015\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016J\u0018\u0010\u0017\u001a\u00020\u00062\u0006\u0010\u000f\u001a\u00020\u0000H\u0096\u0002¢\u0006\u0004\b\u0017\u0010\u0018R\u001a\u0010\u0003\u001a\u00020\u00028\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\f\u0010\u0019\u001a\u0004\b\u001a\u0010\u001b¨\u0006\u001e"}, d2 = {"Lws/i;", "", "j$/time/LocalTime", "value", "<init>", "(Lj$/time/LocalTime;)V", "", "hour", "minute", "second", "nanosecond", "(IIII)V", "d", "()I", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "hashCode", "", "toString", "()Ljava/lang/String;", "a", "(Lws/i;)I", "Lj$/time/LocalTime;", "getValue$kotlinx_datetime", "()Lj$/time/LocalTime;", "Companion", "b", "kotlinx-datetime"}, k = 1, mv = {1, 9, 0}, xi = 48)
@dt.m(with = ct.g.class)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements Comparable<i> {
    @NotNull
    public static final a Companion = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final i f53284e;

    /* renamed from: i  reason: collision with root package name */
    private static final i f53285i;

    /* renamed from: d  reason: collision with root package name */
    private final LocalTime f53286d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ i b(a aVar, CharSequence charSequence, xs.n nVar, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                nVar = j.a();
            }
            return aVar.a(charSequence, nVar);
        }

        public final i a(CharSequence input, xs.n format) {
            Intrinsics.checkNotNullParameter(input, "input");
            Intrinsics.checkNotNullParameter(format, "format");
            if (format == b.f53287a.a()) {
                try {
                    return new i(LocalTime.parse(input));
                } catch (DateTimeParseException e10) {
                    throw new ws.b(e10);
                }
            }
            return (i) format.a(input);
        }

        @NotNull
        public final KSerializer serializer() {
            return ct.g.f20024a;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public static final b f53287a = new b();

        private b() {
        }

        public final xs.n a() {
            return b0.b();
        }
    }

    static {
        LocalTime MIN = LocalTime.MIN;
        Intrinsics.checkNotNullExpressionValue(MIN, "MIN");
        f53284e = new i(MIN);
        LocalTime MAX = LocalTime.MAX;
        Intrinsics.checkNotNullExpressionValue(MAX, "MAX");
        f53285i = new i(MAX);
    }

    public i(LocalTime value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f53286d = value;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(i other) {
        Intrinsics.checkNotNullParameter(other, "other");
        return this.f53286d.compareTo(other.f53286d);
    }

    public final int d() {
        return this.f53286d.toSecondOfDay();
    }

    public boolean equals(Object obj) {
        if (this != obj) {
            if (!(obj instanceof i) || !Intrinsics.areEqual(this.f53286d, ((i) obj).f53286d)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public int hashCode() {
        return this.f53286d.hashCode();
    }

    public String toString() {
        String localTime = this.f53286d.toString();
        Intrinsics.checkNotNullExpressionValue(localTime, "toString(...)");
        return localTime;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public i(int r1, int r2, int r3, int r4) {
        /*
            r0 = this;
            j$.time.LocalTime r1 = j$.time.LocalTime.of(r1, r2, r3, r4)     // Catch: j$.time.DateTimeException -> Lb
            kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
            r0.<init>(r1)
            return
        Lb:
            r1 = move-exception
            java.lang.IllegalArgumentException r2 = new java.lang.IllegalArgumentException
            r2.<init>(r1)
            throw r2
        */
        throw new UnsupportedOperationException("Method not decompiled: ws.i.<init>(int, int, int, int):void");
    }
}
