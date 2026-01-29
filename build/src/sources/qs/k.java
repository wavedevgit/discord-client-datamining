package qs;

import j$.time.ZoneOffset;
import j$.time.format.DateTimeFormatter;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
import rs.p0;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\n\b\u0007\u0018\u0000 \u00152\u00020\u0001:\u0002\u0010\u0016B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u001a\u0010\u000b\u001a\u00020\n2\b\u0010\t\u001a\u0004\u0018\u00010\u0001H\u0096\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\u000e\u001a\u00020\rH\u0016¢\u0006\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0003\u001a\u00020\u00028\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\u0010\u0010\u0011\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0014\u001a\u00020\u00068F¢\u0006\u0006\u001a\u0004\b\u0010\u0010\b¨\u0006\u0017"}, d2 = {"Lqs/k;", "", "j$/time/ZoneOffset", "zoneOffset", "<init>", "(Lj$/time/ZoneOffset;)V", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "", "toString", "()Ljava/lang/String;", "a", "Lj$/time/ZoneOffset;", "getZoneOffset$kotlinx_datetime", "()Lj$/time/ZoneOffset;", "totalSeconds", "Companion", "b", "kotlinx-datetime"}, k = 1, mv = {1, 9, 0}, xi = 48)
@xs.m(with = ws.j.class)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {
    @NotNull
    public static final a Companion = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final k f47648b;

    /* renamed from: a  reason: collision with root package name */
    private final ZoneOffset f47649a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ k b(a aVar, CharSequence charSequence, rs.n nVar, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                nVar = n.a();
            }
            return aVar.a(charSequence, nVar);
        }

        public final k a(CharSequence input, rs.n format) {
            DateTimeFormatter f10;
            k i10;
            DateTimeFormatter g10;
            k i11;
            DateTimeFormatter h10;
            k i12;
            Intrinsics.checkNotNullParameter(input, "input");
            Intrinsics.checkNotNullParameter(format, "format");
            b bVar = b.f47650a;
            if (format == bVar.b()) {
                h10 = m.h();
                Intrinsics.checkNotNullExpressionValue(h10, "access$getIsoFormat(...)");
                i12 = m.i(input, h10);
                return i12;
            } else if (format == bVar.c()) {
                g10 = m.g();
                Intrinsics.checkNotNullExpressionValue(g10, "access$getIsoBasicFormat(...)");
                i11 = m.i(input, g10);
                return i11;
            } else if (format == bVar.a()) {
                f10 = m.f();
                Intrinsics.checkNotNullExpressionValue(f10, "access$getFourDigitsFormat(...)");
                i10 = m.i(input, f10);
                return i10;
            } else {
                return (k) format.a(input);
            }
        }

        @NotNull
        public final KSerializer serializer() {
            return ws.j.f52767a;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public static final b f47650a = new b();

        private b() {
        }

        public final rs.n a() {
            return p0.b();
        }

        public final rs.n b() {
            return p0.c();
        }

        public final rs.n c() {
            return p0.d();
        }
    }

    static {
        ZoneOffset UTC = ZoneOffset.UTC;
        Intrinsics.checkNotNullExpressionValue(UTC, "UTC");
        f47648b = new k(UTC);
    }

    public k(ZoneOffset zoneOffset) {
        Intrinsics.checkNotNullParameter(zoneOffset, "zoneOffset");
        this.f47649a = zoneOffset;
    }

    public final int a() {
        return this.f47649a.getTotalSeconds();
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k) && Intrinsics.areEqual(this.f47649a, ((k) obj).f47649a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f47649a.hashCode();
    }

    public String toString() {
        String zoneOffset = this.f47649a.toString();
        Intrinsics.checkNotNullExpressionValue(zoneOffset, "toString(...)");
        return zoneOffset;
    }
}
