package com.facebook.imagepipeline.common;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import w8.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RotationOptions {

    /* renamed from: c  reason: collision with root package name */
    public static final a f10066c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final RotationOptions f10067d = new RotationOptions(-1, false);

    /* renamed from: e  reason: collision with root package name */
    private static final RotationOptions f10068e = new RotationOptions(-2, false);

    /* renamed from: f  reason: collision with root package name */
    private static final RotationOptions f10069f = new RotationOptions(-1, true);

    /* renamed from: a  reason: collision with root package name */
    private final int f10070a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f10071b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final RotationOptions a() {
            return RotationOptions.f10067d;
        }

        public final RotationOptions b() {
            return RotationOptions.f10069f;
        }

        public final RotationOptions c() {
            return RotationOptions.f10068e;
        }

        private a() {
        }
    }

    private RotationOptions(int i10, boolean z10) {
        this.f10070a = i10;
        this.f10071b = z10;
    }

    public static final RotationOptions d() {
        return f10066c.a();
    }

    public static final RotationOptions e() {
        return f10066c.b();
    }

    public static final RotationOptions g() {
        return f10066c.c();
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof RotationOptions)) {
            return false;
        }
        RotationOptions rotationOptions = (RotationOptions) obj;
        if (this.f10070a == rotationOptions.f10070a && this.f10071b == rotationOptions.f10071b) {
            return true;
        }
        return false;
    }

    public final boolean f() {
        return this.f10071b;
    }

    public final int h() {
        if (!j()) {
            return this.f10070a;
        }
        throw new IllegalStateException("Rotation is set to use EXIF");
    }

    public int hashCode() {
        return b.b(Integer.valueOf(this.f10070a), Boolean.valueOf(this.f10071b));
    }

    public final boolean i() {
        if (this.f10070a != -2) {
            return true;
        }
        return false;
    }

    public final boolean j() {
        if (this.f10070a == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format(null, "%d defer:%b", Arrays.copyOf(new Object[]{Integer.valueOf(this.f10070a), Boolean.valueOf(this.f10071b)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }
}
