package io.sentry.android.replay;

import android.content.Context;
import io.sentry.m7;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: g  reason: collision with root package name */
    public static final a f28577g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f28578a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28579b;

    /* renamed from: c  reason: collision with root package name */
    private final float f28580c;

    /* renamed from: d  reason: collision with root package name */
    private final float f28581d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28582e;

    /* renamed from: f  reason: collision with root package name */
    private final int f28583f;

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
            Pair a10 = or.v.a(Integer.valueOf(a(ds.a.c((f10 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))), Integer.valueOf(a(ds.a.c((f11 / context.getResources().getDisplayMetrics().density) * sessionReplay.m().sizeScale))));
            int intValue = ((Number) a10.a()).intValue();
            int intValue2 = ((Number) a10.b()).intValue();
            return new s(intValue2, intValue, intValue2 / f11, intValue / f10, sessionReplay.d(), sessionReplay.m().bitRate);
        }

        private a() {
        }
    }

    public s(int i10, int i11, float f10, float f11, int i12, int i13) {
        this.f28578a = i10;
        this.f28579b = i11;
        this.f28580c = f10;
        this.f28581d = f11;
        this.f28582e = i12;
        this.f28583f = i13;
    }

    public final int a() {
        return this.f28583f;
    }

    public final int b() {
        return this.f28582e;
    }

    public final int c() {
        return this.f28579b;
    }

    public final int d() {
        return this.f28578a;
    }

    public final float e() {
        return this.f28580c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof s) {
            s sVar = (s) obj;
            return this.f28578a == sVar.f28578a && this.f28579b == sVar.f28579b && Float.compare(this.f28580c, sVar.f28580c) == 0 && Float.compare(this.f28581d, sVar.f28581d) == 0 && this.f28582e == sVar.f28582e && this.f28583f == sVar.f28583f;
        }
        return false;
    }

    public final float f() {
        return this.f28581d;
    }

    public int hashCode() {
        return (((((((((Integer.hashCode(this.f28578a) * 31) + Integer.hashCode(this.f28579b)) * 31) + Float.hashCode(this.f28580c)) * 31) + Float.hashCode(this.f28581d)) * 31) + Integer.hashCode(this.f28582e)) * 31) + Integer.hashCode(this.f28583f);
    }

    public String toString() {
        return "ScreenshotRecorderConfig(recordingWidth=" + this.f28578a + ", recordingHeight=" + this.f28579b + ", scaleFactorX=" + this.f28580c + ", scaleFactorY=" + this.f28581d + ", frameRate=" + this.f28582e + ", bitRate=" + this.f28583f + ')';
    }
}
