package com.facebook.imagepipeline.common;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Priority {

    /* renamed from: d  reason: collision with root package name */
    public static final a f11056d;

    /* renamed from: e  reason: collision with root package name */
    public static final Priority f11057e = new Priority("LOW", 0);

    /* renamed from: i  reason: collision with root package name */
    public static final Priority f11058i = new Priority("MEDIUM", 1);

    /* renamed from: o  reason: collision with root package name */
    public static final Priority f11059o = new Priority("HIGH", 2);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ Priority[] f11060p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f11061q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Priority a(Priority priority1, Priority priority2) {
            Intrinsics.checkNotNullParameter(priority1, "priority1");
            Intrinsics.checkNotNullParameter(priority2, "priority2");
            if (priority1.ordinal() > priority2.ordinal()) {
                return priority1;
            }
            return priority2;
        }

        private a() {
        }
    }

    static {
        Priority[] a10 = a();
        f11060p = a10;
        f11061q = hs.a.a(a10);
        f11056d = new a(null);
    }

    private Priority(String str, int i10) {
    }

    private static final /* synthetic */ Priority[] a() {
        return new Priority[]{f11057e, f11058i, f11059o};
    }

    public static final Priority d(Priority priority, Priority priority2) {
        return f11056d.a(priority, priority2);
    }

    public static Priority valueOf(String str) {
        return (Priority) Enum.valueOf(Priority.class, str);
    }

    public static Priority[] values() {
        return (Priority[]) f11060p.clone();
    }
}
