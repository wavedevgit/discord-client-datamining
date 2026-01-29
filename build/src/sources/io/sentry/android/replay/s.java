package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f29576g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f29577a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29578b;

    /* renamed from: c  reason: collision with root package name */
    private final float f29579c;

    /* renamed from: d  reason: collision with root package name */
    private final float f29580d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29581e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29582f;

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
            Pair a10 = ir.v.a(Integer.valueOf(a(xr.a.c((f10 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))), Integer.valueOf(a(xr.a.c((f11 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))));
            int intValue = ((Number) a10.a()).intValue();
            int intValue2 = ((Number) a10.b()).intValue();
            return new s(intValue2, intValue, intValue2 / f11, intValue / f10, sessionReplay.d(), sessionReplay.m().bitRate);
        }

        private a() {
        }
    }

    public s(int i10, int i11, float f10, float f11, int i12, int i13) {
        this.f29577a = i10;
        this.f29578b = i11;
        this.f29579c = f10;
        this.f29580d = f11;
        this.f29581e = i12;
        this.f29582f = i13;
    }

    public final int a() {
        return this.f29582f;
    }

    public final int b() {
        return this.f29581e;
    }

    public final int c() {
        return this.f29578b;
    }

    public final int d() {
        return this.f29577a;
    }

    public final float e() {
        return this.f29579c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f29577a == sVar.f29577a && this.f29578b == sVar.f29578b && Float.compare(this.f29579c, sVar.f29579c) == 0 && Float.compare(this.f29580d, sVar.f29580d) == 0 && this.f29581e == sVar.f29581e && this.f29582f == sVar.f29582f;
        }
        return false;
    }

    public final float f() {
        return this.f29580d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f29577a) * 31) + Integer.hashCode(this.f29578b)) * 31) + Float.hashCode(this.f29579c)) * 31) + Float.hashCode(this.f29580d)) * 31) + Integer.hashCode(this.f29581e)) * 31) + Integer.hashCode(this.f29582f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f29577a + ", recordingHeight=" + this.f29578b + ", scaleFactorX=" + this.f29579c + ", scaleFactorY=" + this.f29580d + ", frameRate=" + this.f29581e + ", bitRate=" + this.f29582f + ')';
    }
}
