package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f27721g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f27722a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27723b;

    /* renamed from: c  reason: collision with root package name */
    private final float f27724c;

    /* renamed from: d  reason: collision with root package name */
    private final float f27725d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27726e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27727f;

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
        this.f27722a = i10;
        this.f27723b = i11;
        this.f27724c = f10;
        this.f27725d = f11;
        this.f27726e = i12;
        this.f27727f = i13;
    }

    public final int a() {
        return this.f27727f;
    }

    public final int b() {
        return this.f27726e;
    }

    public final int c() {
        return this.f27723b;
    }

    public final int d() {
        return this.f27722a;
    }

    public final float e() {
        return this.f27724c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f27722a == sVar.f27722a && this.f27723b == sVar.f27723b && Float.compare(this.f27724c, sVar.f27724c) == 0 && Float.compare(this.f27725d, sVar.f27725d) == 0 && this.f27726e == sVar.f27726e && this.f27727f == sVar.f27727f;
        }
        return false;
    }

    public final float f() {
        return this.f27725d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f27722a) * 31) + Integer.hashCode(this.f27723b)) * 31) + Float.hashCode(this.f27724c)) * 31) + Float.hashCode(this.f27725d)) * 31) + Integer.hashCode(this.f27726e)) * 31) + Integer.hashCode(this.f27727f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f27722a + ", recordingHeight=" + this.f27723b + ", scaleFactorX=" + this.f27724c + ", scaleFactorY=" + this.f27725d + ", frameRate=" + this.f27726e + ", bitRate=" + this.f27727f + ')';
    }
}
