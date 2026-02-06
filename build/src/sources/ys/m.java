package ys;

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
    private static final Lazy f55606a = qr.l.a(c.f55611d);

    /* renamed from: b  reason: collision with root package name */
    private static final Lazy f55607b = qr.l.a(b.f55610d);

    /* renamed from: c  reason: collision with root package name */
    private static final Lazy f55608c = qr.l.a(a.f55609d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f55609d = new a();

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
        public static final b f55610d = new b();

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
        public static final c f55611d = new c();

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
        return (DateTimeFormatter) f55608c.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DateTimeFormatter g() {
        return (DateTimeFormatter) f55607b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DateTimeFormatter h() {
        return (DateTimeFormatter) f55606a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final k i(CharSequence charSequence, DateTimeFormatter dateTimeFormatter) {
        try {
            return new k((ZoneOffset) dateTimeFormatter.parse(charSequence, new TemporalQuery() { // from class: ys.l
                @Override // j$.time.temporal.TemporalQuery
                public final Object queryFrom(TemporalAccessor temporalAccessor) {
                    return ZoneOffset.from(temporalAccessor);
                }
            }));
        } catch (DateTimeException e10) {
            throw new ys.b(e10);
        }
    }
}
