package com.reactnativedocumentpicker;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    public static final C0211a f18575e;

    /* renamed from: i  reason: collision with root package name */
    public static final a f18576i = new a("CACHES_DIRECTORY", 0, "cachesDirectory");

    /* renamed from: o  reason: collision with root package name */
    public static final a f18577o = new a("DOCUMENT_DIRECTORY", 1, "documentDirectory");

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ a[] f18578p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f18579q;

    /* renamed from: d  reason: collision with root package name */
    private final String f18580d;

    /* renamed from: com.reactnativedocumentpicker.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0211a {
        public /* synthetic */ C0211a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(String path) {
            a aVar;
            Intrinsics.checkNotNullParameter(path, "path");
            a[] values = a.values();
            int length = values.length;
            int i10 = 0;
            while (true) {
                if (i10 < length) {
                    aVar = values[i10];
                    if (Intrinsics.areEqual(aVar.d(), path)) {
                        break;
                    }
                    i10++;
                } else {
                    aVar = null;
                    break;
                }
            }
            if (aVar == null) {
                return a.f18576i;
            }
            return aVar;
        }

        private C0211a() {
        }
    }

    static {
        a[] a10 = a();
        f18578p = a10;
        f18579q = pr.a.a(a10);
        f18575e = new C0211a(null);
    }

    private a(String str, int i10, String str2) {
        this.f18580d = str2;
    }

    private static final /* synthetic */ a[] a() {
        return new a[]{f18576i, f18577o};
    }

    public static a valueOf(String str) {
        return (a) Enum.valueOf(a.class, str);
    }

    public static a[] values() {
        return (a[]) f18578p.clone();
    }

    public final String d() {
        return this.f18580d;
    }
}
