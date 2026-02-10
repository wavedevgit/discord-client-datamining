package com.facebook.imagepipeline.common;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import x8.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ResizeOptions {

    /* renamed from: e  reason: collision with root package name */
    public static final a f10485e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final int f10486a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10487b;

    /* renamed from: c  reason: collision with root package name */
    public final float f10488c;

    /* renamed from: d  reason: collision with root package name */
    public final float f10489d;

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
        this.f10486a = i10;
        this.f10487b = i11;
        this.f10488c = f10;
        this.f10489d = f11;
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
            if (this.f10486a == resizeOptions.f10486a && this.f10487b == resizeOptions.f10487b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return b.a(this.f10486a, this.f10487b);
    }

    public String toString() {
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format(null, "%dx%d", Arrays.copyOf(new Object[]{Integer.valueOf(this.f10486a), Integer.valueOf(this.f10487b)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    public /* synthetic */ ResizeOptions(int i10, int i11, float f10, float f11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, (i12 & 4) != 0 ? 2048.0f : f10, (i12 & 8) != 0 ? 0.6666667f : f11);
    }
}
