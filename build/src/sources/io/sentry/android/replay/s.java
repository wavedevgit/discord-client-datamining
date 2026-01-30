package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f29592g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f29593a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29594b;

    /* renamed from: c  reason: collision with root package name */
    private final float f29595c;

    /* renamed from: d  reason: collision with root package name */
    private final float f29596d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29597e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29598f;

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
        this.f29593a = i10;
        this.f29594b = i11;
        this.f29595c = f10;
        this.f29596d = f11;
        this.f29597e = i12;
        this.f29598f = i13;
    }

    public final int a() {
        return this.f29598f;
    }

    public final int b() {
        return this.f29597e;
    }

    public final int c() {
        return this.f29594b;
    }

    public final int d() {
        return this.f29593a;
    }

    public final float e() {
        return this.f29595c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f29593a == sVar.f29593a && this.f29594b == sVar.f29594b && Float.compare(this.f29595c, sVar.f29595c) == 0 && Float.compare(this.f29596d, sVar.f29596d) == 0 && this.f29597e == sVar.f29597e && this.f29598f == sVar.f29598f;
        }
        return false;
    }

    public final float f() {
        return this.f29596d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f29593a) * 31) + Integer.hashCode(this.f29594b)) * 31) + Float.hashCode(this.f29595c)) * 31) + Float.hashCode(this.f29596d)) * 31) + Integer.hashCode(this.f29597e)) * 31) + Integer.hashCode(this.f29598f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f29593a + ", recordingHeight=" + this.f29594b + ", scaleFactorX=" + this.f29595c + ", scaleFactorY=" + this.f29596d + ", frameRate=" + this.f29597e + ", bitRate=" + this.f29598f + ')';
    }
}
