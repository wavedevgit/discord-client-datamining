package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f28904g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f28905a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28906b;

    /* renamed from: c  reason: collision with root package name */
    private final float f28907c;

    /* renamed from: d  reason: collision with root package name */
    private final float f28908d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28909e;

    /* renamed from: f  reason: collision with root package name */
    private final int f28910f;

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
        this.f28905a = i10;
        this.f28906b = i11;
        this.f28907c = f10;
        this.f28908d = f11;
        this.f28909e = i12;
        this.f28910f = i13;
    }

    public final int a() {
        return this.f28910f;
    }

    public final int b() {
        return this.f28909e;
    }

    public final int c() {
        return this.f28906b;
    }

    public final int d() {
        return this.f28905a;
    }

    public final float e() {
        return this.f28907c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f28905a == sVar.f28905a && this.f28906b == sVar.f28906b && Float.compare(this.f28907c, sVar.f28907c) == 0 && Float.compare(this.f28908d, sVar.f28908d) == 0 && this.f28909e == sVar.f28909e && this.f28910f == sVar.f28910f;
        }
        return false;
    }

    public final float f() {
        return this.f28908d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f28905a) * 31) + Integer.hashCode(this.f28906b)) * 31) + Float.hashCode(this.f28907c)) * 31) + Float.hashCode(this.f28908d)) * 31) + Integer.hashCode(this.f28909e)) * 31) + Integer.hashCode(this.f28910f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f28905a + ", recordingHeight=" + this.f28906b + ", scaleFactorX=" + this.f28907c + ", scaleFactorY=" + this.f28908d + ", frameRate=" + this.f28909e + ", bitRate=" + this.f28910f + ')';
    }
}
