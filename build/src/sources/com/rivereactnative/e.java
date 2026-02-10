package com.rivereactnative;

import app.rive.runtime.kotlin.core.Fit;
import com.facebook.react.uimanager.ViewProps;
import java.util.NoSuchElementException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f18507e;

    /* renamed from: i  reason: collision with root package name */
    public static final e f18508i = new e("Cover", 0, "cover");

    /* renamed from: o  reason: collision with root package name */
    public static final e f18509o = new e("Contain", 1, "contain");

    /* renamed from: p  reason: collision with root package name */
    public static final e f18510p = new e("Fill", 2, "fill");

    /* renamed from: q  reason: collision with root package name */
    public static final e f18511q = new e("FitWidth", 3, "fitWidth");

    /* renamed from: r  reason: collision with root package name */
    public static final e f18512r = new e("FitHeight", 4, "fitHeight");

    /* renamed from: s  reason: collision with root package name */
    public static final e f18513s = new e("None", 5, ViewProps.NONE);

    /* renamed from: t  reason: collision with root package name */
    public static final e f18514t = new e("ScaleDown", 6, "scaleDown");

    /* renamed from: u  reason: collision with root package name */
    public static final e f18515u = new e("Layout", 7, "layout");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ e[] f18516v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f18517w;

    /* renamed from: d  reason: collision with root package name */
    private final String f18518d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: com.rivereactnative.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0219a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f18519a;

            static {
                int[] iArr = new int[e.values().length];
                try {
                    iArr[e.f18508i.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[e.f18509o.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[e.f18510p.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                try {
                    iArr[e.f18511q.ordinal()] = 4;
                } catch (NoSuchFieldError unused4) {
                }
                try {
                    iArr[e.f18512r.ordinal()] = 5;
                } catch (NoSuchFieldError unused5) {
                }
                try {
                    iArr[e.f18513s.ordinal()] = 6;
                } catch (NoSuchFieldError unused6) {
                }
                try {
                    iArr[e.f18514t.ordinal()] = 7;
                } catch (NoSuchFieldError unused7) {
                }
                try {
                    iArr[e.f18515u.ordinal()] = 8;
                } catch (NoSuchFieldError unused8) {
                }
                f18519a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final e a(String fit) {
            e[] values;
            Intrinsics.checkNotNullParameter(fit, "fit");
            for (e eVar : e.values()) {
                if (Intrinsics.areEqual(eVar.toString(), fit)) {
                    return e.valueOf(eVar.name());
                }
            }
            throw new NoSuchElementException("Array contains no element matching the predicate.");
        }

        public final Fit b(e rnFit) {
            Intrinsics.checkNotNullParameter(rnFit, "rnFit");
            switch (C0219a.f18519a[rnFit.ordinal()]) {
                case 1:
                    return Fit.COVER;
                case 2:
                    return Fit.CONTAIN;
                case 3:
                    return Fit.FILL;
                case 4:
                    return Fit.FIT_WIDTH;
                case 5:
                    return Fit.FIT_HEIGHT;
                case 6:
                    return Fit.NONE;
                case 7:
                    return Fit.SCALE_DOWN;
                case 8:
                    return Fit.LAYOUT;
                default:
                    throw new as.p();
            }
        }

        private a() {
        }
    }

    static {
        e[] a10 = a();
        f18516v = a10;
        f18517w = hs.a.a(a10);
        f18507e = new a(null);
    }

    private e(String str, int i10, String str2) {
        this.f18518d = str2;
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f18508i, f18509o, f18510p, f18511q, f18512r, f18513s, f18514t, f18515u};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f18516v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f18518d;
    }
}
