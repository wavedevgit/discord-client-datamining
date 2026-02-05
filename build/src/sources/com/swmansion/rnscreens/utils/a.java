package com.swmansion.rnscreens.utils;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0229a f18377c = new C0229a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final a f18378d = new a(new b(Integer.MIN_VALUE, false), 0.0f);

    /* renamed from: a  reason: collision with root package name */
    private final b f18379a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18380b;

    /* renamed from: com.swmansion.rnscreens.utils.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0229a {
        public /* synthetic */ C0229a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a() {
            return a.f18378d;
        }

        private C0229a() {
        }
    }

    public a(b cacheKey, float f10) {
        Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
        this.f18379a = cacheKey;
        this.f18380b = f10;
    }

    public final float b() {
        return this.f18380b;
    }

    public final boolean c(b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f18379a.a() != Integer.MIN_VALUE && Intrinsics.areEqual(this.f18379a, key)) {
            return true;
        }
        return false;
    }
}
