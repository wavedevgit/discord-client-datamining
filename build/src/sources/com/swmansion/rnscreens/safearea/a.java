package com.swmansion.rnscreens.safearea;

import androidx.core.graphics.Insets;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    public static final C0232a f19345e = new C0232a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final a f19346f = new a(0.0f, 0.0f, 0.0f, 0.0f);

    /* renamed from: a  reason: collision with root package name */
    private final float f19347a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19348b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19349c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19350d;

    /* renamed from: com.swmansion.rnscreens.safearea.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0232a {
        public /* synthetic */ C0232a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(Insets insets) {
            Intrinsics.checkNotNullParameter(insets, "insets");
            return new a(insets.f3304a, insets.f3305b, insets.f3306c, insets.f3307d);
        }

        public final a b() {
            return a.f19346f;
        }

        public final a c(a i12, a i22) {
            Intrinsics.checkNotNullParameter(i12, "i1");
            Intrinsics.checkNotNullParameter(i22, "i2");
            return new a(Math.max(i12.c(), i22.c()), Math.max(i12.e(), i22.e()), Math.max(i12.d(), i22.d()), Math.max(i12.b(), i22.b()));
        }

        private C0232a() {
        }
    }

    public a(float f10, float f11, float f12, float f13) {
        this.f19347a = f10;
        this.f19348b = f11;
        this.f19349c = f12;
        this.f19350d = f13;
    }

    public final float b() {
        return this.f19350d;
    }

    public final float c() {
        return this.f19347a;
    }

    public final float d() {
        return this.f19349c;
    }

    public final float e() {
        return this.f19348b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f19347a, aVar.f19347a) == 0 && Float.compare(this.f19348b, aVar.f19348b) == 0 && Float.compare(this.f19349c, aVar.f19349c) == 0 && Float.compare(this.f19350d, aVar.f19350d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19347a) * 31) + Float.hashCode(this.f19348b)) * 31) + Float.hashCode(this.f19349c)) * 31) + Float.hashCode(this.f19350d);
    }

    public String toString() {
        float f10 = this.f19347a;
        float f11 = this.f19348b;
        float f12 = this.f19349c;
        float f13 = this.f19350d;
        return "EdgeInsets(left=" + f10 + ", top=" + f11 + ", right=" + f12 + ", bottom=" + f13 + ")";
    }
}
