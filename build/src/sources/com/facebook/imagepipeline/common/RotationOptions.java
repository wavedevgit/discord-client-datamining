package com.facebook.imagepipeline.common;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import x8.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RotationOptions {

    /* renamed from: c  reason: collision with root package name */
    public static final a f11067c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final RotationOptions f11068d = new RotationOptions(-1, false);

    /* renamed from: e  reason: collision with root package name */
    private static final RotationOptions f11069e = new RotationOptions(-2, false);

    /* renamed from: f  reason: collision with root package name */
    private static final RotationOptions f11070f = new RotationOptions(-1, true);

    /* renamed from: a  reason: collision with root package name */
    private final int f11071a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11072b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final RotationOptions a() {
            return RotationOptions.f11068d;
        }

        public final RotationOptions b() {
            return RotationOptions.f11070f;
        }

        public final RotationOptions c() {
            return RotationOptions.f11069e;
        }

        private a() {
        }
    }

    private RotationOptions(int i10, boolean z10) {
        this.f11071a = i10;
        this.f11072b = z10;
    }

    public static final RotationOptions d() {
        return f11067c.a();
    }

    public static final RotationOptions e() {
        return f11067c.b();
    }

    public static final RotationOptions g() {
        return f11067c.c();
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof RotationOptions)) {
            return false;
        }
        RotationOptions rotationOptions = (RotationOptions) obj;
        if (this.f11071a == rotationOptions.f11071a && this.f11072b == rotationOptions.f11072b) {
            return true;
        }
        return false;
    }

    public final boolean f() {
        return this.f11072b;
    }

    public final int h() {
        if (!j()) {
            return this.f11071a;
        }
        throw new IllegalStateException("Rotation is set to use EXIF");
    }

    public int hashCode() {
        return b.b(Integer.valueOf(this.f11071a), Boolean.valueOf(this.f11072b));
    }

    public final boolean i() {
        if (this.f11071a != -2) {
            return true;
        }
        return false;
    }

    public final boolean j() {
        if (this.f11071a == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format(null, "%d defer:%b", Arrays.copyOf(new Object[]{Integer.valueOf(this.f11071a), Boolean.valueOf(this.f11072b)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }
}
