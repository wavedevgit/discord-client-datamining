package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f29473g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f29474a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29475b;

    /* renamed from: c  reason: collision with root package name */
    private final float f29476c;

    /* renamed from: d  reason: collision with root package name */
    private final float f29477d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29478e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29479f;

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
            Pair a10 = as.v.a(Integer.valueOf(a(ps.a.c((f10 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))), Integer.valueOf(a(ps.a.c((f11 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))));
            int intValue = ((Number) a10.a()).intValue();
            int intValue2 = ((Number) a10.b()).intValue();
            return new s(intValue2, intValue, intValue2 / f11, intValue / f10, sessionReplay.d(), sessionReplay.m().bitRate);
        }

        private a() {
        }
    }

    public s(int i10, int i11, float f10, float f11, int i12, int i13) {
        this.f29474a = i10;
        this.f29475b = i11;
        this.f29476c = f10;
        this.f29477d = f11;
        this.f29478e = i12;
        this.f29479f = i13;
    }

    public final int a() {
        return this.f29479f;
    }

    public final int b() {
        return this.f29478e;
    }

    public final int c() {
        return this.f29475b;
    }

    public final int d() {
        return this.f29474a;
    }

    public final float e() {
        return this.f29476c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f29474a == sVar.f29474a && this.f29475b == sVar.f29475b && Float.compare(this.f29476c, sVar.f29476c) == 0 && Float.compare(this.f29477d, sVar.f29477d) == 0 && this.f29478e == sVar.f29478e && this.f29479f == sVar.f29479f;
        }
        return false;
    }

    public final float f() {
        return this.f29477d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f29474a) * 31) + Integer.hashCode(this.f29475b)) * 31) + Float.hashCode(this.f29476c)) * 31) + Float.hashCode(this.f29477d)) * 31) + Integer.hashCode(this.f29478e)) * 31) + Integer.hashCode(this.f29479f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f29474a + ", recordingHeight=" + this.f29475b + ", scaleFactorX=" + this.f29476c + ", scaleFactorY=" + this.f29477d + ", frameRate=" + this.f29478e + ", bitRate=" + this.f29479f + ')';
    }
}
