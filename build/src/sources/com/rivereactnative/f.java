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
    public static final a f18630e;

    /* renamed from: i  reason: collision with root package name */
    public static final f f18631i = new f("OneShot", 0, "oneShot");

    /* renamed from: o  reason: collision with root package name */
    public static final f f18632o = new f("Loop", 1, "loop");

    /* renamed from: p  reason: collision with root package name */
    public static final f f18633p = new f("PingPong", 2, "pingPong");

    /* renamed from: q  reason: collision with root package name */
    public static final f f18634q = new f("Auto", 3, "auto");

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ f[] f18635r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f18636s;

    /* renamed from: d  reason: collision with root package name */
    private final String f18637d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: com.rivereactnative.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0216a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f18638a;

            /* renamed from: b  reason: collision with root package name */
            public static final /* synthetic */ int[] f18639b;

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
                f18638a = iArr;
                int[] iArr2 = new int[f.values().length];
                try {
                    iArr2[f.f18631i.ordinal()] = 1;
                } catch (NoSuchFieldError unused5) {
                }
                try {
                    iArr2[f.f18632o.ordinal()] = 2;
                } catch (NoSuchFieldError unused6) {
                }
                try {
                    iArr2[f.f18633p.ordinal()] = 3;
                } catch (NoSuchFieldError unused7) {
                }
                try {
                    iArr2[f.f18634q.ordinal()] = 4;
                } catch (NoSuchFieldError unused8) {
                }
                f18639b = iArr2;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final f a(Loop riveLoopMode) {
            Intrinsics.checkNotNullParameter(riveLoopMode, "riveLoopMode");
            int i10 = C0216a.f18638a[riveLoopMode.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return f.f18634q;
                        }
                        throw new ir.p();
                    }
                    return f.f18633p;
                }
                return f.f18632o;
            }
            return f.f18631i;
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
            int i10 = C0216a.f18639b[rnLoopMode.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return Loop.AUTO;
                        }
                        throw new ir.p();
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
        f18635r = a10;
        f18636s = pr.a.a(a10);
        f18630e = new a(null);
    }

    private f(String str, int i10, String str2) {
        this.f18637d = str2;
    }

    private static final /* synthetic */ f[] a() {
        return new f[]{f18631i, f18632o, f18633p, f18634q};
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f18635r.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f18637d;
    }
}
