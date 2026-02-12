package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f28905g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f28906a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28907b;

    /* renamed from: c  reason: collision with root package name */
    private final float f28908c;

    /* renamed from: d  reason: collision with root package name */
    private final float f28909d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28910e;

    /* renamed from: f  reason: collision with root package name */
    private final int f28911f;

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
        this.f28906a = i10;
        this.f28907b = i11;
        this.f28908c = f10;
        this.f28909d = f11;
        this.f28910e = i12;
        this.f28911f = i13;
    }

    public final int a() {
        return this.f28911f;
    }

    public final int b() {
        return this.f28910e;
    }

    public final int c() {
        return this.f28907b;
    }

    public final int d() {
        return this.f28906a;
    }

    public final float e() {
        return this.f28908c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f28906a == sVar.f28906a && this.f28907b == sVar.f28907b && Float.compare(this.f28908c, sVar.f28908c) == 0 && Float.compare(this.f28909d, sVar.f28909d) == 0 && this.f28910e == sVar.f28910e && this.f28911f == sVar.f28911f;
        }
        return false;
    }

    public final float f() {
        return this.f28909d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f28906a) * 31) + Integer.hashCode(this.f28907b)) * 31) + Float.hashCode(this.f28908c)) * 31) + Float.hashCode(this.f28909d)) * 31) + Integer.hashCode(this.f28910e)) * 31) + Integer.hashCode(this.f28911f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f28906a + ", recordingHeight=" + this.f28907b + ", scaleFactorX=" + this.f28908c + ", scaleFactorY=" + this.f28909d + ", frameRate=" + this.f28910e + ", bitRate=" + this.f28911f + ')';
    }
}
