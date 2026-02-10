package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f27969g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f27970a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27971b;

    /* renamed from: c  reason: collision with root package name */
    private final float f27972c;

    /* renamed from: d  reason: collision with root package name */
    private final float f27973d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27974e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27975f;

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
            Pair a10 = rr.v.a(Integer.valueOf(a(gs.a.c((f10 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))), Integer.valueOf(a(gs.a.c((f11 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))));
            int intValue = ((Number) a10.a()).intValue();
            int intValue2 = ((Number) a10.b()).intValue();
            return new s(intValue2, intValue, intValue2 / f11, intValue / f10, sessionReplay.d(), sessionReplay.m().bitRate);
        }

        private a() {
        }
    }

    public s(int i10, int i11, float f10, float f11, int i12, int i13) {
        this.f27970a = i10;
        this.f27971b = i11;
        this.f27972c = f10;
        this.f27973d = f11;
        this.f27974e = i12;
        this.f27975f = i13;
    }

    public final int a() {
        return this.f27975f;
    }

    public final int b() {
        return this.f27974e;
    }

    public final int c() {
        return this.f27971b;
    }

    public final int d() {
        return this.f27970a;
    }

    public final float e() {
        return this.f27972c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f27970a == sVar.f27970a && this.f27971b == sVar.f27971b && Float.compare(this.f27972c, sVar.f27972c) == 0 && Float.compare(this.f27973d, sVar.f27973d) == 0 && this.f27974e == sVar.f27974e && this.f27975f == sVar.f27975f;
        }
        return false;
    }

    public final float f() {
        return this.f27973d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f27970a) * 31) + Integer.hashCode(this.f27971b)) * 31) + Float.hashCode(this.f27972c)) * 31) + Float.hashCode(this.f27973d)) * 31) + Integer.hashCode(this.f27974e)) * 31) + Integer.hashCode(this.f27975f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f27970a + ", recordingHeight=" + this.f27971b + ", scaleFactorX=" + this.f27972c + ", scaleFactorY=" + this.f27973d + ", frameRate=" + this.f27974e + ", bitRate=" + this.f27975f + ')';
    }
}
