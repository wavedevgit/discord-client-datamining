package com.rivereactnative;

import app.rive.runtime.kotlin.core.Loop;
import java.util.NoSuchElementException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: e  reason: collision with root package name */
    public static final a f17245e;

    /* renamed from: i  reason: collision with root package name */
    public static final f f17246i = new f("OneShot", 0, "oneShot");

    /* renamed from: o  reason: collision with root package name */
    public static final f f17247o = new f("Loop", 1, "loop");

    /* renamed from: p  reason: collision with root package name */
    public static final f f17248p = new f("PingPong", 2, "pingPong");

    /* renamed from: q  reason: collision with root package name */
    public static final f f17249q = new f("Auto", 3, "auto");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ f[] f17250r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f17251s;

    /* renamed from: d  reason: collision with root package name */
    private final String f17252d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: com.rivereactnative.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0202a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f17253a;

            /* renamed from: b  reason: collision with root package name */
            public static final /* synthetic */ int[] f17254b;

            static {
                int[] iArr = new int[Loop.values().length];
                try {
                    iArr[Loop.ONESHOT.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[Loop.LOOP.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[Loop.PINGPONG.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                try {
                    iArr[Loop.AUTO.ordinal()] = 4;
                } catch (NoSuchFieldError unused4) {
                }
                f17253a = iArr;
                int[] iArr2 = new int[f.values().length];
                try {
                    iArr2[f.f17246i.ordinal()] = 1;
                } catch (NoSuchFieldError unused5) {
                }
                try {
                    iArr2[f.f17247o.ordinal()] = 2;
                } catch (NoSuchFieldError unused6) {
                }
                try {
                    iArr2[f.f17248p.ordinal()] = 3;
                } catch (NoSuchFieldError unused7) {
                }
                try {
                    iArr2[f.f17249q.ordinal()] = 4;
                } catch (NoSuchFieldError unused8) {
                }
                f17254b = iArr2;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final f a(Loop riveLoopMode) {
            Intrinsics.checkNotNullParameter(riveLoopMode, "riveLoopMode");
            int i10 = C0202a.f17253a[riveLoopMode.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return f.f17249q;
                        }
                        throw new lr.p();
                    }
                    return f.f17248p;
                }
                return f.f17247o;
            }
            return f.f17246i;
        }

        public final f b(String loopMode) {
            f[] values;
            Intrinsics.checkNotNullParameter(loopMode, "loopMode");
            for (f fVar : f.values()) {
                if (Intrinsics.areEqual(fVar.toString(), loopMode)) {
                    return f.valueOf(fVar.name());
                }
            }
            throw new NoSuchElementException("Array contains no element matching the predicate.");
        }

        public final Loop c(f rnLoopMode) {
            Intrinsics.checkNotNullParameter(rnLoopMode, "rnLoopMode");
            int i10 = C0202a.f17254b[rnLoopMode.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return Loop.AUTO;
                        }
                        throw new lr.p();
                    }
                    return Loop.PINGPONG;
                }
                return Loop.LOOP;
            }
            return Loop.ONESHOT;
        }

        private a() {
        }
    }

    static {
        f[] a10 = a();
        f17250r = a10;
        f17251s = sr.a.a(a10);
        f17245e = new a(null);
    }

    private f(String str, int i10, String str2) {
        this.f17252d = str2;
    }

    private static final /* synthetic */ f[] a() {
        return new f[]{f17246i, f17247o, f17248p, f17249q};
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f17250r.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17252d;
    }
}
