package jt;

import j$.time.DateTimeException;
import j$.time.Instant;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.KSerializer;
import kt.j;
import org.jetbrains.annotations.NotNull;
@qt.m(with = pt.e.class)
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u000f\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\t\n\u0002\b\u0006\b\u0007\u0018\u0000 \u001b2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u001cB\u0011\b\u0000\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\b\u001a\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0000H\u0096\u0002¢\u0006\u0004\b\b\u0010\tJ\u001a\u0010\f\u001a\u00020\u000b2\b\u0010\u0006\u001a\u0004\u0018\u00010\nH\u0096\u0002¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000e\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0011\u001a\u00020\u0010H\u0016¢\u0006\u0004\b\u0011\u0010\u0012R\u001a\u0010\u0003\u001a\u00020\u00028\u0000X\u0080\u0004¢\u0006\f\n\u0004\b\u0013\u0010\u0014\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\u001a\u001a\u00020\u00178F¢\u0006\u0006\u001a\u0004\b\u0018\u0010\u0019¨\u0006\u001d"}, d2 = {"Ljt/e;", "", "j$/time/Instant", "value", "<init>", "(Lj$/time/Instant;)V", "other", "", "e", "(Ljt/e;)I", "", "", "equals", "(Ljava/lang/Object;)Z", "hashCode", "()I", "", "toString", "()Ljava/lang/String;", "d", "Lj$/time/Instant;", "getValue$kotlinx_datetime", "()Lj$/time/Instant;", "", "f", "()J", "epochSeconds", "Companion", "a", "kotlinx-datetime"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInstant.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Instant.kt\nkotlinx/datetime/Instant\n+ 2 Duration.kt\nkotlin/time/Duration\n*L\n1#1,186:1\n731#2,2:187\n*S KotlinDebug\n*F\n+ 1 Instant.kt\nkotlinx/datetime/Instant\n*L\n36#1:187,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements Comparable<e> {
    @NotNull
    public static final a Companion = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final e f31907e;

    /* renamed from: i  reason: collision with root package name */
    private static final e f31908i;

    /* renamed from: o  reason: collision with root package name */
    private static final e f31909o;

    /* renamed from: p  reason: collision with root package name */
    private static final e f31910p;

    /* renamed from: d  reason: collision with root package name */
    private final Instant f31911d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ e g(a aVar, CharSequence charSequence, kt.n nVar, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                nVar = j.b.f35798a.a();
            }
            return aVar.e(charSequence, nVar);
        }

        public final e a(long j10, int i10) {
            return b(j10, i10);
        }

        public final e b(long j10, long j11) {
            try {
                Instant ofEpochSecond = Instant.ofEpochSecond(j10, j11);
                Intrinsics.checkNotNullExpressionValue(ofEpochSecond, "ofEpochSecond(...)");
                return new e(ofEpochSecond);
            } catch (Exception e10) {
                if (!(e10 instanceof ArithmeticException) && !(e10 instanceof DateTimeException)) {
                    throw e10;
                }
                if (j10 > 0) {
                    return c();
                }
                return d();
            }
        }

        public final e c() {
            return e.f31910p;
        }

        public final e d() {
            return e.f31909o;
        }

        public final e e(CharSequence input, kt.n format) {
            Intrinsics.checkNotNullParameter(input, "input");
            Intrinsics.checkNotNullParameter(format, "format");
            try {
                return ((kt.j) format.a(input)).c();
            } catch (IllegalArgumentException e10) {
                throw new b("Failed to parse an instant from '" + ((Object) input) + '\'', e10);
            }
        }

        public final /* synthetic */ e f(String isoString) {
            Intrinsics.checkNotNullParameter(isoString, "isoString");
            return g(this, isoString, null, 2, null);
        }

        @NotNull
        public final KSerializer serializer() {
            return pt.e.f43756a;
        }

        private a() {
        }
    }

    static {
        Instant ofEpochSecond = Instant.ofEpochSecond(-3217862419201L, 999999999L);
        Intrinsics.checkNotNullExpressionValue(ofEpochSecond, "ofEpochSecond(...)");
        f31907e = new e(ofEpochSecond);
        Instant ofEpochSecond2 = Instant.ofEpochSecond(3093527980800L, 0L);
        Intrinsics.checkNotNullExpressionValue(ofEpochSecond2, "ofEpochSecond(...)");
        f31908i = new e(ofEpochSecond2);
        Instant MIN = Instant.MIN;
        Intrinsics.checkNotNullExpressionValue(MIN, "MIN");
        f31909o = new e(MIN);
        Instant MAX = Instant.MAX;
        Intrinsics.checkNotNullExpressionValue(MAX, "MAX");
        f31910p = new e(MAX);
    }

    public e(Instant value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f31911d = value;
    }

    @Override // java.lang.Comparable
    /* renamed from: e */
    public int compareTo(e other) {
        Intrinsics.checkNotNullParameter(other, "other");
        return this.f31911d.compareTo(other.f31911d);
    }

    public boolean equals(Object obj) {
        if (this != obj) {
            if (!(obj instanceof e) || !Intrinsics.areEqual(this.f31911d, ((e) obj).f31911d)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public final long f() {
        return this.f31911d.getEpochSecond();
    }

    public int hashCode() {
        return this.f31911d.hashCode();
    }

    public String toString() {
        String instant = this.f31911d.toString();
        Intrinsics.checkNotNullExpressionValue(instant, "toString(...)");
        return instant;
    }
}
