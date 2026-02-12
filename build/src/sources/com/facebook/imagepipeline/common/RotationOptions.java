package com.facebook.imagepipeline.common;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import x8.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RotationOptions {

    /* renamed from: c  reason: collision with root package name */
    public static final a f11068c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final RotationOptions f11069d = new RotationOptions(-1, false);

    /* renamed from: e  reason: collision with root package name */
    private static final RotationOptions f11070e = new RotationOptions(-2, false);

    /* renamed from: f  reason: collision with root package name */
    private static final RotationOptions f11071f = new RotationOptions(-1, true);

    /* renamed from: a  reason: collision with root package name */
    private final int f11072a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11073b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final RotationOptions a() {
            return RotationOptions.f11069d;
        }

        public final RotationOptions b() {
            return RotationOptions.f11071f;
        }

        public final RotationOptions c() {
            return RotationOptions.f11070e;
        }

        private a() {
        }
    }

    private RotationOptions(int i10, boolean z10) {
        this.f11072a = i10;
        this.f11073b = z10;
    }

    public static final RotationOptions d() {
        return f11068c.a();
    }

    public static final RotationOptions e() {
        return f11068c.b();
    }

    public static final RotationOptions g() {
        return f11068c.c();
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof RotationOptions)) {
            return false;
        }
        RotationOptions rotationOptions = (RotationOptions) obj;
        if (this.f11072a == rotationOptions.f11072a && this.f11073b == rotationOptions.f11073b) {
            return true;
        }
        return false;
    }

    public final boolean f() {
        return this.f11073b;
    }

    public final int h() {
        if (!j()) {
            return this.f11072a;
        }
        throw new IllegalStateException("Rotation is set to use EXIF");
    }

    public int hashCode() {
        return b.b(Integer.valueOf(this.f11072a), Boolean.valueOf(this.f11073b));
    }

    public final boolean i() {
        if (this.f11072a != -2) {
            return true;
        }
        return false;
    }

    public final boolean j() {
        if (this.f11072a == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format(null, "%d defer:%b", Arrays.copyOf(new Object[]{Integer.valueOf(this.f11072a), Boolean.valueOf(this.f11073b)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }
}
