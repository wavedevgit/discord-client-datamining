package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f27769g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f27770a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27771b;

    /* renamed from: c  reason: collision with root package name */
    private final float f27772c;

    /* renamed from: d  reason: collision with root package name */
    private final float f27773d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27774e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27775f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final int a(int i10) {
            int i11 = i10 % 16;
            if (i11 <= 8) {
                return Math.max(16, i10 - i11);
            }
            return i10 + (16 - i11);
        }

        public final s b(Context context, m7 sessionReplay, int i10, int i11) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(sessionReplay, "sessionReplay");
            float f10 = i11;
            float f11 = i10;
            Pair a10 = qr.v.a(Integer.valueOf(a(fs.a.c((f10 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))), Integer.valueOf(a(fs.a.c((f11 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))));
            int intValue = ((Number) a10.a()).intValue();
            int intValue2 = ((Number) a10.b()).intValue();
            return new s(intValue2, intValue, intValue2 / f11, intValue / f10, sessionReplay.d(), sessionReplay.m().bitRate);
        }

        private a() {
        }
    }

    public s(int i10, int i11, float f10, float f11, int i12, int i13) {
        this.f27770a = i10;
        this.f27771b = i11;
        this.f27772c = f10;
        this.f27773d = f11;
        this.f27774e = i12;
        this.f27775f = i13;
    }

    public final int a() {
        return this.f27775f;
    }

    public final int b() {
        return this.f27774e;
    }

    public final int c() {
        return this.f27771b;
    }

    public final int d() {
        return this.f27770a;
    }

    public final float e() {
        return this.f27772c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f27770a == sVar.f27770a && this.f27771b == sVar.f27771b && Float.compare(this.f27772c, sVar.f27772c) == 0 && Float.compare(this.f27773d, sVar.f27773d) == 0 && this.f27774e == sVar.f27774e && this.f27775f == sVar.f27775f;
        }
        return false;
    }

    public final float f() {
        return this.f27773d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f27770a) * 31) + Integer.hashCode(this.f27771b)) * 31) + Float.hashCode(this.f27772c)) * 31) + Float.hashCode(this.f27773d)) * 31) + Integer.hashCode(this.f27774e)) * 31) + Integer.hashCode(this.f27775f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f27770a + ", recordingHeight=" + this.f27771b + ", scaleFactorX=" + this.f27772c + ", scaleFactorY=" + this.f27773d + ", frameRate=" + this.f27774e + ", bitRate=" + this.f27775f + ')';
    }
}
