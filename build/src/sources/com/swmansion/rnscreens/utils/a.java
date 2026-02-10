package com.swmansion.rnscreens.utils;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final C0248a f18497c = new C0248a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final a f18498d = new a(new b(Integer.MIN_VALUE, false), 0.0f);

    /* renamed from: a  reason: collision with root package name */
    private final b f18499a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18500b;

    /* renamed from: com.swmansion.rnscreens.utils.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0248a {
        public /* synthetic */ C0248a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a() {
            return a.f18498d;
        }

        private C0248a() {
        }
    }

    public a(b cacheKey, float f10) {
        Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
        this.f18499a = cacheKey;
        this.f18500b = f10;
    }

    public final float b() {
        return this.f18500b;
    }

    public final boolean c(b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f18499a.a() != Integer.MIN_VALUE && Intrinsics.areEqual(this.f18499a, key)) {
            return true;
        }
        return false;
    }
}
