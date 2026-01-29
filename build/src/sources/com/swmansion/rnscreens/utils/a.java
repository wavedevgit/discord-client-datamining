package com.swmansion.rnscreens.utils;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0225a f19356c = new C0225a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final a f19357d = new a(new b(Integer.MIN_VALUE, false), 0.0f);

    /* renamed from: a  reason: collision with root package name */
    private final b f19358a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19359b;

    /* renamed from: com.swmansion.rnscreens.utils.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0225a {
        public /* synthetic */ C0225a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a() {
            return a.f19357d;
        }

        private C0225a() {
        }
    }

    public a(b cacheKey, float f10) {
        Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
        this.f19358a = cacheKey;
        this.f19359b = f10;
    }

    public final float b() {
        return this.f19359b;
    }

    public final boolean c(b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f19358a.a() != Integer.MIN_VALUE && Intrinsics.areEqual(this.f19358a, key)) {
            return true;
        }
        return false;
    }
}
