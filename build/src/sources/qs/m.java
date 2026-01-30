package qs;

import j$.time.DateTimeException;
import j$.time.ZoneOffset;
import j$.time.format.DateTimeFormatter;
import j$.time.format.DateTimeFormatterBuilder;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final Lazy f47667a = ir.l.b(c.f47672d);

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f47668b = ir.l.b(b.f47671d);

    /* renamed from: c  reason: collision with root package name */
    private static final Lazy f47669c = ir.l.b(a.f47670d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f47670d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final DateTimeFormatter invoke() {
            return new DateTimeFormatterBuilder().parseCaseInsensitive().appendOffset("+HHMM", "+0000").toFormatter();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f47671d = new b();

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final DateTimeFormatter invoke() {
            return new DateTimeFormatterBuilder().parseCaseInsensitive().appendOffset("+HHmmss", "Z").toFormatter();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f47672d = new c();

        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final DateTimeFormatter invoke() {
            return new DateTimeFormatterBuilder().parseCaseInsensitive().appendOffsetId().toFormatter();
        }
    }

    public static final k a(Integer num, Integer num2, Integer num3) {
        int i10;
        int i11 = 0;
        try {
            if (num != null) {
                int intValue = num.intValue();
                if (num2 != null) {
                    i10 = num2.intValue();
                } else {
                    i10 = 0;
                }
                if (num3 != null) {
                    i11 = num3.intValue();
                }
                ZoneOffset ofHoursMinutesSeconds = ZoneOffset.ofHoursMinutesSeconds(intValue, i10, i11);
                Intrinsics.checkNotNullExpressionValue(ofHoursMinutesSeconds, "ofHoursMinutesSeconds(...)");
                return new k(ofHoursMinutesSeconds);
            } else if (num2 != null) {
                int intValue2 = num2.intValue() / 60;
                int intValue3 = num2.intValue() % 60;
                if (num3 != null) {
                    i11 = num3.intValue();
                }
                ZoneOffset ofHoursMinutesSeconds2 = ZoneOffset.ofHoursMinutesSeconds(intValue2, intValue3, i11);
                Intrinsics.checkNotNullExpressionValue(ofHoursMinutesSeconds2, "ofHoursMinutesSeconds(...)");
                return new k(ofHoursMinutesSeconds2);
            } else {
                if (num3 != null) {
                    i11 = num3.intValue();
                }
                ZoneOffset ofTotalSeconds = ZoneOffset.ofTotalSeconds(i11);
                Intrinsics.checkNotNullExpressionValue(ofTotalSeconds, "ofTotalSeconds(...)");
                return new k(ofTotalSeconds);
            }
        } catch (DateTimeException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DateTimeFormatter f() {
        return (DateTimeFormatter) f47669c.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DateTimeFormatter g() {
        return (DateTimeFormatter) f47668b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DateTimeFormatter h() {
        return (DateTimeFormatter) f47667a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final k i(CharSequence charSequence, DateTimeFormatter dateTimeFormatter) {
        try {
            return new k((ZoneOffset) dateTimeFormatter.parse(charSequence, new TemporalQuery() { // from class: qs.l
                @Override // j$.time.temporal.TemporalQuery
                public final Object queryFrom(TemporalAccessor temporalAccessor) {
                    return ZoneOffset.from(temporalAccessor);
                }
            }));
        } catch (DateTimeException e10) {
            throw new qs.b(e10);
        }
    }
}
