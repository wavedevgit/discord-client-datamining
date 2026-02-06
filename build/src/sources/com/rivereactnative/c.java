package com.rivereactnative;

import app.rive.runtime.kotlin.core.Alignment;
import java.util.NoSuchElementException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: e  reason: collision with root package name */
    public static final a f17596e;

    /* renamed from: i  reason: collision with root package name */
    public static final c f17597i = new c("TopLeft", 0, "topLeft");

    /* renamed from: o  reason: collision with root package name */
    public static final c f17598o = new c("TopCenter", 1, "topCenter");

    /* renamed from: p  reason: collision with root package name */
    public static final c f17599p = new c("TopRight", 2, "topRight");

    /* renamed from: q  reason: collision with root package name */
    public static final c f17600q = new c("CenterLeft", 3, "centerLeft");

    /* renamed from: r  reason: collision with root package name */
    public static final c f17601r = new c("Center", 4, "center");

    /* renamed from: s  reason: collision with root package name */
    public static final c f17602s = new c("CenterRight", 5, "centerRight");

    /* renamed from: t  reason: collision with root package name */
    public static final c f17603t = new c("BottomLeft", 6, "bottomLeft");

    /* renamed from: u  reason: collision with root package name */
    public static final c f17604u = new c("BottomCenter", 7, "bottomCenter");

    /* renamed from: v  reason: collision with root package name */
    public static final c f17605v = new c("BottomRight", 8, "bottomRight");

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ c[] f17606w;

    /* renamed from: x  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f17607x;

    /* renamed from: d  reason: collision with root package name */
    private final String f17608d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: com.rivereactnative.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0209a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f17609a;

            static {
                int[] iArr = new int[c.values().length];
                try {
                    iArr[c.f17597i.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[c.f17598o.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[c.f17599p.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                try {
                    iArr[c.f17600q.ordinal()] = 4;
                } catch (NoSuchFieldError unused4) {
                }
                try {
                    iArr[c.f17601r.ordinal()] = 5;
                } catch (NoSuchFieldError unused5) {
                }
                try {
                    iArr[c.f17602s.ordinal()] = 6;
                } catch (NoSuchFieldError unused6) {
                }
                try {
                    iArr[c.f17603t.ordinal()] = 7;
                } catch (NoSuchFieldError unused7) {
                }
                try {
                    iArr[c.f17604u.ordinal()] = 8;
                } catch (NoSuchFieldError unused8) {
                }
                try {
                    iArr[c.f17605v.ordinal()] = 9;
                } catch (NoSuchFieldError unused9) {
                }
                f17609a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(String alignment) {
            c[] values;
            Intrinsics.checkNotNullParameter(alignment, "alignment");
            for (c cVar : c.values()) {
                if (Intrinsics.areEqual(cVar.toString(), alignment)) {
                    return c.valueOf(cVar.name());
                }
            }
            throw new NoSuchElementException("Array contains no element matching the predicate.");
        }

        public final Alignment b(c v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            switch (C0209a.f17609a[v10.ordinal()]) {
                case 1:
                    return Alignment.TOP_LEFT;
                case 2:
                    return Alignment.TOP_CENTER;
                case 3:
                    return Alignment.TOP_RIGHT;
                case 4:
                    return Alignment.CENTER_LEFT;
                case 5:
                    return Alignment.CENTER;
                case 6:
                    return Alignment.CENTER_RIGHT;
                case 7:
                    return Alignment.BOTTOM_LEFT;
                case 8:
                    return Alignment.BOTTOM_CENTER;
                case 9:
                    return Alignment.BOTTOM_RIGHT;
                default:
                    throw new IllegalStateException("Unsupported Alignment type");
            }
        }

        private a() {
        }
    }

    static {
        c[] a10 = a();
        f17606w = a10;
        f17607x = xr.a.a(a10);
        f17596e = new a(null);
    }

    private c(String str, int i10, String str2) {
        this.f17608d = str2;
    }

    private static final /* synthetic */ c[] a() {
        return new c[]{f17597i, f17598o, f17599p, f17600q, f17601r, f17602s, f17603t, f17604u, f17605v};
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f17606w.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17608d;
    }
}
