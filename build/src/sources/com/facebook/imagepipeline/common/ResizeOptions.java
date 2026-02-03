package com.facebook.imagepipeline.common;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import w8.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ResizeOptions {

    /* renamed from: e  reason: collision with root package name */
    public static final a f10061e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final int f10062a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10063b;

    /* renamed from: c  reason: collision with root package name */
    public final float f10064c;

    /* renamed from: d  reason: collision with root package name */
    public final float f10065d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final ResizeOptions a(int i10, int i11) {
            if (i10 > 0 && i11 > 0) {
                return new ResizeOptions(i10, i11, 0.0f, 0.0f, 12, null);
            }
            return null;
        }

        private a() {
        }
    }

    public ResizeOptions(int i10, int i11, float f10, float f11) {
        this.f10062a = i10;
        this.f10063b = i11;
        this.f10064c = f10;
        this.f10065d = f11;
        if (i10 <= 0) {
            throw new IllegalStateException("Check failed.");
        }
        if (i11 <= 0) {
            throw new IllegalStateException("Check failed.");
        }
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof ResizeOptions) {
            ResizeOptions resizeOptions = (ResizeOptions) obj;
            if (this.f10062a == resizeOptions.f10062a && this.f10063b == resizeOptions.f10063b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return b.a(this.f10062a, this.f10063b);
    }

    public String toString() {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format(null, "%dx%d", Arrays.copyOf(new Object[]{Integer.valueOf(this.f10062a), Integer.valueOf(this.f10063b)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    public /* synthetic */ ResizeOptions(int i10, int i11, float f10, float f11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, (i12 & 4) != 0 ? 2048.0f : f10, (i12 & 8) != 0 ? 0.6666667f : f11);
    }
}
