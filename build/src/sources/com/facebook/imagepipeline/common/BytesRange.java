package com.facebook.imagepipeline.common;

import com.facebook.imagepipeline.common.BytesRange;
import java.util.Arrays;
import java.util.regex.Pattern;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import o8.j;
import or.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BytesRange {

    /* renamed from: c  reason: collision with root package name */
    public static final a f10423c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final Lazy f10424d = l.a(new Function0() { // from class: ma.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Pattern e10;
            e10 = BytesRange.e();
            return e10;
        }
    });

    /* renamed from: a  reason: collision with root package name */
    public final int f10425a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10426b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Pattern d() {
            Object value = BytesRange.f10424d.getValue();
            Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
            return (Pattern) value;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String f(int i10) {
            if (i10 == Integer.MAX_VALUE) {
                return "";
            }
            return String.valueOf(i10);
        }

        public final BytesRange b(int i10) {
            boolean z10;
            if (i10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            j.b(Boolean.valueOf(z10));
            return new BytesRange(i10, Integer.MAX_VALUE);
        }

        public final BytesRange c(String str) {
            boolean z10;
            boolean z11;
            if (str == null) {
                return null;
            }
            try {
                String[] split = d().split(str);
                boolean z12 = false;
                if (split.length == 4) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                j.b(Boolean.valueOf(z10));
                j.b(Boolean.valueOf(Intrinsics.areEqual(split[0], "bytes")));
                String str2 = split[1];
                Intrinsics.checkNotNullExpressionValue(str2, "get(...)");
                int parseInt = Integer.parseInt(str2);
                String str3 = split[2];
                Intrinsics.checkNotNullExpressionValue(str3, "get(...)");
                int parseInt2 = Integer.parseInt(str3);
                String str4 = split[3];
                Intrinsics.checkNotNullExpressionValue(str4, "get(...)");
                int parseInt3 = Integer.parseInt(str4);
                if (parseInt2 > parseInt) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                j.b(Boolean.valueOf(z11));
                if (parseInt3 > parseInt2) {
                    z12 = true;
                }
                j.b(Boolean.valueOf(z12));
                if (parseInt2 < parseInt3 - 1) {
                    return new BytesRange(parseInt, parseInt2);
                }
                return new BytesRange(parseInt, Integer.MAX_VALUE);
            } catch (IllegalArgumentException e10) {
                StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
                String format = String.format(null, "Invalid Content-Range header value: \"%s\"", Arrays.copyOf(new Object[]{str}, 1));
                Intrinsics.checkNotNullExpressionValue(format, "format(...)");
                throw new IllegalArgumentException(format, e10);
            }
        }

        public final BytesRange e(int i10) {
            boolean z10;
            if (i10 > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            j.b(Boolean.valueOf(z10));
            return new BytesRange(0, i10);
        }

        private a() {
        }
    }

    public BytesRange(int i10, int i11) {
        this.f10425a = i10;
        this.f10426b = i11;
    }

    public static final BytesRange d(int i10) {
        return f10423c.b(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Pattern e() {
        return Pattern.compile("[-/ ]");
    }

    public static final BytesRange g(int i10) {
        return f10423c.e(i10);
    }

    public final boolean c(BytesRange bytesRange) {
        if (bytesRange == null || this.f10425a > bytesRange.f10425a || bytesRange.f10426b > this.f10426b) {
            return false;
        }
        return true;
    }

    public boolean equals(Object obj) {
        Class<?> cls;
        if (this == obj) {
            return true;
        }
        if (obj != null) {
            cls = obj.getClass();
        } else {
            cls = null;
        }
        if (!Intrinsics.areEqual(BytesRange.class, cls)) {
            return false;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.facebook.imagepipeline.common.BytesRange");
        BytesRange bytesRange = (BytesRange) obj;
        if (this.f10425a == bytesRange.f10425a && this.f10426b == bytesRange.f10426b) {
            return true;
        }
        return false;
    }

    public final String f() {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        a aVar = f10423c;
        String format = String.format(null, "bytes=%s-%s", Arrays.copyOf(new Object[]{aVar.f(this.f10425a), aVar.f(this.f10426b)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    public int hashCode() {
        return (this.f10425a * 31) + this.f10426b;
    }

    public String toString() {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        a aVar = f10423c;
        String format = String.format(null, "%s-%s", Arrays.copyOf(new Object[]{aVar.f(this.f10425a), aVar.f(this.f10426b)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }
}
