package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f29158g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f29159a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29160b;

    /* renamed from: c  reason: collision with root package name */
    private final float f29161c;

    /* renamed from: d  reason: collision with root package name */
    private final float f29162d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29163e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29164f;

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
            Pair a10 = jr.v.a(Integer.valueOf(a(yr.a.c((f10 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))), Integer.valueOf(a(yr.a.c((f11 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))));
            int intValue = ((Number) a10.a()).intValue();
            int intValue2 = ((Number) a10.b()).intValue();
            return new s(intValue2, intValue, intValue2 / f11, intValue / f10, sessionReplay.d(), sessionReplay.m().bitRate);
        }

        private a() {
        }
    }

    public s(int i10, int i11, float f10, float f11, int i12, int i13) {
        this.f29159a = i10;
        this.f29160b = i11;
        this.f29161c = f10;
        this.f29162d = f11;
        this.f29163e = i12;
        this.f29164f = i13;
    }

    public final int a() {
        return this.f29164f;
    }

    public final int b() {
        return this.f29163e;
    }

    public final int c() {
        return this.f29160b;
    }

    public final int d() {
        return this.f29159a;
    }

    public final float e() {
        return this.f29161c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f29159a == sVar.f29159a && this.f29160b == sVar.f29160b && Float.compare(this.f29161c, sVar.f29161c) == 0 && Float.compare(this.f29162d, sVar.f29162d) == 0 && this.f29163e == sVar.f29163e && this.f29164f == sVar.f29164f;
        }
        return false;
    }

    public final float f() {
        return this.f29162d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f29159a) * 31) + Integer.hashCode(this.f29160b)) * 31) + Float.hashCode(this.f29161c)) * 31) + Float.hashCode(this.f29162d)) * 31) + Integer.hashCode(this.f29163e)) * 31) + Integer.hashCode(this.f29164f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f29159a + ", recordingHeight=" + this.f29160b + ", scaleFactorX=" + this.f29161c + ", scaleFactorY=" + this.f29162d + ", frameRate=" + this.f29163e + ", bitRate=" + this.f29164f + ')';
    }
}
