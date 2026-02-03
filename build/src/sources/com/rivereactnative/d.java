package com.rivereactnative;

import app.rive.runtime.kotlin.core.Direction;
import java.util.NoSuchElementException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: e  reason: collision with root package name */
    public static final a f18242e;

    /* renamed from: i  reason: collision with root package name */
    public static final d f18243i = new d("Backwards", 0, "backwards");

    /* renamed from: o  reason: collision with root package name */
    public static final d f18244o = new d("Auto", 1, "auto");

    /* renamed from: p  reason: collision with root package name */
    public static final d f18245p = new d("Forwards", 2, "forwards");

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ d[] f18246q;

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f18247r;

    /* renamed from: d  reason: collision with root package name */
    private final String f18248d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: com.rivereactnative.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0219a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f18249a;

            static {
                int[] iArr = new int[d.values().length];
                try {
                    iArr[d.f18243i.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[d.f18244o.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[d.f18245p.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f18249a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final d a(String direction) {
            d[] values;
            Intrinsics.checkNotNullParameter(direction, "direction");
            for (d dVar : d.values()) {
                if (Intrinsics.areEqual(dVar.toString(), direction)) {
                    return d.valueOf(dVar.name());
                }
            }
            throw new NoSuchElementException("Array contains no element matching the predicate.");
        }

        public final Direction b(d rnDirection) {
            Intrinsics.checkNotNullParameter(rnDirection, "rnDirection");
            int i10 = C0219a.f18249a[rnDirection.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return Direction.FORWARDS;
                    }
                    throw new jr.p();
                }
                return Direction.AUTO;
            }
            return Direction.BACKWARDS;
        }

        private a() {
        }
    }

    static {
        d[] a10 = a();
        f18246q = a10;
        f18247r = qr.a.a(a10);
        f18242e = new a(null);
    }

    private d(String str, int i10, String str2) {
        this.f18248d = str2;
    }

    private static final /* synthetic */ d[] a() {
        return new d[]{f18243i, f18244o, f18245p};
    }

    public static d valueOf(String str) {
        return (d) Enum.valueOf(d.class, str);
    }

    public static d[] values() {
        return (d[]) f18246q.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f18248d;
    }
}
