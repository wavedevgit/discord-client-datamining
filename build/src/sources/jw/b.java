package jw;

import as.p;
import jt.e;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f31387a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: jw.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class C0439b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31388a;

        static {
            int[] iArr = new int[jw.a.values().length];
            try {
                iArr[jw.a.MILLISECOND.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[jw.a.SECOND.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[jw.a.MINUTE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[jw.a.HOUR.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[jw.a.DAY.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[jw.a.MONTH.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[jw.a.YEAR.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            f31388a = iArr;
        }
    }

    private final String b(jw.a aVar) {
        switch (C0439b.f31388a[aVar.ordinal()]) {
            case 1:
                return "";
            case 2:
                return ".001Z";
            case 3:
                return ":00.001Z";
            case 4:
                return ":00:00.001Z";
            case 5:
                return "T00:00:00.001Z";
            case 6:
                return "-01T00:00:00.001Z";
            case 7:
                return "-01-01T00:00:00.001Z";
            default:
                throw new p();
        }
    }

    private final int c(jw.a aVar) {
        switch (C0439b.f31388a[aVar.ordinal()]) {
            case 1:
                return 24;
            case 2:
                return 19;
            case 3:
                return 16;
            case 4:
                return 13;
            case 5:
                return 10;
            case 6:
                return 7;
            case 7:
                return 4;
            default:
                throw new p();
        }
    }

    public final e a(String isoDate, jw.a precision) {
        Intrinsics.checkNotNullParameter(isoDate, "isoDate");
        Intrinsics.checkNotNullParameter(precision, "precision");
        e.a aVar = e.Companion;
        String substring = isoDate.substring(0, c(precision));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        String b10 = b(precision);
        return aVar.f(substring + b10);
    }
}
