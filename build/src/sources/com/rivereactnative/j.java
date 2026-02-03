package com.rivereactnative;

import app.rive.runtime.kotlin.core.RendererType;
import java.util.NoSuchElementException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: e  reason: collision with root package name */
    public static final a f18301e;

    /* renamed from: i  reason: collision with root package name */
    public static final j f18302i = new j("Rive", 0, "rive");

    /* renamed from: o  reason: collision with root package name */
    public static final j f18303o = new j("Canvas", 1, "canvas");

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ j[] f18304p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f18305q;

    /* renamed from: d  reason: collision with root package name */
    private final String f18306d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: com.rivereactnative.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0222a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f18307a;

            static {
                int[] iArr = new int[j.values().length];
                try {
                    iArr[j.f18302i.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[j.f18303o.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f18307a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final j a(String rendererType) {
            j[] values;
            Intrinsics.checkNotNullParameter(rendererType, "rendererType");
            for (j jVar : j.values()) {
                if (Intrinsics.areEqual(jVar.f18306d, rendererType)) {
                    return jVar;
                }
            }
            throw new NoSuchElementException("Array contains no element matching the predicate.");
        }

        public final RendererType b(j rnRendererType) {
            Intrinsics.checkNotNullParameter(rnRendererType, "rnRendererType");
            int i10 = C0222a.f18307a[rnRendererType.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return RendererType.Canvas;
                }
                throw new jr.p();
            }
            return RendererType.Rive;
        }

        private a() {
        }
    }

    static {
        j[] a10 = a();
        f18304p = a10;
        f18305q = qr.a.a(a10);
        f18301e = new a(null);
    }

    private j(String str, int i10, String str2) {
        this.f18306d = str2;
    }

    private static final /* synthetic */ j[] a() {
        return new j[]{f18302i, f18303o};
    }

    public static j valueOf(String str) {
        return (j) Enum.valueOf(j.class, str);
    }

    public static j[] values() {
        return (j[]) f18304p.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f18306d;
    }
}
