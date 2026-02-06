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
    public static final a f17618e;

    /* renamed from: i  reason: collision with root package name */
    public static final e f17619i = new e("Cover", 0, "cover");

    /* renamed from: o  reason: collision with root package name */
    public static final e f17620o = new e("Contain", 1, "contain");

    /* renamed from: p  reason: collision with root package name */
    public static final e f17621p = new e("Fill", 2, "fill");

    /* renamed from: q  reason: collision with root package name */
    public static final e f17622q = new e("FitWidth", 3, "fitWidth");

    /* renamed from: r  reason: collision with root package name */
    public static final e f17623r = new e("FitHeight", 4, "fitHeight");

    /* renamed from: s  reason: collision with root package name */
    public static final e f17624s = new e("None", 5, ViewProps.NONE);

    /* renamed from: t  reason: collision with root package name */
    public static final e f17625t = new e("ScaleDown", 6, "scaleDown");

    /* renamed from: u  reason: collision with root package name */
    public static final e f17626u = new e("Layout", 7, "layout");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ e[] f17627v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f17628w;

    /* renamed from: d  reason: collision with root package name */
    private final String f17629d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: com.rivereactnative.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0211a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f17630a;

            static {
                int[] iArr = new int[e.values().length];
                try {
                    iArr[e.f17619i.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[e.f17620o.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[e.f17621p.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                try {
                    iArr[e.f17622q.ordinal()] = 4;
                } catch (NoSuchFieldError unused4) {
                }
                try {
                    iArr[e.f17623r.ordinal()] = 5;
                } catch (NoSuchFieldError unused5) {
                }
                try {
                    iArr[e.f17624s.ordinal()] = 6;
                } catch (NoSuchFieldError unused6) {
                }
                try {
                    iArr[e.f17625t.ordinal()] = 7;
                } catch (NoSuchFieldError unused7) {
                }
                try {
                    iArr[e.f17626u.ordinal()] = 8;
                } catch (NoSuchFieldError unused8) {
                }
                f17630a = iArr;
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
            switch (C0211a.f17630a[rnFit.ordinal()]) {
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
                    throw new qr.p();
            }
        }

        private a() {
        }
    }

    static {
        e[] a10 = a();
        f17627v = a10;
        f17628w = xr.a.a(a10);
        f17618e = new a(null);
    }

    private e(String str, int i10, String str2) {
        this.f17629d = str2;
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f17619i, f17620o, f17621p, f17622q, f17623r, f17624s, f17625t, f17626u};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f17627v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17629d;
    }
}
