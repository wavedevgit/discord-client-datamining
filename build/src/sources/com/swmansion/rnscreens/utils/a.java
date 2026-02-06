package com.swmansion.rnscreens.utils;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0221a f18357c = new C0221a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final a f18358d = new a(new b(Integer.MIN_VALUE, false), 0.0f);

    /* renamed from: a  reason: collision with root package name */
    private final b f18359a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18360b;

    /* renamed from: com.swmansion.rnscreens.utils.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0221a {
        public /* synthetic */ C0221a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a() {
            return a.f18358d;
        }

        private C0221a() {
        }
    }

    public a(b cacheKey, float f10) {
        Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
        this.f18359a = cacheKey;
        this.f18360b = f10;
    }

    public final float b() {
        return this.f18360b;
    }

    public final boolean c(b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f18359a.a() != Integer.MIN_VALUE && Intrinsics.areEqual(this.f18359a, key)) {
            return true;
        }
        return false;
    }
}
