package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f29519g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f29520a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29521b;

    /* renamed from: c  reason: collision with root package name */
    private final float f29522c;

    /* renamed from: d  reason: collision with root package name */
    private final float f29523d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29524e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29525f;

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
            Pair a10 = lr.v.a(Integer.valueOf(a(as.a.c((f10 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))), Integer.valueOf(a(as.a.c((f11 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))));
            int intValue = ((Number) a10.a()).intValue();
            int intValue2 = ((Number) a10.b()).intValue();
            return new s(intValue2, intValue, intValue2 / f11, intValue / f10, sessionReplay.d(), sessionReplay.m().bitRate);
        }

        private a() {
        }
    }

    public s(int i10, int i11, float f10, float f11, int i12, int i13) {
        this.f29520a = i10;
        this.f29521b = i11;
        this.f29522c = f10;
        this.f29523d = f11;
        this.f29524e = i12;
        this.f29525f = i13;
    }

    public final int a() {
        return this.f29525f;
    }

    public final int b() {
        return this.f29524e;
    }

    public final int c() {
        return this.f29521b;
    }

    public final int d() {
        return this.f29520a;
    }

    public final float e() {
        return this.f29522c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f29520a == sVar.f29520a && this.f29521b == sVar.f29521b && Float.compare(this.f29522c, sVar.f29522c) == 0 && Float.compare(this.f29523d, sVar.f29523d) == 0 && this.f29524e == sVar.f29524e && this.f29525f == sVar.f29525f;
        }
        return false;
    }

    public final float f() {
        return this.f29523d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f29520a) * 31) + Integer.hashCode(this.f29521b)) * 31) + Float.hashCode(this.f29522c)) * 31) + Float.hashCode(this.f29523d)) * 31) + Integer.hashCode(this.f29524e)) * 31) + Integer.hashCode(this.f29525f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f29520a + ", recordingHeight=" + this.f29521b + ", scaleFactorX=" + this.f29522c + ", scaleFactorY=" + this.f29523d + ", frameRate=" + this.f29524e + ", bitRate=" + this.f29525f + ')';
    }
}
