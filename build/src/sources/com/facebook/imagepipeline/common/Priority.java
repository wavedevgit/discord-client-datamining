package com.facebook.imagepipeline.common;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Priority {

    /* renamed from: d  reason: collision with root package name */
    public static final a f10339d;

    /* renamed from: e  reason: collision with root package name */
    public static final Priority f10340e = new Priority("LOW", 0);

    /* renamed from: i  reason: collision with root package name */
    public static final Priority f10341i = new Priority("MEDIUM", 1);

    /* renamed from: o  reason: collision with root package name */
    public static final Priority f10342o = new Priority("HIGH", 2);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ Priority[] f10343p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f10344q;

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
        f10343p = a10;
        f10344q = xr.a.a(a10);
        f10339d = new a(null);
    }

    private Priority(String str, int i10) {
    }

    private static final /* synthetic */ Priority[] a() {
        return new Priority[]{f10340e, f10341i, f10342o};
    }

    public static final Priority d(Priority priority, Priority priority2) {
        return f10339d.a(priority, priority2);
    }

    public static Priority valueOf(String str) {
        return (Priority) Enum.valueOf(Priority.class, str);
    }

    public static Priority[] values() {
        return (Priority[]) f10343p.clone();
    }
}
